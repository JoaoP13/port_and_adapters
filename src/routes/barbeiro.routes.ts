import express from 'express';
import Barbeiro from '../models/barbeiro.model';
import barbeiroDatabaseRepository from '../repository/barbeiro/barbeiroDatabase.repository';

const barbeiroRouter: express.Router = express.Router();

barbeiroRouter.post('/createBarbeiro', async (request: express.Request, response: express.Response): Promise<any> => {
    try{
        const barbeiroModel: Barbeiro = new Barbeiro(new barbeiroDatabaseRepository());
        const barbeiro: CreateBarbeiro = {
            nome: request.body.nome,
            servico: request.body.servico
        }
        const result = await barbeiroModel.create(barbeiro)
    
        response.status(200).send({ result });

    }catch(error){
        response.status(404).send({ error });
    }
});

barbeiroRouter.put('/updateBarbeiro/:servico', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        const barbeiroModel: Barbeiro = new Barbeiro(new barbeiroDatabaseRepository());
        const { servico } = request.params
        const barbeiro: CreateBarbeiro = {
            nome: request.body.nome,
            servico: request.body.servico
        }
    
        const result = await barbeiroModel.update(servico,barbeiro)
    
        response.status(200).send({ result });

    } catch (error) {
        response.status(404).send({ error });
    }
});

barbeiroRouter.delete('/deleteBarbeiro/:servico', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        const barbeiroModel: Barbeiro = new Barbeiro(new barbeiroDatabaseRepository());
        const { servico } = request.params
        const barbeiro: CreateBarbeiro = {
            nome: request.body.nome,
            servico: request.body.servico
        }
    
        const result = await barbeiroModel.delete(servico)
    
        response.status(200).send({ result });

    } catch (error) {
        response.status(404).send({ error });
    }
});

barbeiroRouter.get('/list', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        const barbeiroModel: Barbeiro = new Barbeiro(new barbeiroDatabaseRepository());
        const result = await barbeiroModel.list()

        response.status(200).send({ result });
    } catch (error) {
        response.status(404).send({ error });
    }
});

barbeiroRouter.get('/listByFilters', async (request: express.Request, response: express.Response): Promise<any> => {
    const barbeiroModel: Barbeiro = new Barbeiro(new barbeiroDatabaseRepository());

    const result = await barbeiroModel.listByFilters({
        nome: request.body.nome,
        servico: request.body.servico
    });

    response.status(200).send({ result });
});

export default barbeiroRouter;
