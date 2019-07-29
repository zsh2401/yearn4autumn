import fs from 'fs'
export function getNoticeSetting():any{
    let text = fs.readFileSync("notice.json",'utf-8');
    return JSON.parse(text);
}