import React from "react";
import '../stylesheets/image.scss'

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(ev) {
        ev.preventDefault();
        this.fileInput.click();
    }
    render() {
        return (
            <div>
                <label className="fill__lable" htmlFor="image">
                    Imagen de perfil
                </label>
                <div className="fill__image">
                    <button type="button" onClick={this.handleClick} className="fill__image--button">Añadir imagen</button>
                    <input onChange={this.props.fileSelectedHandler} type="file" name="" id="img-selector" className="fill__image--input" ref={fileInput => this.fileInput = fileInput} />
                    <div className="fill__image--miniature" style={{ backgroundImage: `url(${this.props.photo})` }}></div>
                </div>
            </div >
        )
    }
}

export default Image;