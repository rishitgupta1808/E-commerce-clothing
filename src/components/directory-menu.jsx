import React from 'react';

import './directory-menu.css';
import MenuItem from "./menu-item.jsx";
import { connect } from "react-redux";

const Directory = ({sections}) =>{
        return(
            <div className="directory-menu">
                {
                    sections.map(({title,imageUrl,id,size,linkUrl})=>(
                        <MenuItem key={id} title={title} size={size} imageUrl={imageUrl} linkUrl={linkUrl}/>
                    ))
                }
            </div>

        )
  }

  const mapStateToProps = (state) =>({

    sections : state.directory.sections
  })


export default connect(mapStateToProps)(Directory);