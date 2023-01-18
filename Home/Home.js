import { useState } from 'react';
import SignUp from '../Inscription/SignUp'
import Login from '../Connexion/Login'
import Accueil from '../Accueil/Accueil';
import styled from 'styled-components'

const Div1Style=styled.div`
    margin-top: 50px;
    width: 400px;
    text-align: center;
`
const H1Style=styled.h1`
    
`
const LoginStyle=styled.button`
    margin: 0px 10px;
`
const SignUpStyle=styled.button`
    margin: 0px 10px;
`

function Home() {
    const [component, setComponent] = useState("");
    const [user, SetUser] = useState("");
    const [Data, setData] = useState([
        { 
            username: "user1", 
            password: "pass1",
            dateDeNaissance: "2000-01-01",
            ville: "casablanca",
            genre: "Homme",
            loisirs: "Sport",
            Photo :'user1.jpg'
        },
        { 
            username: "user2", 
            password: "pass2",
            dateDeNaissance: "2003-03-16",
            ville: "rabat",
            genre: "Femme",
            loisirs: "Lecture",
            Photo :'user2.jpg'
        },
    ]);
    return (
    <>
        <Div1Style className='container'>
            <H1Style className='container'>Home</H1Style>
                <LoginStyle className='btn btn-primary' type='submit' onClick={ ()=>{setComponent('Login')} }>Login</LoginStyle>
                <SignUpStyle className='btn btn-success' type='submit' onClick={ ()=>{setComponent('SignUp');}}>SignUp</SignUpStyle>
        </Div1Style>
        { component === "Login" ? <Login Data={Data} SetUser={SetUser} setComponent={setComponent}/> : component === "SignUp" && <SignUp Data={Data} setData={setData}/> }
        { component === "Accueil" && <Accueil Data={Data} user={user}/>}
    </>
  )
}

export default Home