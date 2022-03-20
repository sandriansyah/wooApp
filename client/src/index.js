import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {SubsContextProvider} from "./context/subsContext"
import {ShowContextProvider} from "./context/showModalContext"
import {ListBookContextProvider} from "./context/myListBookContex"
import {UserContextProvider} from "./context/userContex"

ReactDOM.render(
  <React.StrictMode>
 
  <UserContextProvider>
    <ListBookContextProvider>
      <SubsContextProvider>
        <ShowContextProvider>
          <App />
        </ShowContextProvider>
      </SubsContextProvider>
    </ListBookContextProvider>
  </UserContextProvider>
    
    

  </React.StrictMode>,
  document.getElementById('root')
);


