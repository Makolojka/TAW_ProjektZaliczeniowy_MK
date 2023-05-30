import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";

const postSchema = new mongoose.Schema({
    title: {type: String},
    image: {type: String},
    text: {type: String},
    ingredients: {type: String},
    challenge: {type: Number},
    foodType: {type: String},
    timeToPrepare: {type: String},
}, {
    collection: 'culinary_recipe'
});
postSchema.plugin(uniqueValidator);

const PostModel = mongoose.model('culinary_recipe', postSchema);

async function query() {
    const result = await PostModel.find({});
    {
        if (result) {
            return mongoConverter(result);
        }
    }
}

async function get(id) {
    return PostModel.findOne({_id: id}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

async function createNewOrUpdate(data) {
    return Promise.resolve().then(() => {
        if (!data.id) {
            return new PostModel(data).save().then(result => {
                if (result[0]) {
                    return mongoConverter(result[0]);
                }
            });
        } else {
            return PostModel.findByIdAndUpdate(data.id, _.omit(data, 'id'), {new: true});
        }
    });
}

async function remove(id) {
    return PostModel.deleteOne({_id: id});
}

export default {
    query: query,
    get: get,
    createNewOrUpdate: createNewOrUpdate,
    remove: remove,

    model: PostModel
};
