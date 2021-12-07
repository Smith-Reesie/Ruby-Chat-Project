import React from 'react'
import styled from 'styled-components'
import Messages from './Messages'


function MessageDisplay() {
    return (
        <Container>
            <Messages/> 
        </Container>
    )
}

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 0 20px;
  border: 1px solid violet;
`

export default MessageDisplay
