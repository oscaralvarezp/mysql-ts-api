import { createPool } from 'mysql2/promise';

export async function mysqlConnect() {
   const connection = await createPool({
        host: 'localhost',
        user: 'root',
        database: 'node_ts_mysql',
        connectionLimit: 10
    });
    return connection;
}