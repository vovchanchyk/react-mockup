import React from 'react'

export default class Ditails extends React.Component {
  render () {
    return (
        <div className="ditails">
          <div className="ditails__head">
            <h5 className="ditails__title">
             You can manage details here or upgrade your subscription.
      </h5>
    </div>
    <div className="ditails__body">
      <div className="ditails__row">
        <h4 className="ditails__subreddit-title">Subreddit</h4>
        <p className="ditails__body-description">
          You have used 1/5 post this month
        </p>
        <div className="ditails__progress">
          <span className="ditails__progress-rate"> </span>
        </div>
      </div>
      <div className="ditails__row ditails__border-bottom">
        <h4 className="ditails__subreddit-title">
          Casual
        </h4>
        <p className="ditails__body-description">
          Shedule upto 5 posts per calender month.
          <span className="blue">
              Free
          </span>
        </p>
        <h3 className="ditails__subtitle blue">Manage Subscription</h3>
      </div>
      <div className="ditails__row">
        <h3 className="ditails__body-title">
          Posting Profile for <span className="blue"> /u/jtrugs</span>
        </h3>
        <div className="ditails__crums">
          <p className="ditails__crumb">
            link Karma:
            <span className="light"> 1389 </span>
          </p>
          <p className="ditails__crumb">
            Commnet Karma:
            <span className="light"> 389 </span>
          </p>
          <p className="ditails__crumb">
            Redditor scince:
            <span className="light"> 1999 </span>
          </p>
        </div>
        <h4 className="ditails__subreddit-title">
          Status: <span className="ditails__status-title"> Need Work</span>
        </h4>
        <div className="ditails__progress">
          <span className="ditails__progress-rate"> </span>
        </div>
        <p className="ditails__score">
          ( <span className="bold">Score :</span> 2/8 )
        </p>
        <p className="ditails__body-description">
          Improve you score will(in theory) improve your ability to post without
          encountering captchs or rate limits.
        </p>
      </div>
      <p className="ditails__crumb-title red bold">Your email is unverified.</p>
    </div>
  </div>
    )
  }
}
