import "./buttonSignIn.css"
import {useState,useContext} from "react"
import {Modal} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import {ShowModalContext} from "../../context/showModalContext"

function BtnSignIn() {
    const [show, setShow] = useState(false);
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
    const handleShow = () => {
        dispacth({
            type:'SHOW_MODAL',
            payload:{
                showSignUp:false,
                showSignIn:true
            }
        })
    };

    const navigate = useNavigate()

    const handleSignIn = ()=>{
        navigate("/home");
    }

    const handleHere =()=>{
        dispacth({
            type:'SHOW_MODAL',
            payload:{
                showSignUp:true,
                showSignIn:false
            }
        })
    }

    return (
    <>
        <button className="buttonSignIn" onClick={handleShow}>
        Sign In
        </button>

        <Modal className="modalFromBosstrap" show={state.show.showSignIn} onHide={handleClose}> 
            <div class="modalSignIn">
                <h3>Sign In</h3>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />          
                <button onClick={handleSignIn}>
                    Sign In
                </button>
                <p>Don't have an account ? Klik <b onClick={handleHere} >Here</b> </p>                 
            </div>         
            
        </Modal>
    </>
    );
}

//   render(<BtnLogin />);

export default BtnSignIn