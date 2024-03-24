import connectToDB from "@/configs/db";
import ProductModel from '@/models/Product'

export async function POST(req){
    try{
        connectToDB()
        const body = await req.json()
        const {
            name,
    price,
    shortDesc,
    LongDesc,
    unit,
    color,
    size,
    weight,
    dimensions,
        }  = body

        const product =await ProductModel.create({
            name,
            price,
            shortDesc,
            LongDesc,
            unit,
            color,
            size,
            weight,
            dimensions,
        });
        return Response.json(
            {message: "product created successfully : ))" , data: product},
            {status: 201}
        )
    }catch(err){
        return Response.json(
            {message: err} , {status: 500}
        )
    }


}