import React from 'react';
import PostSIMG from './../../../img/sidebar/post-it.png';
import CopyIMG from './../../../img/crumbs/time_copy@1.5x.png';
import GarbageIMG from './../../../img/crumbs/garbage_copy@1.5x.png';
import SearchIMG from './../../../img/sidebar/magnifying-glass.png';




export default class Post extends React.Component {

  render() {
    return (
      <div className="post ">
        <p className="post__description">
          For those that grew up in poor or average house hold income
          and now are very sucessful how do you handle being involed
          with your parents or family that may alot less fortunate
          financially?
      </p>
        <ul className="post__crumbs">
          <li className="post__crumb">
            <img
              className="crumb__img"
              src={CopyIMG}
              alt=""
            />
            <a href="" className="crumb__link"> Shedule Post </a>
          </li>

          <li className="post__crumb">
            <img className="crumb__img" src={PostSIMG} alt="" />
            <a href="" className="crumb__link"> Copy</a>
          </li>
          <li className="post__crumb">
            <img className="crumb__img" src={SearchIMG} alt="" />
            <a href="" className="crumb__link"> Edit</a>
          </li>
          <li className="post__crumb">
            <img
              className="crumb__img"
              src={GarbageIMG}
              alt=""
            />
            <a href="" className="crumb__link"> Delete</a>
          </li>
        </ul>
        <div className="post__rect">
          No post has been sheduled for this item.
      </div>
      </div>

    )
  }
}