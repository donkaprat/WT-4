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
var htmlCode = "<h1>Exercice TypeScript</h1>";
htmlCode += '<h2>Somme des âges</h2>';
var ages = users.map(function (e) { return e.age; });
htmlCode += '<p>' + String(ages.reduce(function (e, a) { return a += e; })) + '</p>';
htmlCode += '<h2>Listes des noms</h2>';
htmlCode += '<p>' + users.map(function (e) { return e.name; }) + '</p>';
htmlCode += '<h2>Ajout de frank en utilisateur</h2>';
users.push({ id: franckMonod.id,
    name: franckMonod.name,
    age: franckMonod.age,
    company: {
        id: null,
        name: franckMonod.company,
        location: null
    },
    status: franckMonod.status });
htmlCode += '<p>' + users.map(function (e) { return e.name; }) + '</p>';
htmlCode += '<h2>Liste des alternants</h2>';
htmlCode += '<p>' + users.filter(function (e) { return e.status == 'alternant'; }).map(function (e) { return e.name; }) + '</p>';
htmlCode += '<h2>Thomas devient cofondateur</h2>';
var t = undefined;
for (var i in users) {
    if (users[i].name == 'Thomas') {
        t = users[i];
    }
}
if (t) {
    t.status = 'cofondateur';
    htmlCode += '<p>' + t.status + '</p>';
}
else {
    htmlCode += '<p>Thomas n existe pas</p>';
}
htmlCode += '<h2>Tous les cofondateurs</h2>';
htmlCode += '<p>' + users.filter(function (e) { return e.status == 'cofondateur'; }).map(function (e) { return e.name; }) + '</p>';
htmlCode += "<h2>Nom de l'entreprise de l'user indice 2</h2>";
var user = undefined;
for (var i in users) {
    if (i == '2') {
        user = users[i];
    }
}
htmlCode += '<p>' + user.company.name + '</p>';
htmlCode += "<h2>Localisation de l'user 2</h2>";
htmlCode += '<p>' + user.company.location + '</p>';
htmlCode += "<h2>Changement PRISMO en Cran-Gevrier</h2>";
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var i = users_1[_i];
    if (i.company != null && i.company.name != null && i.company.name == 'PRISMO') {
        htmlCode += '<p>' + i.company.location == null ? '' : i.company.location + '</p>';
        i.company.location = 'Cran-Gevrier';
        htmlCode += '<p>devient ';
        htmlCode += '' + i.company.location == null ? '' : i.company.location + '</p>';
    }
}
appDiv.innerHTML = htmlCode;
