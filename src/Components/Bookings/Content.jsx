import React from 'react'
import "../Dashboard/Content.css";
import ContentHeader from '../Dashboard/ContentHeader';
import ContentMain from './ContentMain';

const Content = () => {
  return (
    <div className="content">
        <ContentHeader/>
        <ContentMain/>
    </div>
  )
}
export default Content;