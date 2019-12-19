import React from "react";
import "../stylesheets/mainStyle.scss";

class Share extends React.Component {
  render() {
    return (
      <fieldset className="share">
        <button type="submit" className="share__btn js-share__btn filter">
          <i className="far fa-address-card share__icon"></i>Crear tarjeta
        </button>
        <fieldset className="twitter hidden">
          <h2 className="twitter__title">La tarjeta ha sido creada:</h2>
          <a className="twitter__link js-response" href="#"></a>
          <button className="twitter__button ">
            <a href="" target="_blank" className="twitter__link2 js-button-twitter" />
            <i className="twitter__button--icon fab fa-twitter"></i>Compartir en Twitter
          </button>
        </fieldset>
      </fieldset>
    );
  }
}

export default Share;
