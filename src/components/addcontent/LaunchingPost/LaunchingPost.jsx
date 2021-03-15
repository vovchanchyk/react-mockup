import React from 'react'

export default class LaunchingPost extends React.Component {
  render () {
    return (

      <div className="launching">
        <div className="launching__head">
          <div className="launching__progress">
            <span className="launching__progress-rate all-steps"></span>
            <ul className="launching__progressbar">
              <li className="launching__progress-step checked  add-content"></li>
              <li className="launching__progress-step checked shedule-post"></li>
            </ul>
          </div>
        </div>
        <div className="launching__body">
          <div className="launching__post">
            <div className="launching__post-beetwen">
              <h3 className="launching__post-title">
                The Fortune
            </h3>
              <button className="launching__btn">
                text
            </button>
            </div>

            <p className="launching__post-description">
              For those that grew up in poor or average
              house hold income and now are very sucessful
              how do you handle being
              involed with your parents
              or family that may alot less
              fortunate financially?
          </p>

          </div>
          <div className="launching__post">
            <h3 className="launching__post-title">
              Post this contents to...
             </h3>
            <form className="launching__subreddit">
              <h5 className="launching__subreddit-title"> </h5>
              <input type="text" className="launching__subreddit-input" />

            </form>

          </div>

          <div className="launching__post without-border">
            <form action="" className="launching__form">
              <div className="launching__radio">
                <label className="launching__radio-label" htmlFor="radio-1">
                  <input className="launching__radio-item" type="radio" name="at" id="radio-1" />     Best time in the next 24 hours
              </label>
                <label className="launching__radio-label launching__radio-label--checked" htmlFor="radio-2">
                  <input className="launching__radio-item" type="radio" name="at" id="radio-2" />     Best time in the next 7 days
              </label>
                <label className="launching__radio-label" htmlFor="radio-3">
                  <input className="launching__radio-item" type="radio" name="at" id="radio-3" />   Chose time
              </label>
              </div>
              <div className="launching__fields">
                <label htmlFor="" className="launching__fields-label">
                  <span className="launching__fields-name">DATA</span>
                  <input type="text" className="launching__fields-input" />
                </label>

                <label htmlFor="" className="launching__fields-label">
                  <span className="launching__fields-name">TIME</span>
                  <input type="text" className="launching__fields-input" />
                </label>

              </div>
              <div className="launching__swich">
                <input type="checkbox" className="launching__checkbox" />
              </div>

            </form>

          </div>
        </div>
      </div>

    )
  }
}
