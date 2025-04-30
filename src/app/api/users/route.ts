import db from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';
import { paginate } from '@/lib/dbhandle'
export async function GET(req: NextRequest,{ params }: { params: { id: string } }) {
    try {
        const users = await paginate(db.users) //db.users.find().toArray()
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json({ error}, { status: 500 });
    }
}
