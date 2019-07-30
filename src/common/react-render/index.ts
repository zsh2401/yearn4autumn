import libloader from '../libloader'
export default function load(path:string,data:any):string{
    return libloader(path).default(data);
}