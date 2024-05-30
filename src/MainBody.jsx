import React, { Component } from 'react';

const engineer = {
  name: 'Komal',
  title: 'Software Engineer',
  location: 'Chennai',
  company: 'Verizon',
  imgUrl: 'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png',
  imgWidth: 200,
  imgHeight: 200
}
export default class MainBody extends Component{
  // flag = true;
    render(){
      return(
        <div>
          <img 
          src={engineer.imgUrl} 
          alt="User Avatar image" 
          style={{
            width: engineer.imgWidth,
            height: engineer.imgHeight
          }}
          />
          Welcome <h3>{this.props.name}</h3>
          ID: <h3>{this.props.id}</h3>
          Intern Details: {JSON.stringify(this.props.intern)}
          <p>{this.props.intern.name}</p>
          <p>{this.props.intern.location}</p>
          Registered id's : <h2>{this.props.arrayOfIds[0]}</h2>
          Addition : {this.props.addNumbers(670, 90)}
          {/* You work in <h2>{engineer.company}</h2> */}
          {/* Flag : {this.flag} */}
          </div>
      );
    }
  }