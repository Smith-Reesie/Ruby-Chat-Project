import React from 'react'
import Main from './Main'
import Sidebar from './Sidebar'
import styled from 'styled-components'
import bg from '../../assets/bg.png'
import NavBar from './NavBar'


function Home({onSubmit}) {
    return (
    <Container>
        <Wrapper>
        <NavBar/>
                <Sidebar onSubmit={onSubmit}/>
                <Main/>
        </Wrapper>
    </Container>
    )
}


const Container = styled.div`
background-color: black;
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
`;

const Wrapper = styled.div`
background-image: url(${bg});
background-position: center;
background-size: cover;
background-repeat:no-repeat ;
width: 100%;
height: 100%;
display: flex;
`;
export default Home
