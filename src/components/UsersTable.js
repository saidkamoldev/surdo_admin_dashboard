// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './UsersTable.css';

// const UsersTable = () => {
//     const [users, setUsers] = useState([]);
//     const [editUser, setEditUser] = useState(null);  // Tahrirlanayotgan foydalanuvchi
//     const [newUser, setNewUser] = useState({ 
//         FirstName: "", 
//         LastName: "", 
//         PhoneNumber: "", 
//         Email: "", 
//         TelegramID: 0 // Telegram ID maydoni qo'shildi
//     });

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const fetchUsers = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/GetUsers');
//             setUsers(response.data);
//         } catch (error) {
//             console.error('Error fetching users:', error);
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'TelegramID') {
//             setNewUser({
//                 ...newUser,
//                 [name]: value === "" ? null : parseInt(value) || 0
//             });
//         } else {
//             setNewUser({
//                 ...newUser,
//                 [name]: value
//             });
//         }
//     };

//     const handleEditChange = (e) => {
//         const { name, value } = e.target;
//         setEditUser({
//             ...editUser,
//             [name]: value
//         });
//     };

//     const addUser = async () => {
//         try {
//             await axios.post('http://localhost:8080/users', newUser);
//             fetchUsers();
//             setNewUser({ FirstName: "", LastName: "", PhoneNumber: "", Email: "", TelegramID: "" });
//         } catch (error) {
//             console.error('Error adding user:', error);
//         }
//     };

//     const updateUser = async (id, updatedUser) => {
//         try {
//             // To'g'ri URL va headers bilan so'rov yuborish
//             const response = await axios.put(`http://localhost:8080/users/${id}`, updatedUser, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 }
//             });
    
//             fetchUsers(); // Yangilangan foydalanuvchilarni olish
    
//         } catch (error) {
//             console.error('Error updating user:', error);
//             console.log("Updated User:", updatedUser);

//         }
        
//     };
    

//     const deleteUser = async (id) => {
//         try {
//             await axios.delete(`http://localhost:8080/users/${id}`);
//             fetchUsers();
//         } catch (error) {
//             console.error('Error deleting user:', error);
//         }
//     };

//     return (
//         <div className="table-container">
//             <h3>Users</h3>
//             <div className="add-user-form">
//                 <input type="text" name="FirstName" placeholder="First Name" value={newUser.FirstName} onChange={handleInputChange} />
//                 <input type="text" name="LastName" placeholder="Last Name" value={newUser.LastName} onChange={handleInputChange} />
//                 <input type="text" name="PhoneNumber" placeholder="Phone Number" value={newUser.PhoneNumber} onChange={handleInputChange} />
//                 <input type="email" name="Email" placeholder="Email" value={newUser.Email} onChange={handleInputChange} />
//                 <input type="text" name="TelegramID" placeholder="Telegram ID" value={newUser.TelegramID} onChange={handleInputChange} />
//                 <button onClick={addUser}>Add User</button>
//             </div>

//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Phone</th>
//                         <th>Email</th>
//                         <th>Telegram ID</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(user => (
//                         <tr key={user.ID}>
//                             <td>{user.ID}</td>
//                             {/* Agar tahrirlanayotgan foydalanuvchi bo'lsa, input ko'rsatiladi */}
//                             <td>
//                                 {editUser && editUser.ID === user.ID ? (
//                                     <input 
//                                         type="text" 
//                                         name="FirstName" 
//                                         value={editUser.FirstName} 
//                                         onChange={handleEditChange} 
//                                     />
//                                 ) : (
//                                     user.FirstName
//                                 )}
//                             </td>
//                             <td>
//                                 {editUser && editUser.ID === user.ID ? (
//                                     <input 
//                                         type="text" 
//                                         name="LastName" 
//                                         value={editUser.LastName} 
//                                         onChange={handleEditChange} 
//                                     />
//                                 ) : (
//                                     user.LastName
//                                 )}
//                             </td>
//                             <td>
//                                 {editUser && editUser.ID === user.ID ? (
//                                     <input 
//                                         type="text" 
//                                         name="PhoneNumber" 
//                                         value={editUser.PhoneNumber} 
//                                         onChange={handleEditChange} 
//                                     />
//                                 ) : (
//                                     user.PhoneNumber
//                                 )}
//                             </td>
//                             <td>
//                                 {editUser && editUser.ID === user.ID ? (
//                                     <input 
//                                         type="email" 
//                                         name="Email" 
//                                         value={editUser.Email} 
//                                         onChange={handleEditChange} 
//                                     />
//                                 ) : (
//                                     user.Email
//                                 )}
//                             </td>
//                             <td>
//                                 {editUser && editUser.ID === user.ID ? (
//                                     <input 
//                                         type="text" 
//                                         name="TelegramID" 
//                                         value={editUser.TelegramID} 
//                                         onChange={handleEditChange} 
//                                     />
//                                 ) : (
//                                     user.TelegramID || 'N/A'
//                                 )}
//                             </td>
//                             <td>
//                                 {/* Agar foydalanuvchi tahrirlayotgan bo'lsa, tasdiqlash tugmasi bo'ladi */}
//                                 {editUser && editUser.ID === user.ID ? (
//                                     <button onClick={() => updateUser(user.ID)}>Update</button>
//                                 ) : (
//                                     <button onClick={() => setEditUser(user)}>Edit</button>
//                                 )}
//                                 <button onClick={() => deleteUser(user.ID)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default UsersTable;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './UsersTable.css';

// const UsersTable = () => {
//     const [users, setUsers] = useState([]);
//     const [editUser, setEditUser] = useState(null);
//     const [newUser, setNewUser] = useState({
//         FirstName: "",
//         LastName: "",
//         PhoneNumber: "",
//         Email: "",
//         TelegramID: ""
//     });

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const fetchUsers = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/GetUsers');
//             setUsers(response.data);
//         } catch (error) {
//             console.error('Error fetching users:', error);
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'TelegramID') {
//             setNewUser({
//                 ...newUser,
//                 [name]: value === "" ? null : parseInt(value) || 0
//             });
//         } else {
//             setNewUser({
//                 ...newUser,
//                 [name]: value
//             });
//         }
//     };

//     const handleEditChange = (e) => {
//         const { name, value } = e.target;
//         setEditUser({
//             ...editUser,
//             [name]: value
//         });
//     };

//     const addUser = async () => {
//         try {
//             await axios.post('http://localhost:8080/users', newUser);
//             fetchUsers();
//             setNewUser({ FirstName: "", LastName: "", PhoneNumber: "", Email: "", TelegramID: "" });
//         } catch (error) {
//             console.error('Error adding user:', error);
//         }
//     };

//     // const updateUser = async (id, updatedUser) => {
//     //     try {
//     //         // TelegramID qiymatini raqam sifatida yuborish
//     //         updatedUser.TelegramID = parseInt(updatedUser.TelegramID);
    
//     //         const response = await axios.put(`http://localhost:8080/users/${id}`, updatedUser, {
//     //             headers: {
//     //                 'Content-Type': 'application/json',
//     //             }
//     //         });
    
//     //         fetchUsers(); // Yangilangan foydalanuvchilarni olish
//     //     } catch (error) {
//     //         console.error('Error updating user:', error);
//     //         console.log("Updated User:", updatedUser);
//     //     }
//     // };
    
//     const updateUser = async (id, updatedUser) => {
//         try {
//             // TelegramID qiymatini raqam sifatida yuborish
//             updatedUser.TelegramID = parseInt(updatedUser.TelegramID);
    
//             const response = await axios.put(`http://localhost:8080/users/${id}`, updatedUser, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 }
//             });
    
//             fetchUsers(); // Yangilangan foydalanuvchilarni olish
//             setEditUser(null); // Tahrir qilishni tugatish va inputlarni normal ko'rsatish
//         } catch (error) {
//             console.error('Error updating user:', error);
//             console.log("Updated User:", updatedUser);
//         }
//     };
    

//     const deleteUser = async (id) => {
//         try {
//             await axios.delete(`http://localhost:8080/users/${id}`);
//             fetchUsers();
//         } catch (error) {
//             console.error('Error deleting user:', error);
//         }
//     };

//     return (
//         <div className="table-container">
//             <h3>Users</h3>
//             <div className="add-user-form">
//                 <input type="text" name="FirstName" placeholder="First Name" value={newUser.FirstName} onChange={handleInputChange} />
//                 <input type="text" name="LastName" placeholder="Last Name" value={newUser.LastName} onChange={handleInputChange} />
//                 <input type="text" name="PhoneNumber" placeholder="Phone Number" value={newUser.PhoneNumber} onChange={handleInputChange} />
//                 <input type="email" name="Email" placeholder="Email" value={newUser.Email} onChange={handleInputChange} />
//                 <input type="number" name="TelegramID" placeholder="Telegram ID" value={newUser.TelegramID} onChange={handleInputChange} />
//                 <button onClick={addUser}>Add User</button>
//             </div>

//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Phone</th>
//                         <th>Email</th>
//                         <th>Telegram ID</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(user => (
//                         <tr key={user.ID}>
//                             <td>{user.ID}</td>
//                             <td>
//                                 {editUser && editUser.ID === user.ID ? (
//                                     <input 
//                                         type="text" 
//                                         name="FirstName" 
//                                         value={editUser.FirstName} 
//                                         onChange={handleEditChange} 
//                                     />
//                                 ) : (
//                                     user.FirstName
//                                 )}
//                             </td>
//                             <td>
//                                 {editUser && editUser.ID === user.ID ? (
//                                     <input 
//                                         type="text" 
//                                         name="LastName" 
//                                         value={editUser.LastName} 
//                                         onChange={handleEditChange} 
//                                     />
//                                 ) : (
//                                     user.LastName
//                                 )}
//                             </td>
//                             <td>
//                                 {editUser && editUser.ID === user.ID ? (
//                                     <input 
//                                         type="text" 
//                                         name="PhoneNumber" 
//                                         value={editUser.PhoneNumber} 
//                                         onChange={handleEditChange} 
//                                     />
//                                 ) : (
//                                     user.PhoneNumber
//                                 )}
//                             </td>
//                             <td>
//                                 {editUser && editUser.ID === user.ID ? (
//                                     <input 
//                                         type="email" 
//                                         name="Email" 
//                                         value={editUser.Email} 
//                                         onChange={handleEditChange} 
//                                     />
//                                 ) : (
//                                     user.Email
//                                 )}
//                             </td>
//                             <td>
//                                 {editUser && editUser.ID === user.ID ? (
//                                     <input 
//                                         type="text" 
//                                         name="TelegramID" 
//                                         value={editUser.TelegramID} 
//                                         onChange={handleEditChange} 
//                                     />
//                                 ) : (
//                                     user.TelegramID || 'N/A'
//                                 )}
//                             </td>
//                             <td>
//                                 {editUser && editUser.ID === user.ID ? (
//                                     <button onClick={() => updateUser(user.ID, editUser)}>Update</button>
//                                 ) : (
//                                     <button onClick={() => setEditUser(user)}>Edit</button>
//                                 )}
//                                 <button onClick={() => deleteUser(user.ID)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UsersTable.css';

const UsersTable = () => {
    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState(null);
    const [newUser, setNewUser] = useState({
        FirstName: "",
        LastName: "",
        PhoneNumber: "",
        Email: "",
        TelegramID: ""
    });
    const [expandedUser, setExpandedUser] = useState(null);
    const [expandedUserDetails, setExpandedUserDetails] = useState(null); // For tracking expanded user details

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/GetUsers');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'TelegramID') {
            setNewUser({
                ...newUser,
                [name]: value === "" ? null : parseInt(value) || 0
            });
        } else {
            setNewUser({
                ...newUser,
                [name]: value
            });
        }
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditUser({
            ...editUser,
            [name]: value
        });
    };

    const addUser = async () => {
        try {
            await axios.post('http://localhost:8080/users', newUser);
            fetchUsers();
            setNewUser({ FirstName: "", LastName: "", PhoneNumber: "", Email: "", TelegramID: "" });
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    const updateUser = async (id, updatedUser) => {
        try {
            updatedUser.TelegramID = parseInt(updatedUser.TelegramID);
            await axios.put(`http://localhost:8080/users/${id}`, updatedUser, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            fetchUsers(); 
            setEditUser(null); 
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/users/${id}`);
            fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const toggleMoreDetails = async (userId) => {
        if (expandedUser === userId) {
            setExpandedUser(null);
            setExpandedUserDetails(null);
        } else {
            setExpandedUser(userId);
            try {
                const response = await axios.get(`http://localhost:8080/orders/users/${userId}`);
                setExpandedUserDetails(response.data);
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        }
    };

    return (
        <div className="table-container">
            <h3>Users</h3>
            <div className="add-user-form">
                <input type="text" name="FirstName" placeholder="First Name" value={newUser.FirstName} onChange={handleInputChange} />
                <input type="text" name="LastName" placeholder="Last Name" value={newUser.LastName} onChange={handleInputChange} />
                <input type="text" name="PhoneNumber" placeholder="Phone Number" value={newUser.PhoneNumber} onChange={handleInputChange} />
                <input type="email" name="Email" placeholder="Email" value={newUser.Email} onChange={handleInputChange} />
                <input type="number" name="TelegramID" placeholder="Telegram ID" value={newUser.TelegramID} onChange={handleInputChange} />
                <button onClick={addUser}>Add User</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Telegram ID</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.ID}>
                            <td>{user.ID}</td>
                            <td>
                                {editUser && editUser.ID === user.ID ? (
                                    <input 
                                        type="text" 
                                        name="FirstName" 
                                        value={editUser.FirstName} 
                                        onChange={handleEditChange} 
                                    />
                                ) : (
                                    user.FirstName
                                )}
                            </td>
                            <td>
                                {editUser && editUser.ID === user.ID ? (
                                    <input 
                                        type="text" 
                                        name="LastName" 
                                        value={editUser.LastName} 
                                        onChange={handleEditChange} 
                                    />
                                ) : (
                                    user.LastName
                                )}
                            </td>
                            <td>
                                {editUser && editUser.ID === user.ID ? (
                                    <input 
                                        type="text" 
                                        name="PhoneNumber" 
                                        value={editUser.PhoneNumber} 
                                        onChange={handleEditChange} 
                                    />
                                ) : (
                                    user.PhoneNumber
                                )}
                            </td>
                            <td>
                                {editUser && editUser.ID === user.ID ? (
                                    <input 
                                        type="email" 
                                        name="Email" 
                                        value={editUser.Email} 
                                        onChange={handleEditChange} 
                                    />
                                ) : (
                                    user.Email
                                )}
                            </td>
                            <td>
                                {editUser && editUser.ID === user.ID ? (
                                    <input 
                                        type="text" 
                                        name="TelegramID" 
                                        value={editUser.TelegramID} 
                                        onChange={handleEditChange} 
                                    />
                                ) : (
                                    user.TelegramID || 'N/A'
                                )}
                            </td>
                            <td>
                                {editUser && editUser.ID === user.ID ? (
                                    <button onClick={() => updateUser(user.ID, editUser)}>Update</button>
                                ) : (
                                    <button onClick={() => setEditUser(user)}>Edit</button>
                                )}
                                <button onClick={() => deleteUser(user.ID)}>Delete</button>
                                <button onClick={() => toggleMoreDetails(user.ID)}>More</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {expandedUser && expandedUserDetails && (
            <div className="user-details">
            <h4>Order Details:</h4>
            {expandedUserDetails.orders && expandedUserDetails.orders.length > 0 ? (
                <div className="orders-list">
                    {expandedUserDetails.orders.map(order => {
                        const formattedDate = new Date(order.created_at).toLocaleString(); // Yaxshi format
                        return (
                            <div key={order.order_id} className="order-card">
                                <p><strong>Order ID:</strong> {order.order_id}</p>
                                <p><strong>Created At:</strong> {formattedDate}</p>
                                <p><strong>Status:</strong> {order.status}</p>
                                <p><strong>Type:</strong> {order.type}</p>
                                <p>
                                    <strong>Translator:</strong> 
                                    {order.translator ? 
                                        `${order.translator.first_name} ${order.translator.last_name} (${order.translator.phone})` : 
                                        "N/A"
                                    }
                                </p>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p>No orders found for this user.</p>
            )}
            <button onClick={() => setExpandedUser(null)}>Close</button>
        </div>
        
            )}
        </div>
    );
};

export default UsersTable;




// export default UsersTable;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './UsersTable.css';

// const UsersTable = () => {
//     const [users, setUsers] = useState([]);
//     const [editUser, setEditUser] = useState(null);
//     const [newUser, setNewUser] = useState({
//         FirstName: "",
//         LastName: "",
//         PhoneNumber: "",
//         Email: "",
//         TelegramID: ""
//     });
//     const [expandedUser, setExpandedUser] = useState(null);  // For tracking expanded user details

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const fetchUsers = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/GetUsers');
//             setUsers(response.data);
//         } catch (error) {
//             console.error('Error fetching users:', error);
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'TelegramID') {
//             setNewUser({
//                 ...newUser,
//                 [name]: value === "" ? null : parseInt(value) || 0
//             });
//         } else {
//             setNewUser({
//                 ...newUser,
//                 [name]: value
//             });
//         }
//     };

//     const handleEditChange = (e) => {
//         const { name, value } = e.target;
//         setEditUser({
//             ...editUser,
//             [name]: value
//         });
//     };

//     const addUser = async () => {
//         try {
//             await axios.post('http://localhost:8080/users', newUser);
//             fetchUsers();
//             setNewUser({ FirstName: "", LastName: "", PhoneNumber: "", Email: "", TelegramID: "" });
//         } catch (error) {
//             console.error('Error adding user:', error);
//         }
//     };

//     const updateUser = async (id, updatedUser) => {
//         try {
//             updatedUser.TelegramID = parseInt(updatedUser.TelegramID);
    
//             const response = await axios.put(`http://localhost:8080/users/${id}`, updatedUser, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 }
//             });
    
//             fetchUsers(); 
//             setEditUser(null); 
//         } catch (error) {
//             console.error('Error updating user:', error);
//         }
//     };

//     const deleteUser = async (id) => {
//         try {
//             await axios.delete(`http://localhost:8080/users/${id}`);
//             fetchUsers();
//         } catch (error) {
//             console.error('Error deleting user:', error);
//         }
//     };

//     const toggleMoreDetails = (userId) => {
//         if (expandedUser === userId) {
//             setExpandedUser(null); // Collapse the details if already expanded
//         } else {
//             setExpandedUser(userId); // Expand the details for the selected user
//         }
//     };

//     return (
//         <div className="table-container">
//             <h3>Users</h3>
//             <div className="add-user-form">
//                 <input type="text" name="FirstName" placeholder="First Name" value={newUser.FirstName} onChange={handleInputChange} />
//                 <input type="text" name="LastName" placeholder="Last Name" value={newUser.LastName} onChange={handleInputChange} />
//                 <input type="text" name="PhoneNumber" placeholder="Phone Number" value={newUser.PhoneNumber} onChange={handleInputChange} />
//                 <input type="email" name="Email" placeholder="Email" value={newUser.Email} onChange={handleInputChange} />
//                 <input type="number" name="TelegramID" placeholder="Telegram ID" value={newUser.TelegramID} onChange={handleInputChange} />
//                 <button onClick={addUser}>Add User</button>
//             </div>

//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Phone</th>
//                         <th>Email</th>
//                         <th>Telegram ID</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(user => (
//                         <tr key={user.ID}>
//                             <td>{user.ID}</td>
//                             <td>
//                                 {editUser && editUser.ID === user.ID ? (
//                                     <input 
//                                         type="text" 
//                                         name="FirstName" 
//                                         value={editUser.FirstName} 
//                                         onChange={handleEditChange} 
//                                     />
//                                 ) : (
//                                     user.FirstName
//                                 )}
//                             </td>
//                             <td>
//                                 {editUser && editUser.ID === user.ID ? (
//                                     <input 
//                                         type="text" 
//                                         name="LastName" 
//                                         value={editUser.LastName} 
//                                         onChange={handleEditChange} 
//                                     />
//                                 ) : (
//                                     user.LastName
//                                 )}
//                             </td>
//                             <td>
//                                 {editUser && editUser.ID === user.ID ? (
//                                     <input 
//                                         type="text" 
//                                         name="PhoneNumber" 
//                                         value={editUser.PhoneNumber} 
//                                         onChange={handleEditChange} 
//                                     />
//                                 ) : (
//                                     user.PhoneNumber
//                                 )}
//                             </td>
//                             <td>
//                                 {editUser && editUser.ID === user.ID ? (
//                                     <input 
//                                         type="email" 
//                                         name="Email" 
//                                         value={editUser.Email} 
//                                         onChange={handleEditChange} 
//                                     />
//                                 ) : (
//                                     user.Email
//                                 )}
//                             </td>
//                             <td>
//                                 {editUser && editUser.ID === user.ID ? (
//                                     <input 
//                                         type="text" 
//                                         name="TelegramID" 
//                                         value={editUser.TelegramID} 
//                                         onChange={handleEditChange} 
//                                     />
//                                 ) : (
//                                     user.TelegramID || 'N/A'
//                                 )}
//                             </td>
//                             <td>
//                                 {editUser && editUser.ID === user.ID ? (
//                                     <button onClick={() => updateUser(user.ID, editUser)}>Update</button>
//                                 ) : (
//                                     <button onClick={() => setEditUser(user)}>Edit</button>
//                                 )}
//                                 <button onClick={() => deleteUser(user.ID)}>Delete</button>
//                                 <button onClick={() => toggleMoreDetails(user.ID)}>More</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {expandedUser && (
//                 <div className="user-details">
//                     {users.map(user => {
//                         if (user.ID === expandedUser) {
//                             return (
//                                 <div key={user.ID}>
//                                     <h4>Order Details:</h4>
//                                     {user.Orders && user.Orders.length > 0 ? (
//                                         <ul>
//                                             {user.Orders.map(order => (
//                                                 <li key={order.ID}>
//                                                     <p><strong>Order ID:</strong> {order.ID}</p>
//                                                     <p><strong>Slot:</strong> {order.Slot}</p>
//                                                     <p><strong>Status:</strong> {order.Status}</p>
//                                                     <p><strong>Type:</strong> {order.Type}</p>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     ) : (
//                                         <p>No orders found for this user.</p>
//                                     )}
//                                     <h4>Language:</h4>
//                                     <p>{user.Language}</p>
//                                     <button onClick={() => setExpandedUser(null)}>Close</button>
//                                 </div>
//                             );
//                         }
//                         return null;
//                     })}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default UsersTable;
