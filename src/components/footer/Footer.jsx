import React from 'react'

import SwitterIMG from './../../img/footer/twitter@1.5x.png'

import RedditIMG from './../../img/footer/reddit@1.5x.png'

import InternetIMG from './../../img/footer/internet@1.5x.png'

export default class Footer extends React.Component {
  render () {
    return (
            <footer className="footer">
                <div className="footer__row-up">
                    <ul className="footer__column">
                        <li className="footer__column-item">Home</li>
                        <li className="footer__column-item">Pricing</li>
                        <li className="footer__column-item">FAQS</li>
                    </ul>
                    <ul className="footer__column">
                        <li className="footer__column-item">Privacy policy</li>
                        <li className="footer__column-item">When should I post ?</li>
                        <li className="footer__column-item">Terms \& Conditions</li>
                    </ul>
                </div>
                <div className="footer__row-down">
                    <div className="footer__copuright">Copyright 2017 Masab jamal</div>
                    <div className="footer__uploved">Upvoted.io</div>
                    <div className="footer__links">
                        <h6 className="footer__link-title">Fllow Us</h6>
                        <a href="" className="footer__link"><img src={SwitterIMG} alt="" className="footer__icon"/></a>
                        <a href="" className="footer__link"><img src={RedditIMG} alt="" className="footer__icon"/></a>
                        <a href="" className="footer__link"><img src={InternetIMG} alt="" className="footer__icon"/></a>
                    </div>
                </div>

            </footer>
    )
  }
}
