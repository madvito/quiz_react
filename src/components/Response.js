import React from 'react';

const Response = ({resp}) => {
    const status = `resp-${resp.status}`;
    const {msj} = resp;
    return (
        <div className={`response ${status}`}>
            {msj}
        </div>
    )
}

export default Response;
