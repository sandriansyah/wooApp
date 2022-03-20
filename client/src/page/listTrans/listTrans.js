import "./listTrans.css"
import Navbar from "../../component/navbar/navbar"
import{Dropdown} from "react-bootstrap"

import {API} from "../../config/api"
import { useState,useEffect } from "react"
import { Navigate } from "react-router-dom"

function ListTrans(){

    const [transaction,setTransaction] =useState([])
    const [detailTrans,setDetailTrans] = useState({
        userStatus:"active",
        remainingActive:30,
        paymentStatus:"approve",
    }) 

    // const [idTrans,setIdTrans] = useState(null)
    // console.log(idTrans);

    const getTransaction = async()=>{
        try {
            const response = await API.get("/transaction")       
            setTransaction(response.data.data.transaction)
        
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getTransaction()
    },[])


    const approveTrans = async(id,idUser)=>{
        try {
            

            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const response = await API.patch(`/transaction/${id}`,detailTrans,config) 
            // const response = await API.patch(`/transaction/${id}`,detailTrans,config) 
            console.log(response);
            Navigate("/listtrans")

        } catch (error) {
            console.log(error);
        }
    }

    // useEffect(()=>{ 
    //     approveTrans()
    // },[transaction])

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
                        <th>number Account</th>
                        <th>Bukti Transfer</th>
                        <th>Remaining Active</th>
                        <th>Status User</th>
                        <th>Status Payment</th>
                        <th>Action</th>
                    </tr>

                
                {transaction.map((item,index)=>{
                    let number = index + 1
                    return(
                    <tr className="rowBody1" key = {item.id} >
                        <td>{number}</td>
                        <td>{item.user.fullName}</td>
                        <td>{item.numberAccount}</td>
                        <td>{item.transferProof}</td>
                        <td>{item.remainingActive}/Hari</td>
                        <td> 
                            {item.userStatus ? 
                            <p className="my-0 text-success fw-bold" >Active</p>: 
                            <p className="my-0 text-danger fw-bold">No-Active</p>}
                        </td>
                        <td>
                            {item.paymentStatus =="approve"?
                            <p className="my-0 text-success fw-bold" >Approve</p>:
                            <p className="my-0 text-warning fw-bold" >Pending ..</p> }
                        </td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className="shadow-none">
                                    <div className="triangle"></div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={()=>{ approveTrans(item.id,item.idUser)}} style={{color:"#0ACF83",fontWeight:"bold"}} >Approved</Dropdown.Item>
                                    <Dropdown.Item style={{color:"red",fontWeight:"bold"}}>Cancel</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    )
                    
                })}

                    

                </table>
            
            </div>
        </div>
    )
}

export default ListTrans