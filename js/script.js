/* Nombre d'essais */
var essai = 0;

function quizAlert() {

    /* Test des champs */
    if (document.getElementById("Nom").value == "") {
        alert("Nom vide");
    }

    else if (document.getElementById("Prenom").value == "") {
        alert("Prenom vide");
    }

    else if (document.getElementById("naissance").value == "") {
        alert("Date de naissance vide");
    }

    else if (document.getElementById("mail").value == "") {
        alert("Adresse mail vide");
    }

    else if (document.getElementById("Statut").value == "") {
        alert("Statut non choisi");
    }

    else {

        /* Si tout les champs remplis : Lancement du Quiz */
        alert("Vous êtes sur le point de commencer le quiz !");
        quizConfirm();

        /* Blocage des changements sur les champs de saisies*/
        document.getElementById("Nom").readOnly = true;
        document.getElementById("Prenom").readOnly = true;
        document.getElementById("naissance").readOnly = true;
        document.getElementById("mail").readOnly = true;
        document.getElementById("Statut").disabled = true;
        document.getElementById("commencer").style.display = "none";
    }
}




function quizConfirm() {

    var res = confirm("Etes-vous sûr de vouloir continuer ?");

    if (res == true) {
        alert("Le quiz va commencer dans 5 secondes !");

        var timer = 5;

        var confirmation = document.createElement("p");
        confirmation.textContent = timer + " secondes";

        confirmation.style.color = "lightcoral";
        confirmation.style.fontSize = "1.5em";
        confirmation.style.fontWeight = "bold";
        confirmation.style.textAlign = "center";

        var start = document.getElementById("informations");
        start.appendChild(confirmation);

        var interval = setInterval(function () {

            timer--;

            console.log(timer);

            confirmation.textContent = timer + " secondes";

            if (timer == 0) {
                clearInterval(interval);
                confirmation.textContent = "C'est parti ! Bonne chance !";
                document.getElementsByClassName("quiz")[0].style.display = "block";
                document.getElementById("envoyer").style.display = "block";
            }
        }, 1000);
    } else {
        alert("Vous allez être redirigé vers la page d'accueil !");
        window.location.href = "accueil.html";
    }
}

function submitQuiz() {

    /* Initialisation du score et nombre d'essai */
    var score = 0;
    essai += 1;

    if (essai == 3) {
        document.getElementById("envoyer").style.display = "none";
    }

    console.log("Submit");

    /* Calcul du score */
    if (document.getElementById('question1_a').checked) {
        score += 4;
        console.log(score);

    }

    if (document.getElementById('question2_1').checked) {
        score += 3;
        console.log(score);
    }

    if (document.getElementById('question2_2').checked) {
        score += 3;
        console.log(score);
    }

    if (document.getElementById('question2_3').checked) {
        score -= 3;
        console.log(score);
    }

    if ((document.getElementById("question3").value.includes("réduire")) || (document.getElementById("question3").value.includes("alléger")) || (document.getElementById("question3").value.includes("faciliter")) || (document.getElementById("question3").value.includes("optimiser")) || (document.getElementById("question3").value.includes("exploiter"))) {
        score += 10;
    }

    console.log(score);

    /* Création de la nouvelle ligne*/
    var scoretableau = document.createElement("td");
    var essaitableau = document.createElement("td");
    var tableau = document.getElementById("tableaubody");
    var ligne = document.createElement("tr");


    scoretableau.textContent = score;
    essaitableau.textContent = essai;

    ligne.appendChild(essaitableau);
    ligne.appendChild(scoretableau);

    tableau.appendChild(ligne);

    /* Remise à zéro du formulaire*/
    document.getElementById("QuizId2").reset();



}