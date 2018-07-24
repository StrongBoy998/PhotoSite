import * as React from "react";
import * as reactDOM from "react-dom";
import { Album,Photo } from "../Model";

interface Props{
    Files:Photo[]
}

export class FileListComponent extends React.Component<Props,any>{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return(
            <div>
                {
                    this.props.Files.map((f)=>{
                        return <li>{f}</li>
                    })
                }
            </div>
        )
    }
}

interface AlbumProps{
    AlbumList:Album[]
}

export default class AlbumComponent extends React.Component<AlbumProps,any>{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return(
            <div>
                {
                    this.props.AlbumList.map((album)=>{
                        return <FileListComponent Files={album.Photos} />
                    })
                }
            </div>
        )
    }
}