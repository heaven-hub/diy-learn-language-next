// src/app/api/products/route.js
import clientPromise from '@/lib/mongodb';

export async function GET(req: any) {
    try {
        const client = await clientPromise;
        const db = client.db('sample_mflix');  // 默認選擇資料庫，根據你的需求更改
        const products = await db.collection('users').find().toArray();
        return new Response(JSON.stringify(products), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        // console.log('error',error)
        return new Response('Failed to fetch data', {
            status: 500,
        });
    }
}
