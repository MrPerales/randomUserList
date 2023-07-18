import React from 'react'
import './App.css'
import { UserList } from './components/UserList/UserList';

const URL = 'https://randomuser.me/api/?results=25'


function App() {
  const [users, setUsers] = React.useState([]);
  const [color, setColor] = React.useState(false);
  const [sortByCountry, setSortCountry] = React.useState(false);

  const toggleColor = () => {
    setColor(!color);
  }

  const toggleSortCountry = () => {
    setSortCountry(!sortByCountry);
  }
  // nos regresa un [] por lo tanto lo usamos como lista para render 
  const sortedUsers= 
    sortByCountry ?
      [...users].sort((a,b)=>{
        return a.location.country.localeCompare(b.location.country);
        // localeCompare compara el string y lo ordena
      })
      : users
  
  // eliminar usuarios 
  const handleDelete=(email)=>{
    const filterUser= users.filter(user => user.email!== email)
    setUsers(filterUser);
  } 
  

  React.useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => setUsers(data.results))
  }, [])



  return (
    <>
      <h1> Random User list</h1>
      <header>
        <button onClick={toggleColor} >
          change color rows
        </button>
        <button onClick={toggleSortCountry} >
          {sortByCountry ? 'do not sort by country' : 'sort by country'}
        </button>
      </header>
      <main>
        <UserList users={sortedUsers} color={color} handleDelete={handleDelete}/>

      </main>


    </>
  )
}

export default App
