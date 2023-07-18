import React from 'react'
import './App.css'
import { UserList } from './components/UserList/UserList';

const URL = 'https://randomuser.me/api/?results=25'


function App() {
  const [users, setUsers] = React.useState([]);
  const [color, setColor] = React.useState(false);
  const [sortByCountry, setSortCountry] = React.useState(false);
  const [filterCountry, setFilterCountry] = React.useState('');

  const toggleColor = () => {
    setColor(!color);
  }

  const toggleSortCountry = () => {
    setSortCountry(!sortByCountry);
  }

// console.log(filterCountry);
///////////////filter by ... //////////////////////// 
  const filteredUser = filterCountry ?
    users.filter(user => {
      return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
    })
    : users;

  // nos regresa un [] por lo tanto lo usamos como lista para render 
  // le pasamos el dato filtrado para que podamos acomar y desacomodar cuando este filtrado 
  const sortedUsers = sortByCountry ?
    [...filteredUser ].sort((a, b) => {
      return a.location.country.localeCompare(b.location.country);
      // localeCompare compara el string y lo ordena
    })
    : filteredUser
//////////////////////////////////////////////////////////////////
  // eliminar usuarios 
  const handleDelete = (email) => {
    const filterUser = users.filter(user => user.email !== email)
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
        <input
          placeholder='search by Country'
          onChange={(e) => setFilterCountry(e.target.value)}
        />
        
      </header>
      <main>
        <UserList users={sortedUsers} color={color} handleDelete={handleDelete} />

      </main>


    </>
  )
}

export default App
