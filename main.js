const dinosaurs = [
    {
        dinoType: 't-rex',
        name: 'Tom',
    },
    {
        dinoType: 'stegosaurus',
        name: 'Ralph',
    },
    {
        dinoType: 'velociraptor',
        name: 'Bob',
    }
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

//loop over the dinosaurs
//build a dom string 
//print dom string to dom 

const buildDinosaurs = () => {
    let domString = '';
    for(let i = 0; i < dinosaurs.length; i++){
        domString += `<div class='dinosaur'>`;
        domString += `<h3>${dinosaurs[i].dinoType}</h3>`;
        domString += `<p>${dinosaurs[i].name}</p>`;
        domString += `</div>`;
    }
    printToDom('dinos', domString);
};


const init = () => {
    buildDinosaurs();
};

init();
