import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {SubsContextProvider} from "./context/subsContext"
import {ShowContextProvider} from "./context/showModalContext"
import {ListBookContextProvider} from "./context/myListBookContex"

ReactDOM.render(
  <React.StrictMode>
 
    <ListBookContextProvider>
      <SubsContextProvider>
        <ShowContextProvider>
          <App />
        </ShowContextProvider>
      </SubsContextProvider>
    </ListBookContextProvider>

    
    

  </React.StrictMode>,
  document.getElementById('root')
);


