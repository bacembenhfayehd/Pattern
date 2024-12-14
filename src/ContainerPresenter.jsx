import React from 'react'


// this is the presenter
export default function ContainerPresenter(props) {
  return (
    <div>
      
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>{user.name}</li>
          
        ))}
      </ul>
    </div>
  )
}
