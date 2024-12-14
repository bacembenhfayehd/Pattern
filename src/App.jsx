import { useEffect, useState } from "react";
import ContainerPresenter from "./ContainerPresenter";

import Dashboard from "./Components/Dashbord";
import withAuth from "./Components/WithAuth";

const ProtectedDashboard = withAuth(Dashboard)

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
      <ProtectedDashboard/>
    </div>
  );
}

export default App;

