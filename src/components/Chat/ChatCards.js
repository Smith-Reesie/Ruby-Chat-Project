import React from 'react'
import styled from 'styled-components'

function ChatCards({convo, setCurrentConvo,setConvos,convos}) {

    function handleClick(e){
    let x= e.target.id
    let y= e.target.innerText
    setCurrentConvo({id: x ,topic: y})
    }

    function handleDelete(e){
             let deleteConvo = e.target.id 
               fetch(`http://localhost:9293/conversations/${deleteConvo}`, {
               method: "DELETE",
               })
               .then((r) => r.json())
               .then((deletedConvo) => setConvos(convos.filter(c => c.id !== deletedConvo.id)))
           }

    return (

        <Container >
            <h2 onClick={handleClick} id={convo.id}>{convo.topic}</h2>
            <button id={convo.id} onClick={handleDelete}>-</button> 
        </Container>
    
    )
    }

const Container = styled.div`
    border: 1px solid #0000ff00;
    height: fit-content;
    flex-wrap: nowrap;
    margin: 5px;
    width: 100px;
    border-radius: 10px;
    text-align: center;
    background: #03a9f400;
    box-shadow: 3px 5px 1px 0px rgb(137 115 115);
    color: #ff6000;
    flex-direction: column;
    font-family: ui-rounded;


h2{
}
`

export default ChatCards
