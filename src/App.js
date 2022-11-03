import logo from './logo.svg';
import './App.css';
import  nombres from "./contacts.json"
import { useState } from 'react';


function App() {
  const [contacts, setContacts] = useState (nombres.slice(0,5))
const añadir = () => {
  const aleatorio = Math.floor(Math.random()* nombres.length)
const contactoAleatorio = nombres[aleatorio]
const copiaLista = [...contacts]
copiaLista.push(contactoAleatorio)
setContacts(copiaLista)
}
const ordenarNombre = () => {
const copiaLista = contacts.map((elem) => elem)
copiaLista.sort((elem1, elem2) => {
  if (elem1.name > elem2.name){
    return 1
  }else {
    return -1
  }

})
setContacts(copiaLista)
}

const ordenarPopularidad = () => {
  const copiaLista = contacts.map((elem) => elem)
  copiaLista.sort((elem1, elem2) => {
    if (elem1.popularity > elem2.popularity){
      return 1
    }else {
      return -1
    }
  
  })
  setContacts(copiaLista)
  }

 
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={añadir}>Add Random Contact</button>
      <button onClick={ordenarPopularidad}>Sort by popularity</button>
      <button onClick={ordenarNombre}>Sort by name</button>
      <table>
        <thead>          
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>wonOscar</th>
          <th>wonEmmy</th>
          <th>Actions</th>
        </tr>
        </thead>
        {contacts.map((eachContacts) => {
          return(
            <tbody>
              <tr>
                <td><img src = {eachContacts.pictureUrl} width= "100px"></img></td>
                <td>{eachContacts.name}</td>
              <td>{(eachContacts.popularity).toFixed(2)}</td>
              <td>{(eachContacts.wonOscar) === true ? "🏆" : null}</td>
              <td>{(eachContacts.wonEmmy) === true ? "🏆" :  null}</td>
              {/* <button onClick={borrar}>Delete</button> */}
              </tr>
            </tbody>
          )
        }) }
      </table>
    </div>
  );
}

export default App;
