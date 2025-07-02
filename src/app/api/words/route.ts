import db from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';
import { paginate } from '@/lib/dbhandle'
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const searchParams = req.nextUrl.searchParams;
    const query = Object.fromEntries(searchParams.entries());
    try {
        const words = await paginate(db.words,{},query)
        const response = NextResponse.json(words);
        return response;
    } catch (error) {
        console.log('error',error)
        return NextResponse.json({ error }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const query = await req.json(); // 解析 JSON 資料
        const { id,original, translation='' } = query;
        if(!!id){
            await db.words.updateOne({id},{ original, translation })
        }
        await db.words.insertOne({ original, translation })
        return NextResponse.json({ message: 'words saved successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
}

export async function PUT(req: NextRequest) {
    try {
        const query = await req.json(); // 解析 JSON 資料
        const { id,original, translation } = query;
        if(!!id){
            await db.words.updateOne({id},{ original, translation })
        }
        await db.words.insertOne({ original, translation })
        return NextResponse.json({ message: 'words saved successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
}