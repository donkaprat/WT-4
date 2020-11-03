const companies = [
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
const users = [
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
const franckMonod = {
  id: 5,
  name: 'Franck',
  age: 27,
  company: 'PRISMO',
  status: 'cofondateur'
};

const appDiv: HTMLElement = document.getElementById('app');
let htmlCode : string = `<h1>Exercice TypeScript</h1>`;

htmlCode += '<h2>Somme des âges</h2>';
let ages : Array<number> = users.map(e => e.age);
htmlCode += '<p>'+String(ages.reduce((e,a) => a += e))+'</p>';
 
htmlCode += '<h2>Listes des noms</h2>';
htmlCode += '<p>'+users.map(e => e.name)+'</p>';

htmlCode += '<h2>Ajout de frank en utilisateur</h2>';
users.push({id: franckMonod.id,
    name: franckMonod.name,
    age: franckMonod.age,
    company: {
      id: null,
      name: franckMonod.company,
      location: null
    },
    status: franckMonod.status});
htmlCode += '<p>'+users.map(e => e.name)+'</p>';

htmlCode += '<h2>Liste des alternants</h2>';
htmlCode += '<p>'+users.filter(e => e.status == 'alternant').map(e => e.name)+'</p>';

htmlCode += '<h2>Thomas devient cofondateur</h2>';
let t = undefined;
for(let i in users){
  if(users[i].name == 'Thomas'){
    t = users[i];
  }
}
if(t){
  t.status = 'cofondateur';
  htmlCode += '<p>'+ t.status + '</p>';
}else{
  htmlCode += '<p>Thomas n existe pas</p>';
}

htmlCode += '<h2>Tous les cofondateurs</h2>';htmlCode += '<p>'+users.filter(e => e.status == 'cofondateur').map(e => e.name)+'</p>';

htmlCode += "<h2>Nom de l'entreprise de l'user indice 2</h2>";
let user = undefined;
for(let i in users){
  if(i == '2'){
    user = users[i];
  }
}
htmlCode += '<p>'+user.company.name+'</p>';

htmlCode += "<h2>Localisation de l'user 2</h2>";
htmlCode += '<p>'+user.company.location+'</p>';

htmlCode += "<h2>Changement PRISMO en Cran-Gevrier</h2>";
for(let i of users){
  if(i.company != null && i.company.name != null && i.company.name == 'PRISMO'){
    htmlCode += '<p>'+i.company.location == null? '': i.company.location+'</p>';
    i.company.location = 'Cran-Gevrier';
    htmlCode += '<p>devient ';
    htmlCode += ''+i.company.location == null? '': i.company.location+'</p>';
  }
}
appDiv.innerHTML = htmlCode;


