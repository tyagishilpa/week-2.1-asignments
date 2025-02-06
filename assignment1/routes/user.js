const express = require('express');
const userMiddleware = require('../middleware/user');
const { User, Course } = require("../db");
const router = express.Router();
// const router = Router();

router.post('/signup', (req,res)=>{
   
    const username = req.body.username;
    const password = req.body.password;
    User.create({
        username,
        password
    })
    res.json({
        msg:"user created successfully"
    })
});

router.get('/courses', async (req,res)=>{
 // implement all listing courses
 const response = await Course.find({
  isPublishes: true
 });
 res.json({
    courses: response
 })
})

router.post('/courses/:courseId', userMiddleware,async (req,res)=>{
 //implement course purchase logic
 const courseId = req.params.courseId;
 const username = req.headers.username;
await User.updateOne({
    username: username
 },{
  "$push": {
    purchasedCourses :courseId
    }
 })
 res.json({
    msg:"purchase complete"
 })
});

router.get('/purchasedCourses', userMiddleware, async (req,res)=>{

const user = await User.findOne({
    username: req.headers.username
});

console.log(user.purchasedCourses);
const courses = await Course.find({
    _id : {
        "$in": user.purchasedCourses
    }
});
res.json({
    courses: courses
})
})


module.exports = router;