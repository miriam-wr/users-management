import React, { useState } from 'react';
import StringHeader from './components/StringHeader'
import NumberHeader from './components/NumberHeader'
import DateHeader from './components/DateHeader'
import './column-header.scss'

const ColumnHeader = (props) => {

    const { name, handleClick, text, type } = props;
    const [isShowFilter, setIsShowFilter] = useState(false);


    return (
        <th className="column-header">
            <span onClick={() => handleClick(name)}>{text}</span>
            <span onClick={() => { setIsShowFilter(!isShowFilter) }}>*</span>
            <form>
                {isShowFilter && <div className="filter-modal">
                    {{
                        'string': <StringHeader {...props} key={name + "string"} />,
                        'date': <DateHeader {...props} key={name + "date"} />,
                        'number': <NumberHeader {...props} ader key={name + "number"} />
                    }[type]}
                </div>}
            </form>

        </th>
    );
}

export default ColumnHeader;