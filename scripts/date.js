
    function getFormattedDate() {
        datum = new Date();
        let month = "" + (datum.getMonth() + 1);
        let day = "" + datum.getDate();
        let year = datum.getFullYear();
        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
        let dateF = [day, month, year].join(".");
        return dateF
    }


    function getFormattedDateWithParameter(data) {
        datum = new Date(data);
        let month = "" + (datum.getMonth() + 1);
        let day = "" + datum.getDate();
        let year = datum.getFullYear();
        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
        let dateF = [day, month, year].join(".");
        return dateF
    }



    