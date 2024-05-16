import React from 'react'
import "./Content.css"
import ContentHeader from './ContentHeader';
import Card from './Card';

const Content = () => {
  return (
    <div className="content">
        <ContentHeader/>
        <Card/>
    </div>
  )
}
export default Content;