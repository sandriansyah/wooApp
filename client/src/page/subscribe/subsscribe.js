import "./subscribe.css";
import Profile from "../../component/profile/profile";
import Logo2 from "../../media/Wow.png";
import ImgFile from "../../media/Vector.png";
import {Button} from "react-bootstrap"
// import BtnSendSubs from "../../component/button/buttonSendSubscribe"
import { UserContext } from "../../context/userContex";

import {API,setAuthToken} from "../../config/api"
import { useContext, useState,useEffect } from "react";

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function Subscribe() {

  const [user,setUser] = useContext(UserContext)
  console.log(user);

  const [form,setForm] = useState({
    numberAccount:"",
    transferProof:"",
  })

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]: 
        e.target.type === "file" ? e.target.files : e.target.value,
    })
  }

  console.log(form);

  const handleSubmit = async (e)=>{
    try {
      e.preventDefault();

      const config = { 
        headers: { 
        "Content-type": "multipart/form-data", 
        }, 
    }; 

    const formData = new FormData();
    formData.set("numberAccount",form.numberAccount);
    formData.set("transferProof",form.transferProof[0],form.transferProof[0].name);

   
    console.log(form.numberAccount);
    console.log(form.transferProof[0].name);
    // transferProof
    console.log(formData);

    const response = await API.post("/transaction",formData,config)
    console.log(response);


    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="subscribe">
      <div className="subscribeLeft">
        <Profile />
      </div>
      <div className="subscribeRight">
        <form className="form" onSubmit={handleSubmit}>
          <div className="description">
            <h1>Premium</h1>
            <div className="desc">
              <div className="descChild">
                <p>Pay now and access all the latest books from</p>
                <img src={Logo2} alt="" />
              </div>
              <div className="descChild2">
                <img src={Logo2} alt="" />
                <p>: 0981312323</p>
              </div>
            </div>
          </div>
          <div className="input">
            <input
              className="inputNumber"
              type="text"
              placeholder="Input your account number"
              name="numberAccount"
              onChange={handleChange}
            />
            <label>
              Attache proof of transfer
              <input className="fileInput" type="file" name="transferProof" onChange={handleChange}/>
              <img src={ImgFile} alt="" />
            </label>
          </div>
        
          <button type="submit">Send</button>
          {/* <BtnSendSubs />  */}
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
