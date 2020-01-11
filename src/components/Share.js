import React from "react";
import "../stylesheets/share.scss";
import Loader from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


class Share extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const twitterText = 'Mira que tarjeta más chula me acabo de crear! Esta es mi tarjeta: '
    const loadingElement = this.props.loading ? (<div className="loader__container"><Loader className="loader" type="ThreeDots" color="grey" height="100" width="100" /></div>) : null;

    const twitterBtn = this.props.shareURL
      ? (<fieldset className={`twitter `}>
        <h2 className="twitter__title">La tarjeta ha sido creada:</h2>
        <a className="twitter__link " target="_blank" href={this.props.shareURL}>{this.props.shareURL}</a>
        <button className="twitter__button ">
          <a href={`https://twitter.com/intent/tweet?text=${twitterText}${this.props.shareURL}`} target="_blank" className="twitter__link2" >
            <FontAwesomeIcon className="twitter__button--icon" icon={faTwitter} />
            Compartir en Twitter </a></button>
      </fieldset >)
      : null;


    return (
      <fieldset className="share">
        <button onClick={this.props.handleFetch} type="submit" className={`share__btn ${this.props.shareValue}`}>
          <FontAwesomeIcon className="share__icon" icon={faAddressCard} />
          Crear tarjeta
        </button>
        {loadingElement}
        {twitterBtn}
      </fieldset>
    )
  }
}

export default Share;
