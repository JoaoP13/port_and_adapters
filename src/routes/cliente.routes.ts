import express from 'express';
import Cliente from '../models/cliente.model';
import clienteDatabaseRepository from '../repository/cliente/clienteDatabase.repository';

const clienteRouter: express.Router = express.Router();

clienteRouter.post('/createCliente', async (request: express.Request, response: express.Response): Promise<any> => {
    try{
        const clienteModel: Cliente = new Cliente(new clienteDatabaseRepository());
        const cliente: CreateCliente = {
            nome: request.body.nome,
            telefone: request.body.telefone
        }
        const result = await clienteModel.create(cliente)
    
        response.status(200).send({ result });

    }catch(error){
        response.status(404).send({ error });
    }
});

clienteRouter.put('/updateCliente/:nome', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        const clienteModel: Cliente = new Cliente(new clienteDatabaseRepository());
        const { nome } = request.params
        const cliente: CreateCliente = {
            nome: request.body.nome,
            telefone: request.body.telefone
        }
    
        const result = await clienteModel.update(nome,cliente)
    
        response.status(200).send({ result });

    } catch (error) {
        response.status(404).send({ error });
    }
});

clienteRouter.delete('/deleteCliente/:nome', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        const clienteModel: Cliente = new Cliente(new clienteDatabaseRepository());
        const { nome } = request.params
        const cliente: CreateCliente = {
            nome: request.body.nome,
            telefone: request.body.telefone
        }
    
        const result = await clienteModel.delete(nome)
    
        response.status(200).send({ result });

    } catch (error) {
        response.status(404).send({ error });
    }
});

clienteRouter.get('/list', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        const clienteModel: Cliente = new Cliente(new clienteDatabaseRepository());
        const result = await clienteModel.list()

        response.status(200).send({ result });
    } catch (error) {
        response.status(404).send({ error });
    }
});

clienteRouter.get('/listByFilters', async (request: express.Request, response: express.Response): Promise<any> => {
    const clienteModel: Cliente = new Cliente(new clienteDatabaseRepository());

    const result = await clienteModel.listByFilters({
        nome: request.body.nome,
        telefone: request.body.telefone
    });

    response.status(200).send({ result });
});

export default clienteRouter;
