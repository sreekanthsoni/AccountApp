$.GetData = function(){
    var options = {
        _sURLToCreateCategoryEntry : "CreateInfo/CreateCategory.php",
        _sURLToLoadCalendarWithInfo : "LoadInfo/LoadCalendarWithInfo.php",
        _sURLToNextCalendarMonthWithInfo : "LoadInfo/LoadNextCalendarWithInfo.php",
        _sURLToPrevCalendarMonthWithInfo : "LoadInfo/LoadPrevCalendarWithInfo.php",
        _sURLToNextMonthWithInfo : "LoadInfo/LoadNextMonthWithInfo.php",
        _sURLToPrevMonthWithInfo : "LoadInfo/LoadPrevMonthWithInfo.php",
        _sURLToLoadTransactionOnDate : "LoadInfo/LoadTransactionsOnDate.php",
        _sURLToLoadTransactionInformation : "LoadInfo/LoadTransactionInformation.php",
        _sURLToLoadCategoriesToEdit : "LoadInfo/LoadCategoriesBasedOnSelectionToEdit.php",
        _sURLToLoadCategoryInformation : "LoadInfo/LoadCategoryInformation.php",
        _sURLToLoadMonthInfo : "LoadInfo/LoadMonthInformation.php",
        _sURLToGetCategoriesName : "GetInfo/GetAllCategoriesNames.php",
        _sURLToGetAllTransactionsInMonth : "GetInfo/GetAllTransactionsInMonth.php",
        _sURLToGetTotalsInMonth : "GetInfo/GetAllTotalsInMonth.php",
        _sURLToGetTotalsPerCategoryInMonth : "GetInfo/GetAllTotalsPerCategoryInMonth.php",
        _sURLToSaveTransactionEntry : "SaveInfo/SaveTransactionEntry.php",
        _sURLToUpdateTransactionEntry : "UpdateInfo/UpdateTransactionEntry.php",
        _sURLToUpdateCategoryEntry : "UpdateInfo/UpdateCategoryEntry.php",
        _sURLToDeleteTransactionEntry : "DeleteInfo/DeleteTransactionEntry.php",
        _sURLToDeleteCategoryEntry : "DeleteInfo/DeleteCategoryEntry.php"
    };
    
    _CreateCategoryEntry = function(results, callback_function){
        if(results["Success"]){
            callback_function(true,"CREATED");
        }else{
            callback_function(false, results["Message"]);
        }
    };
    
    _LoadMonthInformation = function(results, callback_function){
        if(results["Success"]){
            var aMonthInformation = results["MONTH_INFORMATION"];
            callback_function(true,"LOADED",aMonthInformation);
        }else{
            callback_function(false, results["Message"],{});
        }
    };
    
    _CalendarWithInformation = function(results, callback_function){
        if(results["Success"]){
            var aCalendarInfo = results["CALENDAR_INFORMATION"];
            callback_function(true,"LOADED",aCalendarInfo);
        }else{
            callback_function(false, results["Message"],{});
        }
    };
    
    _PrevCalendarWithInformation = function(results, callback_function){
        if(results["Success"]){
            var aCalendarInfo = results["CALENDAR_INFORMATION"];
            callback_function(true,"LOADED",aCalendarInfo);
        }else{
            callback_function(false, results["Message"],{});
        }
    };
    
    _NextCalendarWithInformation = function(results, callback_function){
        if(results["Success"]){
            var aCalendarInfo = results["CALENDAR_INFORMATION"];
            callback_function(true,"LOADED",aCalendarInfo);
        }else{
            callback_function(false, results["Message"],{});
        }
    };
    
    _PrevMonthWithInformation = function(results, callback_function){
        if(results["Success"]){
            var aMonthInfo = results["MONTH_INFORMATION"];
            callback_function(true,"LOADED",aMonthInfo);
        }else{
            callback_function(false, results["Message"],{});
        }
    };
    
    _NextMonthWithInformation = function(results, callback_function){
        if(results["Success"]){
            var aMonthInfo = results["MONTH_INFORMATION"];
            callback_function(true,"LOADED",aMonthInfo);
        }else{
            callback_function(false, results["Message"],{});
        }
    };
    
    _LoadTransactionsOnDate = function(results, callback_function){
        if(results["Success"]){
            var aTransactionInfo = results["TRANSACTIONS_INFORMATION"];
            callback_function(true,"LOADED",aTransactionInfo);
        }else{
            callback_function(false, results["Message"],{});
        }
    };
    
    _LoadTransactionInformation = function(results, callback_function){
        if(results["Success"]){
            var aTransactionInfo = results["TRANSACTION_INFORMATION"];
            callback_function(true,"LOADED",aTransactionInfo);
        }else{
            callback_function(false, results["Message"],{});
        }
    };
    
    _LoadCategoriesToEdit = function(results, callback_function){
        if(results["Success"]){
            var aCategoryInfo = results["CATEGORIES_INFO"];
            callback_function(true,"LOADED",aCategoryInfo);
        }else{
            callback_function(false, results["Message"],{});
        }
    };
    
    _LoadCategoryInformation = function(results, callback_function){
        if(results["Success"]){
            var aCategoryInfo = results["CATEGORY_INFO"];
            callback_function(true,"LOADED",aCategoryInfo);
        }else{
            callback_function(false, results["Message"],{});
        }
    };
    
    _GetAllCategoriesName = function(results, callback_function){
        if(results["Success"]){
            var aCategoriesNames = results["CATEGORIES_NAME"];
            callback_function(true,"LOADED",aCategoriesNames);
        }else{
            callback_function(false, results["Message"],{});
        }
    };
    
    _GetAllTransactionsInMonth = function(results, callback_function){
        if(results["Success"]){
            var aTransactionsInformations = results["TRANSACTIONS_INFORMATION"];
            callback_function(true,"LOADED",aTransactionsInformations);
        }else{
            callback_function(false, results["Message"],{});
        }
    };
    
    _GetTotalInMonth = function(results, callback_function){
        if(results["Success"]){
            var aTotalsInformations = results["TOTALS_INFORMATION"];
            callback_function(true,"LOADED",aTotalsInformations);
        }else{
            callback_function(false, results["Message"],{});
        }
    };
    
    _GetTotalsPerCategoryInMonth = function(results, callback_function){
        if(results["Success"]){
            var aTotalsInformations = results["TOTALS_PER_CATEGORY_INFORMATION"];
            callback_function(true,"LOADED",aTotalsInformations);
        }else{
            callback_function(false, results["Message"],{});
        }
    };
    
    _SaveTransactionEntry = function(results, callback_function){
        if(results["Success"]){
            callback_function(true,"SAVED TRANSACTION");
        }else{
            callback_function(false, results["Message"]);
        }
    };
    
    _UpdateTransactionEntry = function(results, callback_function){
        if(results["Success"]){
            callback_function(true,"TRANSACTION UPDATED");
        }else{
            callback_function(false, results["Message"]);
        }
    };
    
    _UpdateCategoryEntry = function(results, callback_function){
        if(results["Success"]){
            callback_function(true,"CATEGORY UPDATED");
        }else{
            callback_function(false, results["Message"]);
        }
    };
    
    _DeleteTransactionEntry = function(results, callback_function){
        if(results["Success"]){
            callback_function(true,"TRANSACTION DELETED");
        }else{
            callback_function(false, results["Message"]);
        }
    };
    
    _DeleteCategoryEntry = function(results, callback_function){
        if(results["Success"]){
            callback_function(true,"CATEGORY DELETED");
        }else{
            callback_function(false, results["Message"]);
        }
    };
    
    return {
        URLToCreateCategoryEntry : function(){
            return options._sURLToCreateCategoryEntry;
        },
        
        URLToLoadCalendarWithInfo : function(){
            return options._sURLToLoadCalendarWithInfo;
        },
        
        URLToPrevCalendarMonthWithInfo : function(){
            return options._sURLToPrevCalendarMonthWithInfo;
        },
        
        URLToNextCalendarMonthWithInfo : function(){
            return options._sURLToNextCalendarMonthWithInfo;
        },
        
        URLToPrevMonthWithInfo : function(){
            return options._sURLToPrevMonthWithInfo;
        },
        
        URLToNextMonthWithInfo : function(){
            return options._sURLToNextMonthWithInfo;
        },
        
        URLToGetCategoriesName : function(){
            return options._sURLToGetCategoriesName;
        },
        
        URLToGetAllTransactionsInMonth : function(){
            return options._sURLToGetAllTransactionsInMonth;
        },
        
        URLToGetTotalsInMonth : function(){
            return options._sURLToGetTotalsInMonth;
        },
        
        URLToGetTotalsPerCategoryInMonth : function(){
            return options._sURLToGetTotalsPerCategoryInMonth;
        },
        
        URLToLoadTransactionOnDate : function(){
            return options._sURLToLoadTransactionOnDate;
        },
        
        URLToLoadTransactionInformation : function(){
            return options._sURLToLoadTransactionInformation;
        },
        
        URLToLoadCategoriesToEdit : function(){
            return options._sURLToLoadCategoriesToEdit;
        },
        
        URLToLoadCategoryInformation : function(){
            return options._sURLToLoadCategoryInformation;
        },
        
        URLToLoadMonthInfo : function(){
            return options._sURLToLoadMonthInfo;
        },
        
        URLToSaveTransactionEntry : function(){
            return options._sURLToSaveTransactionEntry;
        },
        
        URLToUpdateTransactionEntry : function(){
            return options._sURLToUpdateTransactionEntry;
        },
        
        URLToUpdateCategoryEntry : function(){
            return options._sURLToUpdateCategoryEntry;
        },
        
        URLToDeleteTransactionEntry : function(){
            return options._sURLToDeleteTransactionEntry;
        },
        
        URLToDeleteCategoryEntry : function(){
            return options._sURLToDeleteCategoryEntry;
        },
        
        CreateCategoryEntry : function(url, data, callback_function){
            var oAjaxJSON = $.AjaxJSON();
            oAjaxJSON.LoadJSONContents(url, data, callback_function, _CreateCategoryEntry);
        },
        
        LoadCalendarInformation : function(url, data, callback_function){
            var oAjaxJSON = $.AjaxJSON();
            oAjaxJSON.LoadJSONContents(url, data, callback_function, _CalendarWithInformation);
        },
        
        LoadPrevCalendarMonthWithInfo : function(url, data, callback_function){
            var oAjaxJSON = $.AjaxJSON();
            oAjaxJSON.LoadJSONContents(url, data, callback_function, _PrevCalendarWithInformation);
        },
        
        LoadNextCalendarMonthWithInfo : function(url, data, callback_function){
            var oAjaxJSON = $.AjaxJSON();
            oAjaxJSON.LoadJSONContents(url, data, callback_function, _NextCalendarWithInformation);
        },
        
        LoadPrevMonthWithInfo : function(url, data, callback_function){
            var oAjaxJSON = $.AjaxJSON();
            oAjaxJSON.LoadJSONContents(url, data, callback_function, _PrevMonthWithInformation);
        },
        
        LoadNextMonthWithInfo : function(url, data, callback_function){
            var oAjaxJSON = $.AjaxJSON();
            oAjaxJSON.LoadJSONContents(url, data, callback_function, _NextMonthWithInformation);
        },
        
        LoadTransactionsOnDate : function(url, data, callback_function){
            var oAjaxJSON = $.AjaxJSON();
            oAjaxJSON.LoadJSONContents(url, data, callback_function, _LoadTransactionsOnDate);
        },
        
        LoadTransactionInformation : function(url, data, callback_function){
            var oAjaxJSON = $.AjaxJSON();
            oAjaxJSON.LoadJSONContents(url, data, callback_function, _LoadTransactionInformation);
        },
        
        LoadCategoriesToEdit : function(url, data, callback_function){
            var oAjaxJSON = $.AjaxJSON();
            oAjaxJSON.LoadJSONContents(url, data, callback_function, _LoadCategoriesToEdit);
        },
        
        LoadCategoryInformation : function(url, data, callback_function){
            var oAjaxJSON = $.AjaxJSON();
            oAjaxJSON.LoadJSONContents(url, data, callback_function, _LoadCategoryInformation);
        },
        
        LoadMonthInformation : function(url, data, callback_function){
            var oAjaxJSON = $.AjaxJSON();
            oAjaxJSON.LoadJSONContents(url, data, callback_function, _LoadMonthInformation);
        },
        
        GetAllCategoriesName : function(url, data, callback_function){
            var oAjaxJSON = $.AjaxJSON();
            oAjaxJSON.LoadJSONContents(url, data, callback_function, _GetAllCategoriesName);
        },
        
        GetAllTransactionsInMonth : function(url, data, callback_function){
            var oAjaxJSON = $.AjaxJSON();
            oAjaxJSON.LoadJSONContents(url, data, callback_function, _GetAllTransactionsInMonth);
        },
        
        GetTotalInMonth : function(url, data, callback_function){
            var oAjaxJSON = $.AjaxJSON();
            oAjaxJSON.LoadJSONContents(url, data, callback_function, _GetTotalInMonth);
        },
        
        GetTotalsPerCategoryInMonth : function(url, data, callback_function){
            var oAjaxJSON = $.AjaxJSON();
            oAjaxJSON.LoadJSONContents(url, data, callback_function, _GetTotalsPerCategoryInMonth);
        },
        
        SaveTransactionEntry : function(url, data, callback_function){
            var oAjaxJSON = $.AjaxJSON();
            oAjaxJSON.LoadJSONContents(url, data, callback_function, _SaveTransactionEntry);
        },
        
        UpdateTransactionEntry : function(url, data, callback_function){
            var oAjaxJSON = $.AjaxJSON();
            oAjaxJSON.LoadJSONContents(url, data, callback_function, _UpdateTransactionEntry);
        },
        
        UpdateCategoryEntry : function(url, data, callback_function){
            var oAjaxJSON = $.AjaxJSON();
            oAjaxJSON.LoadJSONContents(url, data, callback_function, _UpdateCategoryEntry);
        },
        
        DeleteTransactionEntry : function(url, data, callback_function){
            var oAjaxJSON = $.AjaxJSON();
            oAjaxJSON.LoadJSONContents(url, data, callback_function, _DeleteTransactionEntry);
        },
        
        DeleteCategoryEntry : function(url, data, callback_function){
            var oAjaxJSON = $.AjaxJSON();
            oAjaxJSON.LoadJSONContents(url, data, callback_function, _DeleteCategoryEntry);
        }
    };
};