import Encabezado from "./Encabezado";

function App() {
 
  return (
  <div>
  <Encabezado />
  <h1>5A EVND</h1>
  <h2>Profesor:</h2>
  <h3>M.T.I Ricardo Luna Santos</h3>
  <UserComponent/>
  <ProfileComponent/>
  <FeedComponent/>
  </div>
  )
}

function UserComponent(){
  const nombre='Joanna';
  const apellidos='Perez';
  const nombrecompleto= <h2>El nombre es: {nombre} y sus apellidos {apellidos}</h2>;
  return <h2>User Component {nombrecompleto}</h2>;
}
function ProfileComponent(){
   const users= [
    { id: 1, name:'Joanna', role: 'Web Developer'},
    { id: 2, name:'Itzel', role: 'Web Desinger'},
    { id: 3, name:'Vanesa', role: 'Team Leader'},
   ]
  return (
    <>
    <p>Lista de usuarios del sistema</p>
    <ul>
      {
      users.map(function(user, index){
        return (
          <li key={index}>{user.name} es un {user.role}</li>
        )
      })
    }
    </ul>
    </>
  )
}
function FeedComponent(){
  const materiales= [
    { id: 1, name:'Cemento'},
    { id: 2, name:'Arena'},
    { id: 3, name:'Barilla'},
    { id: 4, name:'Ladrillos'},
    { id: 5, name:'Grava'},
   
   ]
  return (
    <>
    <p>Lista de materiales</p>
    <ul>
      {materiales.map(function(material, index){
      return (
        <li key={index}>{material.name} </li>
        )
      })
    }
    </ul>
    </>
  )
}

export default App