import React, { useEffect, useState, useRef } from 'react';

const Auto = () => {

    return (
        <div>
            <input id='auto' placeholder='Type to search' />
        </div>
    )
}

function App(){
    return(
        <div>
            <h1>Custome Autocomplete React</h1>
            <div>
                <Auto />
            </div>
        </div>
    )
}

