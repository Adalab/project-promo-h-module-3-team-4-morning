import React from "react";
import "../stylesheets/mainStyle.scss";

class Preview extends React.Component {
  render() {
    return (
      <section className="preview">
        <div className="preview__container">
          <button className="preview__reset">
            <i className="far fa-trash-alt preview__icon"></i>reset
          </button>
          <article className="preview__display">
            <header className="preview__display--header">
              <div className="preview__display--container">
                <h3 className="preview__display--title js-preview-title js-preview">Nombre Apellido</h3>
                <h3 className="preview__display--subtitle js-preview-subtitle js-preview">Front-end Developer</h3>
              </div>
            </header>
            <div className="preview__display--img"></div>
            <footer className="preview__display--footer menu">
              <ul className="menu__list">
                <li className="menu__items menu__items--phone filter">
                  <a className="menu__links js-link-phone js-preview" href="" target="_blank">
                    <i className="far fa-envelope"></i>
                  </a>
                </li>
                <li className="menu__items menu__items--email filter">
                  <a className="menu__links js-link-email js-preview" href="" target="_blank">
                    <i className="fas fa-mobile-alt"></i>
                  </a>
                </li>
                <li className="menu__items menu__items--linkedin filter">
                  <a className="menu__links js-link-linkedin js-preview" href="" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="menu__items menu__items--github filter  ">
                  <a className="menu__links js-link-github js-preview" href="" target="_blank">
                    <i className="fab fa-github-alt"></i>
                  </a>
                </li>
              </ul>
            </footer>
          </article>
        </div>
      </section>
    );
  }
}
export default Preview;
