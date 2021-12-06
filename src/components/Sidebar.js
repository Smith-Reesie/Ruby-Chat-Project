import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import Input from './Input'

function Sidebar() {
    return (
        <Container>
            <LogoWrapper>
                <img src={logo} alt='temp'/>
                <h3>
                    App <span>Name</span>
                    </h3>
            </LogoWrapper>
            <Form>
            <h3>Sign Up</h3>
            <Input placeholder='Full Name'/>
            <Input type='email' placeholder='Email'/>
            <Input type='text' placeholder='User Name'/>
            <button>Sign Up</button>
            </Form>
            <div>
        <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>
        <h4>
          Already have an account? <span>Sign In</span>
        </h4>
      </div>
        </Container>
    )
}

const Terms = styled.p`
 padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`

const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;


h3{
color: #666666;
margin-bottom: 2rem;
}

button{
width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.55);
    border-radius: 8px;
    background-color: #70edb9;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
    transform: translateY(-3px);
    }
}
`

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

h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;
    span {
        color: #ff8d8d;
        cursor: pointer;
    }
 }
`;

const LogoWrapper = styled.div`
img{
    height: 6rem;  
}

h3{
    text-align: center;
    color: #ff8d8d;
    font-size: 22px;
}
span{
    color: #5dc395;
    font-weight: 300;
    font-size: 18px;
}
`;

export default Sidebar
