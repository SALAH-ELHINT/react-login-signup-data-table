import React from 'react'
import './Login.css'
import { useState } from 'react'
import styled, { css } from 'styled-components'

const Div1Style=styled.div`
        margin-top: 50px;
        width: 400px;
        margin-top:200px;
        text-align: center;
    `
const CnxStyle=styled.h1`
`

const H5Style=styled.h5`
    margin-left:-120px;
    ${props => props.primary && css`
    margin-left:-100px;
    `}

`

const InputStyle=styled.input`
`

const ButtonStyle=styled.button`
    text-align: center;
    margin: 0px 120px;
    width: 118px;

`

const ErrorP=styled.p`
    color:red;
    margin-left:-70px;
`
function Login( { Data, SetUser, setComponent } ) {


    const errors = {
            uname: "Votre identifiant est incorrect.",
            upass: "Votre mot de passe est incorrect."
    };

    const [error,setError] = useState();
    const [identifiant,setIdentifiant] = useState('')
    const [motDePasse,setMotDePasse] = useState('')
    const FunSubmit=(event)=>{
        event.preventDefault();
        // eslint-disable-next-line array-callback-return
        let check = Data.some( item=>{ 
            if (identifiant === item.username && motDePasse === item.password) {
                setError()
                setComponent('Accueil')
                SetUser(identifiant)                
                return true;
            }else if (identifiant === item.username && motDePasse !== item.password) {
                setError(errors.upass)
                return true;
            }
        });
        if(!check){
            setError(errors.uname)
        }

    }

    const FunOnmouse=()=>{
        if (identifiant.length === 0 || motDePasse.length === 0) {
            document.getElementById('connecter').style.cursor = 'not-allowed' ;
            const margin= getComputedStyle(document.getElementById('connecter')).marginLeft;
            if (margin === '-120px'){
                document.getElementById('connecter').style.marginLeft = '250px' ;
            }else{
                document.getElementById('connecter').style.marginLeft = '-120px' ;
            }
        }else{
            document.getElementById('connecter').style.marginLeft = '100px' ;
            document.getElementById('connecter').style.cursor = 'pointer' ;
        }
    }

  return (
    <>
        <Div1Style className='container'>
            <CnxStyle className='container'>Connexion</CnxStyle>
            <form onSubmit={ (event)=>{FunSubmit(event)} } >
                
                <H5Style className='container' >L'identifiant</H5Style>
                <InputStyle className='container' type='text' placeholder='Identifiant' onChange={ (event)=>{setIdentifiant(event.target.value)} }/> <br/>
                { error === errors.uname ? <ErrorP className='container'>{error}</ErrorP> : <br/> } 

                <H5Style className='container' primary>Le mot de passe</H5Style>
                <InputStyle className='container' type='password' placeholder='Mot de passe' onChange={ (event)=>{setMotDePasse(event.target.value)} }/> <br/>
                { error === errors.upass ? <ErrorP className='container'>{error}</ErrorP> : <br/> } 

                <ButtonStyle className='btn btn-success connecter-button'  type='submit' id='connecter' onMouseOver={ ()=>{ FunOnmouse() } }>Se connecter</ButtonStyle>
            </form>
        </Div1Style>
    </>
  )
}

export default Login