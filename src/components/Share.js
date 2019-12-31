import React from "react";
import "../stylesheets/share.scss";

class Share extends React.Component {
  render() {
    return (
      <fieldset className="share">
        <button type="submit" className={`share__btn ${this.props.colorCreate}`}>
          <i className="far fa-address-card share__icon"></i>Crear tarjeta
        </button>
        <fieldset className="twitter">
          <h2 className="twitter__title">La tarjeta ha sido creada:</h2>
          <a className="twitter__link" href=""></a>
          <button className="twitter__button ">
            <a href="" target="_blank" className="twitter__link2" />
            <i className="twitter__button--icon fab fa-twitter"></i>Compartir en Twitter
          </button>
        </fieldset>
      </fieldset>
    );
  }
}

export default Share;
