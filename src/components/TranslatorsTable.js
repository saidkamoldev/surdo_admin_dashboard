import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TranslatorsTable.css';

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const TranslatorsTable = () => {
    const [translators, setTranslators] = useState([]);

    useEffect(() => {
        const fetchTranslators = async () => {
            try {
                const response = await axios.get('http://localhost:8080/translators');
                setTranslators(response.data);
            } catch (error) {
                console.error('Error fetching translators:', error);
            }
        };

        fetchTranslators();
    }, []);

    return (
        <div className="table-container">
            <h3>Translators</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Slots</th>
                    </tr>
                </thead>
                <tbody>
                    {translators.map(translator => (
                        <tr key={translator.ID}>
                            <td>{translator.ID}</td>
                            <td>{translator.FirstName}</td>
                            <td>{translator.LastName}</td>
                            <td>{translator.PhoneNumber}</td>
                            <td>
                                <table className="slot-table">
                                    <thead>
                                        <tr>
                                            <th>Slot ID</th>
                                            <th>Start</th>
                                            <th>End</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {translator.Slots.map(slot => (
                                            <tr key={slot.ID}>
                                                <td>{slot.ID}</td>
                                                <td>{formatDate(slot.Start)}</td>
                                                <td>{formatDate(slot.End)}</td>
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

export default TranslatorsTable;
