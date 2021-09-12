import React from 'react'
import Popup from "reactjs-popup";
import {Modal, Button} from 'react-bootstrap';

export default function GameDetailComponent({ game, show, onHide, onDelete}) {
    const removeHandler = () => {
        onDelete(game)
    }
    return (
        <div class="d-flex justify-content-center">
            <Modal show={show} onHide={onHide}>
                <Modal.Header>
                    <Modal.Title>{game.name}</Modal.Title>
                    <Button variant="primary" onClick={onHide}>close</Button>
                </Modal.Header>
                <Modal.Body>
                    <p>Description: {game.description}</p>
                    <p>year: {game.year}</p>
                    <p>console: {game.console}</p>
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