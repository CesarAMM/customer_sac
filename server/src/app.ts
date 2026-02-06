import Fastify from 'fastify'
import jwt from '@fastify/jwt'
import dotenv from 'dotenv'

dotenv.config();

export function buildApp() {
    const app = Fastify({logger: true})

    app.register(jwt, {secret: process.env.JWT_SECRET!,});
    app.get('/health', async () => {
        return {status: 'Ok'};
    });
    
    return app;
}