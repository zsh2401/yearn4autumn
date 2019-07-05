const HEADER = require('./header.ejs');
const FOOTER = require('./footer.ejs');
const LAYOUT = require('./layout.ejs');
function render({title, keyword, description, content}){
    const renderData = {
        title,
        keyword,
        description,
        header: HEADER(),
        footer: FOOTER(),
        content: content(),
    };
    return LAYOUT(renderData);
}
module.exports = render;