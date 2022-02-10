import { MongoClient, MongoClientOptions, Db } from 'mongodb';

const { MONGODB_URI: uri, MONGODB_NAME: dbName } = process.env;

let cachedClient: MongoClient|null = null;
let cachedDb: Db|null = null;

export async function connectToDatabase() {
    if (!uri) {
    throw new Error('MONGODB_URI is not set');
    }
    if (!dbName) {
    throw new Error('MONGODB_NAME is not set');
    }

    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    cachedClient = await MongoClient.connect(
        uri,
        <MongoClientOptions>{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    );
    cachedDb = cachedClient.db(dbName);
    return { client: cachedClient, db: cachedDb };
}