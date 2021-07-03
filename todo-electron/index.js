const path = require("path");
const { app, BrowserWindow, Tray, Menu, ipcMain } = require("electron");
const iconPath = path.join(__dirname, "./src/img/icon.png");

let mainWindow, tray;
app.on("ready", () => {
  mainWindow = new BrowserWindow({
    frame: false,
    resizable: false, //不允许用户改变窗口大小
    width: 1980, //设置窗口宽高
    height: 1000,
    icon: iconPath, //应用运行时的标题栏图标
    webPreferences: {
      backgroundThrottling: false, //设置应用在后台正常运行
      nodeIntegration: true, //设置能在页面使用nodejs的API
      contextIsolation: false,
      preload: path.join(__dirname, "./preload.js")
    }
  });

  // mainWindow.loadURL(`file://${__dirname}/src/main.html`)
  mainWindow.loadURL("http://localhost:3001");
  // mainWindow.loadURL('https://www.baidu.com')
  // mainWindow.removeMenu()
  tray = new Tray(iconPath);
  tray.setToolTip("tasky");
  tray.on("click", () => {
    if (mainWindow.isVisible()) {
      mainWindow.hide();
    } else {
      mainWindow.show();
    }
  });
  tray.on("right-click", () => {
    const menuConfig = Menu.buildFromTemplate([
      {
        label: "Quit",
        click: () => app.quit()
      }
    ]);
    tray.popUpContextMenu(menuConfig);
  });
  ipcMain.on("mainWindow:close", () => {
    app.quit();
  });
  ipcMain.on("mainWindow:reload", () => {
    setTimeout(() => {
      mainWindow.webContents.send("setTask", "5s");
    }, 5000);
  });
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});
