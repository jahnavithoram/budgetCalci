function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
function openForm2() {
    document.getElementById("myForm2").style.display = "block";
}

function closeForm2() {
    document.getElementById("myForm2").style.display = "none";
}
function openForm3() {
    document.getElementById("myForm3").style.display = "block";
}

function closeForm3() {
    document.getElementById("myForm3").style.display = "none";
}
var sum = 0 ,sum2=0,sum3=0,sum4=0,sum1=0;
function CountDB() {
    //  alert("Booking Confirm!");
    var mdb = document.getElementById("Check1");
    var sql = document.getElementById("Check2");
    var dev = document.getElementById("Check3");
    if (mdb.checked == true)
        sum1 = sum1 + 1999;
    if (sql.checked == true)
        sum1 = sum1 + 1399;
    if (dev.checked == true)
        sum1 = sum1 + 3399;
    sum = sum + sum1;
    closeForm();   
}
function CountWS() {
    //  alert("Booking Confirm!");
    var mdb = document.getElementById("Check1");
    var sql = document.getElementById("Check2");
    var dev = document.getElementById("Check3");
    if (mdb.checked == true)
        sum2 = sum2 + 1699;
    if (sql.checked == true)
        sum2= sum2 + 1199;
    if (dev.checked == true)
        sum2 = sum2 + 1499;
    sum = sum + sum2;
    closeForm2();
}
function CountBE() {
    //  alert("Booking Confirm!");
    var mdb = document.getElementById("Check1");
    var sql = document.getElementById("Check2");
    var dev = document.getElementById("Check3");
    if (mdb.checked == true)
        sum3 = sum3 + 1999;
    if (sql.checked == true)
        sum3 = sum3 + 2499;
    if (dev.checked == true)
        sum3 = sum3 + 1799;
    sum = sum + sum3;
    closeForm3();
}
function CountFe() {
    sum4 = sum4 + 2666;
    sum = sum + sum4;
    
}
function lo() {
    localStorage.setItem("value1", sum1 );
    localStorage.setItem("value2", sum2 );
    localStorage.setItem("value3", sum3 );
    localStorage.setItem("value4", sum4);
    //localStorage.setItem("valueA", sum1 + sum2 + sum3 + sum4);
}
function res() {
    var v1 = parseInt(localStorage.getItem("value1"));
    document.getElementById("t1").innerHTML = v1;
    var v2 = parseInt(localStorage.getItem("value2"));
    document.getElementById("t2").innerHTML = v2;
    var v3 = parseInt(localStorage.getItem("value3"));
    document.getElementById("t3").innerHTML = v3;
    var v4 = parseInt(localStorage.getItem("value4"));
    document.getElementById("t4").innerHTML = v4;
    document.getElementById("t5").innerHTML = v1+v2+v3+v4;
}



