const {user} = require("../../models")
const joi = require("joi")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.register= async (req,res)=>{

    const schema = joi.object({
        fullName:joi.string().min(8).required(),
        email:joi.string().email().min(8).required(),
        password:joi.string().min(8).required(),
        status:joi.string().required()
    })

    const {error}= schema.validate(req.body)

    if(error){
        return res.status(400).send({
            message:error.details[0].message
        })
    }

    try{

        const checkEmail = await user.findOne({
            where:{
                email:req.body.email
            }
        })

        if(checkEmail){
            return res.send({
                status:"failed",
                message:"email already used"
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password,salt)

        const createUser = await user.create({
            fullName: req.body.fullName,
            email: req.body.email,
            isSubs:"false",
            status: req.body.status,
            password:hashedPassword
        })

        const dataToken = {
            id: createUser.id
        }

        const SEKRET_KEY = process.env.TOKEN_KEY
        const token = jwt.sign(dataToken,SEKRET_KEY)

        res.status(200).send({
            status:"success",
            data:{
                fullName:createUser.fullName,
                email: createUser.email,
                token
            }
        })

    }catch(error){
        console.log(error)
        res.status(500).send({
            status:"failed",
            message:"server error"
        })
    }
}

exports.login= async (req,res)=>{

    const schema = joi.object({
        email:joi.string().email().min(8).required(),
        password:joi.string().min(8).required()
    })

    const {error}= schema.validate(req.body)

    if(error){
        return res.status(400).send({
            message:error.details[0].message
        })
    }

    try{    
        const findingUser = await user.findOne({
            where:{
                email:req.body.email
            },
            attributes:{
                exclude:["createdAt","updatedAt"]
            }
        })

        const comparePassword = await bcrypt.compare(req.body.password,findingUser.password)

        if(!comparePassword){
            res.status(400).send({
                status:"failed",
                message:"your email and password is invalid"
            })
        }

        const dataToken = {
            id: findingUser.id
        }

        const SEKRET_KEY = process.env.TOKEN_KEY
        const token = jwt.sign(dataToken,SEKRET_KEY)

        res.status(200).send({
            data:{
                fullName: findingUser.fullName,
                email: findingUser.email,
                token
            }
        })

    }catch(error){
        console.log(error)
        res.status(500).send({
            status:"failed",
            message:"server error"
        })
    }
}