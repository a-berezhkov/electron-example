const { app, BrowserWindow } = require('electron')
 

const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        preload: path.resolve(__dirname, "preload.js")
      }
    })
    win.webContents.openDevTools()
    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })


  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

 
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
 