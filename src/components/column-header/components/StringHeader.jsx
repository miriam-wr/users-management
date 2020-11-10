import React from 'react'

const StringHeader = ({ name, value, handleChange }) =>
    <input type="text" defaultValue={value} onChange={(e) => { handleChange(name, e.target.value) }} />;

export default StringHeader;