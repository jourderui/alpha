module.exports = {
    entry: "./client/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    devtool: "source-map"
};