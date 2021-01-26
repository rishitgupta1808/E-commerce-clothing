import React from "react";

import "./collection-overview.scss";

import { connect } from "react-redux";
import Collection from "./preview.collection.jsx";
import { selecteachCollection } from "../redux/shop/shop.selectors";

const CollectionOver = ({shopdata})=>{

    return(
        <div className="collection-overview">
            {
            shopdata.map(({id,...otherCollectionProps})=>(
                <Collection key={id} {...otherCollectionProps} />))
            }

        </div>
    )
}

const mapStateToProps = state =>({

    shopdata : selecteachCollection(state)
})

export default connect(mapStateToProps)(CollectionOver);