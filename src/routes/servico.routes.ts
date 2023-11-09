import express from 'express';
import Servico from '../models/servico.model';
import servicoDatabaseRepository from '../repository/servico/servicoDatabase.repository';

const servicoRouter: express.Router = express.Router();

servicoRouter.post('/createServico', async (request: express.Request, response: express.Response): Promise<any> => {
    try{
        const servicoModel: Servico = new Servico(new servicoDatabaseRepository());
        const servico: CreateServico = {
            nome: request.body.nome,
            preco: request.body.preco,
            duracao: request.body.duracao
        }
        const result = await servicoModel.create(servico)
    
        response.status(200).send({ result });

    }catch(error){
        response.status(404).send({ error });
    }
});

servicoRouter.put('/updateServico/:nome', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        const servicoModel: Servico = new Servico(new servicoDatabaseRepository());
        const { nome } = request.params
        const servico: CreateServico = {
            nome: request.body.nome,
            preco: request.body.preco,
            duracao: request.body.duracao
        }
    
        const result = await servicoModel.update(nome,servico)
    
        response.status(200).send({ result });

    } catch (error) {
        response.status(404).send({ error });
    }
});

servicoRouter.delete('/deleteServico/:nome', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        const servicoModel: Servico = new Servico(new servicoDatabaseRepository());
        const { nome } = request.params
        const servico: CreateServico = {
            nome: request.body.nome,
            preco: request.body.preco,
            duracao: request.body.duracao
        }
    
        const result = await servicoModel.delete(nome)
    
        response.status(200).send({ result });

    } catch (error) {
        response.status(404).send({ error });
    }
});

servicoRouter.get('/list', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        const servicoModel: Servico = new Servico(new servicoDatabaseRepository());
        const result = await servicoModel.list()

        response.status(200).send({ result });
    } catch (error) {
        response.status(404).send({ error });
    }
});

servicoRouter.get('/listByFilters', async (request: express.Request, response: express.Response): Promise<any> => {
    const servicoModel: Servico = new Servico(new servicoDatabaseRepository());

    const result = await servicoModel.listByFilters({
        nome: request.body.nome,
        preco: request.body.preco,
        duracao: request.body.duracao
    });

    response.status(200).send({ result });
});

export default servicoRouter;
