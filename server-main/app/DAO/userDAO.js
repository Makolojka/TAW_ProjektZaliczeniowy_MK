
import mongoose from 'mongoose';
import * as _ from 'lodash';
import Promise from 'bluebird';
import applicationException from '../service/applicationException';
import mongoConverter from '../service/mongoConverter';
import uniqueValidator from 'mongoose-unique-validator';
import PostModel from "../DAO/postDAO";
import {ObjectId} from "mongodb";


const userRole = {
  admin: 'admin',
  user: 'user'
};

const userRoles = [userRole.admin, userRole.user];

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  role: { type: String, enum: userRoles, default: userRole.user, required: false },
  active: { type: Boolean, default: true, required: false },
  isAdmin: { type: Boolean, default: false, required: false },
  likedRecipes: {type: [ObjectId]}
}, {
  collection: 'user'
});

userSchema.plugin(uniqueValidator);

const UserModel = mongoose.model('user', userSchema);

function createNewOrUpdate(user) {
  return Promise.resolve().then(() => {
    if (!user.id) {
      return new  UserModel(user).save().then(result => {
        if (result) {
          return mongoConverter(result);
        }
      });
    } else {
      return UserModel.findByIdAndUpdate(user.id, _.omit(user, 'id'), { new: true });
    }
  }).catch(error => {
    if ('ValidationError' === error.name) {
      error = error.errors[Object.keys(error.errors)[0]];
      throw applicationException.new(applicationException.BAD_REQUEST, error.message);
    }
    throw error;
  });
}

async function getByEmailOrName(name) {
  const result = await UserModel.findOne({ $or: [{ email: name }, { name: name }] });
  if (result) {
    return mongoConverter(result);
  }
  throw applicationException.new(applicationException.NOT_FOUND, 'User not found');
}

async function get(id) {
  const result = await UserModel.findOne({ _id: id });
  if (result) {
    return mongoConverter(result);
  }
  throw applicationException.new(applicationException.NOT_FOUND, 'User not found');
}

async function getLikedRecipes(userId) {
  let user;
  //Find user
  await UserModel.findOne({ _id: userId}).then(function (result) {
    if (result) {
      user = result.toObject();
      console.log("user likedrecipes: "+user.likedRecipes);
    }
  });
  if(!user){
    console.log("!user");
    return PostModel.model;
  }
  //Find recipe of given likedRecipes id
  return PostModel.model.find({_id:user.likedRecipes}).then(function (result) {
    if (result) {
      console.log("result: "+result);
      return mongoConverter(result);
    }
  });
}

async function removeById(id) {
  return await UserModel.findByIdAndRemove(id);
}

async function likeRecipe(userId, recipeId) {
  try {
    const user = await UserModel.findOne({ _id: userId });
    const checkCollection = await UserModel.findOne({ _id: userId, likedRecipes: recipeId});
    if (user) {
      if(!checkCollection)
      {
        //If recipe is not liked, like it
        return UserModel.updateOne({ _id : userId }, {$push: {likedRecipes: recipeId}}, {new: true})
      }
      else
      {
        //If recipe is liked, dislike it
        return UserModel.updateOne({ _id : userId }, {$pull: {likedRecipes: recipeId}})
      }
    } else {
      throw applicationException.new(applicationException.NOT_FOUND, 'User not found');
    }
  } catch (error) {
    throw error;
  }
}

export default {
  createNewOrUpdate: createNewOrUpdate,
  getByEmailOrName: getByEmailOrName,
  get: get,
  removeById: removeById,
  likeRecipe: likeRecipe,
  userRole: userRole,
  model: UserModel,
  getLikedRecipes: getLikedRecipes,
};
