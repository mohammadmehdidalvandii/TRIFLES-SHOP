import connectToDB from "@/configs/db";
import { hash , compare } from "bcryptjs";
import { sign , verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import UserModel from '@/models/User'


const hashPassword = async (password)=>{
    const hashedPassword = await hash(password, 12)
    return hashedPassword;
}

const verifyPassword = async (password , hashPassword)=>{
    const isValid = await compare(password , hashPassword);
    return isValid
}

const generateAccessToken = (data) => {
    const token = sign({...data}, process.env.ACCESS_TOKEN_SCT, {
        expiresIn: "60d",
    });
    return token;
}

const verifyAccessToken = (token)=>{
    try{
        const tokenPayload = verify(token , process.env.ACCESS_TOKEN_SCT)
        return tokenPayload
    }catch(err){
        console.log("verify Access Token Error -->" , err)
        return false
    }
}

const generateRefreshToken = (data)=>{
    const token = sign({...data}, process.env.REFRESH_TOKEN_SCT, {
        expiresIn: "15d"
    });
    return token
}




export{
    hashPassword,
    verifyPassword,
    generateAccessToken,
    verifyAccessToken,
    generateRefreshToken,
}