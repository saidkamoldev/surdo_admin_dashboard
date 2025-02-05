import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsersTable from './UsersTable';
import TranslatorsTable from './TranslatorsTable';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [translators, setTranslators] = useState([]);

    useEffect(() => {
        // Users ma'lumotlarini olish
        axios.get('http://localhost:8080/GetUsers')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));

        // Translators ma'lumotlarini olish
        axios.get('http://localhost:8080/translators')
            .then(response => setTranslators(response.data))
            .catch(error => console.error('Error fetching translators:', error));
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome to the admin panel!</p>
            <UsersTable users={users} />
            <TranslatorsTable translators={translators} />
        </div>
    );
};

export default Dashboard;
