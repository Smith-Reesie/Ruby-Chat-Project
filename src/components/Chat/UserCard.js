import React from 'react'
import styled from 'styled-components'

function UserCard({convo}) {


    
    function handleClick() {
        console.log("hi")
    }
    return (
        <Container >
            {/* <h1 onClick={handleClick}>{convo.topic}</h1>  */}
            <button>x</button>
        </Container>
    )
}



const Container = styled.div`
border: 1px solid blue;
font-size: smaller;
height: fit-content;
width: fit-content;

`

export default UserCard
