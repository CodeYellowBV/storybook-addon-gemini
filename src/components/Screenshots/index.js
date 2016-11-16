import React, {Component, PropTypes} from "react";
import {css} from "aphrodite";
import specs from "./style"

export default class Screenshots extends Component {

    render() {
        let { kind, story } = this.props;
        return (
            <div>
                <h1>{kind}</h1>
                <p>{story}</p>
            </div>
        );
    }
}
