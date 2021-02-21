import React from "react";

import './preview.collection.css';

import { withRouter } from "react-router-dom";

import  Item  from './item.collection.jsx';

const Collection = ({title,items,history,match,routeName}) =>{
   

    return(

      <div className="collection-preview">
        <h1 className="title" onClick={()=>history.push(`${match.path}${routeName}`)}>{title.toUpperCase()}</h1>
        <div className="preview">
            {
        items.filter((items,idx)=>(idx<4)).map((item)=>(
            <Item key={item.id} item={item}/>
          
        ))}
        
        </div>
        </div>  
    )
}

export default withRouter(Collection);

