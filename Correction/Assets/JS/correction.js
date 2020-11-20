// Construisez une page html avec un bouton et un champ number. Le but est de trouver un nombre entre 0 et 100. A chaque réponse la page répond :
// plus
// moins
// correcte
// Quand la réponse est trouvée, on obtient le nombre d'essais que l'on a fait.

/*1er étape il faut décortiquer la demande on fait un cahier des charges en gros 
-construire un page html avec un  bouton number et un champs
-il va falloir de gérer un nombre aléatoire en java
-il va falloir créer une borne le nombre aléatoire doit etre entre 0 et 100
-il va falloir créer des alertes 
-des conditions plus moins ...
-récupérer le nombre d'éssais que l'on a fait récupérer sa valeur  */

$(document).ready(function(){/*quand le document html es pret on mettre du jquery */
    var randomNumber = Math.floor(Math.random()*100);/*on va stocker un nombre aléatoire, math.random va donner un chiffre aléatoire *100 permet d'avoir un chiffre jusqu'à 99, le math.floor permet de mettre de chiffre aléatoire en chiffre entier sinon le jeux durer 3 jours */
    // console.log(randomNumber)
    var compteur = 0; /*c'est demander de savoir combien de coups il faut la stocker dans une variable et le chiffre 0 c'est pour dire que l'on commence à 0 et le 0 et sans les simple cote car sans les cote on defini que c'est un chiffre et non une chaine de caractère */
    $('#valider').click(function compare(){/*on récupere ID on lui donne l'evenement click c'est au click que des condition etc... vont se mettre en place */
        var numberUser = $('#number').val()/*on va récuperer la valeur que l'utilisateur va mettre dans le champs et la stocker dans une variable */
        // console.log(numberUser);
        if(isNaN(numberUser) == false && numberUser >= 0 && numberUser <=100){/*ici 1er condition avec is Nan (is Not a Numbeur) pour dire que le champs n'est pas un chiffre c'est faux et renvoie à else "tu dois écrire un chiffre " du coups si tu marque un chiffre c'est true et le champs doit etre sup ou = à 0 et en dessous ou egal à 100*/
            compteur ++;/*le compteur du début on va l'incrémenter avec du ++ qui ajoute +1 à chaque clique  */
            if (numberUser < randomNumber){ /*si le champs est inf au nombre aléatoire c'est plus */
        alert('plus');
        }else if (numberUser > randomNumber){
            alerte('moins');
        }else {
            alert('bingo tu as trouvé en ' + compteur +'essais');
        }
        } else {
            alert('tu dois écrire un nombre');/*permet de prévenir les personnes que si il ne respecte pas de marquer un chiffre qui est une des condition grace au (isNan(....) alors apparaitra ce message  */
        }
    });
});

// $(document).ready(function(){
//     /* $(function(){      /* indique que la fonction sera chargée /
// $(document).ready(function(){

//     $(document).ready(function(){
//         var randomNumber = Math.floor(Math.random()100);/* gérer un nombre aléatoire Math.floor signifie nombre entier ; Math.random génère des nombre entre 0 et 1, donc, multiplié par 100, il iundiquera un nb compris dans la fourchette recherchée /
// console.log(randomNumber)
//         var compteur = 0;/ introduire la varible du compteur /
//         $('#valider').click(function compare(){
//             var numberUser = $('#number').val()
//             // console.log(numberUser);
//             if($.isNumeric(numberUser) == true && numberUser >= 0 && numberUser <=100 && numberUser != ""){/ conditions : $.isNumeric verifie que c'est un nombre ; compris entre o et 10 ; le champ ne doit pas rester vide */
//                 compteur ++;
//                 if (numberUser < randomNumber){
//                 alert('plus');
//                 }else if (numberUser > randomNumber){
//                     alert('moins');
//                 }else {
//                     alert('Bravo, tu as trouvé en ' + compteur +' essais !');
//                 }
//             } else {
//                 alert('Ecris un nombre entre 0 et 100');
//             }
//         });
//     });
// });