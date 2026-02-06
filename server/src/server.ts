import { buildApp } from "./app";

const app = buildApp();

const PORT = Number(process.env.PORT) || 3001;

async function start(){
    try {
        await app.listen({port: PORT, host: '0.0.0.0'})
        console.log(`http://localhost:${PORT}`)
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
}

start();