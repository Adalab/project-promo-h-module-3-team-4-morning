import React from "react";
import "../stylesheets/share.scss";
import Loader from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


const Share = props => {
  const { loading, errorMessage, url, handleFetch, name, job, photo, phone, email, linkedin, github, shareValue } = props
  const twitterText = 'Mira que tarjeta más chula me acabo de crear! Esta es mi tarjeta: '
  const loadingElement = loading ? (<div className="loader__container"><Loader className="loader" type="ThreeDots" color="grey" height="100" width="100" /></div>) : null;
  const errorMessageLoged = errorMessage ? <p>{errorMessage}</p> : null;
  const twitterBtn = url
    ? (<fieldset className="twitter">
      <h2 className="twitter__title">La tarjeta ha sido creada:</h2>
      {errorMessageLoged}
      <a className="twitter__link " target="_blank" rel="noopener noreferrer" href={url}>¡Click aquí para ver tu tarjeta! :)</a>
      <button className="twitter__button">
        <a href={`https://twitter.com/intent/tweet?text=${twitterText}${url}`} target="_blank" rel="noopener noreferrer" className="twitter__link2" >
          <FontAwesomeIcon className="twitter__button--icon" icon={faTwitter} />
          Compartir en Twitter </a></button>
    </fieldset >)
    : null;

  return (

    <fieldset className="share" >
      <button onClick={handleFetch} type="submit" className={`share__btn ${shareValue}`}>
        <FontAwesomeIcon className="share__icon" icon={faAddressCard} />
        Crear tarjeta
        </button>
      {errorMessage}
      {!name && !!errorMessage && <li>Nombre completo</li>}
      {!job && !!errorMessage && <li>Puesto</li>}
      {!photo && !!errorMessage && <li>Imagen de perfil</li>}
      {!email && !!errorMessage && <li>Email</li>}
      {!phone && !!errorMessage && <li>Teléfono</li>}
      {!linkedin && !!errorMessage && <li>LinkedIn</li>}
      {!github && !!errorMessage && <li>Github</li>}
      {loadingElement}
      {twitterBtn}
    </fieldset>

  );
};

export default Share;
