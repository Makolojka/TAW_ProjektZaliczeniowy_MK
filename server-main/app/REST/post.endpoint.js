import business from '../business/business.container';
import applicationException from "../service/applicationException";
import userDAO from "../DAO/userDAO";
import auth from "../middleware/auth";
import UserDAO from "../DAO/userDAO";
const postEndpoint = (router) => {
    router.get('/api/posts', async (request, response, next) => {
        try {
            let result = await business.getPostManager().query();
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.get('/api/user/likedRecipes/:userId', async (request, response, next) => {
        try {
            const userId = request.params.userId;
            let result = await UserDAO.getLikedRecipes(userId)
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.post('/api/posts', auth, async (request, response, next) => {
        try {
            const result = await business.getPostManager(request).createNewOrUpdate(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });
    router.get('/api/post/:id', async (request, response, next) => {
        let result = await business.getPostManager().query();
        response.status(200).send(result.find(obj => obj.id === request.params.id));
    });

    router.delete('/api/post/:id', auth, async (request, response, next) => {
        try {
            const result = await business.getPostManager(request).deletePost(request.params.id);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.put('/api/post', auth, async (request, response, next) => {
        try {
            const result = await business.getPostManager(request).createNewOrUpdate(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/api/users/:userId', auth, async (request, response, next) => {
        try {
            const userId = request.params.userId;
            const recipeId = request.body.recipeId;
            let result = await userDAO.likeRecipe(userId, recipeId);

            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });
};
export default postEndpoint;

