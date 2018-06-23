const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const Member = require('../models/member');


router.post('/student', (req, res, next) =>{
  Student.getCount(req.body.id, (err, count) => {
    if (count == 1) {
      Student.getStudentById(req.body.id, (err, student) => {
        if(err) {
          res.json({
            success:false, 
            error: err, 
            message: "Database error",
            token:null,
            student:null
          });
        } else {
          if(student.password_hash == req.body.password) {
            res.json({
              success:true, 
              error: err, 
              message: "Loggedin Successfully",
              token:"123",
              student:student
            });
          } else {
            res.json({
              success:true, 
              error: err, 
              message: "Incorrect password",
              token:null,
              student:null
            });
          }
        }
      })
    } else {
      res.json({
        success:false, 
        error: err, 
        message: "Icorrect Student Id",
        token:null,
        student:null
      });
    }
  });
  
});

router.post('/member', (req, res, next) =>{
  Member.getCount(req.body.id, (err, count) => {
    if (count == 1) {
      Member.getMemberById(req.body.id, (err, member) => {
        if(err) {
          res.json({
            success:false, 
            error: err, 
            message: "Database error",
            token:null,
            member:null
          });
        } else {
          if(member.password == req.body.password) {
            res.json({
              success:true, 
              error: err, 
              message: "Loggedin Successfully",
              token:"123",
              member:member
            });
          } else {
            res.json({
              success:true, 
              error: err, 
              message: "Incorrect password",
              token:null,
              member:null
            });
          }
        }
      })
    } else {
      res.json({
        success:false, 
        error: err, 
        message: "Icorrect Student Id",
        token:null,
        member:null
      });
    }
  });
  
});

module.exports = router;
