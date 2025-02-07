const mongoose = require('mongoose');
//connect to mongodb
mongoose.connect('mongodb+srv://tyagishilpi008:my_password@cluster0.qvxv0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

//define schemas
const AdminSchema = new mongoose.Schema({
    //schema definition here
    username:String,
    password:String,
});

const UserSchema = new mongoose.Schema({
      //schema definition here
    username:String,
    password:String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course',CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
