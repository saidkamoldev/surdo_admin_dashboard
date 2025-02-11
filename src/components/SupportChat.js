import React, { useState, useEffect } from 'react';

const SupportChat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [ws, setWs] = useState(null);

    useEffect(() => {
        // WebSocket ulanishi
        const socket = new WebSocket(`ws://localhost:8080/ws?userId=12345`);
        setWs(socket);

        // Xabar kelganda
        socket.onmessage = (event) => {
            const newMessage = event.data;
            setMessages(prevMessages => [...prevMessages, newMessage]);
        };

        return () => {
            socket.close(); // Komponent yotganida WebSocketni yopish
        };
    }, []);

    const handleSendMessage = () => {
        if (ws && input) {
            ws.send(input); // Xabar yuborish
            setInput(''); // Inputni tozalash
        }
    };

    return (
        <div>
            <h2>Support Chat</h2>
            <div className="chat-box">
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>Admin: </strong>{msg}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type a message"
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default SupportChat;
