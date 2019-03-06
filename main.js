const dinosaurs = [
    {
        dinoType: 't-rex',
    },
    {
        dinoType: 'stegosaurus',
    },
    {
        dinoType: 'velociraptor',
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
        domString += `<h3>My favorite dinosaurs is a ${dinosaurs[i].dinoType}</h3>`;
    }
    printToDom('dinos', domString);
};







const init = () => {
    buildDinosaurs();
};

init();
