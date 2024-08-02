const express=require('express');
const cont = require('../Control/control.js')
const quizWork = require('../Control/quizControl.js')
const card = require('../Control/cardControl.js')


const router = express.Router()
 //user route
router.post('/signup', cont.userSignup);     
router.get("/loginUser",cont.loginUser)     
router.get("/getallUser",cont.getALLRequest)  



//Quiz Route
router.post("/quiz",quizWork.createQuiz)  
router.get("/getquiz",quizWork.getQuiz) 


//Create Card
router.post("/CardCreate",card.CreatCard)
router.get("/getcard",card.getCard) 


module.exports=router