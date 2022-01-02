import React from 'react'
import Icofont from 'react-icofont'

function ServiceItem(props){

    return(
        <div className="col-12 col-sm-6 services-box anim-bot">
            <Icofont icon={props.icon} />
            <h5 className="sub-title">{props.title}</h5>
            <ul>
                {props.list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
    
}

export default ServiceItem