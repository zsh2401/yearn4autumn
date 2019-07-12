// import $ from 'jquery'
// declare function $(params:any):any;
import Compress from 'compress.js'
const compressor = new Compress()
const ELE_UPLOAD = document.getElementById("upload") as HTMLInputElement;
const ELE_VIEW = document.getElementById("display") as HTMLImageElement;
const ELE_RANGE = document.getElementById("range") as HTMLInputElement;
const ELE_BTN = document.getElementById("dobtn") as HTMLButtonElement;
function doCompress()
{
    compressor.compress([...ELE_UPLOAD.files], {
        size: 4,
        quality: ELE_RANGE.valueAsNumber / 100.0
    }).then((results) => {
        console.log(results)
        const output = results[0]
        const file = Compress.convertBase64ToFile(output.data, output.ext)
        console.log(file)
        ELE_VIEW.src = output.prefix + output.data
    });
}
ELE_RANGE.addEventListener('change',doCompress,false);
ELE_UPLOAD.addEventListener('change',doCompress,false);