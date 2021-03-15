import React from 'react'

export default class SetpostTwo extends React.Component {
  render () {
    return (
        <div className="setposttwo">
          <div className="setposttwo__head">
            <h5 className="setposttwo__title">
              Enter a subreddit below to get started, then start clicking!
           </h5>
          </div>
          <div className="setposttwo__body">
            <div className="setposttwo__item several-subreddit">
              <form action="" className="setposttwo__subreddit">
                <div className="setposttwo__subreddit-title">Subreddit</div>
                <input
                  type="text"
                  className="setposttwo__input"
                  placeholder=" funny"
                />
              </form>
              <form action="" className="setposttwo__subreddit">
                <div className="setposttwo__subreddit-title">
                  Vote Threshold
          </div>

                <input
                  type="text"
                  className="setposttwo__input"
                  placeholder=" funny"
                />
                <p className="setposttwo__item-description">
                  Select the minimum bote value for a submission to be
            included in  the calculatoin. <span className="blue"> More information</span>
                </p>
                <button className="setposttwo__btn">Analyse Subreddit Traffic</button>
              </form>
            </div>
            <div className="setposttwo__item without-border">
              <a href="" className="setposttwo__link">Result will be appear here</a>
            </div>

          </div>
        </div>

    )
  }
}
