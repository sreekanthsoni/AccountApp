$.AjaxJSON = function(){
    return {
        LoadJSONContents : function(url ,data, callback_function, Handler, aPassOnOptions){
            if(aPassOnOptions === undefined || aPassOnOptions === null){
                aPassOnOptions = {};
            }
            url = encodeURI($.trim(url));
            $.ajax({
                url : url,
                type: "post",
                data: data,
                success: function(data){
                    var msg = $.parseJSON(data);
                    if(!(Handler === undefined || Handler === null)){
                        Handler(msg,callback_function, aPassOnOptions);
                    }else{
                        callback_function(msg, aPassOnOptions);
                    }
                },
                error:function (jqXHR, exception) {
                    var msg = '';
                    if (jqXHR.status === 0) {
                        msg = 'Not connect.\n Verify Network.';
                    } else if (jqXHR.status == 404) {
                        msg = 'Requested page not found. [404]';
                    } else if (jqXHR.status == 500) {
                        msg = 'Internal Server Error [500].';
                    } else if (exception === 'parsererror') {
                        msg = 'Requested JSON parse failed.';
                    } else if (exception === 'timeout') {
                        msg = 'Time out error.';
                    } else if (exception === 'abort') {
                        msg = 'Ajax request aborted.';
                    } else {
                        msg = 'Uncaught Error.\n' + jqXHR.responseText;
                    }
                    var msg = {
                        Success     : false, 
                        Message     : "UNABLE TO PROCESS YOUR REQUEST AT THIS TIME. PLEASE TRY AGAIN LATER."+msg
                    };
                    if(!(Handler === undefined || Handler === null)){
                        Handler(msg,callback_function,aPassOnOptions);
                    }else{
                        callback_function(msg,aPassOnOptions);
                    }
                    return false;
                }
            });
            return false;
        }
    };
};