const {book} = require("../../models")

exports.addBook = async (req,res) => {

    // const data = req.body
    // data.bookFile = req.file.bookFile[0].filename
    // data.imgCover = req.file.imgCover[0].filename

    try {

        const data = req.body
        console.log(req)

        const newBook = await book.create({
            ...data,
            bookFile: req.files.bookFile[0].filename,
            imgCover: req.files.imgCover[0].filename
        })
 
        const bookData = await book.findOne({
            where:{
                id: newBook.id
            },
            attributes:{
                exclude:["createdAt","updatedAt"]
            }
        })

        // let createProducts = JSON.parse(JSON.stringify(bookData)); 
        // res.send({ 
        //   status: "Success", 
        //   ...createProducts, 
        //   cover: "http://localhost:5000/uploads/" + createProducts.imgCover, 
        // });

        res.send({
            status:"success",
            data: bookData
        })

    } catch (error) {
        console.log(error)
        res.send({
            status:"failed",
            message:"server error"
        })
    }
}

exports.getBooks = async (req,res)=>{
    try {
        let dataBooks = await book.findAll({
            attributes:{
                exclude:["createdAt","updatedAt"]
            }
        })

        dataBooks = JSON.parse(JSON.stringify(dataBooks))

        const path = "http://localhost:5000/uploads/"

        dataBooks = dataBooks.map((book)=>{
            return{
                ...book,
                imgCover:path + book.imgCover
            }
        })

        res.send({
            status:"success",
            data : {
                books:{
                    dataBooks
                }
            }
        })
    } catch (error) {
        console.log(error)
        res.send({
            status:"failed",
            message:"server error"
        })
    }
}

exports.getBook = async(req,res)=>{
    try {
        const {id}=req.params 
        const dataBook = await book.findOne(
            {attributes:{
                exclude:["createdAt","updatedAt"]
            },
            where:{
                id:id
            }
        })

        res.send({
            status:"success",
            data:{
                book: dataBook
            }
        })

    } catch (error) {
        console.log(error)
        res.send({
            status:"failed",
            message:"server error"
        })
    }
}

exports.deleteBook = async(req,res)=>{
    try {
        const {id} = req.params
        await book.destroy({
            where:{
                id:id
            }
        })

        res.send({
            status:"success",
            data: id
        })
    } catch (error) {
        console.log(error)
        res.send({
            status:"failed",
            message:"server error"
        })
    }
}

exports.editBook = async(req,res)=>{
    try {
        const {id}=req.params
        const dataUpdate = req.body
        await book.update(dataUpdate,{
            where:{
                id:id
            }
        })
        res.send({
            status:"success",
            data: req.body
        })
    } catch (error) {
        console.log(error)
        res.send({
            status:"failed",
            message:"server error"
        })
    }
}