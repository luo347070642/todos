const electron = require('electron')
const {ipcRenderer} = electron
let closeBtn = document.querySelector('#closeBtn')
closeBtn.addEventListener('click', ()=>{
  ipcRenderer.send('mainWindow:close')
})
let reloadBtn = document.querySelector('#reloadBtn')
reloadBtn.addEventListener('click',()=>{
  ipcRenderer.send('mainWindow:reload')
})
ipcRenderer.on('setTask', (e, task)=>{
  document.querySelector('.reminder').innerHTML =
    `<span>${decodeURIComponent(task)}</span>的时间到啦！`
})