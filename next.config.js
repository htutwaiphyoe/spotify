module.exports = {
    webpack: (config) => {
        config.node = {
            fs: "empty",
        };
        return config;
    },
    env: {
        dbUrlString:
            "mongodb+srv://mtucdmsupport:mtucdmsupport1221@cluster0.1l9ao.mongodb.net/mtucdmsupport?retryWrites=true&w=majority",
    },
};
