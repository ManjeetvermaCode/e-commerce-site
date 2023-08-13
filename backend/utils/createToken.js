import Jwt from 'jsonwebtoken'

const createToken=(res,userId)=>{
    
    const token=Jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'7d'
    })//.sign in method is used for creating token which takes 3 parameters,payload, secred and expiresIn object

    //set token as http-only cookie
    res.cookie('jwt',token,{//jwt is a cookie name
        httpOnly:true,// can only be accessed by the server, not by JavaScript running in the browser.
        secure:false,//true when https i.e in production
        sameSite:'strict',//prevent certain attacks
        maxAge:30*24*60*60*1000
    })
}

export default createToken;