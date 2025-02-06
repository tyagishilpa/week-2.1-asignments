const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tyagishilpi008:5nqnzqt7eU4uwuZF@cluster0.qvxv0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    

    const userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: true,
            minlength: [3,'username must be atleast 3 characters long']
        },
       password: {
        type: String,
        required: true,
        trim: true,
        minlength:  [5,'password must be atleast 5 characters long']
    
       }
    })
    
    const user = mongoose.model('userdata' ,userSchema)
    
 module.exports = userdata;

