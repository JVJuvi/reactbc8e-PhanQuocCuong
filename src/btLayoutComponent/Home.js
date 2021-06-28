import React, { Component } from 'react'
import HeaderComponent from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default class Home extends Component {




    render() {
        return (
            <div>
                <div>
                    <HeaderComponent></HeaderComponent>
                </div>
                <div className = "container">
                    <Body></Body>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}
