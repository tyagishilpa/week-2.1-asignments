const {Admin} = require("../db");
//middleware for handling auth
function adminMiddleware(req,res,next){
    //implement middleware auth logic
    //you need to check the headers and validate the admin from admin DB, check readme for exact headers to be expected
    const  username = req.headers.username;
    const  password = req.headers.password;

    Admin.findOne({
        username: username,
        password: password
      
    })  .then(function(value){
        if(value){
            next();
        }else{
            res.status(403).json({
                msg: "admin doesn't exist"
            })
        }
    })
}

module.exports = adminMiddleware;