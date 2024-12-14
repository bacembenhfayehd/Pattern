import { useEffect, useState } from "react";
import ContainerPresenter from "./ContainerPresenter";
import ComponentWithRenderProps from './Components/ComponentWithRenderProps'

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
      {/* protected component */}
      <ProtectedDashboard/>
      <ComponentWithRenderProps render={(data) => <h1>{data}</h1>}/>
    </div>
  );
}

export default App;

