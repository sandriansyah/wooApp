const {userListBook,book,user} = require("../../models")

exports.addMyListBook = async (req,res)=>{
    try {
        const {id} = req.params;
        const data = await userListBook.create({
            idUser: req.user.id,
            idBook: id,
        })

        console.log(id);
        console.log(data);

        const getMyListBook = await user.findOne({
            where:{
                id:data.idUser
            },
            attributes:{
                exclude:["createdAt","updatedAt"]
            },
            include:{
                model:book,
                as:"book",
                attributes:{
                    exclude:["createdAt","updatedAt"]
                }
            }
        })

        res.send({
            status:"success",
            data: getMyListBook,
        })

    } catch (error) {
        console.log(error);
        res.status(400).send({
            status:"failed",
            message:"server error"
        })
    }
}