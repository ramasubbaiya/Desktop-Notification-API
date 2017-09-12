// Request permission from user
Notification.requestPermission();

// Check the status of the notification
console.log(Notification.permission);

var e = new Notification("Notification from Avetti", {
    body: "Avetti Commerce",
    icon: "https://image.flaticon.com/icons/png/512/3/3513.png",
    tag: "TEST-NOTIFICATION"
});

e.onclick = function() {
    window.open('http://www.avetticommerce.com/', '_blank');
}

e.onshow = function() {
    console.log("Notification opened");
}

e.onclose = function() {
    console.log("Notification closed");
}

(function(window) {
    'use strict'

    function defineBayside() {
        var Bayside = {};
        Bayside.alert = function() {
            console.log("Bayside is being defined!")
            alert("This is a library called Bayside!");
        };
        return Bayside;
    }

    if (typeof(Bayside) === 'undefined') {
        console.log("Bayside is not defined!")
        window.Bayside = defineBayside();
    }
})(window);