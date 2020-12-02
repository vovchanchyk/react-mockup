import Axios from "axios";
import { useFormik } from "formik";
import React from "react";

export class MyContentCreatePost extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="section">
        <MyContentHeadCreatePost />
        <MyContentBodyCreatePost />
      </section>
    );
  }
}

class MyContentHeadCreatePost extends React.Component {
  render() {
    return (
      <div className="section__header">
        <div className="section__left">
          <h1 className="section__title">MY CONTENT</h1>
          <h4 className="section__subtitle">Sort by</h4>
          <nav className="section__routers">
            <li className="section__route">
              <a className="section__link" href="">
                Recent
              </a>
            </li>
            <li className="section__route">
              <a className="section__link" href="">
                Oldest
              </a>
            </li>
          </nav>
        </div>
        <button className="section__btn">+ADD CONTENT</button>
      </div>
    );
  }
}

class MyContentBodyCreatePost extends React.Component {
  render() {
    return <CreatePost />;
  }
}

export const CreatePost = (props) => {
  // const [body, setBody] = useState('')
  // const changeHandler = (e) => {
  //   let val = e.target.value
  //   setBody(val)
  // }

  const formik = useFormik({
    initialValues: {
      userId: 1,
      title: "title",
      body: "",
    },
    onSubmit: (values, { resetForm }) => {
      Axios.post("http://localhost:3000/posts", values).then((response) => {
        console.log(response);
        resetForm({ body: "" });
      });
    },
  });

  return (
    <div className="section__body">
      {console.log(formik.values.text)}
      <div className="createpost">
        <form className="createpost__form" onSubmit={formik.handleSubmit}>
          <h4 className="createpost__title">LEAVE YOUR POST</h4>
          <textarea
            className="createpost__textarea"
            name="body"
            id=""
            cols="30"
            rows="10"
            value={formik.values.body}
            onChange={formik.handleChange}
          ></textarea>
          <input className="createpost__btn" type="submit" value="POST" />
        </form>
      </div>
    </div>
  );
};
