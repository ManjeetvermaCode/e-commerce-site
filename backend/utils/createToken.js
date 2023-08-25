import Jwt from 'jsonwebtoken'

const createToken=(res,userId)=>{
    
    const token=Jwt.sign({userId},process.env.JWT_SECRET,{

        expiresIn:'7d'
    })

    
    res.cookie('jwt',token,{
        httpOnly:true,
        secure:false,
        sameSite:'none',
        maxAge:30*24*60*60*1000
    })
    console.log(res.cookie)
}

export default createToken;