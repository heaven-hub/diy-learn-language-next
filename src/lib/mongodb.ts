// lib/mongodb.js
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://heavenliu66:zSORoD5NG5TZaJPO@cluster0.ldufu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

let clientPromise = await client.connect();

// if (process.env.NODE_ENV === 'development') {
//     // 開發模式下使用全局變量，以避免熱重載時每次重新連接 MongoDB
//     if (global._mongoClientPromise) {
//         clientPromise = global._mongoClientPromise;
//     } else {
//         global._mongoClientPromise = client.connect();
//         clientPromise = global._mongoClientPromise;
//     }
// } else {
//     // 生產模式下每次都連接
//     clientPromise = client.connect();
// }

export default clientPromise;
