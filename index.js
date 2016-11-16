module.exports = {
    // This is a small helper to make writing Gemini tests easier with Storybook.
    setStory(suite, kind, story) {
        const uriKind = encodeURIComponent(kind);
        const uriStory = encodeURIComponent(story);

        return suite
        .setUrl(`/iframe.html?selectedKind=${uriKind}&selectedStory=${uriStory}`)
        .setCaptureElements('#root');
    }
};
