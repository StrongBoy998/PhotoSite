import * as fs from "fs";
import {SystemEnv} from "./SystemEnv";
import { Album, Photo } from "./Model";


export class PhotoBll{
    private static GetDir():string[] {
        return fs.readdirSync(SystemEnv.DirPath);
    }

    private static RenderAlbum(Dir:string[]):Album[]{
        let AlbumList:Album[]=[]
        Dir.forEach(path => {
            let a=new Album();
            a.Name=path;
            a.Path=SystemEnv.DirPath+path;
            let data= fs.readdirSync(a.Path);
            a.Photos=[];
            data.forEach((value)=>{
                if(value.endsWith(".jpg") || value.endsWith(".png")){
                    a.Photos.push({
                        Name:value,
                        Path:a.Path+"/"+value
                    })
                }
            })
            AlbumList.push(a);
        });
        return AlbumList;
    }

    public static GetAlbumList():Album[]{
        return this.RenderAlbum(this.GetDir());
    }
}