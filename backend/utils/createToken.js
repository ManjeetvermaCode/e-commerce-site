import Jwt from 'jsonwebtoken'

const createToken=(res,userId)=>{
    
    const token=Jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'7d'
    })

    
    res.cookie('jwt',token,{
        httpOnly:true,
        secure:false,
        sameSite:'strict',
        maxAge:30*24*60*60*1000
    })
}

export default createToken;