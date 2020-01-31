var inputAge = document.getElementById('inputAge');
var boutonAge = document.getElementById('boutonAge');
var retourAge = document.getElementById('retourAge');
var retourTableau = document.getElementById('retourTableau');
var retourTableauIndex = document.getElementById('retourTableauIndex');

boutonAge.addEventListener('click', function () {
    retourAge.innerHTML+="J'ai "+inputAge.value+" ans.";
});

var boutonStocker = document.getElementById('boutonStocker');
var tableauAge = [];


boutonStocker.addEventListener('click', function () {

    retourTableau.innerHTML+=tableauAge.push(inputAge.value);

    var numRandom = Math.floor(Math.random()*tableauAge.length);
    var ageRandom = tableauAge[numRandom];

    var entreeCinq = document.getElementById('entree5');

    var dixValeurs = document.getElementById('dixValeurs');

   console.log(tableauAge);

   if (tableauAge.length===10){
        retourTableauIndex.innerHTML=ageRandom;
        console.log (ageRandom);
    }
    else if (tableauAge.length===12){
       entreeCinq.innerHTML+=tableauAge[4];
    }

    else if (tableauAge.length<10){
        dixValeurs.innerHTML+='Vous devez entrer 10 valeurs';
   }

});

var boutonEntreeAleatoire = document.getElementById('boutonEntreeAleatoire');

boutonEntreeAleatoire.addEventListener('click', function () {

    var divEntreeAleatoire = document.getElementById('divEntreeAleatoire');

    var numRandom = Math.floor(Math.random()*tableauAge.length);
    var ageRandom = tableauAge[numRandom];

    if (tableauAge.length>0 && tableauAge.length<10){
        divEntreeAleatoire.innerHTML=ageRandom;
    }

});

var tableauComplet = document.getElementById('tableauComplet');
var boutonTableauComplet = document.getElementById('boutonTableauComplet');

boutonTableauComplet.addEventListener('click', function () {
console.log(tableauAge);
    for (var i=0; i<tableauAge.length; i++){
        tableauComplet.innerHTML+= tableauAge[i]+"-"+i+" ";
    }

});

var boutonSupprimer = document.getElementById('boutonSupprimer');

boutonSupprimer.addEventListener('click', function () {
    tableauComplet.innerHTML=tableauAge.pop();

});

var boutonToutSupprimer = document.getElementById('boutonToutSupprimer');

boutonToutSupprimer.addEventListener('click', function () {
    tableauComplet.innerHTML=tableauAge.splice();
});