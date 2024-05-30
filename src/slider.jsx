import React, { Component } from 'react';

export default class Slider extends Component{

    state = {
        images: [
            "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
            "https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753_1280.jpg"
        ],
        index: 0
    }

    nextImage = () => {
        if(this.state.images.length-1 > this.state.index){
        this.setState({
                index: this.state.index + 1
        });
    }else{
        this.setState({
            index: 0
    });
    }
        console.log(this.state.index);
    }

    previousImage = () => {
        this.setState({
            index: this.state.index - 1
        });
        console.log(this.state.index);
    }

    render(){
        return(
            <div>
                <button onClick={this.nextImage}>Next</button>
                <button onClick={this.previousImage}>Previous</button>
                <img 
                src={this.state.images[this.state.index]} 
                alt="Image from Pixabay"
                style={{
                    width: 400,
                    height: 400
                }}
                />
            </div>
        );
    }
}