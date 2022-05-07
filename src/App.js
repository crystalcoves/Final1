import Topbar from "./Components/topbar/Topbar";
import Sidebar from "./Components/Sidebar/sidebar";
import "./App.css";
import ProgramList from "./Components/Pages/programList/programList.jsx";
import NewProgram from'./Components/Pages/NewProgram/NewProgram'
import ViewProgram from'./Components/Pages/ViewProgram/ViewProgram'
import UserList from './Components/Pages/userList/userList.jsx';
import Update from './Components/Pages/Update/Update'
import React from "react";
import Web3 from 'web3';
import { BrowserRouter, Switch, Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Topbar />
 <div className="appContainer">
     <Sidebar />
     <Switch>
         <Route exact path ="/">
     <ProgramList />
         </Route>
         <Route path ="/incentiveprograms">
             <ProgramList />
         </Route>
         <Route exact path ="/incentiveprogram/:programId">
             <ViewProgram />
         </Route>
         <Route exact path ="/newProgram" >
             <NewProgram/>
         </Route>
         <Route exact path ="/employeeprograms" >
             <UserList/>
         </Route>
         <Route exact path ="/updateincentiveprogram/:userId" >
             <Update/>
         </Route>
     </Switch>
 </div>
    </BrowserRouter>
  );
}

export default App;
