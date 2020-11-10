import React from 'react';

const NumberHeader = ({ name, value, handleChange }) => (<div>
    <div>
        <span>more than: </span>
        <input type="number" defaultValue={value.from} onChange={(e) => handleChange(name + 'From', e.target.value)} />
    </div>
    <div>
        <span>less than: </span>
        <input type="number" defaultValue={value.to} onChange={(e) => handleChange(name + 'To', e.target.value)} />
    </div>
</div>);

export default NumberHeader;