import React from "react";
import "../stylesheets/share.scss";
import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

class Share extends React.Component {
  render() {
    const twitterText = "Mira que tarjeta más chula me acabo de crear! Esta es mi tarjeta: ";
    const loadingElement = this.props.loading ? (
      <div className="loader__container">
        <Loader className="loader" type="ThreeDots" color="grey" height="100" width="100" />
      </div>
    ) : null;
    const errorMessage = this.props.errorMessage ? <p>{this.props.errorMessage}</p> : null;
    const twitterBtn = this.props.shareURL ? (
      <fieldset className={`twitter `}>
        <h2 className="twitter__title">La tarjeta ha sido creada:</h2>
        {errorMessage}
        <a className="twitter__link " target="_blank" rel="noopener noreferrer" href={this.props.shareURL}>
          {this.props.shareURL}
        </a>
        <button className="twitter__button ">
          <a href={`https://twitter.com/intent/tweet?text=${twitterText}${this.props.shareURL}`} target="_blank" rel="noopener noreferrer" className="twitter__link2">
            <FontAwesomeIcon className="twitter__button--icon" icon={faTwitter} />
            Compartir en Twitter{" "}
          </a>
        </button>
      </fieldset>
    ) : null;

    return (
      <fieldset className="share">
        <button onClick={this.props.handleFetch} type="submit" className={`share__btn ${this.props.shareValue}`}>
          <FontAwesomeIcon className="share__icon" icon={faAddressCard} />
          Crear tarjeta
        </button>
        {errorMessage}
        {!this.props.name && !!this.props.errorMessage && <li>Nombre completo</li>}
        {!this.props.job && !!this.props.errorMessage && <li>Puesto</li>}
        {!this.props.photo && !!this.props.errorMessage && <li>Imagen de perfil</li>}
        {!this.props.email && !!this.props.errorMessage && <li>Email</li>}
        {!this.props.phone && !!this.props.errorMessage && <li>Teléfono</li>}
        {!this.props.linkedin && !!this.props.errorMessage && <li>LinkedIn</li>}
        {!this.props.github && !!this.props.errorMessage && <li>Github</li>}
        {loadingElement}
        {twitterBtn}
      </fieldset>
    );
  }
}

Share.propTypes = {
  defaultImage: PropTypes.string,
  loading: PropTypes.bool,
  errorMessage: PropTypes.string,
  loadingElement: PropTypes.string,
  twitterBtn: PropTypes.string,
  shareValue: PropTypes.string,
  handleFetch: PropTypes.func
};

export default Share;
