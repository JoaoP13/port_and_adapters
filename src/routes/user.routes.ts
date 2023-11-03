import express from 'express';
import User from '../models/user.model';
import userDatabaseRepository from '../repository/user/userDatabase.repository';

const userRouter: express.Router = express.Router();

userRouter.get('/listByFilters', async (request: express.Request, response: express.Response): Promise<any> => {
    const userModel: User = new User(new userDatabaseRepository());

    const result = await userModel.listByFilters({
        name: request.body.name,
        email: request.body.email,
        birthDate: request.body.birthDate
    });

    response.status(200).send({ result });
});

export default userRouter;
