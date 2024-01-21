import React, { useState, useEffect } from "react";
import { FLASK_URL } from "../Common";
export default function Sidebar(props) {
  const [chatContacts, setChatContacts] = useState([]);
  const username= props.name;

  useEffect(() => {
    // Fetch chat contacts from the backend
    // Replace the URL with your actual backend API endpoint
    fetch(FLASK_URL+"/get_chat?username="+username, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched chat contacts

        console.log("HEYYY", data)
        setChatContacts(data.contacts);
      })
      .catch((error) => {
        console.error("Error fetching chat contacts:", error);
      });
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts
  return (
    <>
      <div className="sidebar">
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
