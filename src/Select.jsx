import React from 'react'

function Select(props) {
    return (
        <div>
           {!props.trigger?<div class="label">{props.children}</div>:<div></div>} 
        </div>
    )
}

export default Select;
