const router = require('express').Router();
let User = require('../models/user.model');


// If the url is localhost5000/users/
// we will perform this get request
router.route('/').get((req, res) => {
    User.find() /* find is a mongoose method that returns a promise. */
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
});


// If the url is localhost5000/users/add
// we will post data to the database
router.route('/add').post((req, res) => {
    const username = req.body.username;     // assigned to the username variable.
    const email = req.body.email;
    const password = req.body.password;
    const newUser = new User({username, email, password});   // creating a new User obj

    newUser.save()                          // saving the newUser obj to the database.
        .then(() => res.json('User added!'))    // if success we will print user added
        .catch(err => res.status(400).json('Error: ' + err));   // else print out error.
});

/**
 * Need to create logic for sessions now.
 */
router.route('/login').post(async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({email: email})
    
    if(user){
        if(password === user.password){
            req.session.userID = user.id;
            req.session.email = user.email;
            req.session.isAuth = true;
            req.session.save();
            res.status(200).send({
                status:"success",
                msg: user.userType,
                userID: user._id
            })
        }
        else{
            res.status(401).send("WRONG CREDENTIALS")
        }
    }else{
        res.json("User email not found")
    }
})

module.exports = router;
