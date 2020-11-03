var companies = [
    {
        id: 1,
        name: 'Maison du net',
        location: 'Crang-Gevrier'
    },
    {
        id: 2,
        name: 'PRISMO',
        location: 'Annecy'
    }
];
var users = [
    {
        id: 1,
        name: 'Leïla',
        age: 22,
        company: null,
        status: 'alternant'
    },
    {
        id: 2,
        name: 'Thomas',
        age: null,
        company: {
            id: 1,
            name: 'PRISMO',
            location: 'Annecy'
        },
        status: 'cofondateur'
    },
    {
        id: 3,
        name: 'Rémi',
        age: 26,
        company: {
            id: 1,
            name: 'PRISMO',
            location: 'Cran-Gevrier'
        },
        status: 'Associé'
    },
    {
        id: 4,
        name: 'Yannick',
        age: 21,
        company: {
            id: 1,
            name: 'PRISMO',
            location: null
        },
        status: 'alternant'
    }
];
var franckMonod = {
    id: 5,
    name: 'Franck',
    age: 27,
    company: 'PRISMO',
    status: 'cofondateur'
};
var appDiv = document.getElementById('app');
appDiv.innerHTML = "<h1>Exercice TypeScript</h1>";
