import "./addBook.css"
import Navbarr from "../../component/navbar/navbar"
import {Form} from "react-bootstrap"
import IconFile from "../../media/Vector2.png"
import IconAddBook from "../../media/AddBook.png"

function AddBook(){
    return(
        <div className="addBook">
            <nav>
                <Navbarr/>
            </nav>
            <div className="formAddBook">
                <h1>Add Book</h1>
                <Form fluid="md">
                    <Form.Group size="lg" className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control className="bgInput" type="text" placeholder="Title" />
                    </Form.Group>

                    <Form.Group size="lg" className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control className="bgInput" type="text" placeholder="Publication Date" />
                    </Form.Group>

                    <Form.Group size="lg" className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control className="bgInput" type="text" placeholder="Pages" />
                    </Form.Group>

                    <Form.Group size="lg" className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control className="bgInput" type="text" placeholder="Author" />
                    </Form.Group>

                    <Form.Group size="lg" className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control className="bgInput" type="text" placeholder="ISBN" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control className="bgInput" as="textarea" rows={3} placeholder="About This Book" />
                    </Form.Group>

                    <label>
                        Attache Book File
                        <input type="file" />
                        <img src={IconFile} alt="" />
                    </label>

                    <div className="btnFormAddBook">
                        <button>Add Book <img src={IconAddBook} alt="" /></button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default AddBook