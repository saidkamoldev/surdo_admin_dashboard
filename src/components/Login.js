// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [login, setLogin] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8080/login', {
//                 login,
//                 password
//             });
//             localStorage.setItem('adminId', response.data.adminId); // adminId ni localStorage ga saqlash
//             navigate('/dashboard'); // dashtbordga yo'naltirish
//         } catch (err) {
//             setError('Login failed. Please check your credentials.');
//         }
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Login:</label>
//                     <input 
//                         type="text" 
//                         value={login} 
//                         onChange={(e) => setLogin(e.target.value)} 
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input 
//                         type="password" 
//                         value={password} 
//                         onChange={(e) => setPassword(e.target.value)} 
//                     />
//                 </div>
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // CSS faylni import qilish

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/login', {
                login,
                password
            });
            localStorage.setItem('adminId', response.data.adminId);
            navigate('/dashboard');
        } catch (err) {
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Login:</label>
                    <input 
                        type="text" 
                        value={login} 
                        onChange={(e) => setLogin(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
};

export default Login;
