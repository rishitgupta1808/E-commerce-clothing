import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOver from "../components/collection-overview";
import  CollectionPage  from "./category-item";
import { selectFetchingStatus } from "../redux/shop/shop.selectors";
import WithSpinner from "../components/spinner.componenet";
import { startCollections } from "../redux/shop/shop-actions";

const CollectionOverWithSpinner = WithSpinner(CollectionOver);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;

    fetchCollectionsStart();
  }

  render() {
    const { match,isFetching } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render= {(props)=>
            <CollectionOverWithSpinner isLoading={isFetching}{...props}/>} 
        />
        <Route
          path={`${match.path}:collectionId`}
          render= {(props)=>
            <CollectionPageWithSpinner isLoading={isFetching}{...props}/>}
        />
      </div>
    );
  }
}

const mapStateToProps = state =>({
  isFetching : selectFetchingStatus(state)
})


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart  : () => dispatch(startCollections())
});

export default connect(
  mapStateToProps ,
  mapDispatchToProps
)(ShopPage);



/*import React from "react";
import CollectionOver from "../components/collection-overview";
import { Route } from "react-router-dom";
import  CollectionPage  from "./category-item";
import { fetchCollectionsFromStore} from "../redux/shop/shop-actions";
import { connect } from "react-redux";

import WithSpinner from "../components/spinner.componenet";
import { selectFetchingStatus } from "../redux/shop/shop.selectors";

const CollectionOverWithSpinner = WithSpinner(CollectionOver);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  state = {
    loading : true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;

    fetchCollectionsStart();

    
  }

  render() {
    const { match,isFetching } = this.props;
    
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render= {(props)=>
        <CollectionOverWithSpinner isLoading={isFetching}{...props}/>} 
        />
        <Route
          path={`${match.path}:collectionId`}
          render= {(props)=>
            <CollectionPageWithSpinner isLoading={isFetching}{...props}/>} 
            />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsFromStore())
});

const mapStateToProps = state =>({
  isFetching : selectFetchingStatus(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);





*/