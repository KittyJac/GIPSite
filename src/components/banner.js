import React from "react";
import { Image } from "semantic-ui-react";

export default class Banner extends React.Component {
    render() {
        return (
            <div id="banner">
            <Image src="/img/logo.png" size="small" id="lbit"/>
            </div>
        )
    };
}