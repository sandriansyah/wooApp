import React,{useContext} from "react";
import {useNavigate} from "react-router-dom"
import "./profileActiveSubscribe.css"
import Profile from "../../component/profile/profile";
import {Container,Row,Col} from "react-bootstrap"
import MailIcon from "../../media/mail.png"
import GenderIcon from "../../media/gender.png"
import PhoneIcon from "../../media/phone.png"
import AddresIcon from "../../media/addres.png"
import ImageProfile from "../../media/Rectangle 12.png"
import MyListBook1 from "../../media/Rectangle 2.png"
import { MyListBookContext } from "../../context/myListBookContex";

export const myListBook=['hallo']
function ProfileActiveSubscribe() {

const navigate = useNavigate()

function handleReadBook(){
    navigate("/readbook")
}

const [state,dispacth] = useContext(MyListBookContext)
// console.log(state);

    console.log(state.dataListBook)

    return (
        // <div className="ProfileActSub">
        //     <div className="ProfileActSubRight">
        //         <Profile />
        //     </div>
        //     <div className="ProfileActSubLeft">
        //         tes
        //     </div>
        // </div>
        <Container fluid className="con">
            <Row className="row">
                <Col className="col position-relative " sm={2}>
                    <div className="position-fixed">
                        <Profile/>
                    </div>
                </Col>
                <Col sm={10}>
                    <div className="detailProfile">
                        <h1>Profile</h1>
                        <div className="profileUser">
                            <div className="profileUserLeft">

                                <div className="data">
                                    <div className="iconImg">
                                        <img src={MailIcon} alt="" />
                                    </div>
                                    <div className="dataProfile">
                                        <p> <b>egigans@gmail.com</b> </p>
                                        <p>Email</p>
                                    </div>
                                </div>
                                
                                <div className="data">
                                    <div className="iconImg">
                                        <img src={GenderIcon} alt="" />
                                    </div>
                                    <div className="dataProfile">
                                        <p> <b>Male</b> </p>
                                        <p>Gender</p>
                                    </div>
                                </div>

                                <div className="data">
                                    <div className="iconImg">
                                        <img src={PhoneIcon} alt="" />
                                    </div>
                                    <div className="dataProfile">
                                        <p> <b>0812-8623-8911</b> </p>
                                        <p>Mobile Phone</p>
                                    </div>
                                </div>

                                <div className="data">
                                    <div className="iconImg">
                                        <img src={AddresIcon} alt="" />
                                    </div>
                                    <div className="dataProfile">
                                        <p> <b>Perumahan Permata Bintaro Residence C-3</b> </p>
                                        <p>Address</p>
                                    </div>
                                </div>

                            </div>
                            <div className="profileUserRight">
                                <div className="imageProfie">
                                    <img src={ImageProfile} alt="" />
                                </div>
                                <div className="btnEditProfile">
                                    <button>Edit Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="myListBook ">
                        <div className="row">
                            <h1>My List Book</h1>
                        </div>
                        <div className="row d-flex text-center ">
                            
                                {state.dataListBook.map((item,index)=>{
                                console.log(item)
                                return(
                                    <div onClick={handleReadBook} key={index} className=" col-3">
                                        <img src={MyListBook1} alt="" />
                                        <div className="text-start ms-3">
                                            <h3>{item.title}</h3>
                                            <p >{item.author}</p>
                                        </div>
                                    </div>
                                )                            
                            })}
                            
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ProfileActiveSubscribe