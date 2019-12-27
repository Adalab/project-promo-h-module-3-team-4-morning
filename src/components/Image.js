import React from "react";
import '../stylesheets/image.scss'
import axios from 'axios';

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.fr = new FileReader();
        this.state = {
            selectedFile: null,
            imageUrl: ''
        };
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
        this.fileUploadHandler = this.fileUploadHandler.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    fileSelectedHandler(ev) {
        let myFile = ev.target.files[0];
        this.fr.addEventListener('load', this.fileUploadHandler);
        this.fr.readAsDataURL(myFile);
        this.setState({
            selectedFile: [myFile]
        });
    }
    fileUploadHandler() {
        const imageData = this.fr.result;
        this.setState({
            image: [imageData]
        });
        console.log(imageData)
        this.forceUpdate();
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
                    <button onClick={this.handleClick} className="fill__image--button">Añadir imagen</button>
                    <input onChange={this.fileSelectedHandler} type="file" name="" id="img-selector" className="fill__image--input" ref={fileInput => this.fileInput = fileInput} />
                    <div className="fill__image--miniature" style={{ backgroundImage: `url(${this.state.image})` }}></div>
                </div>
            </div >
        )
    }

}

export default Image;