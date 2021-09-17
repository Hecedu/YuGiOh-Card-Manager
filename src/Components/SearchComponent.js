import React from 'react'


export default function SearchComponent(props) {
    const { name, onFilterChange } = props;
    return (
        <div className="d-flex justify-content-center">
            <input type="text" value={name} onChange={onFilterChange} className="input" placeholder="Filter" />
        </div>
    )
}
