import express from 'express';
import User from '../models/user.model';
import userDatabaseRepository from '../repository/user/userDatabase.repository';

const userRouter: express.Router = express.Router();

userRouter.post('/createUser', async (request: express.Request, response: express.Response): Promise<any> => {
    const userModel: User = new User(new userDatabaseRepository());
    const user: CreateUser = {
        name: request.body.name,
        email: request.body.email,
        birthDate: request.body.birthDate
    }

    const result = await userModel.create(user)
    
    response.status(200).send({ result });
});
userRouter.put('/updateUser/:email', async (request: express.Request, response: express.Response): Promise<any> => {
    const userModel: User = new User(new userDatabaseRepository());
    const { email } = request.params
    const user: CreateUser = {
        name: request.body.name,
        email: request.body.email,
        birthDate: request.body.birthDate
    }
    
    const result = await userModel.update(email,user)
    
    response.status(200).send({ result });
});

userRouter.get('/list', async (request: express.Request, response: express.Response): Promise<any> => {
    const userModel: User = new User(new userDatabaseRepository());
    const result = await userModel.list()

    response.status(200).send({ result });
});

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
