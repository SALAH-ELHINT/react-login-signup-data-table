import DataTable from 'react-data-table-component';
import styled from 'styled-components';

const Div1Style=styled.div`
    margin-top: 50px;
    width: 900px;
    text-align: center;
`

function MyComponent( {Data, user} ) {
    const columns = [
        {
            name: 'Username',
            selector: 'username',
            sortable: true,
        },
        {
            name: 'Password',
            selector: 'password',
            sortable: true,
        },
        {
            name: 'Date de naissance',
            selector: 'dateDeNaissance',
            sortable: true,
        },
        {
            name: 'Ville',
            selector: 'ville',
            sortable: true,
        },
        {
            name: 'Genre',
            selector: 'genre',
            sortable: true,
        },
        {
            name: 'Loisirs',
            selector: 'loisirs',
            sortable: true,
        },
        {
            name: 'Photo',
            selector: 'Photo',
            sortable: true,
        },
    ];

    return (
      <>
        <Div1Style className='container'>
          <h1>Accueil</h1><br></br>
          <h3>Bonjour {user}</h3><br></br>
          <DataTable
              columns={columns}
              data={Data}
          />
        </Div1Style>

      </>
     
    )
}

export default MyComponent;
