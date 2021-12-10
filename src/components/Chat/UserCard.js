import React from 'react'
import styled from 'styled-components'


function UserCard({userData}) {



    return (
        <Container> 
            <img src="/a.png" className="avatar"/>
            <h1> {userData.username}</h1>
            <p> {userData.email}</p>
            <button>x</button>
        </Container>
    )
}



const Container = styled.div`
border: 1px solid blue;
height: fit-content;
width: fit-content;
margin-top: 10px;
margin-right: 40px;
position:absolute;
text-align:center;
color: orange;


h1 {
font-size: bigger;

}
.avatar{
width:100px;
padding:60px;
height:100px;
margin-bottom: 20px;

}
`

export default UserCard
