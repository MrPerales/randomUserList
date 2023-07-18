import React from 'react'
import './App.css'
import { UserList } from './components/UserList/UserList';

const URL = 'https://randomuser.me/api/?results=25'


function App() {
  const [users, setUsers] = React.useState([]);
  const [color, setColor] = React.useState(false);

  const toggleColor = () => {
    setColor(!color);
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
      </header>
      <main>
        <UserList users={users}  color={color} />

      </main>


    </>
  )
}

export default App
