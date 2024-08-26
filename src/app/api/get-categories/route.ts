import client from '@/database/mongodb';
import type {NextApiResponse}
from 'next';
import {NextResponse} from 'next/server'
import {type NextRequest} from 'next/server'

export async function GET(req : NextRequest, res : NextApiResponse) {
try {

    const ProductsCollection = await client
        .db("DIY")
        .collection("Categories");

    const Categories = await ProductsCollection
    .find({})
    .limit(20)
    .toArray()


    if (!Categories || Categories?.length === 0) {
        return NextResponse.json({success: false});
    }

    return NextResponse.json({
        success: true,
        Categories
        
    });
}

catch (error) {
    console.log('error get-Categories: ', error);

}
}

export const revalidate = 60

// export const dynamic = 'force-dynamic'
