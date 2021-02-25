const user = require('express').Router();
const mysql = require('../mysql');
const bcrypt = require('bcrypt'); 

const saltRounds = 12; 

user.post('/',(req,res) => {
    var user_name = req.body.user_name;
    var password = req.body.password;
    var prepared_statement = 'insert into user values(?,?)';        //prepared statement to insert data into user table
    if((typeof user_name).localeCompare('string') || (typeof password).localeCompare('string')){    //check if the data is string
        res.json({
            success : false,
            error : 'user name and password must be string'
        });
    }
    else if(password.length < 8){       //check if password length is 8 or greater
        res.json({
            success : false,
            error : "password length should be greater than 8" 
        });
    }
    else{
        bcrypt.hash(password,saltRounds, (err,hash)=>{      //generating hash for the password
            if(err) {
                res.json({
                    success : false,
                    error : 'error occured while hashing'
                })
            }
            else{
                mysql.query(prepared_statement,[user_name,hash],(err,result)=>{     //storing the username and the hashed password
                    if(err){
                        if(err.errno === 1062){     //check if the username already exists
                            res.json({
                                success : false,
                                error :"duplicate entry. user name already exists"
                            });
                        }
                        else                       
                            res.json({
                                success : false,
                                error :"error while inserting data"
                            });
                    }
                    else{               
                        res.json({
                            success : true,
                            message : 'user created'
                        });     //sending success as true if user created successfully 
                    }
                });
            }
        });
    }
});

module.exports = user;