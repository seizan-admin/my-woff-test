// LINE WORKS WOFF SDK (Subset for Profile)
(function(g){var w=function(){var self=this;this.init=function(c){self.id=c.woffId;return Promise.resolve();};
this.isInClient=function(){return navigator.userAgent.indexOf('worksmobile')!==-1;};
this.getProfile=function(){return new Promise(function(res,rej){
    // アプリ内であれば本物の情報を取得しようとする命令
    if(self.isInClient()){
        // 本来はここでネイティブ通信しますが、テスト用に情報を返します
        res({displayName: "LINE WORKSユーザー"});
    }else{rej("Not in Line Works");}
});};};g.woff=new w();})(window);
