import React from "react";
import "../stylesheets/preview.scss";
import Icon from "./Icon";
import defaultImage from '../images/default-profile.png'


class Preview extends React.Component {
  render() {
    return (
      <section className="preview">
        <div className="preview__container">
          <button onClick={this.props.resetHandler} className="preview__reset">
            <i className="far fa-trash-alt preview__icon"></i>reset
          </button>
          <article className="preview__display">
            <header className="preview__display--header">
              <div className="preview__display--container">
                <h3 className="preview__display--title ">{this.props.name || `Nombre Apellido`}</h3>
                <h3 className="preview__display--subtitle ">{this.props.job || `Front-end Developer`}</h3>
              </div>
            </header>
            <div className="preview__display--img" style={{ backgroundImage: `url(${this.props.image || defaultImage})` }}></div>
            <footer className="preview__display--footer menu">
              <ul className="menu__list">
                <Icon
                  classLi="menu__items--email"
                  classI="far fa-envelope"
                  href={`mailto:${this.props.email}`}
                  filter={this.props.email}
                />
                <Icon
                  classLi="menu__items--phone"
                  classI="fas fa-mobile-alt"
                  href={`tel:+${this.props.phone}`}
                  filter={this.props.phone}
                />
                <Icon
                  classLi="menu__items--linkedin"
                  classI="fab fa-linkedin-in"
                  href={`https://www.linkedin.com/in/${this.props.linkedin}`}
                  filter={this.props.linkedin}
                />
                <Icon
                  classLi="menu__items--github"
                  classI="fab fa-github-alt"
                  href={`https://www.github.com/${this.props.github}`}
                  filter={this.props.github}
                />
              </ul>
            </footer>
          </article>
        </div>
      </section>
    );
  }
}
export default Preview;
