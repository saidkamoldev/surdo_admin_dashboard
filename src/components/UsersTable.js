import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UsersTable.css';

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const UsersTable = ({ users }) => {
    const [translators, setTranslators] = useState({});

    useEffect(() => {
        const fetchTranslators = async () => {
            const translatorIds = [...new Set(users.flatMap(user => user.Orders.map(order => order.TranslatorID)))];
            const translatorsData = await Promise.all(translatorIds.map(id => {
                if (id) {
                    return axios.get(`http://localhost:8080/translators/${id}`).then(res => res.data);
                } else {
                    return null;
                }
            }));
            const translatorMap = translatorsData.reduce((acc, translator) => {
                if (translator) {
                    acc[translator.ID] = translator;
                }
                return acc;
            }, {});
            setTranslators(translatorMap);
        };

        fetchTranslators();
    }, [users]);

    return (
        <div className="table-container">
            <h3>Users</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>PhoneNumber</th>
                        <th>Email</th>
                        <th>Orders</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.ID}>
                            <td>{user.ID}</td>
                            <td>{user.FirstName}</td>
                            <td>{user.LastName}</td>
                            <td>{user.PhoneNumber}</td>
                            <td>{user.Email}</td>
                            <td>
                                <table className="order-table">
                                    <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Status</th>
                                            <th>Type</th>
                                            <th>Created At</th>
                                            <th>Translator</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {user.Orders.map(order => (
                                            <tr key={order.ID}>
                                                <td>{order.ID}</td>
                                                <td>{order.Status}</td>
                                                <td>{order.Type}</td>
                                                <td>{formatDate(order.CreatedAt)}</td>
                                                <td>
                                                    {translators[order.TranslatorID] ? (
                                                        <div>
                                                            <p>Name: {translators[order.TranslatorID].FirstName} {translators[order.TranslatorID].LastName}</p>
                                                            <p>Phone Number: {translators[order.TranslatorID].PhoneNumber}</p>
                                                        </div>
                                                    ) : (
                                                        <p>No Translator</p>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;
