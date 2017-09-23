// SINCE WE ARE USING JQUERY MOBILE -- 


var oLoginObject = null;
var oGetData = null;

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function(callback_function) {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
     
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        StatusBar.overlaysWebView(false);
        StatusBar.backgroundColorByHexString("A4978E");
        StatusBar.styleDefault();
        app.receivedEvent();
    },
    
    receivedEvent : function(){
        DeviceReady();
    }
};

$(document).on("pagehide", "div[data-role=page]", function(event){
  $(event.target).remove();
});