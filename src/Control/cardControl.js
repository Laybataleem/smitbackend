const Card= require('../Model/cardSchema')
 


const CreatCard =async (req,res)=>{  /// 
    try {
        const {title ,image} = req.body;
        const data = {title,image };
        const user = new Card(data);

        console.log(user);

        // await Card.save();
        res.status(201).send({    
            message: "Crad has being Created",
            user
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({ error: "An error occurred while signing up" });
    }
}


const getCard = async(req, res)=>{

    try{
        const QuizData = await Card.find();
        res.status(200).json({
          success: true,
          QuizData,
        });


    }catch(e){

        console.log(e.message)
    }

}
module.exports={getCard,CreatCard}

