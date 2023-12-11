// Fichier : inscription.js

// Fonction pour vérifier si les mots de passe sont identiques
function passValidation(event) {
    // Empêcher le rechargement de la page
    event.preventDefault();
  
    // Récupérer les valeurs des champs
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var numeroTelephone = document.getElementById("numeroTelephone").value;
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var dateNaissance = document.getElementById("dateNaissance").value;
  
    // Réinitialiser les messages d'erreur
    document.getElementById("nomError").textContent = "";
    document.getElementById("prenomError").textContent = "";
    document.getElementById("numeroTelephoneError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("dateNaissanceError").textContent = "";
  
    // Vérification du nom
    if (!/^[a-zA-Z]{3,}$/.test(nom)) {
      document.getElementById("nomError").textContent = "Le nom doit contenir uniquement des lettres et avoir au moins 3 caractères";
    }
  
    // Vérification du prénom
    if (prenom.length < 4) {
      document.getElementById("prenomError").textContent = "Le prénom doit avoir au moins 4 caractères";
    }
  
    // Vérification du numéro de téléphone
    if (/\D/.test(numeroTelephone)) {
      document.getElementById("numeroTelephoneError").textContent = "Le numéro de téléphone ne doit contenir que des chiffres";
    }
  
    // Vérification de l'email
    if (!/\S+@\S+\.\S+/.test(email)) {
      document.getElementById("emailError").textContent = "Veuillez entrer une adresse email valide";
    }
  
    // Vérification du mot de passe
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}/.test(password1)) {
      document.getElementById("passwordError").textContent = "Le mot de passe doit contenir au moins 10 caractères, dont au moins une lettre majuscule, une lettre minuscule et un nombre";
    }
  
    // Vérification de la correspondance des mots de passe
    if (password1 !== password2) {
      document.getElementById("passwordError").textContent = "Les mots de passe ne correspondent pas";
    }
  
    // Vérification de la date de naissance
    if (!/\d{2}\/\d{2}\/\d{4}/.test(dateNaissance)) {
      document.getElementById("dateNaissanceError").textContent = "Veuillez entrer une date de naissance valide (format : JJ/MM/AAAA)";
    }
  }
  
  // Ajouter l'événement submit au formulaire
  document.getElementById("inscriptionForm").addEventListener("submit", passValidation);
  
  // Initialiser le calendrier pour la date de naissance
  var dateNaissanceInput = document.getElementById("dateNaissance");
  dateNaissanceInput.addEventListener("focus", function() {
    var options = {
      dateFormat: "dd/mm/yy",
      changeYear: true,
      yearRange: "1900:2023"
    };
    $(this).datepicker(options);
  });