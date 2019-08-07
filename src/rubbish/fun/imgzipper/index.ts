import Compress from 'compress.js'
const compressor = new Compress()
const ELE_UPLOAD = document.getElementById("upload") as HTMLInputElement;
const ELE_VIEW = document.getElementById("display") as HTMLImageElement;
const ELE_VIEW_AREA = document.getElementById("display-area") as HTMLDivElement;
const ELE_SPAN_COMPRESION_RATE = document.getElementById("c-rate") as HTMLSpanElement;
const ELE_SPAN_BEFORE_SIZE = document.getElementById("before-size") as HTMLSpanElement;
const ELE_SPAN_COMPRESSED_SIZE = document.getElementById("compressed-size") as HTMLSpanElement;
const ELE_CONTROLS_PANEL = document.getElementById("conrols-panel") as HTMLDivElement;
const ELE_RANGE = document.getElementById("range") as HTMLInputElement;
function doCompress(quality:number=0.3)
{
    compressor.compress([...ELE_UPLOAD.files], {
        size: 4,
        quality:quality
    }).then((results) => {
        console.log(results)
        const output = results[0]
        const file = Compress.convertBase64ToFile(output.data, output.ext)
        console.log(file);
        ELE_VIEW.src = output.prefix + output.data
        ELE_SPAN_COMPRESSED_SIZE.textContent = (file.size / 1000.0) + "";
    });
}
function rangeValueChanged(){
    ELE_SPAN_COMPRESION_RATE.textContent = "" + ELE_RANGE.valueAsNumber;
    doCompress((100 - ELE_RANGE.valueAsNumber) / 100.0);
}
function uploadValueChanged()
{
    if(ELE_UPLOAD.files.length != 0){
        ELE_SPAN_BEFORE_SIZE.textContent = (ELE_UPLOAD.files[0].size / 1000.0) + "";
        $(ELE_VIEW_AREA).show();
        $(ELE_CONTROLS_PANEL).show();
        doCompress((100 - ELE_RANGE.valueAsNumber) / 100.0);
    }else
    {
        $(ELE_VIEW_AREA).hide();
        $(ELE_CONTROLS_PANEL).hide();
    }
}
function bindEvent(){
    ELE_UPLOAD.addEventListener('change',uploadValueChanged,false);
    ELE_RANGE.addEventListener('change',rangeValueChanged,false);
}
bindEvent();
