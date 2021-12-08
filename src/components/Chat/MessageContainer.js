import React, {useState} from 'react'
import styled from 'styled-components'


function MessageContainer() {

// const [currentMessage, setCurrentMessage] = useState('')

// function sendMessage(){
//     if (currentMessage !== '') {
//         const messageDate = {
//             conversation_id: conversation,
//             user_id: username,
//             message: currentMessage,
//             timestamps: new Date(Date.now()).getTime() + ':' + new Date(Date.now()).getMinutes()
//         }
//     }

// }

    return (
        <Container>
            <div>header</div>
            <MsgBody>Body
            <Msg class="container">
                <p>Hello. How are you today?</p>
                <span class="time-right">11:00</span>
            </Msg>
            <Msg class="container darker">
                <p>Hey! I'm fine. Thanks for asking!</p>
                <span class="time-left">11:01</span>
            </Msg>
            </MsgBody>
            <div>
            <MsgForm>
            <MsgInput type='text' placeholder='Type message here...'></MsgInput>
            <button>send⌲</button>
            </MsgForm>
            </div>
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

const MsgBody = styled.div`
  margin: 0 auto;
  max-width: 800px;
  height: 400px;
  top: 10%;
  padding: 0 20px;
  border: 1px solid violet;
`;

const Msg = styled.div`
border: 2px solid #dedede;
background-color: #f1f1f1;
border-radius: 5px;
padding: 10px;
margin: 10px 0;
`;

const MsgInput = styled.input`
width: 80%;
max-width: 350px;
min-width: 250px;
height: 40px;
border: none;
margin: 0.5rem 0;
background-color: gray;
box-shadow: 0px 14px 9px -15px rgba(0, 0 ,0 , 0.55);
border-radius: 10px;
padding: 0 1rem;
transition: all 0.2s ease-in;
`

const MsgForm = styled.form`
display: flex;
align-items: center;
`

export default MessageContainer
