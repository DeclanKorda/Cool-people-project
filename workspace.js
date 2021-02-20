// Definition for the workspace class

class Workspace {
    constructor(name, master){
    this.name = name;
    this.master = master;
    this.children = {};
    this.bookmarks = {}
}
    open = new function(){
    // opens the bookmarks of a workplace in chrome   
}
    explore = new function(){
        // displays a list of the bookmarks and workspaces within this workspace
    }
    addtab = new function(tab){
        //this function will add a tab to a workspace.
}
    getchildren = new function(child=this){
        //recursively gets all the children of a workspace, and then when at the deepest layer, gathers all the bookmarks and opens them all at once. 
}
}

