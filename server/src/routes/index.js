const express = require("express")

const router = express.Router()


const {register,login} = require("../controllers/auth")
const {getUsers,deleteUser} = require("../controllers/user")
const {addBook,getBooks,getBook,deleteBook,editBook} = require("../controllers/book")
const {addTransaction,editTransaction,getAllTransaction,getTransaction} = require("../controllers/transaction")
const {auth}=require("../midlewere/auth")
const {uploadFile} = require("../midlewere/uploadFile")


router.post("/register",register)
router.post("/login",login)

router.get("/users",getUsers)
router.delete("/user/:id",deleteUser)

router.post("/book",uploadFile("bookFile","imgCover"),addBook)
router.get("/books",auth,getBooks)
router.get("/book/:id",getBook)
router.delete("/book/:id",auth,deleteBook)
router.patch("/book/:id",auth,editBook)

router.post("/transaction",auth,addTransaction)
router.patch("/transaction/:id",auth,editTransaction)
router.get("/transaction",getAllTransaction)
router.get("/transaction/:id",getTransaction)

// router.get("/user/:id",getUser)
// router.patch("/user/:id",updateUser)


module.exports = router