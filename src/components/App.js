import React, {useState} from 'react'
// import styled from 'styled-components'
import Home from './SignUpPage/Home';
import {Route, Switch, NavLink} from 'react-router-dom'
import ChatContanier from './Chat/ChatContanier';
<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>

// import Main from './SignUpPage/Main';
// import Sidebar from './SignUpPage/Sidebar';

function App() {

const [user, setUser] = useState({ 
  userName: '',
  fullName: '',
  email: ''

})

function handleSubmit(e, newUser){
  e.preventDefault();
  fetch('http://localhost:9292/users', {
    method: "POST",
    headers: {
      "content-type" : "application/json"
    },
    body: JSON.stringify(newUser)
  })
  .then(r=>r.json)
  .then((x) => setUser([...user, x]))
}


  return (
      <> 
      <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/Chat'>
    <ChatContanier/>
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
