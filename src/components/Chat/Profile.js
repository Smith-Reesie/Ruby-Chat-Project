import React from 'react'
import styled from 'styled-components'
import MessageCards from './MessageCards'

function Profile() {
    return (
        <Container>
            <div>
            <button>Profile</button>
            <button>Chats</button>
            </div>
            <div>
                <MessageCards/>
            </div>
        </Container>
    )
}

const Container = styled.div`
min-width: 300px;
backdrop-filter: blur(35px);
background-color: rgb(255, 255, 255, 0.6);
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
padding: 0 1rem;

@media (max-width: 600px) {
    width: 100vw;
    position: absolute;
    padding: 0;
}
`
export default Profile
