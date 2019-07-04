var ejs = require('ejs')
const fs = require('fs');
const PATH_HEADER = __dirname + "/header.ejs";
const PATH_FOOTER = __dirname + "/footer.ejs";
const PATH_LAYOUT = __dirname + "/layout.ejs";
function render({title, keyword, description, contentHTML}){
    const renderData = {
        title,
        keyword,
        description,
        header: renderFile(PATH_HEADER),
        footer: renderFile(PATH_FOOTER),
        content: contentHTML,
    };
    let html = renderFile(PATH_LAYOUT,renderData);
    return html;
}
function renderFile(filePath,data){
    let text = fs.readFileSync(filePath,'utf-8');
    let html = ejs.render(text,data);
    return html;
}
module.exports = {
    render: render,
    renderFile:renderFile
};