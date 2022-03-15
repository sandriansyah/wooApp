import React,{useState,useContext} from "react";
import Profile from "../../component/profile/profile";
import "./afterlogin.css";
import PosterImg from "../../media/Frame 1.png";
import {Modal} from "react-bootstrap"
import {dataBook} from "../fakeData"
import {myListBook} from "../profileActiveSubscribe/profileActiveSubscribe"
import {useNavigate} from "react-router-dom"
import {SubsContext} from "../../context/subsContext"


function AfterLogin() {

  const [state,dispacth] = useContext(SubsContext)

    const navigate=useNavigate()

    const [show, setShow] = useState(false);

    const handleClose = () =>{

      setShow(false);

      if(state.isSubs){
        navigate("/detailbook")
      }
      
    } 
    
    function handleShow(){
        setShow(true);
        
    } 

 
  return (
    <div className="afterLogin">

        <Modal className="modalBookList" show={show} onHide={handleClose}> 
        <div className="paragraf">
            <p> <b>please make a payment to read the latest books</b>  </p>
        </div>                                                      
        </Modal>

      

      <div className="afterLoginLeft position-relative">
        <div className="position-fixed">
          <Profile />
        </div>
      </div>
      <div className="afterLoginRight">
        <div className="posterImg">
          <img src={PosterImg} alt="" />
        </div>
        <div className="list">
          <h1>List Book</h1>
        </div>
        <div className="listBook">

            {dataBook.map((item,index) => {
              return(
                <div key={index} onClick={handleShow} className="listBook1">
                  <img src={item.img} alt="" />
                  <h3>{item.title}</h3>
                  <p>{item.author}</p>    
                </div>
              )
            })} 
                      
        </div>
      </div>
    </div>
  );
}

export default AfterLogin;






{/* <div className="listBook1">
              <button onClick={handleShow}>
                <img src={Book1} alt="" />
                <h3>Serangkai</h3>
                <p>Valerie Patkar</p>
              </button>
            </div>
          

          <div className="listBook1">
            <button onClick={handleShow}>
              <img src={Book4} alt="" />
              <h3>Z1 - Sd/Mi Buku Siswa Tematik T...</h3>
              <p>Afi Yustiyana</p>
            </button>
          </div>

          <div className="listBook1">
            <button onClick={handleShow}>
              <img src={Book3} alt="" />
              <h3>Kabar Rahasia Dari Alam Kubu ...</h3>
              <p>DR. Kamil Yusuf Al-Atum</p>
            </button>
          </div>

          <div onClick={} className="listBook1">
            <button onClick={handleShow}>
              <img src={Book2} alt="" />
              <h3>Tess on the Road</h3>
              <p>Rachel Hartman</p>
            </button>
          </div> */}
