import "./listTrans.css"
import Navbar from "../../component/navbar/navbar"
import{Dropdown} from "react-bootstrap"

function ListTrans(){
    return(
        <div className="listTrans">
            <nav>
                <Navbar/>
            </nav>
            <div className="tableListTrans">
                <div className="titleTableListTrans">
                    <h5>Incoming Transaction</h5>
                </div>
                <table>     
                    <tr className="rowHead" >
                        <th>No</th>
                        <th>User</th>
                        <th>Bukti Transfer</th>
                        <th>Remaining Active</th>
                        <th>Status User</th>
                        <th>Status Payment</th>
                        <th>Action</th>
                    </tr>

                    <tr className="rowBody1" >
                        <td>1</td>
                        <td>User satu</td>
                        <td>BCA.JPG</td>
                        <td>26/Hari</td>
                        <td>Active</td>
                        <td>Aprove</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                    <div className="triangle"></div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item style={{color:"#0ACF83",fontWeight:"bold"}} href="#/action-1">Approved</Dropdown.Item>
                                    <Dropdown.Item style={{color:"red",fontWeight:"bold"}} href="#/action-2">Cancel</Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>
                        </td>
                    </tr>

                    <tr className="rowBody2" >
                        <td>2</td>
                        <td>User dua</td>
                        <td>BCA.JPG</td>
                        <td>26/Hari</td>
                        <td>Active</td>
                        <td>Aprove</td>
                        <td>
                        <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                <div className="triangle"></div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item style={{color:"#0ACF83",fontWeight:"bold"}} href="#/action-1">Approved</Dropdown.Item>
                                    <Dropdown.Item style={{color:"red",fontWeight:"bold"}} href="#/action-2">Cancel</Dropdown.Item>
                                </Dropdown.Menu>
                        </Dropdown>
                        </td>
                    </tr>

                    <tr className="rowBody1" >
                        <td>3</td>
                        <td>User tiga</td>
                        <td>BCA.JPG</td>
                        <td>26/Hari</td>
                        <td>Active</td>
                        <td>Aprove</td>
                        <td>
                        <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                <div className="triangle"></div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item style={{color:"#0ACF83",fontWeight:"bold"}} href="#/action-1">Approved</Dropdown.Item>
                                    <Dropdown.Item style={{color:"red",fontWeight:"bold"}} href="#/action-2">Cancel</Dropdown.Item>
                                </Dropdown.Menu>
                        </Dropdown>
                        </td>
                    </tr>

                    <tr className="rowBody2" >
                        <td>4</td>
                        <td>User empat</td>
                        <td>BCA.JPG</td>
                        <td>26/Hari</td>
                        <td>Active</td>
                        <td>Aprove</td>
                        <td>
                        <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                <div className="triangle"></div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item style={{color:"#0ACF83",fontWeight:"bold"}} href="#/action-1">Approved</Dropdown.Item>
                                    <Dropdown.Item style={{color:"red",fontWeight:"bold"}} href="#/action-2">Cancel</Dropdown.Item>
                                </Dropdown.Menu>
                        </Dropdown>
                        </td>
                    </tr>

                    <tr className="rowBody1" >
                        <td>5</td>
                        <td>User lima</td>
                        <td>BCA.JPG</td>
                        <td>26/Hari</td>
                        <td>Active</td>
                        <td>Aprove</td>
                        <td>
                        <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                <div className="triangle"></div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item style={{color:"#0ACF83",fontWeight:"bold"}} href="#/action-1">Approved</Dropdown.Item>
                                    <Dropdown.Item style={{color:"red",fontWeight:"bold"}} href="#/action-2">Cancel</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>

                    <tr className="rowBody2" >
                        <td>6</td>
                        <td>User enam</td>
                        <td>BCA.JPG</td>
                        <td>26/Hari</td>
                        <td>Active</td>
                        <td>Aprove</td>
                        <td>
                        <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                <div className="triangle"></div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item style={{color:"#0ACF83",fontWeight:"bold"}} href="#/action-1">Approved</Dropdown.Item>
                                    <Dropdown.Item style={{color:"red",fontWeight:"bold"}} href="#/action-2">Cancel</Dropdown.Item>
                                </Dropdown.Menu>
                        </Dropdown>
                        </td>
                    </tr>
                </table>
            
            </div>
        </div>
    )
}

export default ListTrans