import React, { useEffect, useState } from 'react'; 
import './App.css'; // Import the CSS file

function App() {
  const [users, setUsers] = useState([]);

  // get register name
  const getRegister = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/register`);
    const data = await response.json();
    setUsers(data);
  }

  useEffect(() => {
    // Uncomment to fetch real data from backend
    // getRegister();
    console.log(process.env.REACT_APP_BACKEND_URL);
    // sample data list of users
    // setUsers([
    //   {
    //     name: 'John Doe',
    //     email: 'john@gmail.com',
    //   },
    //   {
    //     name: 'Jane Doe here',
    //     email: 'here@gmail.com',
    //   }
    // ]);

    getRegister();
  }, []);

  return (
    <div className="App">
      <h1>Register</h1>
      <div className="users-container">
        {users.map((user, index) => (
          <div className="user-card" key={index}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
