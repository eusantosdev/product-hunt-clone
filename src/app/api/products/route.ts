import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextResponse) {
    try {
        const products =  await prisma.product.findMany();
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json(error);
    }
}

export async function POST(request: NextRequest) {
    try {
        const { userId } = await auth();

        if(!userId) {
            return NextResponse.json( { error: "Unauthorized" }, { status: 401} )
        }
        
        const body = await request.json();
        const product = await prisma.product.create({
            data: { ...body, userId }
        })
        return NextResponse.json( {created: product}, {status: 201} );
    } catch (error) {
        return NextResponse.json(error);
    }
}