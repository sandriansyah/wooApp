const express = require("express")

const router = express.Router()


const {register,login,checkAuth} = require("../controllers/auth")
const {getUsers,getUser,deleteUser} = require("../controllers/user")
const {addBook,getBooks,getBook,deleteBook,editBook} = require("../controllers/book")
const {addTransaction,editTransaction,getAllTransaction,getTransaction} = require("../controllers/transaction")
const {addMyListBook} = require("../controllers/myListBook")
const {auth}=require("../midlewere/auth")
const {uploadFile} = require("../midlewere/uploadFile")
const {uploadTransferProof} = require("../midlewere/uploadTransferProof")


router.post("/register",register)
router.post("/login",login)
router.get("/checkauth",auth,checkAuth)

router.post("/mylistbook/:id",auth,addMyListBook)

router.get("/users",getUsers)
router.get("/user/:id",getUser)
router.delete("/user/:id",deleteUser)

router.post("/book",uploadFile("bookFile","imgCover"),addBook)
router.get("/books",getBooks)
router.get("/book/:id",getBook)
router.delete("/book/:id",auth,deleteBook)
router.patch("/book/:id",auth,editBook)

router.post("/transaction",auth,uploadTransferProof("transferProof"),addTransaction)
router.patch("/transaction/:id",editTransaction)
router.get("/transaction",getAllTransaction)
router.get("/transaction/:id",getTransaction)

// router.get("/user/:id",getUser)
// router.patch("/user/:id",updateUser)


module.exports = router