import React, {useState, useEffect} from 'react'
// import styled from 'styled-components'
import Home from './SignUpPage/Home';
import {Route, Switch, Link, useHistory} from 'react-router-dom'
import ChatContanier from './Chat/ChatContanier';


{/* <script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script> */}

// import Main from './SignUpPage/Main';
// import Sidebar from './SignUpPage/Sidebar';

function App() {

  const[update, setUpdate] = useState(" ")
  const [currentUser, setCurrentUser] = useState({id : ''})


  let history = useHistory();

  function handleRoute(){
      history.push('/chat')
  }
  
  function handleSubmit(newUser){
    fetch('http://localhost:9293/users', {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(newUser)
    })
    .then(r=>r.json())
    .then((x) => setCurrentUser({id : x.id}))
    .then(handleRoute)
  }

  return (
      <> 
      <Switch>
      <Route exact path='/'>
        <Home onSubmit={handleSubmit}/>
      </Route>
      <Route exact path='/chat'>
    <ChatContanier update={update} setUpdate={setUpdate} currentUser={currentUser}/>
      </Route>
      </Switch>
    </>


  )
}


//#################### Component Styling 


// const Containter = styled.div`
// background-color: black;
// position: absolute;
// top: 0;
// left: 0;
// bottom: 0;
// right: 0;
// `;

// const Wrapper = styled.div`
// background-image: url(${bg});
// background-position: center;
// background-size: cover;
// background-repeat:no-repeat ;
// width: 100%;
// height: 100%;
// display: flex;
// `;

export default App
