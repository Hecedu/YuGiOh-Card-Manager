import React from 'react'
import { Modal, Button } from 'react-bootstrap';

export default function CardDetailComponent({ card, show, onHide, onDelete }) {
    const removeHandler = () => {
        onDelete(card)
    }
    return (
        <div class="container-fluid text-center">
            <Modal show={show} onHide={onHide}>
                <Modal.Header>
                    <Modal.Title>{card.name}</Modal.Title>
                    <Button variant="primary" onClick={onHide}>close</Button>
                </Modal.Header>
                <Modal.Body class="container-fluid text-center">
                    <img src={card.imageUrl} class="img-large my-3" alt="Responsive image"></img>
                    <p></p>
                    <p>Description: {card.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={removeHandler}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}