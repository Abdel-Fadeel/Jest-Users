import { useState } from "react";
import UserForm from "./UserForm/UserForm";
import UserList from "./UserList/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = (user) => {
    setUsers([...users, user]);
  };
  return (
    <div>
      <UserForm onUserAdd={addUserHandler} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
