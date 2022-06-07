import React, { Component } from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap'
import Image from '../Image/Image';

import './main.css'

class Main extends Component {
    render() {
        return (
            <div>
                <InputGroup className="mb-3 search-pannel">
                    <FormControl
                    placeholder="Search"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>

                <Image url="https://www.educba.com/academy/wp-content/uploads/2020/10/CSS-Border-Radius.jpg" text="kjk"/>
                <Image url="https://www.educba.com/academy/wp-content/uploads/2020/10/CSS-Border-Radius.jpg" text="kjk"/>
                <Image url="https://www.educba.com/academy/wp-content/uploads/2020/10/CSS-Border-Radius.jpg" text="kjk"/>
                <Image url="https://www.educba.com/academy/wp-content/uploads/2020/10/CSS-Border-Radius.jpg" text="kjk"/>

            </div>
        );
    }
}

export default Main;