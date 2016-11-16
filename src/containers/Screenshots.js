import React, {Component} from "react";
import ScreenshotsComponent from "../components/Screenshots";

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
        // TODO: Need to find a good way to get the domain. Relying on the `window` is not... nice.
        const domain = window.STORYBOOK_ADDON_GEMINI_DOMAIN;
        if (!domain) {
            return <p>Please configure `window.STORYBOOK_ADDON_GEMINI_DOMAIN` to the host + port where Gemini GUI is running</p>;
        }
        const combinedName = `${kind}: ${story}`;
        const url = `${domain}?suite=${encodeURIComponent(combinedName)}`;
        return <ScreenshotsComponent iframeUrl={url} />;
    }
}
