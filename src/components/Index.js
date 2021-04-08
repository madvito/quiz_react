import React from 'react';
import {Link} from 'react-router-dom';

const Index = () => {
    return (
        <div className='main'>
            <label>Para contestar la Trivia, haz click <Link to='/login'>aquí</Link></label>
        </div>
    )
}

export default Index
