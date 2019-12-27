import React from "react";
import '../stylesheets/image.scss'
import axios from 'axios';

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        };
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
        this.fileUploadHandler = this.fileUploadHandler.bind(this);

    }

    fileSelectedHandler(ev) {
        let myFile = ev.target.files[0];
        console.log(ev.target.files[0]);
        this.setState({
            selectedFile: [myFile]
        });
    }
    fileUploadHandler() {
        console.log(this.state.selectedFile);
        debugger;
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post(`url(${fd.result})`, fd.then(res => {
            console.log(res);
        }));
    }

    render() {
        return (
            <div>
                <label className="fill__lable" htmlFor="image">
                    Imagen de perfil
                </label>
                <div className="fill__image">
                    <button onClick={this.fileUploadHandler} className="fill__image--button">Añadir imagen</button>
                    <input onChange={this.fileSelectedHandler} type="file" name="" id="img-selector" className="fill__image--input" />
                    <div className="fill__image--miniature"></div>
                </div>
            </div>)
    }

}

export default Image;