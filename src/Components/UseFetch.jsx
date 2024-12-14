import React, { useEffect, useState } from 'react'

function UseFetch() {
    const [data,setData] = useState();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((res) => res.json())
          .then(setData);
      }, ['https://jsonplaceholder.typicode.com/users']);
  return data
}

export default UseFetch