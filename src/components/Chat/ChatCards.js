import React from 'react'
import styled from 'styled-components'

function ChatCards({convo, setCurrentConvo}) {

    const {id, topic} = convo
console.log(convo)

function handleMessageRender(){
    setCurrentConvo(convo.id.toString())

}

    return (

        <Container>
            <h2 onClick={handleMessageRender}>{topic}</h2>
            {/* <h6>last message</h6> */}
        </Container>
    
    )
}

const Container = styled.div`
border: 1px solid blue;
height: fit-content;
width: fit-content;
`

export default ChatCards
