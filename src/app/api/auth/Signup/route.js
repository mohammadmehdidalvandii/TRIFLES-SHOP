import connectToDB from "@/configs/db";
import UserModel from '@/models/User';
import { generateAccessToken, hashPassword } from "@/utils/Auth";
import { roles } from "@/utils/Constent";

export async function POST(req){
       try{
        connectToDB()
        const body = await req.json()
        const {name , email , password} = body;


        const isUserExist = await UserModel.findOne({
            $or: [{name},{email}],
        })

        if(isUserExist){
            return Response.json(
                {message: "the username or email  exist "},
                {status: 422},
            );
        }

        const hashedPassword = await hashPassword(password);
        const accessToken = generateAccessToken({name});

        const users = await UserModel.find({});
        
        await UserModel.create({
            name,
            email,
            password:hashedPassword,
            role: users.length > 0 ? roles.USER : roles.ADMIN,
        });
        return Response.json(
            {message : "user created successfully "},
            {
                status: 201,
                headers:{"Set-Cookie" : `token=${accessToken};path=/;httpOnly=true`},
            }
        )
       } catch (err){
        console.log("is Error === > ", err);
       }

}