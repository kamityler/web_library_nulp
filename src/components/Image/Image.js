import React, { Component } from 'react';
import './Image.css'

class Image extends Component {
    constructor(props){
        super(props);
        this.state={
            url: props.url,
            imgAlt: props.text,
        }
    }
    render() {
        return (
            <div class="polaroid">
                <img src={this.state.url} alt={this.state.imgAlt}/>
                <div class="alt-container">
                    <p>{this.state.imgAlt}</p>
                </div>
            </div>
        );
    }
}

export default Image;