import React from "react";

import './preview.collection.scss';

import { withRouter } from "react-router-dom";

import  Item  from './item.collection.jsx';

import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
  } from './preview.collection.styles';
  
  const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => history.push(`${match.path}${routeName}`)}>
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <Item key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
  
  export default withRouter(CollectionPreview);

/*const Collection = ({title,items,history,match,routeName}) =>{
   

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

*/