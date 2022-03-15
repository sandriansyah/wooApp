import "./detailBook.css"
import Profile from "../../component/profile/profile"
import CoverBook from "../../media/Rectangle 2.png"
import IconSaveList from "../../media/saveList.png"
import IconV from "../../media/V.png"
import ButtonAddMyList from "../../component/button/buttonAddMyList"

function DetailBook(){
    return(
        <div className="detailBook">
            <div className="detailBookLeft">
                <Profile/>
            </div>
            <div className="detailBookRight">
                <div className="informationBook">
                    <div className="informationBookCover">
                        <img src={CoverBook} alt="" />
                    </div>
                    <div className="informationBookData">
                        <div className="titleBook">
                            <h1>Tess On The Road</h1>
                            <p>Rachel Hartman</p>
                        </div>
                        <div className="rilisBook">
                            <h6>Publication Date</h6>
                            <p>April 2020</p>
                        </div>
                        <div className="pagesBook">
                            <h6>Pages</h6>
                            <p>436</p>
                        </div>
                        <div className="isbnBook">
                            <h6>ISBN</h6>
                            <p>9781789807554</p>
                        </div>
                    </div>
                </div>
                <div className="aboutBook">
                    <h2>About This Book</h2>
                    <p>In the medieval kingdom of Goredd, women are expected to be ladies, men are their protectors, and dragons get to be whomever they want. Tess, stubbornly, is a troublemaker. You can’t make a scene at your sister’s wedding and break a relative’s nose with one punch (no matter how pompous he is) and not suffer the consequences. As her family plans to send her to a nunnery, Tess yanks on her boots and sets out on a journey across the Southlands, alone and pretending to be a boy.
                    <br />
                    <br />
                    Where Tess is headed is a mystery, even to her. So when she runs into an old friend, it’s a stroke of luck. This friend is a quigutl—a subspecies of dragon—who gives her both a purpose and protection on the road. But Tess is guarding a troubling secret. Her tumultuous past is a heavy burden to carry, and the memories she’s tried to forget threaten to expose her to the world in more ways than one.
                    <br />
                    <br />
                    Returning to the fascinating world she created in the award-winning and New York Times bestselling Seraphina, Rachel Hartman introduces readers to a new character and a new quest, pushing the boundaries of genre once again in this wholly original fantasy.
                    </p>
                </div>
                <div className="btnDetailBook">
                    <ButtonAddMyList/>
                    {/* <button className="btnDetailBook1" >Add My List <img src={IconSaveList} alt="" /></button> */}
                    <button className="btnDetailBook2" >Read Book <img src={IconV} alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default DetailBook