const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
  res.json({users:["Rishabh","Aman","Neha"]});
});

router.post('/', (req,res)=>{
  res.json({message:"User added successfully"});
});

module.exports = router;
