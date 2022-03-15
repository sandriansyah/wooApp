import { useContext } from "react"
import IconSaveList from "../../media/saveList.png"
import "./buttonAddMyList.css"
import {MyListBookContext} from "../../context/myListBookContex"
import {dataBook} from "../../page/fakeData"
import {useNavigate} from "react-router-dom"


function ButtonAddMyList(){
    // console.log(dataBook[0])
    const navigate=useNavigate()

    const[state,dispacth] = useContext(MyListBookContext)

    const data = state.dataListBook

    function handleButton(){
        
        data.push(dataBook[2])  
        
        dispacth({
            type:'MY_LIST_BOOK',
            payload:data
        })
    }

        
            navigate("/profile")
        

    return(
        <div className="buttonAddMyList">
            <button onClick={handleButton} >Add Mylist Book <img src={IconSaveList} alt=""/> </button>
        </div>
    )
}

export default ButtonAddMyList