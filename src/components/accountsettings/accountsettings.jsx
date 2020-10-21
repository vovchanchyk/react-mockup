import React from 'react';
import Ditails from './Ditails/Ditails';

export default class AccountSettings extends React.Component {

    render() {
      return (
  
        <section className="section">
          <AccountSettingsHead/>
          <AccountSettingsBody />
        </section>
      )
    }
  }

  class AccountSettingsHead extends React.Component {

    render() {
      return (
        <div className="section__header">
          
            <h1 className="section__title">ACCOUNT SETTINGS</h1>
        </div>
      )
  
    }
  }
  class AccountSettingsBody extends React.Component {
  
    render() {
      return (
  
        <div className="section__body">
           <Ditails /> 
        </div>
      )
    }
  }
  