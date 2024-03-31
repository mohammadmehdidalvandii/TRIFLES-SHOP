import connectToDB from '@/configs/db';
import UserModel from '@/models/User';
import { generateAccessToken, generateRefreshToken, verifyPassword } from '@/utils/Auth';

export async function POST (req){
    try{
        connectToDB()
        const body = await req.json();
        const {email , password} = body;

        // Validation


        const user = await  UserModel.find({email})

        if(!user){
            return Response.json(
                {message : "user Not Found"}, {status:422},
            );
        }

        const isCorrectPassword = verifyPassword(password , user.password);
        if(!isCorrectPassword){
            return Response.json(
                {message: "Email or password is not Correct"},
                {status:401},
            );
        }

        const accessToken = generateAccessToken({email});
        const  refreshToken = generateRefreshToken({email});
        
        await UserModel.findOneAndUpdate(
            {email},
            {
                $set:{
                    refreshToken,
                }
            }
        );

        return Response.json(
            {
                message:"user logged in successfully"
            },
            {
                status :200,
                headers:{
                    "Set-Cookie" : `token=${accessToken};path=/;httpOnly=true;`
                }
            },
        );

    } catch(err){
        console.log('Error ==> ==>' , err);
        return Response.json(
            {message: 'Error ===> ' , err},
            {status: 500}
        )
    }
}