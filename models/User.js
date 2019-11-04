
import Sequelize from 'sequelize';
import { db } from '../config/database'

const User = db.define('users', {


first_name:{
    type: Sequelize.STRING,
    unique: true
},
last_name:{
    type: Sequelize.STRING
},
email:{
    type: Sequelize.STRING
},
password:{
   type: Sequelize.STRING,
   unique: true
},
address:{
    type: Sequelize.STRING
},
bio:{
    type: Sequelize.STRING
},
occupatio:{
    type: Sequelize.STRING
},
epertise:{
    type: Sequelize.STRING
},
admin:{
    type: Sequelize.STRING
},
mentor:{
    type: Sequelize.STRING
},

timestamps:false

});

export default User;