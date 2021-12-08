import React, {useState} from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import Input from './Input'


function Sidebar({onSubmit}) {

    const [user, setUser] = useState({
        username:'',
        full_name: '',
        email: ''
    })

    function handleChange(e){
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(user)
    }

    return (
        <Container>
            <LogoWrapper>
                <img src={logo} alt='temp'/>
                <h3>
                    App <span>Name</span>
                    </h3>
            </LogoWrapper>
            <InputContainer>
            <Form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <StyledInput onChange={handleChange} placeholder='User Name' value={formState.username} type='text' name='username'/>
            <StyledInput onChange={handleChange}  placeholder='Full Name' value={formState.full_name} name='full_name'/>
            <StyledInput onChange={handleChange}  placeholder='Email' value={formState.email} type='email' name='email'/>
            <button>Sign Up</button>
            <button>Chat</button>
            </Form>
            </InputContainer>
            
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


//###########################  Components styling

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

//##################### Input styling 

const InputContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const StyledInput = styled.input`
width: 80%;
max-width: 350px;
min-width: 250px;
height: 40px;
border: none;
margin: 0.5rem 0;
background-color: #f5f5f5;
box-shadow: 0px 14px 9px -15px rgba(0, 0 ,0 , 0.55);
border-radius: 10px;
padding: 0 1rem;
transition: all 0.2s ease-in;

&:hover{
    transform: translateY(-3px);
}
`;

const Status = styled.div`
height:  10px;
width: 10px;
background: #9d9d9d;
border-radius: 10px;
margin-left: 1rem;

${StyledInput}:focus + & {
    background: #ffa689;
}

${StyledInput}:invalid + & {
    background: #fe2f75;
}

${StyledInput}:valid + & {
    background: #70edb9;
}`

export default Sidebar
