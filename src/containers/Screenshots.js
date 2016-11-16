import React, {Component} from "react";
import ScreenshotsComponent from "../../components/Screenshots/";

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
        let { kind, story } = this.state;
        // TODO: can this ever happen? If so, we should show some message.
        if (!kind) {
            return null;
        }
        const domain = 'http://localhost:8000/';
        const combinedName = `${kind}: ${story}`;
        const url = `${domain}?suite=${encodeURIComponent(combinedName)}`;
        return <ScreenshotsComponent iframeUrl={url} />;
    }
}
