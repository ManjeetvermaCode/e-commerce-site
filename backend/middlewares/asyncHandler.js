const asyncHandler=fn=>(req,res,next)=>{//this takes req,res and next,if it resolves than it forwards us to next middleware
    Promise.resolve(fn(req,res,next)).catch(next)
}

export default asyncHandler
