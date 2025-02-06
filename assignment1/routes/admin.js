const express = require('express');
const adminMiddleware = require('../middleware/admin');
const { Admin,Course } = require('../db');
const router = express.Router();

router.post('/signup', async (req,res)=>{
    //implement admin signup logic

    const username = req.body.username;
    const password = req.body.password;

   await Admin.create({
        username: username,
        password: password
    }).then(function(){
        res.json({
            message: 'admin created successfully'
        })
    })
    // .catch(function(){
    //     res.json({
    //         message: 'admin not created'
    //     })
    // })

   
});

router.post('/courses',adminMiddleware,async (req,res)=>{
    //implement courses creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    //zod

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
   // console.log(newCourse);
    res.json({
        message: "course created successfully", courseId: newCourse._id
    })
})

router.get('/courses',adminMiddleware, async (req,res)=>{
  //implementing fetching all courses

    //async-await approach
    const response = await Course.find({});
    res.json({
        courses: response
    })
    
  //promisified version
    // Course.find({}) 
    // .then(function(response){
    //     res.json({
    //         courses: response
    //     })
    // })

    
});

module.exports = router;