/**
 * Created by vinay.pandya on 8/8/2015.
 */


function GlobalInstances() {
    GlobalInstances.globalInstance = this;
}

function createGlobalInstances() {
    if (typeof GlobalInstances.globalInstance == 'undefined')
        return new GlobalInstances();
    else
        return GlobalInstances.globalInstance;
}

GlobalInstances.prototype.setIO = function (io) {
    this.ioInstance = io;
};

exports.globalInstances = createGlobalInstances;