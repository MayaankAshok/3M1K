import React, { useState, useEffect } from "react";

export default function Sidebar(props) {
  const [chatContacts, setChatContacts] = useState([]);

  useEffect(() => {
    // Fetch chat contacts from the backend
    // Replace the URL with your actual backend API endpoint
    fetch("https://your-backend-api.com/chat-contacts", {
      method: "GET",
      headers: {
        // Include any necessary headers (e.g., authentication headers)
        // ...
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched chat contacts
        setChatContacts(data.contacts);
      })
      .catch((error) => {
        console.error("Error fetching chat contacts:", error);
      });
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <>
      <div className="sidebar">
        <div className="user-info">
          <div className="user-name">Hello, {props.name}</div>
        </div>
        <div className="chat-contacts">
          <h2>Chat Contacts</h2>
          <ul>
            {chatContacts.map((contact) => (
              <li key={contact.id}>{contact.username}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
