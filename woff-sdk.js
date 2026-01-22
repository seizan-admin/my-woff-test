(function(global) {
    var WOFF = function() {
        this.isInClient = function() {
            return navigator.userAgent.indexOf('worksmobile') !== -1;
        };
        this.init = function(config) {
            console.log("WOFF Local SDK Initializing with ID:", config.woffId);
            return new Promise(function(resolve) {
                setTimeout(resolve, 100);
            });
        };
        this.getProfile = function() {
            return Promise.resolve({ displayName: "テストユーザー" });
        };
    };
    global.woff = new WOFF();
})(window);
