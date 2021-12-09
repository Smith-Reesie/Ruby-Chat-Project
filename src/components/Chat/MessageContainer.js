import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


function MessageContainer({currentConvo,currentUser}) {
    const [messages, setMessages] = useState([])

    const [newMsg, setNewMsg] = useState({message: '',user_id:'',conversation_id:''})

    function handleMsgChange(e){
        setNewMsg({[e.target.name]: e.target.value, user_id: `${currentUser.id}`, conversation_id: `${currentConvo.id}`})
    }

function handleSubmit(e){
    e.preventDefault()
    fetch('http://localhost:9293/messages', {
    method: "POST",
    headers: {
    "content-type" : "application/json"
    },
    body: JSON.stringify(newMsg)
})
.then(r=>r.json())
.then((x) => setMessages([...messages,x]))
}
    useEffect(() => {
        fetch(`http://localhost:9293/conversations/${currentConvo.id}/messages`)
        .then(res => res.json())
        .then(msg => setMessages(msg))
    },[currentConvo.id])
        
    return (
        <Container>
            <div>{currentConvo.topic}</div>
            <MsgBody>{messages.map((message) =>{
             return <Msg>
                 <p>{message.message}</p>
             </Msg>
         }) }
            
            </MsgBody>
            <div>
            <MsgForm onSubmit={handleSubmit}>
            <MsgInput type='text' name="message" value={newMsg.message} onChange={handleMsgChange} placeholder='Type message here...'></MsgInput>
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
export default MessageContainer
