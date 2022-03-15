
const {user} = require("../../models")


exports.getUsers = async (req,res)=>{
    try{
        const data = await user.findAll({
            attributes:{
                exclude:["createdAt","updatedAt"]
            }
        })

        res.send({
            status:"success",
            data:data
        })

    }catch(error){
        console.log(error)
        res.send({
            status:"failed",
            message: "server error"
        })
    }
}

exports.deleteUser= async (req,res)=>{

    try{
        const {id} = req.params 

        await user.destroy({
            where:{
                id:id
            }
        })

        res.send({
            status:"success",
            data: id
        })

    }catch(error){
        res.send({
            status:"failed",
            message:"server error"
        })
    }

}







