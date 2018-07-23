import * as express from "express"
import { PhotoBll } from "./PhotoBLL";

let app=express();

app.use(express.static("static"))

app.get("/",(req,res)=>{
    res.sendfile("./index.html")
})

app.get("/static/*",(req,res)=>{
    res.sendfile(__dirname+"/"+ req.path);
})

app.post("/getAlbum",(req,res)=>{
    res.end(JSON.stringify(PhotoBll.GetAlbumList()));
})



let server=app.listen(8080,()=>{
    console.log(server.address())
})