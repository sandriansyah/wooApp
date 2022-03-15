import "bootstrap/dist/css/bootstrap.min.css"
import LandingPage from "./page/landingPage/landingPage";
import AfterLogin from "./page/afterlogin/afterlogin";
import Subscribe from "./page/subscribe/subsscribe";
import DetailBook from "./page/DetailBook/detailBook";
import ReadBook from "./page/readBook/readBook";
import AddBook from "./page/addBook/addBook";
import ListTrans from "./page/listTrans/listTrans";
import ProfileActiveSubscribe from "./page/profileActiveSubscribe/profileActiveSubscribe";
import PrivateSubs from "./page/privateRootPage/privetSubs";

import {BrowserRouter as Router,Routes,Route } from "react-router-dom"

function App() {
  return (
      <Router>

        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/home" element={<AfterLogin/>} />        
          <Route exact path="/subscribe" element={<Subscribe/>} />
          <Route exact path="/detailbook" element={<DetailBook/>} />
          <Route exact path="/readbook" element={<ReadBook/>} />
          <Route exact path="/addbook" element={<AddBook/>} />
          <Route exact path="/listtrans" element={<ListTrans/>} /> 
                  
          <Route exact path="/" element={<PrivateSubs/>} >
            <Route exact path="/profile" element={<ProfileActiveSubscribe/>} />            
          </Route>

        </Routes>

      </Router>
  );
}
 
export default App;
