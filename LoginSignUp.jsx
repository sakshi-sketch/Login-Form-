import React, { useState } from 'react';
import './LoginSignUp.css';

const LoginSignUp = () => {
  const [action, setAction] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleAddAccount = () => {
    // Check if the email is unique before adding the account
    if (users.find(user => user.email === email)) {
      console.log('Account with this email already exists');
    } else {
      // Simulate adding an account
      const newUser = { name, email, password };
      setUsers([...users, newUser]);
      console.log('Account added:', newUser);
    }
  };

  const handleLogin = () => {
    // Simulate login logic
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      setLoggedInUser(user);
      console.log('Login successful:', user);
    } else {
      console.log('Login failed');
    }
  };

  const handleDeleteAccount = () => {
    // Simulate deleting an account
    setUsers(users.filter(user => user.email !== email));
    console.log('Account deleted:', email);
  };

  const handleLogout = () => {
    // Simulate logout
    setLoggedInUser(null);
    console.log('Logged out');
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action === "Login" ? null : (
          <div className='input'>
            <input type='text' placeholder='enter your name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        )}
        <div className='input'>
          <input type='email' placeholder='enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='input'>
          <input type='password' placeholder='enter the password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {action === "Sign Up" ? null : <div className="forgot-password">Lost Password?<span>Click Here</span></div>}
        <div className="submit-container">
          {loggedInUser ? (
            <div className="submit" onClick={handleLogout}>Logout</div>
          ) : (
            <>
              <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
              <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </>
          )}
        </div>
        {action === "Sign Up" ? (
          <div className="submit-container">
            <div className="submit" onClick={handleAddAccount}>Add Account</div>
          </div>
        ) : (
          <div className="submit-container">
            {loggedInUser ? (
              <div className="submit" onClick={handleDeleteAccount}>Delete Account</div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignUp;
