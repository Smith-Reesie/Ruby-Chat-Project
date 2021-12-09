import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


function MessageContainer({currentConvo,currentUser}) {
    const [messages, setMessages] = useState([])
    const [newMsg, setNewMsg] = useState({message: '',user_id:'',conversation_id:''})
    // const [change, setChange] = useState("")
     
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
    .then((x) => {
        setMessages([...messages,x])
        setNewMsg({message: '',user_id:'',conversation_id:''})    
    })
    }

    function handleDelete(e){
     let deleteMsg = e.target.id 
        fetch(`http://localhost:9293/messages/${deleteMsg}`, {
        method: "DELETE",
        })
        .then((r) => r.json())
        .then((deletedMsg) => setMessages(messages.filter(m => m.id !== deletedMsg.id)))
    }
  
    useEffect(() => {
        fetch(`http://localhost:9293/conversations/${currentConvo.id}/messages`)
        .then(res => res.json())
        .then(msg => {
            setMessages(msg)
        })
    },[currentConvo.id])

    return (
        <Container>
            <MsgHeader>{currentConvo.topic}</MsgHeader>
            <MsgBody>{messages.map((message) =>{
             return <Msg>
                 <Avatardiv>
                        <img src='https://w7.pngwing.com/pngs/247/564/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue.png'></img>
                 </Avatardiv>    
                 <p><span>User:</span> <br/> {message.message}</p>
                 <p >{message.message}</p>
                 <button value={message.user_id} id ={message.id} onClick ={handleDelete}>x</button>
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
<<<<<<< Updated upstream
    display: none;
} */
`
const MsgHeader = styled.div`
border: 1px solid black;
`

const Avatardiv = styled.div`
border-radius: 50px;
border: 1px dotted indigo;
width: 5%;
height: 5%;
text-align: center;
justify-content: center;
align-items: center;
margin: 1px ;
content: inherit;

img{
    height: 50%;
    width: 50%;
}
`


const MsgBody = styled.div`
background:linear-gradient(166deg, rgba(253,77,42,0.665703781512605) 19%, rgba(252,178,67,0.4920343137254902) 79%);
overflow: scroll;
max-width: 500px;
min-width: 400px;
min-height: 200px;
height: 500px;
top: 10%;
padding: 0 10px;
border: 1px solid violet;
border-radius: 10px;
`;

const Msg = styled.div`
border: 2px solid #dedede;
background-color: #f1f1f1;
border-radius: 2px;
padding: 10px;
margin: 10px 0;
box-shadow: 5px 8px 4px -2px #000000;

span{
    font-size: 20px;
}
`;

const MsgInput = styled.input`
width: 90%;
max-width: 400px;
min-width: 250px;
height: 40px;
border: none;
margin: 0.5rem 0;
box-shadow: 0px 14px 9px -15px rgba(0, 0 ,0 , 0.55);
border-radius: 10px;
padding: 0 1rem;
transition: all 0.2s ease-in;
`

const MsgForm = styled.form`
display: flex;
align-items: center;

button{
    border-radius: 10px;
    height: 40px;
}
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
