import React from 'react'
import "../Dashboard/Content.css";
import ContentHeader from '../Dashboard/ContentHeader';
import ContentServiceMain from './ContentServiceMain';

export const ContentService = () => {
  return (
    <div className="content-service">
      <ContentHeader/>
      <ContentServiceMain/>
    </div>
  )
}
