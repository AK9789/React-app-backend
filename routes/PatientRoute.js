
const express = require('express')
const router = express.Router()
const { doctors } = require('../models')
const { patient } = require('../models')


//Patient
router.get("/", async(req, res)=>{
    const listOfPatients = await patient.findAll()
    res.json(listOfPatients)
})
router.post("/", async (req, res) => {
  const Postpatient = req.body;
  await patient.create(Postpatient);
  res.json(Postpatient);
});

module.exports = router