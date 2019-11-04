 import express from 'express';
 import {db} from '../config/database'
 import {User} from '../models/User'
 
// import {signUpUser} from '../controllers/users.controllers'


 const router = express.Router()

//  router.get('/', (req,res) =>
//  User.find()
//  .then(users =>{
//      console.log(users)
//      res.sendStatus(200)
//  })

//  .catch(err => console.log(err)));

// router.post('/auth/signup',  signUpUser);

export default router;