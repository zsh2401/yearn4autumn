import * as nes from './lib/NesEmulator';
require('./rom/contra.nes');
require('./rom/sm.nes');
require('./rom/kcontra.nes');

function init(){
    let screenCanvas = document.getElementById("screen") as HTMLCanvasElement;
    let emulator = new nes.NesEmulator(screenCanvas,eval("new window.AudioContext()"));
    getNesDataWithAjax('/assests/nes/kcontra.nes',(data)=>{
        emulator.boot(data);
    });
}
export function getNesDataWithAjax(path:string,callback:Function):void{
    var req = new XMLHttpRequest();
	req.open("GET", path);
	req.overrideMimeType("text/plain; charset=x-user-defined");
    req.onerror = () => console.log(`Error loading ${path}: ${req.statusText}`);
    req.onload = function() {
		if (this.status === 200) {
            callback(this.responseText);
		} else if (this.status === 0) {
			// Aborted, so ignore error
		} else {
			// req.onerror();
		}
	};
	req.send();
}
init();