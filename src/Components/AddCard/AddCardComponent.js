import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios'

export default function AddCardComponent({ addCard, show, onHide,}) {
    const [name, setName] = useState('')

    const onNameChangeHandler = (event) => {
        setName(event.target.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault()
        if (name.length > 0) {
            const id = Math.random();
            axios.all([
                axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${name}`),
            ])
                .then(response => {
                    if (response[0].data.data != null) {
                        addCard({
                            id: id,
                            name: response[0].data.data[0].name,
                            description: response[0].data.data[0].desc,
                            imageUrl: response[0].data.data[0].card_images[0].image_url
                        })
                    }
                    else {
                        addCard({ id: id, name: name, description: "not found" })
                        setName('')
                    }
                });
        }
        onHide()
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header>
                <Modal.Title>Add Card</Modal.Title>
                <Button variant="primary" onClick={onHide}>close</Button>
            </Modal.Header>
            <Modal.Body class="container-fluid text-center">
                <form onSubmit={onSubmitHandler} className="form-group my-1">
                    <div>
                        <label className = 'mx-3'>Name:</label>
                        <input type='text' value={name} onChange={onNameChangeHandler}></input>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                    <button type="submit" className="btn btn-primary">Submit</button>
            </Modal.Footer>
        </Modal>

    )
}