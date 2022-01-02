import React from 'react'
import {Link} from 'react-router-dom'

function Logo(){

    return(
        <div className="logo">
            <Link to='/'><span>STRÅDA</span></Link>
        </div>
    )
    
}

export default Logo