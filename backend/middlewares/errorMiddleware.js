const notFound=(req,res,next)=>{
    const error=new Error(`not found ${req.originalUrl}`);
    res.status(404)
    next(error)
}

const errorHandler=(err,req,res,next)=>{
    let statusCode=res.statusCode===200?500:res.statusCode//if statusCode 200 then set it to 500 else keep it as it is.
    let message=err.message
    
    //check for Mongoose bad ObjectId
    if(err.name=='CastError' && err.kind=='ObjectId'){
        message='Resouse not found',
        statusCode=404
    }

    res.status(statusCode).json({//res.json sends a json object, is used to receive data at frontend.
        message,
        stack:process.env.NODE_ENV==='production'?':(':err.stack,
    })

}

export {notFound,errorHandler}