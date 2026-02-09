import Fastify from 'fastify'
import jwt from '@fastify/jwt'
import dotenv from 'dotenv'
import { closedSQLServer, cnnSQLServer } from './database/sqlserver';

dotenv.config();

export function buildApp() {
    const app = Fastify({logger: true})

    app.register(jwt, {secret: process.env.JWT_SECRET!,});
    app.get('/health', async () => {
        return {status: 'Ok'};
    });

    app.addHook('onReady', async () => {
        await cnnSQLServer();
        app.log.info('SQL SERVER CONNECTED')
    })

    app.addHook('onClose', async () => {
        await closedSQLServer();
        app.log.info('SQL SERVER DISCONECT')
    })
    
    return app;
}