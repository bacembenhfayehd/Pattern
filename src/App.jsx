import { useEffect, useState } from "react";
import ContainerPresenter from "./ContainerPresenter";

// app is the container
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);

  return (
    <div>
      <ContainerPresenter users={users} />
    </div>
  );
}

export default App;
