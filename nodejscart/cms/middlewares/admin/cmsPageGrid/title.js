const { getComponentSource } = require("../../../../../lib/util");

module.exports = (request, response) => {
    response.addComponent("title", "head", getComponentSource("title.js"), { "title": "Pages" }, 1);
}