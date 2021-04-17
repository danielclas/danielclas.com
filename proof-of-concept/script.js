const initialLabel = "Daniel Clas | ";
const isMobile = window.innerWidth < 550;

function onMouseOver(name){
    document.getElementById("label").innerHTML = initialLabel + " " + name;
}

function onMouseLeave(){
    document.getElementById("label").innerHTML = initialLabel;
}

function onClick(e){
    let currrentLabel = document.getElementById('label').innerHtml;
    let element = e.srcElement;

    console.log(isMobile);
    if(!isMobile || currrentLabel !== initialLabel){
        switch(element.id){
            case 'resume':
                window.open('./assets/test.pdf');
                break;
            case 'portfolio':
                window.open('https://github.com/danielclas');
                break;
            case 'contact':
                window.open('https://www.linkedin.com/in/danielclas/');
                break;
        }
    }
}