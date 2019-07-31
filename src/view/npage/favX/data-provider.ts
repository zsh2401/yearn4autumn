import { ManifestScanner } from '../../../common/buildV2/ManifestScanner';
import DirectoriesMap from '../../../common/directories-map';
import { ManifestReader } from '../../../common/buildV2/ManifestReader';
import { IFunManifest } from '../../../common/buildV2/Manifest';
let dirsMap = new DirectoriesMap();
let files = new ManifestScanner(dirsMap).scanDir(dirsMap.fpagesDir);
let result = (new ManifestReader(dirsMap).readAll(files) as Array<IFunManifest>).filter(e=>{
    return e.ext_hide != true;
});
module.exports = result;
