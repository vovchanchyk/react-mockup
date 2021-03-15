import React from 'react'
import SetpostTwo from './SetpostTwo/SetpostTwo'

export default class Time extends React.Component {
  render () {
    return (

        <section className="section">
       <SetpostTwoHead/>
       <SetpostTwoBody/>
        </section>
    )
  }
}

class SetpostTwoHead extends React.Component {
  render () {
    return (
        <div className="section__header">
          <div className="section__left">
            <h1 className="section__title">MY CONTENTTT</h1>
            <h4 className="section__subtitle">Sort by</h4>
            <nav className="section__routers">
              <li className="section__route">
                <a className="section__link" href="">Recent</a>
              </li>
              <li className="section__route">
                <a className="section__link" href="">Oldest</a>
              </li>
            </nav>
          </div>
          <button className="section__btn">+ADD CONTENT</button>
        </div>
    )
  }
}

class SetpostTwoBody extends React.Component {
  render () {
    return (

        <div className="section__body">
          <SetpostTwo />
        </div>
    )
  }
}
