function ShowTable(){
  html =
    "<table id='table'><tr><th id='head1'>Column1</th><th>Column2</th><th>Column3</th><th>Column4</th></tr><tr><td id='data1'>Data1</td><td id='data2'>Data2</td><td id='data3'>Data3</td><td id='data4'>Data4</td></tr><tr><td id='data5'>Data1</td><td id='data6'>Data2</td><td id='data7'>Data3</td><td id='data8'>Data4</td></tr><tr><td id='data9'>Data5</td><td id='data10'>Data6</td><td id='data11'>Data7</td><td id='data12'>Data8</td></tr><tr><td id='data13'>Data9</td><td id='data14'>Data10</td><td id='data15'>Data11</td><td id='data16'>Data12</td></tr></table><button id=button2 onclick='hideTable()' >hideTable</button><button id=button3 onclick='changeColumn()' >changeColumn</button><button id=button4 onclick='changeRow()' >changeRow</button><button id=button5 onclick='changeBackground()' >Change background</button>";
    document.getElementById("output").innerHTML=html;

}
function hideTable(){
    document.getElementById("table").style.display = "none";
    document.getElementById("button2").style.display = "none";
   
    document.getElementById("button3").style.display = "none";
    document.getElementById("button4").style.display = "none";
    document.getElementById("button5").style.display = "none";
    document.getElementById("button1").style.display = "inline";
}
function changeBackground()
{
    document.getElementById("data1").style.backgroundColor = "red";
    document.getElementById("data2").style.backgroundColor = "red";
    document.getElementById("data3").style.backgroundColor = "red";
    document.getElementById("data4").style.backgroundColor = "red";
    document.getElementById("data5").style.backgroundColor = "red";
    document.getElementById("data6").style.backgroundColor = "red";
    document.getElementById("data7").style.backgroundColor = "red";
    document.getElementById("data8").style.backgroundColor = "red";
    document.getElementById("data9").style.backgroundColor = "red";
    document.getElementById("data10").style.backgroundColor = "red";
    document.getElementById("data11").style.backgroundColor = "red";
    document.getElementById("data12").style.backgroundColor = "red";
    document.getElementById("data13").style.backgroundColor = "red";
    document.getElementById("data14").style.backgroundColor = "red";
    document.getElementById("data15").style.backgroundColor = "red";
    document.getElementById("data16").style.backgroundColor = "red";
}
function changeColumn()
{
    document.getElementById("data1").style.backgroundColor = "MediumSeaGreen";
    document.getElementById("data5").style.backgroundColor = "MediumSeaGreen";
    document.getElementById("data9").style.backgroundColor = "MediumSeaGreen";
    document.getElementById("data13").style.backgroundColor = "MediumSeaGreen";
    document.getElementById("data2").style.backgroundColor = "Tomato";
    document.getElementById("data6").style.backgroundColor = "Tomato";
    document.getElementById("data10").style.backgroundColor = "Tomato";
    document.getElementById("data14").style.backgroundColor = "Tomato";
    document.getElementById("data3").style.backgroundColor = "DodgerBlue";
    document.getElementById("data7").style.backgroundColor = "DodgerBlue";
    document.getElementById("data11").style.backgroundColor = "DodgerBlue";
    document.getElementById("data15").style.backgroundColor = "DodgerBlue";
    document.getElementById("data4").style.backgroundColor = "Orange";
    document.getElementById("data8").style.backgroundColor = "Orange";
    document.getElementById("data12").style.backgroundColor = "Orange";
    document.getElementById("data16").style.backgroundColor = "Orange";
}
function changeRow()
{
    document.getElementById("data1").style.backgroundColor = "MediumSeaGreen";
    document.getElementById("data2").style.backgroundColor = "MediumSeaGreen";
    document.getElementById("data3").style.backgroundColor = "MediumSeaGreen";
    document.getElementById("data4").style.backgroundColor = "MediumSeaGreen";
    document.getElementById("data5").style.backgroundColor = "Gray";
    document.getElementById("data6").style.backgroundColor = "Gray";
    document.getElementById("data7").style.backgroundColor = "Gray";
    document.getElementById("data8").style.backgroundColor = "Gray";
    document.getElementById("data9").style.backgroundColor = "DodgerBlue";
    document.getElementById("data10").style.backgroundColor = "DodgerBlue";
    document.getElementById("data11").style.backgroundColor = "DodgerBlue";
    document.getElementById("data12").style.backgroundColor = "DodgerBlue";
    document.getElementById("data13").style.backgroundColor = "SlateBlue";
    document.getElementById("data14").style.backgroundColor = "SlateBlue";
    document.getElementById("data15").style.backgroundColor = "SlateBlue";
    document.getElementById("data16").style.backgroundColor = "SlateBlue";
}





