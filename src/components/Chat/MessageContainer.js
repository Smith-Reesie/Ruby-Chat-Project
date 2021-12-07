import React from 'react'
import MessageDisplay from './MessageDisplay'
import MessageForm from './MessageForm'
import styled from 'styled-components'


function MessageContainer() {
    return (
        <Container>
            <MessageDisplay/>
            <MessageForm/>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid black;



    /* @media (max-width: 900px) {
        display: none;
    } */

`;

export default MessageContainer
