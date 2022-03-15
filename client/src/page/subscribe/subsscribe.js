import "./subscribe.css";
import Profile from "../../component/profile/profile";
import Logo2 from "../../media/Wow.png";
import ImgFile from "../../media/Vector.png";
import BtnSendSubs from "../../component/button/buttonSendSubscribe"



function Subscribe() {
  return (
    <div className="subscribe">
      <div className="subscribeLeft">
        <Profile />
      </div>
      <div className="subscribeRight">
        <form className="form">
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
            />
            <label>
              Attache proof of transfer
              <input className="fileInput" type="file" />
              <img src={ImgFile} alt="" />
            </label>
          </div>
          {/* <button>Send</button> */}
          <BtnSendSubs/> 
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
