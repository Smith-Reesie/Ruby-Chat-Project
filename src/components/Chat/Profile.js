import React, {useState} from 'react'
import styled from 'styled-components'
import ChatCards from './ChatCards'
import UserCard from './UserCard'

function Profile({currentUser, setCurrentUser, convos, setConvos, setCurrentConvo}) {

    const [newTopic, setNewTopic] = useState({topic: ''})

    function handleTopicChange(e){
        setNewTopic({[e.target.name]: e.target.value})
    }

function handleSubmit(e){
    e.preventDefault()
    fetch('http://localhost:9293/conversations', {
    method: "POST",
    headers: {
    "content-type" : "application/json"
    },
    body: JSON.stringify(newTopic)
})
.then(r=>r.json())
.then((x) => setConvos([...convos, x]))
}

    return (
        <Container>
            
            <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input name='topic' onChange={handleTopicChange} value={newTopic.topic} ></input>
                    <button >Start new Chat</button>
                </form>
            </div>
                {convos.map((convo) =>{ 
                return <ChatCards 
                key={convo.id}
                convo={convo}
                setCurrentConvo={setCurrentConvo}/>

                })}
            </div> 
            
            <div>
            <button>Profile</button>
            <button>Chats</button>
            </div>
            <div>
                <UserCard/>
            </div>
    
        </Container>

    )
}




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
border: 1px solid black;

@media (max-width: 600px) {
    width: 100vw;
    position: absolute;
    padding: 0;
}
`
export default Profile





// ternary once button is created 

// {userData.conversations !== [] ? 
//     <div>
//         {allConvos.map((convo) =>{ 
//         return <MessageCards 
//         key={convo.id}
//         convo={convo}/>
//         })}
//     </div> 
//     : <>
//     <div>
//     <button>Profile</button>
//     <button>Chats</button>
//     </div>
//     <div>
//         <UserCard/>
//     </div>
//     </>}