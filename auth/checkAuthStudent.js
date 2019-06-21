const jwt=require('jsonwebtoken');
const keys=require('../config/keys');
const JWT_KEY=keys.JWT_KEY;

module.exports=(req,res,next)=>{
  try{const token=req.headers.authorization.split(" ")[1];
  const decoded=jwt.verify(token,JWT_KEY);
  req.userData=decoded;
  if(decoded.userType==='student'){
      next();
  }else{
      return res.status(401).json('No access!')
  }
  }catch (e) {
      return res.status(401).json({
          message:'Auth Failed'
      })
  }

};