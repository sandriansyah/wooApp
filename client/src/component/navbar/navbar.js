import "./navbar.css"
import Logo from "../../media/Icon.png"
import IconAddBook from "../../media/AddBook2.png"
import IconLogout from "../../media/logoutRed.png"
import NavProfile from "../../media/Ellipse 2.png"
import {Dropdown,Navbar} from "react-bootstrap"

function Navbarr(){
    return(
        <Navbar fixed="top" className="navbar">
            <div className="logoNavbar">
                <img src={Logo} alt="" />
            </div>
            
            <div className="navProfile">                                
                <Dropdown>
                    <Dropdown.Toggle className="dropdownProfile shadow-none" variant="" id="dropdown-basic">
                    <img src={NavProfile} alt="" />            
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdownMenu" >
                        <Dropdown.Item  href="/addBook">
                            <img src={IconAddBook} alt=""/> Add Book
                        </Dropdown.Item>
                        <hr/>
                        <Dropdown.Item  href="/">
                            <img src={IconLogout} alt=""/>  Log Out
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </Navbar>
    )
}

export default Navbarr