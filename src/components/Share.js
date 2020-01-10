import React from "react";
import "../stylesheets/share.scss";

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: "hidden"
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(ev) {
    ev.preventDefault();

    this.setState({
      hidden: ""
    });
  }

  render() {

    const tweetText = '¡Échale un vistazo a mi tarjeta de visita zero-waste! ¿A qué esperas para hacer la tuya?'
    return (
      <fieldset className="share">
        <button onClick={this.clickHandler} type="submit" className="share__btn ">
          <i className="far fa-address-card share__icon"></i>Crear tarjeta
        </button>
        <fieldset className={`twitter ${this.state.hidden}`}>
          <h2 className="twitter__title">La tarjeta ha sido creada:</h2>
          <a className="twitter__link " href=""></a>
          <button className="twitter__button ">
            <a href={`https://twitter.com/intent/tweet?text=${tweetText}`} target="_blank" className="twitter__link2" />
            <i className="twitter__button--icon fab fa-twitter" ></i>Compartir en Twitter
          </button>
        </fieldset>
      </fieldset>
    );
  }
}

export default Share;
