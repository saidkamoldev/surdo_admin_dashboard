import React from 'react';

const TranslatorsTable = ({ translators }) => {
    return (
        <div>
            <h3>Translators</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {translators.map(translator => (
                        <tr key={translator.id}>
                            <td>{translator.id}</td>
                            <td>{translator.firstName}</td>
                            <td>{translator.lastName}</td>
                            <td>{translator.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TranslatorsTable;
