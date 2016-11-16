import React, {Component} from "react";
import ScreenshotsComponent from "../../components/Screenshots/";
import {EVENT_ID} from "../../";


export default class Screenshots extends Component {
    constructor(props, ...args) {
        super(props, ...args);
        this.state = { kind: null, story: null };
    }

    componentDidMount() {
        this.props.api.onStory((kind, story) => {
            this.setState({
                kind,
                story,
            });
        });
    }

    render() {
        // TODO: can this ever happen? If so, we should show some message.
        if (!this.state.kind) {
            return null;
        }
        return <ScreenshotsComponent kind={this.state.kind} story={this.state.story} />;
    }
}
