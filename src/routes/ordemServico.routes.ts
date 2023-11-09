import express from 'express';
import OrdemServico from '../models/ordem_servico.model';
import ordemServicoDatabaseRepository from '../repository/ordemServico/ordemServicoDatabase.repository';

const ordemServicoRouter: express.Router = express.Router();

ordemServicoRouter.post('/createOrdemServico', async (request: express.Request, response: express.Response): Promise<any> => {
    try{
        const ordemServicoModel: OrdemServico = new OrdemServico(new ordemServicoDatabaseRepository());
        const ordemServico: CreateOrdemServico = {
            cliente: request.body.cliente,
            servico: request.body.servico,
            barbeiro: request.body.barbeiro,
            data: request.body.data
        }
        const result = await ordemServicoModel.create(ordemServico)
    
        response.status(200).send({ result });

    }catch(error){
        response.status(404).send({ error });
    }
});

ordemServicoRouter.put('/updateOrdemServico/:servico', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        const ordemServicoModel: OrdemServico = new OrdemServico(new ordemServicoDatabaseRepository());
        const { servico } = request.params
        const ordemServico: CreateOrdemServico = {
            cliente: request.body.cliente,
            servico: request.body.servico,
            barbeiro: request.body.barbeiro,
            data: request.body.data
        }
    
        const result = await ordemServicoModel.update(servico,ordemServico)
    
        response.status(200).send({ result });

    } catch (error) {
        response.status(404).send({ error });
    }
});

ordemServicoRouter.delete('/deleteOrdemServico/:servico', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        const ordemServicoModel: OrdemServico = new OrdemServico(new ordemServicoDatabaseRepository());
        const { servico } = request.params
        const ordemServico: CreateOrdemServico = {
            cliente: request.body.cliente,
            servico: request.body.servico,
            barbeiro: request.body.barbeiro,
            data: request.body.data
        }
    
        const result = await ordemServicoModel.delete(servico)
    
        response.status(200).send({ result });

    } catch (error) {
        response.status(404).send({ error });
    }
});

ordemServicoRouter.get('/list', async (request: express.Request, response: express.Response): Promise<any> => {
    try {
        const ordemServicoModel: OrdemServico = new OrdemServico(new ordemServicoDatabaseRepository());
        const result = await ordemServicoModel.list()

        response.status(200).send({ result });
    } catch (error) {
        response.status(404).send({ error });
    }
});

ordemServicoRouter.get('/listByFilters', async (request: express.Request, response: express.Response): Promise<any> => {
    const ordemServicoModel: OrdemServico = new OrdemServico(new ordemServicoDatabaseRepository());

    const result = await ordemServicoModel.listByFilters({
        cliente: request.body.cliente,
        servico: request.body.servico,
        barbeiro: request.body.barbeiro,
        data: request.body.data
    });

    response.status(200).send({ result });
});

export default ordemServicoRouter;
