import React from 'react'
import styled from 'styled-components'

function Main() {
    return (
        <Container>
            <h1>Start <br/> Chatting</h1>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;



h1{
    font-size: 65px;
    font-weight: 900;
    color: whitesmoke;
    

    @media (max-width: 900px) {
        display: none;
    }
}
`;
export default Main
