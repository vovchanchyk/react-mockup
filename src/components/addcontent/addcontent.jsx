import React from 'react';

import LaunchingPost from './LaunchingPost/LaunchingPost';

export default class AddContent extends React.Component {

    render() {
      return (
  
        <section className="section">
       <AddContentHead/>
       <AddContentBody/>
       
  
          
        </section>
      )
    }
  }

  class AddContentHead extends React.Component {

    render() {
      return (
        <div className="section__header">
          
            <h1 className="section__title">ADD CONTENT</h1>
            
        </div>
      )
  
    }
  }
  
  class AddContentBody extends React.Component {
  
    render() {
      return (
  
        <div className="section__body">      
         <LaunchingPost />
        </div>
      )
    }
  }
  