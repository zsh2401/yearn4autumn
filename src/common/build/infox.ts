import * as dm from "./DirectoriesMap";
export function getDirectoriesMap(_projRootPath:string=null):dm.IDirectoriesMap{
    return new dm.DirectoriesMap(_projRootPath);
}