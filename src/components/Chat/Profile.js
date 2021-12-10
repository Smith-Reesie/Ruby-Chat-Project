import React, {useState} from 'react'
import styled from 'styled-components'
import ChatCards from './ChatCards'
import UserCard from './UserCard'

function Profile({currentUser,setCurrentUser, convos, setConvos, setCurrentConvo,currentConvo,userData}) {

    const [newTopic, setNewTopic] = useState({topic: ''})
    const [profile, setProfile] = useState(true)

    function handleTopicChange(e){
        setNewTopic({[e.target.name]: e.target.value})
    }

    function handleProfileView(){
        setProfile(!profile )
    }

function handleSubmit(e){
    e.preventDefault()
    {newTopic.topic === "" ? alert("Please enter a topic") : 
    fetch('http://localhost:9293/conversations', {
    method: "POST",
    headers: {
    "content-type" : "application/json"
    },
    body: JSON.stringify(newTopic)
})
.then(r=>r.json())
.then((x) => setConvos([...convos, x]))
}}


    return (
<>
                    <Btndiv>
                    <button onClick={handleProfileView}>👤</button>
                    <button onClick={handleProfileView}>Chats</button>
                    <button>⚙️</button>
                    </Btndiv>
        <Container>
            {profile !== true ?  
            
            <div>
                <form onSubmit={handleSubmit}>
                    <input name='topic' onChange={handleTopicChange} value={newTopic.topic} ></input>
                    <button >Start new Chat</button>
                </form>
                <Topics>    
                    
                {convos.map((convo) =>{ 
                return <ChatCards 
                key={convo.id}
                convo={convo}
                setConvos={setConvos}
                setCurrentConvo={setCurrentConvo}
                convos={convos}
                currentConvo={currentConvo}/> })}
                </Topics>
            </div> 
:
            <div>
                <UserCard userData={userData}/>
            </div>}
    
        </Container>
</>
)}




const Container = styled.div`
    width: 300px;
    backdrop-filter: blur(35px);
    background-color: rgb(255 255 255 / 20%);
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    border-radius: 107px;
    

@media (max-width: 500px) {
    width: 100vw;
    position: absolute;
    padding: 0;
}


form{
    display: flex;
    flex-direction: row-reverse;
    padding: 72px 3px 3px 3px;
}

button{
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


input{
width: 150px;
height: 20px;
border: none;
margin: 0.5rem 1rem;
box-shadow: 0px 14px 9px -15px rgba(0, 0 ,0 , 0.55);
border-radius: 10px;
padding: 0 1rem;
transition: all 0.2s ease-in;
}
`

const Btndiv = styled.div`
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: space-evenly;
    justify-content: start;
    background: #000000;
    padding: 9px 3px 3px 2px;

`

const Topics = styled.div`
margin-top: 2rem;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;



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