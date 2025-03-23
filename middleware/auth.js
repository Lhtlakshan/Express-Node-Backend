import jwt from "jsonwebtoken";

const verifyJwt = (req,res,next)=>{
    const header = req.header("Authorization");
    if(header != null){
      const token = header.replace("Bearer ","");
      jwt.verify(token, "random123" , (err,decoded)=>{
        console.log(decoded);

        if(decoded != null){
          req.user = decoded;
        }
        
      });
    }
    next()
    
};

export default verifyJwt;