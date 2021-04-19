const initialLabel = 'daniel clas |';
const isMobile = window.innerWidth < 550;
const cssClass = 'grow';
const path = './assets/icons';

function onMouseOver(e){
    const element = e.srcElement;
    const id = e?.srcElement?.id;

    setTimeout(() => document.getElementById('label').innerHTML = `${initialLabel} ${element.id}`, 100);

    if(id !== 'blog') element.classList.add('grow');

    changeFavicon(id);
}

function onMouseLeave(e){
    const element = e.srcElement;
    document.getElementById('label').innerHTML = initialLabel;
    setTimeout(() => element.classList.remove('grow'), 1000);
    changeFavicon('icon');
}

function onClick(e){
    const label = document.getElementById('label').innerHTML;
    const id = e?.srcElement?.id;

    if(label.includes(id)){
        switch(id){
            case 'résumé':
                window.open('./assets/cv.pdf');
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

function changeFavicon(name) {
    let favicon = document.querySelector('link[rel="icon"]')
    let link = `${path}/${name}.jpg`;

    if (!favicon) {
      favicon = document.createElement("link")
      favicon.rel = "icon"
      document.head.appendChild($favicon)
    }

    favicon.href = link
  }