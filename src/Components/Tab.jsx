import React from 'react'

function Tab({children,isActive, onClick}) {
  return (
    <button style={{fontWeight: isActive ? 'bold' : 'normal'}} onClick={onClick}>
        {children}
    </button>
  )
}

export default Tab