import React from 'react'
import Setpost from './Setpost/Setpost'

export default class Discover extends React.Component {
  render () {
    return (

        <section className="section">
       <DiscoverHead/>
       <DiscoverBody/>

        </section>
    )
  }
}

// discover
class DiscoverHead extends React.Component {
  render () {
    return (
        <div className="section__header">

            <h1 className="section__title">DISCOVER SUBRIDDITS</h1>

        </div>
    )
  }
}

class DiscoverBody extends React.Component {
  render () {
    return (

        <div className="section__body">
         <Setpost />
        </div>
    )
  }
}
