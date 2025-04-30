import { MongoClient }from 'mongodb';
import type { Collection } from 'mongodb';
const uri = "mongodb+srv://heavenliu66:zSORoD5NG5TZaJPO@cluster0.ldufu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const collectionList = ['users','comments','articles','words'] as const
const client = new MongoClient(uri);
let clientPromise = await client.connect();
const db = clientPromise.db('sample_mflix');  //資料庫，根據你的需求更改
type CollectionName = typeof collectionList[number];
const dbPool:Record<CollectionName, Collection> = {} as Record<CollectionName, Collection>;

for (let index = 0; index < collectionList.length; index++) {
    let collectionName:CollectionName = collectionList[index];
    const collection = await db.collection(collectionName)
    dbPool[collectionName] = collection
}

export default dbPool
