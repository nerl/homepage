//awbAutoCompletion = {
class AwbAutoCompletor {

    /** AwbAutoCompletor Class
     * 
     * 
     * @param {string}       id   name/id the element of concern
     * @param {string[][]}    idOfDataList name of the element datalist for the autocompletion
     * 
     */
    constructor(dataArray, id, idOfDataList, callBackFunction) {
        //this.dataArray = loadDataArray();
        this.dataArray = dataArray;
        this.id = id;
        this.idOfDataList = idOfDataList;
        
        
        this.addInputEventListener();
        this.addOptionValues();
        this.callBackFunction = callBackFunction;
    }
    /***
     * 
     */
    getDataArray() {
        return this.dataArray;
    }


    /****
     * clear
     */
    clear() {
        document.getElementById(this.id).value = "";
    }
    /**
     * @private
     */
    addInputEventListener() {
        console.log ("Element ID: " + this.id);
        document.getElementById(this.id).addEventListener('input', event => {
            //console.log (this.dataArray);
            var val = document.getElementById(this.id).value;
            var opts = document.getElementById(this.idOfDataList).childNodes;
            for (var i = 0; i < opts.length; i++) {
                if (opts[i].value === val) {
                    // An item was selected from the list!
                    // yourCallbackHere() cando 
                    console.log(this.getDataArray()[i]);
                    this.callBackFunction(this.getDataArray()[i]);
                    //alert(this.dataArray[0].join());
                    break;
                }
            }
        });
    };

    /**
     * @private
     */
    addOptionValues() {
        var optionValueElement;
        this.dataArray.forEach(element => {
            //console.log (element);
            optionValueElement = document.createElement("option");
            optionValueElement.value = element.join();
            document.getElementById(this.idOfDataList).appendChild(optionValueElement);
            //optionValueElement.text = dataArray[0].join();        
        });
    }
}



