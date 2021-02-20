// Definition for the workspace class
class Master{
    constructor(){
        this.children = [];
    }
    addworkspace = new function(){
        //gets all the tabs in the selected window and adds them to a new workspace. 
    }
    }
    getchildren = new function(parent=this){
        //recursively gets all the children of a workspace, returns as an array 
        _children = []
        parent.children.forEach(function(item){
            _children.concat(getchildren(item))
        })
        return _children
    }

class Workspace extends Master{
    constructor(name, master){
    this.name = name;
    this.master = master;
    this.bookmarks = []
}
    open = new function(){
    // opens the bookmarks of a workplace in chrome 
    this.bookmarks.forEach(function(item){
        chrome.tabs.create({ url: item });
    })
}
    explore = new function(){
        // displays a list of the bookmarks and workspaces within this workspace
    }
    addtab = new function(){
        chrome.tabs.query({"active": true, "currentWindow": true}, function(tabs){
            this.bookmarks.push(tabs[0].url);
        });
    }
    getparent = new function(){
        //returns bookmarks in the parent directorys
        
        if (typeof this.master !== 'undefined'){
            this.master.getparent()
        }
        
    }

}


