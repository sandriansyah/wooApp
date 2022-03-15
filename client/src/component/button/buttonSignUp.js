import "./buttonSignUp.css"
import {useState,useContext} from "react"
import {Modal} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import {ShowModalContext} from "../../context/showModalContext"


function BtnSignUp() {
    
    const [state,dispacth]= useContext(ShowModalContext)

    const handleClose = () => {

        dispacth({
            type:'SHOW_MODAL',
            payload:{
                showSignUp:false,
                showSignIn:false
            }
        })

    }
    const handleShow = () =>{

        // const showSignUp = true
    
        dispacth({
            type:'SHOW_MODAL',
            payload:{
                showSignUp:true,
                showSignIn:false
            }
        })
        
    } 

    const navigate = useNavigate()

    const handleSignUp= ()=>{
            navigate("/home")
    }

    const handleHere =()=>{
        dispacth({
            type:'SHOW_MODAL',
            payload:{
                showSignUp:false,
                showSignIn:true
            }
        })
    }

    return (
    <>
        <button className="buttonSignUp" onClick={handleShow}>
        Sign Up
        </button>

        <Modal className="modalFromBosstrap" show={state.show.showSignUp}  onHide={handleClose}> 
            <div class="modalSignUp">
                <h3>Sign Up</h3>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />          
                <input type="text" placeholder="Full Name" />          
                <button onClick={handleSignUp}>
                    Sign Up
                </button>
                <p>Already have an account ? Klik <b onClick={handleHere} >Here</b> </p>
            </div>                  
        </Modal>
    </>
    );
}

//   render(<BtnLogin />);

export default BtnSignUp