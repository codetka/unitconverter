



function changeVal(){
    let inputValue = document.getElementById("numInput").value;

    document.getElementById("meterInput").innerText = inputValue;
    document.getElementById("feetOutput").innerText = (inputValue * 3.28084).toFixed(3);
    document.getElementById("feetInput").innerText = inputValue;
    document.getElementById("meterOutput").innerText = (inputValue / 3.28084).toFixed(3);

    document.getElementById("literInput").innerText = inputValue;
    document.getElementById("gallonOutput").innerText = (inputValue / 3.785).toFixed(3);
    document.getElementById("gallonInput").innerText = inputValue;
    document.getElementById("literOutput").innerText = (inputValue * 3.785).toFixed(3);

    document.getElementById("kiloInput").innerText = inputValue;
    document.getElementById("poundOutput").innerText = (inputValue * 2.20462).toFixed(3);
    document.getElementById("poundInput").innerText = inputValue;
    document.getElementById("kiloOutput").innerText = (inputValue / 2.20462).toFixed(3);
    
}
