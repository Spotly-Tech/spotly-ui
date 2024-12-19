export default {
    parserOpts: {
        headerPattern: /^\[([A-Za-z0-9-]+)(?:\((\w*)\))?\]: (.+)$/,
        headerCorrespondence: ["type", "scope", "subject"],
    },
};
