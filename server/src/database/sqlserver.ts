import sql from 'mssql'

let pool: sql.ConnectionPool | null = null;

export async function cnnSQLServer(){
    if(pool) return pool;

    pool = await sql.connect({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        server: process.env.DB_HOST!,
        port: Number(process.env.DB_PORT),
        database: process.env.DB_NAME,
        options: {
            encrypt: process.env.DB_ENCRYPT === 'true',
            trustServerCertificate: true
        },
        pool:{
            max: 10, 
            min:0, 
            idleTimeoutMillis: 30000
        }
    });

    return pool;
}

export async function closedSQLServer(){
    if(pool){
        await pool.close();
        pool = null;
    }
}