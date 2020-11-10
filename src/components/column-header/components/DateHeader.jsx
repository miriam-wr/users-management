import React from 'react'
import { Dropdown } from 'react-bootstrap'

const DateHeader = () => <Dropdown>
    <Dropdown.Item text="Today" />
    <Dropdown.Item text="This Week" />
    <Dropdown.Item text="This Month" />
    <Dropdown.Item text="This Year" />
    <Dropdown.Item text="More than a year" />
</Dropdown>

export default DateHeader;