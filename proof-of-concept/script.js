const labelVal = "Daniel Clas | ";

function onMouseOver(name){
    document.getElementById("label").innerHTML = labelVal + " " + name;
}

function onMouseLeave(){
    document.getElementById("label").innerHTML = labelVal;
}