import React, { useState } from 'react';

export default function AddGameComponent({ addGame }) {
    const [name, setName] = useState('')
    const [console, setConsole] = useState('')
    const [description, setDescription] = useState('')
    const [year, setYear] = useState('')


    const onNameChangeHandler = (event) => {
        setName(event.target.value)
    }
    const onConsoleChangeHandler = (event) => {
        setConsole(event.target.value)
    }
    const onDescriptionChangeHandler = (event) => {
        setDescription(event.target.value)
    }
    const onYearChangeHandler = (event) => {
        setYear(event.target.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault()
        if (name.length > 0 && console.length > 0) {
            const id = Math.random();
            addGame({ id: id, name: name, console: console, description: description, year: year })
            setName('')
            setConsole('')
        }
        else {

        }
    }

    return (
        <div className="container d-flex justify-content-center">
            <div className = "row justify-content-center">
                <h3 >Add your own game:</h3>
            </div>
            <div className="row justify-content-center mx-2">
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group my-1">
                        <label>Name:</label>
                        <input type='text' value={name} onChange={onNameChangeHandler}></input>
                    </div>
                    <div className="form-group my-1">
                        <label>Console:</label>
                        <input type='text' value={console} onChange={onConsoleChangeHandler}></input>
                    </div>
                    <div className="form-group my-1">
                        <label>Description:</label>
                        <input type='text' value={description} onChange={onDescriptionChangeHandler}></input>
                    </div>
                    <div className="form-group my-1">
                        <label>Year:</label>
                        <input type='text' value={year} onChange={onYearChangeHandler}></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}