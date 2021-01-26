import React from "react";
import CollectionOver from "../components/collection-overview";
import { Route } from "react-router-dom";
import  CollectionPage  from "./category-item";


const ShopPage = ({ match }) => {
 

    return(
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOver} />
      <Route path={`${match.path}:collectionId`} component={CollectionPage} />
    </div>
    );
}
  
  export default ShopPage;