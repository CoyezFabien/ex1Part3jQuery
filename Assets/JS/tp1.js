// Construisez une page html avec un bouton et un champ number. Le but est de trouver un nombre entre 0 et 100. A chaque réponse la page répond :
// plus
// moins
// correcte
// Quand la réponse est trouvée, on obtient le nombre d'essais que l'on a fait.
// 
$(function(){

    var miniNumber = 1
    var maxiNumber = 100
    var randonumber = Math.floor(math.random() * 100) + 1

$('#play').click(function(){
    var nombre = $('#').val();

    if( nombre > randonumber){
        alert('c\'est moins');
    }
    if( nombre < randonumber ){
        alert('c\'est plus');
    }
    if( nombre == randonumber ){
        alert('c\'est le bingo');
    }
});

});

// -gerer un nombre aléatoire
// -mettre le nombre aléatoire  entre 0 et 100
// -s'assurer que c'est bien nombre
// faut récuperer la valeur de ce nombre avec une varaible avec le .val()

// -je vais avoir à mettre plusieurs alerte à placer
// -chaque clique il y a une réponse donc mettre le .click pour comparer le nombre aléatoire avec 
// -mettre des if le nombre rrentrer est supe au nombre aléatoire
// -recupere le nombre de clique on rajoute une variable qui va se lancer 
// -acrémenter conteur ++
// -alerte "afficher la valeur de cette variable"


/*gérer un nombre aléatoire en utilisant Math.radom en utilisant la fonction math.random() math radom*/
/*Opérateur de comparaison le == le >= le < le >
== opérateur d'égalité compare deux valeurs et verifie leur égalité
> opérateur de supériorité strict vérifie qu'une variable est strictement supérieur à une valeur
< opérateur d'infériorité strict qu'une varaible est strictement inférieur à une valeur */

/*Opérateur logique 
||  */

math random permet ded'avoir un chiffre en 0 et 1 je multiplie * 100 
math floor permet de récupere un entier car sans ca on aura des 98.22 et pour trouver le chiffre il faut se lever toString

$(function() {
    var valeur = math.floor (math.random()*100);
    var compteur = 0;
// compteur variable permet d'afficher le nombre de coup pour l'utilisateur afin de trouver le nombre exacte c'est deux variable hors de l'evement permet de definir les bases avant de commencer les if
}
$('#....').click(function(){
    var ... = $ ('#....').val() recuperer la valeur du champ on la sctok dans la variable
    compteur++ (premet acrémenter chaque clique on ajoute 1 et à la fin on c'est combien de clique)


}