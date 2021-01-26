import React from "react";

import './preview.collection.css';

import  Item  from './item.collection.jsx';

const Collection = ({title,items}) =>{

    return(

      <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
        items.filter((items,idx)=>(idx<4)).map((item)=>(
            <Item key={item.id} item={item}/>
          
        ))}
        
        </div>
        </div>  
    )
}

export default Collection;

