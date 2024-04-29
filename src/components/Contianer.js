// src/Container.js
import React, { useState } from 'react';
import './../App.css';
import Dialog from './Dialog';

const Container = ({ children }) => {
    const [showDialog, setShowDialog] = useState(false);

    const dragOver = (e) => {
        e.preventDefault();
    };

    const drop = (e) => {
        e.preventDefault();
        const cardId = e.dataTransfer.getData('card_id');
        const card = document.getElementById(cardId);
        if (card) {
            // Display the dialog when a card is dropped
            setShowDialog(true);
        }
    };

    const handleCloseDialog = () => {
        // Close the dialog
        setShowDialog(false);
        // Implement dropping of the card here
        // Example: document.getElementById("container").appendChild(document.getElementById(cardId));
    };

    return (
        <div
            className="container"
            onDragOver={dragOver}
            onDrop={drop}
        >
            {children}
            {showDialog && <Dialog onClose={handleCloseDialog} />}
        </div>
    );
};

export default Container;
