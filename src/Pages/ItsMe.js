import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ItsMe.css"

function ItsMe() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();
  const handleLogin = async () => {
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/restricted"); // If authenticated, navigate to the restricted page
    } catch (err) {
      setError("Invalid credentials!");
    }
  };

  return (
    <div className ="ItsMe__form">
      <h3>It's not for you guys.</h3>
      <input 
        className="ItsMe__email"
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        className="ItsMe__password"
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button className="ItsMe_submit" onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default ItsMe;
