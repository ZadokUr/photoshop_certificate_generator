// Photoshop Batch Certificate Generator Script
// Alinani Sichone
// github.com/ZadokUr
// 2020

#include json2.js

(function main(){
    var honourees = loadJson('honourees.json');

    for (var i = 0; i < honourees.length; i++){
        var honouree = honourees[i];
        if (honouree.name !== "")
        processHonouree(honouree);
    }
})()

function processHonouree(honouree){
    var doc = app.activeDocument;
    var Details = doc.layerSets.getByName('Details');
    var nameLayer = Details.layers.getByName('Name');
    var capacityLayer = Details.layers.getByName('Capacity');
    var roleLayer = Details.layers.getByName('Role');

    nameLayer.textItem.contents = honouree.name;
    capacityLayer.textItem.contents = honouree.capacity;

    if (honouree.gender === "his")
    roleLayer.textItem.contents = "In Recognition Of His Faithful Stewardship In The Kingdom of Northumbria as a";
    else
    roleLayer.textItem.contents = "In Recognition Of Her Faithful Stewardship In The Kingdom of Northumbria as a";

    savePDF(honouree.name);
}


function loadJson(relPath){
    var script = new File($.fileName);
    var jsonFile = new File(script.path + '/' + relPath);

    jsonFile.open('r');
    var str = jsonFile.read();
    jsonFile.close();

    return JSON.parse(str);
}

function savePDF(name){
    
    var doc = app.activeDocument;
    
    var file = new File(doc.path + '/Certificates/' + name + '.pdf');
    var opts = new PDFSaveOptions();
    opts.jpegQuality = 7;
    opts.optimizeForWeb = true;
    opts.preserveEditing = false;
    
    doc.saveAs(file, opts, true);
}