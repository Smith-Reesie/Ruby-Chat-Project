import React, {useState, useEffect} from 'react'
import MessageContainer from './MessageContainer'
import Profile from './Profile'
import styled from 'styled-components'

function ChatContanier({currentUser, setUpdate, update}) {

    const [userData, setUserData] = useState([])
    const [allConvos, setAllConvos] = useState([])
    


useEffect(()=> {
    fetch(`http://localhost:9293/conversations`)
    .then(res => res.json())
    .then(data => console.log(data))

    fetch(`http://localhost:9293/users/${currentUser.id}`)
    .then(res => res.json())
    .then(user => setUserData(user))
}, [currentUser.id, update])



    return (
        <Container>
            <Wrapper>
            <Profile 
            setUserData={setUserData} 
            userData={userData} 
            currentUser={currentUser}
            convos={allConvos}/>
            <MessageContainer 
            setUserData={setUserData} 
            userData={userData} 
            currentUser={currentUser}/>
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
