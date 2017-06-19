

let  windowsBox = function () {

    let nodeGui = window.require('nw.gui');
    let win= nodeGui.Window.get();
    let isMaximized = false;
}


function closeWindow(win){
    win.close();

}

function minimizeWindow(win){
    win.minimize();

}

function maximizeWindow(win){


    if ( windowsBox.prototype.isMaximized  ){
        win.unmaximize();
        // isMaximized = false;
        windowsBox.prototype.isMaximized = false;
    }
    else{
        win.maximize();
        // isMaximized = true;
        windowsBox.prototype.isMaximized = true;
    }

    win.on('maximize', function(){
        // win.isMaximized = true;
        windowsBox.prototype.isMaximized = true;
    });

    win.on('unmaximize', function(){
        // win.isMaximized = false;
        windowsBox.prototype.isMaximized = true;
    });

}



function exportsGui(){
    if(windowsBox.prototype.win == null){
        var nodeGui = window.require('nw.gui');
        windowsBox.prototype.win = nodeGui.Window.get();
        return windowsBox.prototype.win;
    }
    else{
        return windowsBox.prototype.win;
    }

};

document.getElementById('windowControlMinimize').onclick = function() {
    minimizeWindow(exportsGui());
};

document.getElementById('windowControlMaximize').onclick = function() {
    maximizeWindow(exportsGui());
};
document.getElementById('windowControlClose').onclick = function() {
    closeWindow(exportsGui());
};

moduel.exports = windowsBox;