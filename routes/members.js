// const express = require('express');
// const router = express.Router();
// const jwt = require('jsonwebtoken');
// const config = require('../config/database');
// const Member = require('../models/member');

// // Register
// router.post('/register', (req, res, next) => {
//   let newMember = new Member ({
//     name: req.body.name,
//     email: req.body.email,
//     username: req.body.username,
//     password: req.body.password
//   });

//   Member.addMember(newMember, (err, member) => {
//     if(err) {
//       res.json({success: false, msg: 'Failed to register member'});
//     } else {
//       res.json({success: true, msg: 'Member registered'});
//     }
//   });
// });


// module.exports = router;