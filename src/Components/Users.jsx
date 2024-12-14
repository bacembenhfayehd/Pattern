import React from 'react'
import UseFetch from './UseFetch'

function Users() {
    const users = UseFetch()
  return (
    <ul>
    {users?.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
  )
}

export default Users