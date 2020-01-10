import React from "react";
import "../stylesheets/share.scss";
import ReactLoading from 'react-loading';
import Loader from 'react-loader-spinner';

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

    // this.setState({
    //   hidden: ""
    // });
  }

  render() {
    if (this.props.loading) {
      return (
        <fieldset className="share">
          <button onClick={this.props.handleFetch} type="submit" className="share__btn ">
            <i className="far fa-address-card share__icon"></i>Crear tarjeta
        </button>
          <fieldset className={`twitter `}>
            <h2 className="twitter__title">La tarjeta ha sido creada:</h2>
            <div className="loader__container">
              <Loader className="loader" type="ThreeDots" color="grey" height="100" width="100" />
            </div>
          </fieldset>

        </fieldset>
      )
    }
    return (
      <fieldset className="share">
        <button onClick={this.props.handleFetch} type="submit" className={`share__btn ${this.props.shareValue}`}>
          <i className="far fa-address-card share__icon"></i>Crear tarjeta
        </button>
        <fieldset className={`twitter `}>
          <h2 className="twitter__title">La tarjeta ha sido creada:</h2>
          <a className="twitter__link " href={this.props.url} target="_blank">{this.props.url}</a>
          <button className="twitter__button ">
            <a href="" target="_blank" className="twitter__link2 " />
            <i className="twitter__button--icon fab fa-twitter"></i>Compartir en Twitter
          </button>
        </fieldset>
      </fieldset >
    );
  }
}

export default Share;
