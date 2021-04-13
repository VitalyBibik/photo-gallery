import './App.css';
import Api from './Api/Api'
import {useEffect} from "react";
import {UsersList} from "./components/UsersList";
import {useState} from "react";

function App() {
  const [allUsers, setAllUsers] = useState();
  useEffect( () => {
      async function fetchAllUsers() {
          try {
              const allUsers = await Api.getAllUsers();
              setAllUsers(allUsers);
          } catch (err) {
              const errResJson = await err.json();
              console.log(errResJson);
          }
      }
      fetchAllUsers();
  }, [])


  return (
    <div className="App">
        <UsersList allUsers={allUsers}/>
    </div>
  );
}

export default App;
