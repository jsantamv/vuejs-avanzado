var X = XLSX;
var XW = {
    /* worker message */
    msg: 'xlsx',
    /* worker scripts */
    worker: 'Excel/xlsxworker.js'
};

var global_wb;

(function () {
    let xlf = document.getElementById('xlf');

    if (!xlf.addEventListener)
        return;

    function handleFile(e) {
        do_file(e.target.files);
    }

    xlf.addEventListener('change', handleFile, false);

})();

const do_file = (function () {
    let rABS = true

    let xw = function xw(data, cb) {
        let worker = new Worker(XW.worker);
        worker.onmessage = function (e) {
            switch (e.data.t) {
                case 'ready': break;
                case 'e': console.error(e.data.d); break;
                case XW.msg: cb(JSON.parse(e.data.d)); break;
            }
        };
        worker.postMessage({ d: data, b: rABS ? 'binary' : 'array' });
    };

    return function do_file(files) {
        rABS = true //domrabs.checked;
        use_worker = true //domwork.checked;
        let f = files[0];
        let reader = new FileReader();
        reader.onload = function (e) {
            if (typeof console !== 'undefined') console.log("onload", new Date(), rABS, use_worker);
            let data = e.target.result;
            if (!rABS) data = new Uint8Array(data);
            if (use_worker) xw(data, process_wb);
            else process_wb(X.read(data, { type: rABS ? 'binary' : 'array' }));
        };
        if (rABS) reader.readAsBinaryString(f);
        else reader.readAsArrayBuffer(f);
    };
})();

var process_wb = (function () {
    let to_json = function to_json(workbook) {
        let result = {};
        workbook.SheetNames.forEach(function (sheetName) {
            let roa = X.utils.sheet_to_json(workbook.Sheets[sheetName],
                {
                    header: 1
                });
            if (roa.length) {
                roa.shift(); //delete first rows
                result["Sheet"] = roa
            }
        });
        return JSON.stringify(result, 2, 2);
    };

    return function process_wb(wb) {
        global_wb = wb;
        let output = to_json(wb); //break;        
        return output //console.log(output)
        if (typeof console !== 'undefined') console.log("output", new Date());
    };
})();
