import React from 'react';

export default class Setpost extends React.Component {
  render() {
    return (
      <div className="setpost">
        <div className="setpost__head">
          <h5 className="setpost__title">
            Enter a subreddit below to get started, then start clicking!
    </h5>
        </div>
        <div className="setpost__body">
          <div className="setpost__item ">
            <form action="" className="setpost__subreddit">
              <div className="setpost__subreddit-title">
                Subreddit
        </div>
              <input type="text" className="setpost__input" placeholder=" funny" />
              <button className="setpost__btn">
                Show Suggestion
        </button>
            </form>
          </div>
          <div className="setpost__item without-border">
            <h3 className="setpost__title">
              Suggestion based on <a href=""> /r/funny:</a>
            </h3>
          </div>
          <p className="setpost__item-description">
            rabbits, sweden, behindthegifs, punny, blackepeople twitter.
    </p>
          <p className="setpost__item-description bold">
            <a href=""> Shedule a post to /r/funny:</a>
          </p>

        </div>
      </div>
    )
  }
}
