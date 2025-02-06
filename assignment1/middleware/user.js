const { User } = require("../db");
//middleware for handling auth
function userMiddleware(req,res,next){
    //implement middleware auth logic
    //you need to check the headers and validate the admin from admin DB, check readme for exact headers to be expected
    const  username = req.headers.username;
    const  password = req.headers.password;

    User.findOne({
        username: username,
        password: password
       
    }) .then(function(value){
        if(value){
            next();
        }else{
            res.status(403).json({
                msg: "user doesn't exist"
            })
        }
    })
}

module.exports = userMiddleware;