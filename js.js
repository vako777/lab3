var ajax = new XMLHttpRequest();

function _1() {
    ajax.onreadystatechange = function() {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                console.dir(ajax.responseText);
                document.getElementById("res").innerHTML = ajax.response;
            }
        }
    }
    var date = document.getElementById("dateValue").value;
    ajax.open("get", "1.php?dateValue=" + date);
    ajax.send();
}

function _2() {
    ajax.onreadystatechange = function() {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {

                console.dir(ajax);
                let rows = ajax.responseXML.firstChild.children;
                let result = "Автомобили указанного производителя: <ol>";
                for (var i = 0; i < rows.length; i++) {
                    result += "<li>Автомобиль: " + rows[i].children[0].firstChild.nodeValue + "</li>"; 
                }
                result += "</ol>"
                document.getElementById("res").innerHTML = result;
            }
        }
    }
    var vendors = document.getElementById("vendors").value;
    ajax.open("get", "2.php?vendors=" + vendors);
    ajax.send();
}

function _3() {
    ajax.onreadystatechange = function () {
    let rows = JSON.parse(ajax.responseText);
    console.dir(rows);
    if (ajax.readyState === 4) {
        if (ajax.status === 200) {
            console.dir(ajax);
            
            let result = "Свободные автомобили на дату <ol>";
            for (var i = 0; i < rows.length; i++) {
               result += "<li>Автомобиль: " + rows[i].Name + "</li>"; 
            }
            result += "</ol>"
            document.getElementById("res").innerHTML = result;
        }
    }
}
    var dateFree = document.getElementById("dateFree").value;
    ajax.open("get", "3.php?dateFree=" + dateFree);
    ajax.send();
}