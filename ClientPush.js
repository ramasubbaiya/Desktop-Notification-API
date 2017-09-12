console.log("ClientPush started ===> " + Date.now());
window.ClientPush = (function() {

    var cp = {
        checkPermission: Notification.requestPermission(),

        permission: Notification.permission,

        create: function(head, options) {
            new Notification(head, options);
        },

        version: "1.0"
    };
    // this is called when ClientPush is called
    return cp;
}());
console.log("ClientPush stopped ===> " + Date.now());