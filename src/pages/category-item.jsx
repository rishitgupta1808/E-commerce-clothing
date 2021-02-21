import React from "react";

import './category-item.scss';
import { connect } from "react-redux";

import Item from "../components/item.collection.jsx";
import { selectCollection } from "../redux/shop/shop.selectors.js";


const CollectionPage = ({match,collection})=>{
   
    const {title,items} = collection;
        return(
        <div className="collection-page">
          <h2 className="title">{title}</h2>
          <div className="items">
              {
              items.map(item=><Item  key={item.id} item={item}/>)
              }
          </div>
        </div>
    )
}

const mapStateToProps = (state,ownProps)=>{
    
 
    return({

    collection : selectCollection(ownProps.match.params.collectionId)(state)
})}

export default connect(mapStateToProps)(CollectionPage);