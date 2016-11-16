import React, {Component, PropTypes} from "react";

const iframeStyle = {
    width: '100%',
    border: 'none',
};

export default class Screenshots extends Component {
    render() {
        return (
            <iframe src={this.props.iframeUrl} style={iframeStyle} />
        );
    }
}
