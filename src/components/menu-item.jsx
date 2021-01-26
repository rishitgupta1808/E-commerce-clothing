import React from 'react';
import { withRouter } from "react-router-dom";
import './menu-item.css';

const MenuItem = ({title,key,size,imageUrl,linkUrl,history,match})=>(

        <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            <div className="background" style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className="content">
                <h1 className ="title" key={key}>{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>

    );


export default withRouter(MenuItem);