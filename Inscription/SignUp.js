import React,{useState} from 'react'
import styled from 'styled-components'

const Div1Style=styled.div`
    width: 400px;
    margin: 100px 790px;
    
`
const CnxStyle=styled.h1`
    text-align: center;
    margin-left: -50px;
`

const ButtonStyle=styled.button`
    text-align: center;
    margin: 0px 140px;
`
 
function SignUp( { Data,setData } ) {
    const [messg,setMessg]=useState()
    const [identifiant,setIdentifiant]=useState()
    const [motDePasse,setMotDePasse]=useState()
    const [dateDeNaissance,setDateDeNaissance]=useState()
    const [ville,setVille]=useState()
    const [genre,setGenre]=useState()
    const [loisirs,setLoisirs]=useState()
    const [photo,setPhoto]=useState()

    const FunSubmit=(event)=>{
        event.preventDefault();
        setData([...Data,{username:identifiant,password:motDePasse,dateDeNaissance:dateDeNaissance,ville:ville,genre:genre,loisirs:loisirs,Photo:photo}])
        setMessg(`Je suis ${identifiant} né le ${dateDeNaissance} à ${ville} et mes loisirs sont : ${loisirs}`)
    }
  return (
    <>
        <Div1Style className='container'>
            <CnxStyle>Inscription</CnxStyle><br/>
                <form method='' action='' onSubmit={ (event)=>{FunSubmit(event)} }>
                    L'identifiant <input onChange={ (event)=>{setIdentifiant(event.target.value)} }/> <br/><br/>
                    Mot de passe <input type='password' onChange={ (event)=>{setMotDePasse(event.target.value)} }/> <br/><br/>
                    Date de naissance <input type='date' onChange={ (event)=>{setDateDeNaissance(event.target.value)} } /> <br/><br/>
                    Ville <select onChange={ (event)=>{setVille(event.target.value)} }><option>casablanca</option><option>rabat</option></select> <br/><br/>
                    Genre &nbsp;&nbsp;<input type='radio' id='Home' name='Genre' onChange={ (event)=>{setGenre(event.target.id)} }/> Home &nbsp; <input type='radio' id='Femme' name='Genre' onChange={ (event)=>{setGenre(event.target.id)} }/> Femme <br/><br/>
                    Loisirs &nbsp;&nbsp;<input type='checkbox' id='Sport' name='Loisirs' onChange={ (event)=>{setLoisirs(event.target.id)} }/> Sport &nbsp; <input type='checkbox' id='Lecture' name='Loisirs' onChange={ (event)=>{setLoisirs(event.target.id)} }/> Lecture &nbsp; <input type='checkbox' id='Musique' name='Loisirs' onChange={ (event)=>{setLoisirs(event.target.id)} }/> Musique <br/><br/>
                    Photo <input type='file' onChange={ (event)=>{setPhoto(event.target.value)} } /> <br/><br/>
                    <ButtonStyle className='btn btn-success' type='submit'>S'inscrire</ButtonStyle>
                </form> 
                {messg && <p><br/>{messg}</p>}
        </Div1Style>
    </>
  )
}

export default SignUp