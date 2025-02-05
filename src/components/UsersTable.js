import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UsersTable.css';

const UsersTable = () => {
    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState(null);  // Tahrirlanayotgan foydalanuvchi
    const [newUser, setNewUser] = useState({ 
        FirstName: "", 
        LastName: "", 
        PhoneNumber: "", 
        Email: "", 
        TelegramID: 0 // Telegram ID maydoni qo'shildi
    });

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
            await axios.put(`http://localhost:8080/users/${id}`, updatedUser, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            fetchUsers();  // Foydalanuvchilarni yangilash
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

    return (
        <div className="table-container">
            <h3>Users</h3>
            <div className="add-user-form">
                <input type="text" name="FirstName" placeholder="First Name" value={newUser.FirstName} onChange={handleInputChange} />
                <input type="text" name="LastName" placeholder="Last Name" value={newUser.LastName} onChange={handleInputChange} />
                <input type="text" name="PhoneNumber" placeholder="Phone Number" value={newUser.PhoneNumber} onChange={handleInputChange} />
                <input type="email" name="Email" placeholder="Email" value={newUser.Email} onChange={handleInputChange} />
                <input type="text" name="TelegramID" placeholder="Telegram ID" value={newUser.TelegramID} onChange={handleInputChange} />
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
                            {/* Agar tahrirlanayotgan foydalanuvchi bo'lsa, input ko'rsatiladi */}
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
                                {/* Agar foydalanuvchi tahrirlayotgan bo'lsa, tasdiqlash tugmasi bo'ladi */}
                                {editUser && editUser.ID === user.ID ? (
                                    <button onClick={() => updateUser(user.ID)}>Update</button>
                                ) : (
                                    <button onClick={() => setEditUser(user)}>Edit</button>
                                )}
                                <button onClick={() => deleteUser(user.ID)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;
