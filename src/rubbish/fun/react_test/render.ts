declare const REACT_PAGE:string;
const hpug = require('hpug');
const template = require(REACT_PAGE);
export default template(hpug.getData());