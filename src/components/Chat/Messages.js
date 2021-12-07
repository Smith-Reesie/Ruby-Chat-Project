import React from 'react'
import styled from 'styled-components'

function Messages() {
    return (
        <div>
            <Container class="container">

  <p>Hello. How are you today?</p>
  <span class="time-right">11:00</span>
</Container>

<Container class="container darker">

  <p>Hey! I'm fine. Thanks for asking!</p>
  <span class="time-left">11:01</span>
</Container>
        </div>
    )
}

const Container = styled.div`
border: 2px solid #dedede;
background-color: #f1f1f1;
border-radius: 5px;
padding: 10px;
margin: 10px 0;
`

export default Messages
