// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserForm = ({ selectedUser, onUserCreated, onUserUpdated }) => {
//     const [user, setUser] = useState({
//         FirstName: '',
//         LastName: '',
//         TelegramID: '',
//         PhoneNumber: '',
//         Email: ''
//     });

//     useEffect(() => {
//         if (selectedUser) {
//             setUser(selectedUser);
//         }
//     }, [selectedUser]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUser({ ...user, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (selectedUser) {
//             await axios.put(`http://localhost:8080/users/${selectedUser.ID}`, user);
//             onUserUpdated(user);
//         } else {
//             const response = await axios.post('http://localhost:8080/users', user);
//             onUserCreated(response.data);
//         }
//         setUser({
//             FirstName: '',
//             LastName: '',
//             TelegramID: '',
//             PhoneNumber: '',
//             Email: ''
//         });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>First Name:</label>
//                 <input
//                     type="text"
//                     name="FirstName"
//                     value={user.FirstName}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Last Name:</label>
//                 <input
//                     type="text"
//                     name="LastName"
//                     value={user.LastName}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Telegram ID:</label>
//                 <input
//                     type="text"
//                     name="TelegramID"
//                     value={user.TelegramID}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Phone Number:</label>
//                 <input
//                     type="text"
//                     name="PhoneNumber"
//                     value={user.PhoneNumber}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div>
//                 <label>Email:</label>
//                 <input
//                     type="email"
//                     name="Email"
//                     value={user.Email}
//                     onChange={handleChange}
//                 />
//             </div>
//             <button type="submit">{selectedUser ? 'Update' : 'Create'} User</button>
//         </form>
//     );
// };

// export default UserForm;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ user, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        telegram_id: ''
    });

    useEffect(() => {
        if (user) {
            setFormData(user);
        }
    }, [user]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (user) {
                await axios.put(`http://localhost:8080/users/${user.id}`, formData);
            } else {
                await axios.post('http://localhost:8080/users', formData);
            }
            onSave();
        } catch (error) {
            console.error('Error saving user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="user-form">
            <label>First Name:</label>
            <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
            
            <label>Last Name:</label>
            <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required />
            
            <label>Phone Number:</label>
            <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} required />
            
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            
            <label>Telegram ID:</label>
            <input type="text" name="telegram_id" value={formData.telegram_id} onChange={handleChange} required />

            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default UserForm;
