import React from 'react'
import styled from 'styled-components'

function ChatCards({convo, setCurrentConvo}) {

    function handleClick(e){
       let x= e.target.id
       let y= e.target.innerText
        setCurrentConvo({id: x ,topic: y})
    }

    return (

        <Container onClick={handleClick}>
            <h2 id={convo.id}>{convo.topic}</h2>
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
