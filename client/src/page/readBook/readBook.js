import "./readBook.css"
import Logo from "../../media/Icon.png"
import PageBook from "../../media/pageBook.png"
import React, { useState } from "react"
import { ReactReader } from "react-reader"

function ReadBook(){

    const [location, setLocation] = useState(null)
    const locationChanged = (epubcifi) => {
    setLocation(epubcifi)
  }



    return(
        <div className="readBook bg-primary">
            {/* <div className="readBookLogo">
                <img src={Logo} alt="" />
            </div>
            <div className="pagesBook">
                <img src={PageBook} alt="" />
            </div> */}

            
            <div style={{ height: "100vh"}}>
                <ReactReader
                location={location}
                locationChanged={locationChanged}
                url="https://gerhardsletten.github.io/react-reader/files/alice.epub"
                />
            </div>
            


        </div>
    )
}

export default ReadBook