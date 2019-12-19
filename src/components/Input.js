import React from "react";
import "../stylesheets/mainStyle.scss";

class Input extends React.Component {
  constructor (props) {
    super(props);
    this.state={
      name:'',
      job:'',
      email:'',
      phone:'',
      linkedin:'',
      github:''
    }
    this.handleInputValue=this.handleInputValue.bind(this);
  }

  handleInputValue(ev){
    debugger;
    console.log(`esto es name`+ this.state.name)
    console.log('esto es job'+ this.state.job)
    if (ev.currentTarget.id === 'name'){
   this.setState ( {
     name:ev.currentTarget.value
   });
  }
  }


  render() {
    return (
      <div>
        <label className="fill__lable" htmlFor={this.props.htmlFor}>
          {this.props.text}
        </label>
        <input onChange={this.handleInputValue} className="fill__box js-input" type={this.props.type} id={this.props.id} name={this.props.name} placeholder={this.props.placeholder} pattern={this.props.pattern} required />
      </div>
    );
  }
}

export default Input;
