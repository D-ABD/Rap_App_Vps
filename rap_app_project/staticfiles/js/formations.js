document.addEventListener("DOMContentLoaded", function () {
    // Fonction pour récupérer le CSRF Token dans les cookies
    function getCSRFToken() {
        let cookieValue = null;
        if (document.cookie && document.cookie !== "") {
            const cookies = document.cookie.split(";");
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.startsWith("csrftoken=")) {
                    cookieValue = cookie.substring("csrftoken=".length, cookie.length);
                    break;
                }
            }
        }
        return cookieValue;
    }

    // Sélectionner tous les champs de modification des inscrits
    document.querySelectorAll(".update-inscrits").forEach(input => {
        input.addEventListener("change", function () {
            let formationId = this.dataset.formationId;
            let field = this.dataset.field;
            let value = parseInt(this.value, 10); // Convertir en entier

            // Vérification que la valeur est un nombre valide et positif
            if (isNaN(value) || value < 0) {
                alert("Veuillez entrer une valeur valide !");
                this.value = this.defaultValue; // Restaurer la valeur précédente
                return;
            }

            // Désactiver le champ pendant la requête pour éviter les modifications multiples
            this.disabled = true;

            fetch(`/formations/modifier-inscrits/${formationId}/`, {
                method: "POST",
                headers: {
                    "X-CSRFToken": getCSRFToken(),  // ✅ Ajout du CSRF Token
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    field: field,
                    value: value
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log("Mise à jour réussie !");
                    this.classList.add("border-success");  // ✅ Effet visuel de confirmation
                    setTimeout(() => this.classList.remove("border-success"), 1000);
                    this.defaultValue = value; // ✅ Mettre à jour la valeur par défaut après succès
                } else {
                    alert("Erreur: " + data.error);
                    this.value = this.defaultValue; // ✅ Restaurer la valeur précédente
                }
            })
            .catch(error => {
                console.error("Erreur AJAX :", error);
                alert("Erreur de connexion au serveur.");
                this.value = this.defaultValue;
            })
            .finally(() => {
                this.disabled = false; // ✅ Réactiver le champ après la requête
            });
        });
    });
});
