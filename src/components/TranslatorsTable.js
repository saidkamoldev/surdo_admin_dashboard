// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./TranslatorsTable.css";

// const formatDate = (dateString) => {
//     const options = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" };
//     return new Date(dateString).toLocaleDateString(undefined, options);
// };

// const TranslatorsTable = () => {
//     const [translators, setTranslators] = useState([]);
//     const [selectedTranslator, setSelectedTranslator] = useState(null);
//     const [newTranslator, setNewTranslator] = useState({ FirstName: "", LastName: "", PhoneNumber: "" });

//     useEffect(() => {
//         fetchTranslators();
//     }, []);

//     const fetchTranslators = async () => {
//         try {
//             const response = await axios.get("http://localhost:8080/translators");
//             setTranslators(response.data);
//         } catch (error) {
//             console.error("Error fetching translators:", error);
//         }
//     };

//     const handleAdd = async () => {
//         try {
//             await axios.post("http://localhost:8080/translators", newTranslator);
//             fetchTranslators();
//             setNewTranslator({ FirstName: "", LastName: "", PhoneNumber: "" });
//         } catch (error) {
//             console.error("Error adding translator:", error);
//         }
//     };

//     const handleEdit = async (id) => {
//         try {
//             await axios.put(`http://localhost:8080/translators/${id}`, selectedTranslator);
//             fetchTranslators();
//             setSelectedTranslator(null);
//         } catch (error) {
//             console.error("Error updating translator:", error);
//         }
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`http://localhost:8080/translators/${id}`);
//             fetchTranslators();
//         } catch (error) {
//             console.error("Error deleting translator:", error);
//         }
//     };

//     return (
//         <div className="table-container">
//             <h3>Translators</h3>

//             {/* Add Translator Form */}
//             <div className="add-form">
//                 <input
//                     type="text"
//                     placeholder="First Name"
//                     value={newTranslator.FirstName}
//                     onChange={(e) => setNewTranslator({ ...newTranslator, FirstName: e.target.value })}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Last Name"
//                     value={newTranslator.LastName}
//                     onChange={(e) => setNewTranslator({ ...newTranslator, LastName: e.target.value })}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Phone Number"
//                     value={newTranslator.PhoneNumber}
//                     onChange={(e) => setNewTranslator({ ...newTranslator, PhoneNumber: e.target.value })}
//                 />
//                 <button onClick={handleAdd}>Add</button>
//             </div>

//             {/* Translators Table */}
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Phone Number</th>
//                         <th>Slots</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {translators.map((translator) => (
//                         <tr key={translator.ID}>
//                             <td>{translator.ID}</td>
//                             <td>{translator.FirstName}</td>
//                             <td>{translator.LastName}</td>
//                             <td>{translator.PhoneNumber}</td>
//                             <td>
//                                 <table className="slot-table">
//                                     <thead>
//                                         <tr>
//                                             <th>Slot ID</th>
//                                             <th>Start</th>
//                                             <th>End</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {translator.Slots.map((slot) => (
//                                             <tr key={slot.ID}>
//                                                 <td>{slot.ID}</td>
//                                                 <td>{formatDate(slot.Start)}</td>
//                                                 <td>{formatDate(slot.End)}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </td>
//                             <td>
//                                 <button onClick={() => setSelectedTranslator(translator)}>Edit</button>
//                                 <button onClick={() => handleDelete(translator.ID)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {/* Edit Translator Form */}
//             {selectedTranslator && (
//                 <div className="edit-form">
//                     <h4>Edit Translator</h4>
//                     <input
//                         type="text"
//                         value={selectedTranslator.FirstName}
//                         onChange={(e) => setSelectedTranslator({ ...selectedTranslator, FirstName: e.target.value })}
//                     />
//                     <input
//                         type="text"
//                         value={selectedTranslator.LastName}
//                         onChange={(e) => setSelectedTranslator({ ...selectedTranslator, LastName: e.target.value })}
//                     />
//                     <input
//                         type="text"
//                         value={selectedTranslator.PhoneNumber}
//                         onChange={(e) => setSelectedTranslator({ ...selectedTranslator, PhoneNumber: e.target.value })}
//                     />
//                     <button onClick={() => handleEdit(selectedTranslator.ID)}>Save</button>
//                     <button onClick={() => setSelectedTranslator(null)}>Cancel</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default TranslatorsTable;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./TranslatorsTable.css";

// const formatDate = (dateString) => {
//     const options = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" };
//     return new Date(dateString).toLocaleDateString(undefined, options);
// };

// const TranslatorsTable = () => {
//     const [translators, setTranslators] = useState([]);
//     const [selectedTranslator, setSelectedTranslator] = useState(null);
//     const [newTranslator, setNewTranslator] = useState({ FirstName: "", LastName: "", PhoneNumber: "" });
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         fetchTranslators();
//     }, []);

//     const fetchTranslators = async () => {
//         try {
//             const response = await axios.get("http://localhost:8080/translators");
//             setTranslators(response.data);
//         } catch (error) {
//             console.error("Error fetching translators:", error);
//         }
//     };

//     const fetchOrders = async (translatorId) => {
//         try {
//             const response = await axios.get(`http://localhost:8080/translators/${translatorId}/orders`);
//             setOrders(response.data.orders);
//         } catch (error) {
//             console.error("Error fetching orders:", error);
//         }
//     };

//     const handleAdd = async () => {
//         try {
//             await axios.post("http://localhost:8080/translators", newTranslator);
//             fetchTranslators();
//             setNewTranslator({ FirstName: "", LastName: "", PhoneNumber: "" });
//         } catch (error) {
//             console.error("Error adding translator:", error);
//         }
//     };

//     const handleEdit = async (id) => {
//         try {
//             await axios.put(`http://localhost:8080/translators/${id}`, selectedTranslator);
//             fetchTranslators();
//             setSelectedTranslator(null);
//         } catch (error) {
//             console.error("Error updating translator:", error);
//         }
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`http://localhost:8080/translators/${id}`);
//             fetchTranslators();
//         } catch (error) {
//             console.error("Error deleting translator:", error);
//         }
//     };

//     return (
//         <div className="table-container">
//             <h3>Translators</h3>

//             {/* Add Translator Form */}
//             <div className="add-form">
//                 <input
//                     type="text"
//                     placeholder="First Name"
//                     value={newTranslator.FirstName}
//                     onChange={(e) => setNewTranslator({ ...newTranslator, FirstName: e.target.value })}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Last Name"
//                     value={newTranslator.LastName}
//                     onChange={(e) => setNewTranslator({ ...newTranslator, LastName: e.target.value })}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Phone Number"
//                     value={newTranslator.PhoneNumber}
//                     onChange={(e) => setNewTranslator({ ...newTranslator, PhoneNumber: e.target.value })}
//                 />
//                 <button onClick={handleAdd}>Add</button>
//             </div>

//             {/* Translators Table */}
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Phone Number</th>
//                         <th>Slots</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {translators.map((translator) => (
//                         <tr key={translator.ID}>
//                             <td>{translator.ID}</td>
//                             <td>{translator.FirstName}</td>
//                             <td>{translator.LastName}</td>
//                             <td>{translator.PhoneNumber}</td>
//                             <td>
//                                 <table className="slot-table">
//                                     <thead>
//                                         <tr>
//                                             <th>Slot ID</th>
//                                             <th>Start</th>
//                                             <th>End</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {translator.Slots.map((slot) => (
//                                             <tr key={slot.ID}>
//                                                 <td>{slot.ID}</td>
//                                                 <td>{formatDate(slot.Start)}</td>
//                                                 <td>{formatDate(slot.End)}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </td>
//                             <td>
//                                 <button onClick={() => setSelectedTranslator(translator)}>Edit</button>
//                                 <button onClick={() => handleDelete(translator.ID)}>Delete</button>
//                                 <button onClick={() => fetchOrders(translator.ID)}>More</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {/* Edit Translator Form */}
//             {selectedTranslator && (
//                 <div className="edit-form">
//                     <h4>Edit Translator</h4>
//                     <input
//                         type="text"
//                         value={selectedTranslator.FirstName}
//                         onChange={(e) => setSelectedTranslator({ ...selectedTranslator, FirstName: e.target.value })}
//                     />
//                     <input
//                         type="text"
//                         value={selectedTranslator.LastName}
//                         onChange={(e) => setSelectedTranslator({ ...selectedTranslator, LastName: e.target.value })}
//                     />
//                     <input
//                         type="text"
//                         value={selectedTranslator.PhoneNumber}
//                         onChange={(e) => setSelectedTranslator({ ...selectedTranslator, PhoneNumber: e.target.value })}
//                     />
//                     <button onClick={() => handleEdit(selectedTranslator.ID)}>Save</button>
//                     <button onClick={() => setSelectedTranslator(null)}>Cancel</button>
//                 </div>
//             )}

//             {/* Orders List */}
//             {orders.length > 0 && (
//                 <div className="orders-list">
//                     <h4>Orders</h4>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Order ID</th>
//                                 <th>Created At</th>
//                                 <th>Status</th>
//                                 <th>Type</th>
//                                 <th>User</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {orders.map((order) => (
//                                 <tr key={order.order_id}>
//                                     <td>{order.order_id}</td>
//                                     <td>{formatDate(order.created_at)}</td>
//                                     <td>{order.status}</td>
//                                     <td>{order.type}</td>
//                                     <td>
//                                         {order.user.first_name} {order.user.last_name} - {order.user.phone}
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default TranslatorsTable;
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TranslatorsTable.css";

const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const TranslatorsTable = () => {
    const [translators, setTranslators] = useState([]);
    const [selectedTranslator, setSelectedTranslator] = useState(null);
    const [newTranslator, setNewTranslator] = useState({ FirstName: "", LastName: "", PhoneNumber: "" });
    const [orders, setOrders] = useState([]);
    const [showOrders, setShowOrders] = useState(false);

    useEffect(() => {
        fetchTranslators();
    }, []);

    const fetchTranslators = async () => {
        try {
            const response = await axios.get("http://localhost:8080/translators");
            setTranslators(response.data);
        } catch (error) {
            console.error("Error fetching translators:", error);
        }
    };

    const fetchOrders = async (translatorId) => {
        try {
            const response = await axios.get(`http://localhost:8080/translators/${translatorId}/orders`);
            setOrders(response.data.orders);
            setShowOrders(true);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };

    const handleAdd = async () => {
        try {
            await axios.post("http://localhost:8080/translators", newTranslator);
            fetchTranslators();
            setNewTranslator({ FirstName: "", LastName: "", PhoneNumber: "" });
        } catch (error) {
            console.error("Error adding translator:", error);
        }
    };

    const handleEdit = async (id) => {
        try {
            await axios.put(`http://localhost:8080/translators/${id}`, selectedTranslator);
            fetchTranslators();
            setSelectedTranslator(null);
        } catch (error) {
            console.error("Error updating translator:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/translators/${id}`);
            fetchTranslators();
        } catch (error) {
            console.error("Error deleting translator:", error);
        }
    };

    return (
        <div className="table-container">
            <h3>Translators</h3>

            {/* Add Translator Form */}
            <div className="add-form">
                <input
                    type="text"
                    placeholder="First Name"
                    value={newTranslator.FirstName}
                    onChange={(e) => setNewTranslator({ ...newTranslator, FirstName: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={newTranslator.LastName}
                    onChange={(e) => setNewTranslator({ ...newTranslator, LastName: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={newTranslator.PhoneNumber}
                    onChange={(e) => setNewTranslator({ ...newTranslator, PhoneNumber: e.target.value })}
                />
                <button onClick={handleAdd}>Add</button>
            </div>

            {/* Translators Table */}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Slots</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {translators.map((translator) => (
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
                                        {translator.Slots.map((slot) => (
                                            <tr key={slot.ID}>
                                                <td>{slot.ID}</td>
                                                <td>{formatDate(slot.Start)}</td>
                                                <td>{formatDate(slot.End)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </td>
                            <td>
                                <button onClick={() => setSelectedTranslator(translator)}>Edit</button>
                                <button onClick={() => handleDelete(translator.ID)}>Delete</button>
                                <button onClick={() => fetchOrders(translator.ID)}>More</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Edit Translator Form */}
            {selectedTranslator && (
                <div className="edit-form">
                    <h4>Edit Translator</h4>
                    <input
                        type="text"
                        value={selectedTranslator.FirstName}
                        onChange={(e) => setSelectedTranslator({ ...selectedTranslator, FirstName: e.target.value })}
                    />
                    <input
                        type="text"
                        value={selectedTranslator.LastName}
                        onChange={(e) => setSelectedTranslator({ ...selectedTranslator, LastName: e.target.value })}
                    />
                    <input
                        type="text"
                        value={selectedTranslator.PhoneNumber}
                        onChange={(e) => setSelectedTranslator({ ...selectedTranslator, PhoneNumber: e.target.value })}
                    />
                    <button onClick={() => handleEdit(selectedTranslator.ID)}>Save</button>
                    <button onClick={() => setSelectedTranslator(null)}>Cancel</button>
                </div>
            )}

            {/* Orders List */}
            {showOrders && (
                <div className="orders-list">
                    <h4>Orders</h4>
                    <button onClick={() => setShowOrders(false)}>Close</button>
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Created At</th>
                                <th>Status</th>
                                <th>Type</th>
                                <th>User</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.order_id}>
                                    <td>{order.order_id}</td>
                                    <td>{formatDate(order.created_at)}</td>
                                    <td>{order.status}</td>
                                    <td>{order.type}</td>
                                    <td>
                                        {order.user.first_name} {order.user.last_name} - {order.user.phone}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default TranslatorsTable;
