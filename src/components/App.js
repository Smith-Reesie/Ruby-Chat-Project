import React, {useState} from 'react'
// import styled from 'styled-components'
import Home from './SignUpPage/Home';
import {Route, Switch, NavLink} from 'react-router-dom'
import ChatContanier from './Chat/ChatContanier';
<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>

// import Main from './SignUpPage/Main';
// import Sidebar from './SignUpPage/Sidebar';

function App() {

const [currentUser, setCurrentUser] = useState({id : ''})


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
  }



  return (
      <> 
      <Switch>
      <Route exact path='/'>
        <Home onSubmit={handleSubmit}/>
      </Route>
      <Route exact path='/Chat'>
    <ChatContanier currentUser={currentUser}/>
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
