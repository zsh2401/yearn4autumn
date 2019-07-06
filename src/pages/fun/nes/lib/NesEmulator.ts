import {NES} from 'jsnes';
import {Screen} from './Screen';
import {Speaker} from './Speaker';
export class NesEmulator{
    private nes:any;
    private screen:Screen;
    private speaker:Speaker;
    constructor(
        public canvas:HTMLCanvasElement,
        public audioContext:AudioContext){
            this.speaker = new Speaker(audioContext);
            this.screen = new Screen(canvas);
            this.nes = this.generateNES();
        }
    private generateNES():any{
        return new NES({
            onFrame: this.screen.setBuffer,
            onStatusUpdate: console.log,
            onAudioSample: this.speaker.writeSample,
            sampleRate: this.speaker.getSampleRate()
        });
    }
    private render(){

    }
    boot(romData:string){

    }
}
