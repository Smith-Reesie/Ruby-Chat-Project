import React, {useState} from 'react'
import MessageContainer from './MessageContainer'
import Profile from './Profile'
import styled from 'styled-components'

function ChatContanier({currentUser}) {

    const [userData, setUserData] = useState(null)

setInterval(() => {
    fetch(`http://localhost:9293/users/${currentUser.id}`)
    .then(res => res.json())
    .then(user => setUserData(user))
}, 60000);
console.log(userData)

    return (
        <Container>
            <Wrapper>
            <Profile setUserData={setUserData} userData={userData} currentUser={currentUser}/>
            <MessageContainer setUserData={setUserData} userData={userData} currentUser={currentUser}/>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
background-color: whitesmoke;
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
`;

const Wrapper = styled.div`
background-position: center;
background-size: cover;
background-repeat:no-repeat ;
width: 100%;
height: 100%;
display: flex;
`;


export default ChatContanier
