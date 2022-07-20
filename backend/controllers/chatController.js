const Chat = require("../models/chatModel");


const accessChat = async(req,res) => {

    const { userId } = req.body

    if(!userId){
        res.status(400).json("user id is is don't exist")
    }
}