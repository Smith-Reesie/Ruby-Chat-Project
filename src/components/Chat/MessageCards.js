import React from 'react'

function MessageCards() {

function handleMessageRender(){
console.log('hi')
}



    return (
        <div onClick={handleMessageRender}>
            <h2>Person Name</h2>
            <h6>last message</h6>
        </div>
    )
}

export default MessageCards
