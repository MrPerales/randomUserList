import React from "react";
import './userList.css'

function UserList({ users ,color,handleDelete}) {

    return (

        <table className="tableContainer">
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => {
                    const background = index % 2 === 0 ? '#ddd' : '#999'
                    const printColor = color ? background : 'transparent'
                
                
                return (

                        <tr key={user.email} style={{background: printColor}}>
                            <td>
                                <img src={user.picture.thumbnail} alt={`${user.name.first} Photo `} />
                            </td>
                            <td>{user.name.first}</td>
                            <td>{user.name.last}</td>
                            <td>{user.location.country}</td>
                            <td>
                                <button onClick={()=>handleDelete(user.email)} >Delete</button>
                            </td>

                        </tr>
                    )
                })}

            </tbody>

        </table>
    )
};

export { UserList };