const SCREEN_WIDTH = 256;
const SCREEN_HEIGHT = 240;
export class Screen{
    private SCREEN_WIDTH = 256;
    private SCREEN_HEIGHT = 240;
    private context:CanvasRenderingContext2D;
    private imageData:ImageData;
    private buf:ArrayBuffer;
    private buf8:Uint8ClampedArray;
    private buf32:Uint32Array;
    constructor(private canvas:HTMLCanvasElement){
        this.context = canvas.getContext("2d");
        this.imageData = this.context.getImageData(0,0,SCREEN_WIDTH,SCREEN_HEIGHT);
        this.context.fillStyle = "black";
        // set alpha to opaque
        this.context.fillRect(0, 0, this.SCREEN_WIDTH, this.SCREEN_HEIGHT);

        // buffer to write on next animation frame
        this.buf = new ArrayBuffer(this.imageData.data.length);
        // Get the canvas buffer in 8bit and 32bit
        this.buf8 = new Uint8ClampedArray(this.buf);
        this.buf32 = new Uint32Array(this.buf);

        // Set alpha
        for (var i = 0; i < this.buf32.length; ++i) {
        this.buf32[i] = 0xff000000;
        }
    }
    setBuffer(buffer:any){
        var i = 0;
        for (var y = 0; y < SCREEN_HEIGHT; ++y) {
        for (var x = 0; x < SCREEN_WIDTH; ++x) {
            i = y * 256 + x;
            // Convert pixel from NES BGR to canvas ABGR
            this.buf32[i] = 0xff000000 | buffer[i]; // Full alpha
        }
        }
    }
    writeBuffer = () => {
        this.imageData.data.set(this.buf8);
        this.context.putImageData(this.imageData, 0, 0);
    };
    screenshot() {
        var img = new Image();
        img.src = this.canvas.toDataURL("image/png");
        return img;
    }
}