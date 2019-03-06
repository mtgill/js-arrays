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



const assignments = [
    {
        title: 'product cards',
        dueDate: '03/05/2019',
        topic: 'HTML/CSS',
        notes: 'Use flexbox',
        assignmentUrl: 'www.google.com',
    },
    {
        title: 'assignment2',
        dueDate: '04/11/2019',
        topic: 'HTML/CSS',
        notes: 'Use flexbox',
        assignmentUrl: 'www.google.com',
    },
    {
        title: 'assignment3',
        dueDate: '05/05/2019',
        topic: 'HTML/CSS',
        notes: 'Use flexbox',
        assignmentUrl: 'www.google.com',
    },
    {
        title: 'assignment4',
        dueDate: '06/05/2019',
        topic: 'HTML/CSS',
        notes: 'Use flexbox',
        assignmentUrl: 'www.google.com',
    },
    {
        title: 'assignment5',
        dueDate: '07/05/2019',
        topic: 'HTML/CSS',
        notes: 'Use flexbox',
        assignmentUrl: 'www.google.com',
    },
];

//total of 5 assignments 
//make a function called buildAssignmentCards - loop over the assignments and make a domString
// reuse printToDom function to display the domString 

// top - title area with border bottom
// Due date - in bold
// Link to assignment
// topic
//notes 


const buildCard = () => {
    let domString = '';
    for(let i = 0; i < assignments.length; i++ ){
        
        
        domString += `<div class='card'>`;
        domString += `<div><div class='title'><h2>${assignments[i].title}</h2></div>`;
        domString += `<h2>${assignments[i].dueDate}</h2>`;
        domString += `<h3><a href=${assignments[i].assignmentUrl}>Get the assignment here</a></h3>`;
        domString += `<h3>Topic: ${assignments[i].topic}</h3>`;
        domString += `<h3>Notes: ${assignments[i].notes}</h3>`;
        domString += `</div>`; 
        domString += `</div>`; 
        

    }

    printToDom('cards', domString);

};



buildCard();




const init = () => {
    buildDinosaurs();
};

init();
