import React from "react";
import "../stylesheets/preview.scss";
import Icon from "./Icon";
import defaultImage from "../images/default-profile.png";

class Preview extends React.Component {
  render() {
    return (
      <section className="preview">
        <div className="preview__container">
          <button onClick={this.props.resetHandler} className="preview__reset">
            <i className="far fa-trash-alt preview__icon"></i>reset
          </button>
          <article className={`preview__display palette${this.props.palette}`}>
            <header className="preview__display--header">
              <div className="preview__display--container">
                <h3 className="preview__display--title">{this.props.name || "Nombre Apellido"}</h3>
                <h3 className="preview__display--subtitle">{this.props.job || "Front-end Developer"}</h3>
              </div>
            </header>
            <div className="preview__display--img" style={{ backgroundImage: `url(${this.props.photo || defaultImage})` }}></div>
            <footer className="preview__display--footer menu">
              <ul className="menu__list">
                <Icon href={`mailto:${this.props.email}`} classLi={`menu__items--email ${this.props.email ? '' : 'filter'}`} classI="far fa-envelope" />
                <Icon href={`tel:+${this.props.phone}`} classI="fas fa-mobile-alt" classLi={`menu__items--phone ${this.props.phone ? '' : 'filter'}`} />
                <Icon href={`https://www.linkedin.com/in/${this.props.linkedin}`} classLi={`menu__items--linkedin ${this.props.linkedin ? '' : 'filter'}`} classI="fab fa-linkedin-in" />
                <Icon href={`https://www.github.com/${this.props.github}`} classLi={`menu__items--github ${this.props.github ? '' : 'filter'}`} classI="fab fa-github-alt" />
              </ul>
            </footer>
          </article>
        </div>
      </section>
    );
  }
}
export default Preview;
