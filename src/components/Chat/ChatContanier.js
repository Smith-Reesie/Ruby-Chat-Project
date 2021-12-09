import React, {useState, useEffect} from 'react'
import MessageContainer from './MessageContainer'
import Profile from './Profile'
import styled from 'styled-components'

function ChatContanier({currentUser, setUpdate, update}) {

    const [userData, setUserData] = useState([])
    const [allConvos, setAllConvos] = useState([])
    const [currentConvo, setCurrentConvo] = useState({id : 0,topic:""})
    
useEffect(()=> {
    fetch(`http://localhost:9293/conversations`)
    .then(res => res.json())
    .then(data => setAllConvos(data))

    fetch(`http://localhost:9293/users/${currentUser.id}`)
    .then(res => res.json())
    .then(user => setUserData(user))
}, [currentUser.id])

console.log(currentConvo)

    return (
        <Container>
            <Wrapper>
            <Profile 
            setUserData={setUserData} 
            userData={userData} 
            currentUser={currentUser}
            convos={allConvos}
            setConvos={setAllConvos}
            setCurrentConvo={setCurrentConvo}
            currentConvo={currentConvo}
            />
            <MessageContainer 
            setUserData={setUserData} 
            userData={userData} 
            currentUser={currentUser}
            currentConvo={currentConvo}
            update={update}
            setUpdate={setUpdate}
            
            />
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
