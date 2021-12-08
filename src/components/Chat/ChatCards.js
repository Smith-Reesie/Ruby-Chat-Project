import React from 'react'
import styled from 'styled-components'

function ChatCards() {

function handleMessageRender(){
console.log('hi')
}

    return (
        <Container onClick={handleMessageRender}>
            <h2>Person Name</h2>
            <h6>last message</h6>
        </Container>
    )
}

const Container = styled.div`
border: 1px solid blue;
height: fit-content;
width: fit-content;
`

export default ChatCards
