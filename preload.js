const taskmng =  require("./models/testmgr")
const {contextBridge} = require("electron")

const getNames = () =>{
    taskmng.getNames
}

contextBridge.exposeInMainWorld('api',{
    getNames: getNames
})