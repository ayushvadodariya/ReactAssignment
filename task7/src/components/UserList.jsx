import React from 'react'

const UserList = () => {
    const users = [
        { id: 1, name: "Alex", age: 45 },
        { id: 2, name: "John", age: 21 },
        { id: 3, name: "Crish", age: 39 },
      ];
  return (
    <div>
            <h2>User list:</h2>
            <ul>
                {users.map((user)=>(
                    <li key={user.id}>
                        {user.name}-{user.age}
                    </li>
                ))}
            </ul>
      
    </div>
  )
}

export default UserList