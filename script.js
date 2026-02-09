const ideas = [
    {titre:"Aquarium de Paris", categorie:"Visite", description:"Observer les poissons dans un environnement calme", parking:"Oui", duree:"30–60 min", energie:"Très faible"},
    {titre:"Parc Montsouris", categorie:"Balade", description:"Balade calme avec bancs et zones peu fréquentées", parking:"Oui", duree:"15–45 min", energie:"Très faible"},
    {titre:"Shooting photo minimaliste", categorie:"Créatif", description:"Prendre 10 photos autour d’un thème simple", parking:"Variable", duree:"30 min", energie:"Faible"},
    {titre:"Musée d’Art Moderne", categorie:"Culture", description:"Entrée gratuite et visite courte possible", parking:"Oui", duree:"20–60 min", energie:"Faible"},
    {titre:"Bords de Seine tranquilles", categorie:"Balade", description:"Marcher doucement près de l’eau", parking:"Variable", duree:"15–40 min", energie:"Très faible"},
    {titre:"Librairie calme", categorie:"Intérieur", description:"Feuilleter sans obligation d’achat", parking:"Oui", duree:"20–40 min", energie:"Très faible"},
    {titre:"Parc André Citroën", categorie:"Balade", description:"Grand espace ouvert et calme", parking:"Oui", duree:"20–45 min", energie:"Très faible"},
    {titre:"Street art 13e", categorie:"Créatif", description:"Observer quelques œuvres précises", parking:"Variable", duree:"30–45 min", energie:"Moyenne"},
    {titre:"Serres d’Auteuil", categorie:"Visite", description:"Plantes et chaleur douce", parking:"Oui", duree:"20–40 min", energie:"Très faible"},
    {titre:"Vue depuis Montmartre", categorie:"Observation", description:"Regarder Paris sans objectif précis", parking:"Variable", duree:"20–40 min", energie:"Moyenne"},
    {titre:"Canal Saint-Martin", categorie:"Balade", description:"Balade lente le long de l’eau", parking:"Variable", duree:"20–45 min", energie:"Faible"},
    {titre:"Petit musée local", categorie:"Culture", description:"Visite rapide et libre", parking:"Oui", duree:"20–45 min", energie:"Faible"},
    {titre:"Photographier les portes", categorie:"Créatif", description:"Choisir un quartier et photographier les portes", parking:"Variable", duree:"30 min", energie:"Moyenne"},
    {titre:"Jardin des Plantes", categorie:"Balade", description:"Marcher parmi les jardins et serres", parking:"Oui", duree:"20–45 min", energie:"Très faible"},
    {titre:"Bibliothèque publique", categorie:"Intérieur", description:"S’installer au calme sans lire forcément", parking:"Oui", duree:"30–60 min", energie:"Très faible"},
    {titre:"Observation des bateaux", categorie:"Observation", description:"Regarder passer les péniches", parking:"Variable", duree:"15–30 min", energie:"Très faible"},
    {titre:"Parc Monceau", categorie:"Balade", description:"Parc calme avec allées larges", parking:"Oui", duree:"20–45 min", energie:"Très faible"},
    {titre:"Dessin rapide", categorie:"Créatif", description:"Dessiner pendant 10 minutes sans objectif", parking:"Oui", duree:"15–30 min", energie:"Faible"},
    {titre:"Musée Carnavalet", categorie:"Culture", description:"Histoire de Paris, entrée gratuite", parking:"Oui", duree:"30–60 min", energie:"Faible"},
    {titre:"Quartier Butte-aux-Cailles", categorie:"Balade", description:"Petites rues calmes et colorées", parking:"Variable", duree:"30–45 min", energie:"Moyenne"},
    {titre:"Photo noir et blanc", categorie:"Créatif", description:"Photographier uniquement en noir et blanc", parking:"Variable", duree:"30 min", energie:"Moyenne"},
    {titre:"Square des Batignolles", categorie:"Balade", description:"Petit parc paisible", parking:"Oui", duree:"20–40 min", energie:"Très faible"},
    {titre:"Regarder le coucher du soleil", categorie:"Observation", description:"Choisir un point calme et regarder", parking:"Variable", duree:"20–30 min", energie:"Très faible"},
    {titre:"Marché local", categorie:"Observation", description:"Marcher lentement sans acheter", parking:"Oui", duree:"20–40 min", energie:"Faible"},
    {titre:"Musée Bourdelle", categorie:"Culture", description:"Ateliers calmes et gratuits", parking:"Oui", duree:"20–45 min", energie:"Faible"},
    {titre:"Jeu photo thème couleur", categorie:"Créatif", description:"Trouver 5 objets d’une même couleur", parking:"Variable", duree:"30 min", energie:"Moyenne"},
    {titre:"Promenade nocturne calme", categorie:"Balade", description:"Sortie courte le soir", parking:"Oui", duree:"15–30 min", energie:"Faible"},
    {titre:"Parc Georges Brassens", categorie:"Balade", description:"Calme et ouvert", parking:"Oui", duree:"20–45 min", energie:"Très faible"},
    {titre:"Musée Zadkine", categorie:"Culture", description:"Petit musée très calme", parking:"Oui", duree:"20–40 min", energie:"Faible"},
    {titre:"Parc floral", categorie:"Balade", description:"Grand espace naturel", parking:"Oui", duree:"30–60 min", energie:"Faible"},
    {titre:"Petit pont parisien", categorie:"Balade", description:"Marcher jusqu’à un pont précis", parking:"Variable", duree:"20–40 min", energie:"Faible"},
    {titre:"Musée Cernuschi", categorie:"Culture", description:"Musée asiatique gratuit et calme", parking:"Oui", duree:"30–60 min", energie:"Faible"},
    {titre:"Square calme de quartier", categorie:"Balade", description:"Découvrir un square peu connu", parking:"Oui", duree:"20–40 min", energie:"Très faible"},
    {titre:"Petite expo gratuite", categorie:"Culture", description:"Visite courte et libre", parking:"Oui", duree:"20–45 min", energie:"Faible"},
    {titre:"Parc de Belleville", categorie:"Balade", description:"Vue dégagée et calme", parking:"Oui", duree:"20–45 min", energie:"Faible"},
    {titre:"Musée Cognacq-Jay", categorie:"Culture", description:"Musée intimiste et gratuit", parking:"Oui", duree:"30–60 min", energie:"Faible"},
    {titre:"Jardin Villemin", categorie:"Balade", description:"Petit parc discret", parking:"Variable", duree:"20–30 min", energie:"Très faible"},
    {titre:"Musée de la Vie Romantique", categorie:"Culture", description:"Jardin et musée gratuits", parking:"Oui", duree:"30–60 min", energie:"Faible"},
    {titre:"Photo détails urbains", categorie:"Créatif", description:"Photographier les petits détails", parking:"Variable", duree:"30 min", energie:"Moyenne"},
    {titre:"Parc de Bercy", categorie:"Balade", description:"Espaces larges et calmes", parking:"Oui", duree:"30–60 min", energie:"Faible"},
    {titre:"Parc des Buttes-Chaumont (zones calmes)", categorie:"Balade", description:"Marcher dans les parties peu fréquentées du parc", parking:"Oui", duree:"20–45 min", energie:"Faible"},
    {titre:"Observer les péniches au port", categorie:"Observation", description:"Regarder les bateaux accostés", parking:"Variable", duree:"15–30 min", energie:"Très faible"},
    {titre:"Photo thème 'lignes'", categorie:"Créatif", description:"Photographier lignes et perspectives", parking:"Variable", duree:"30 min", energie:"Moyenne"},
    {titre:"Jardin Anne-Frank", categorie:"Balade", description:"Petit jardin caché et silencieux", parking:"Variable", duree:"20–30 min", energie:"Très faible"},
    {titre:"Musée de la Libération", categorie:"Culture", description:"Musée gratuit et calme", parking:"Oui", duree:"30–60 min", energie:"Faible"},
    {titre:"Square des Peupliers", categorie:"Balade", description:"Petit square discret", parking:"Variable", duree:"20–30 min", energie:"Très faible"},
    {titre:"Musée Jean Moulin", categorie:"Culture", description:"Visite calme et instructive", parking:"Oui", duree:"30–60 min", energie:"Faible"},
    {titre:"Jardin Catherine-Labouré", categorie:"Balade", description:"Jardin discret et fermé", parking:"Variable", duree:"20–30 min", energie:"Très faible"},
    {titre:"Musée de la Monnaie (parties gratuites)", categorie:"Culture", description:"Découverte tranquille", parking:"Variable", duree:"30–60 min", energie:"Faible"},
    {titre:"Square Hector Berlioz", categorie:"Balade", description:"Petit square peu connu", parking:"Variable", duree:"20–30 min", energie:"Très faible"},
    {titre:"Musée des Égouts (zones calmes)", categorie:"Culture", description:"Visite insolite", parking:"Oui", duree:"30–60 min", energie:"Faible"},
    {titre:"Jardin partagé de quartier", categorie:"Balade", description:"Observer sans interagir", parking:"Variable", duree:"20–30 min", energie:"Très faible"},
    {titre:"Musée de la Préfecture de Police", categorie:"Culture", description:"Musée gratuit et calme", parking:"Oui", duree:"30–60 min", energie:"Faible"},
    {titre:"Square Léon Serpollet", categorie:"Balade", description:"Petit square méconnu", parking:"Variable", duree:"20–30 min", energie:"Très faible"},
    {titre:"Musée du Service de Santé", categorie:"Culture", description:"Musée discret et gratuit", parking:"Oui", duree:"30–60 min", energie:"Faible"},
    {titre:"Jardin Villemin (soir)", categorie:"Balade", description:"Ambiance calme en fin de journée", parking:"Variable", duree:"20–30 min", energie:"Très faible"},
    {titre:"Musée des Arts Forains (extérieur)", categorie:"Culture", description:"Observer l’extérieur", parking:"Variable", duree:"20–40 min", energie:"Faible"},
    {titre:"Square des Arènes de Lutèce", categorie:"Balade", description:"Parc historique calme", parking:"Variable", duree:"20–40 min", energie:"Très faible"},
    {titre:"Musée du Vieux Montmartre (jardin)", categorie:"Culture", description:"Jardin gratuit et calme", parking:"Variable", duree:"30–60 min", energie:"Faible"},
    {titre:"Balade dans un parc ou jardin botanique", categorie:"Balade", description:"Découvrir les plantes et profiter du calme", parking:"Oui", duree:"20–45 min", energie:"Très faible"},
    {titre:"Randonnée en forêt ou colline proche", categorie:"Balade", description:"Marcher pour profiter de la nature et des panoramas", parking:"Oui", duree:"1–2 h", energie:"Moyenne"},
    {titre:"Observation des oiseaux dans une réserve", categorie:"Observation", description:"Repérer et observer les oiseaux en silence", parking:"Oui", duree:"30–60 min", energie:"Très faible"},
    {titre:"Pique-nique au bord d’un lac ou d’une rivière", categorie:"Balade", description:"Manger dehors et profiter du cadre naturel", parking:"Oui", duree:"30–60 min", energie:"Très faible"},
    {titre:"Cueillette de fruits ou légumes", categorie:"Balade", description:"Cueillir des fruits/légumes selon saison", parking:"Oui", duree:"30–60 min", energie:"Faible"},
    {titre:"Jardiner ensemble sur balcon ou jardin", categorie:"Créatif", description:"Planter ou entretenir des plantes", parking:"Oui", duree:"20–40 min", energie:"Faible"},
    {titre:"Observer le coucher ou lever du soleil", categorie:"Observation", description:"Profiter d’un point de vue agréable", parking:"Variable", duree:"20–30 min", energie:"Très faible"},
    {titre:"Chasse au trésor urbaine", categorie:"Créatif", description:"Inventer ou suivre un parcours avec indices", parking:"Variable", duree:"30–60 min", energie:"Moyenne"},
    {titre:"Observer les étoiles en extérieur", categorie:"Observation", description:"Chercher constellations et étoiles filantes", parking:"Variable", duree:"30–60 min", energie:"Très faible"},
    {titre:"Roller, skate ou trottinette dans un parc", categorie:"Sport", description:"Se déplacer tout en s’amusant", parking:"Oui", duree:"30–60 min", energie:"Moyenne"},
    {titre:"Dessiner ou peindre en extérieur", categorie:"Créatif", description:"S’installer et dessiner sans pression", parking:"Oui", duree:"30–60 min", energie:"Faible"},
    {titre:"Écrire un texte ou poème à deux", categorie:"Créatif", description:"Créer ensemble et partager", parking:"Oui", duree:"20–40 min", energie:"Très faible"},
    {titre:"Fabriquer un objet ou bricoler avec récup", categorie:"Créatif", description:"Créer à partir de matériaux simples", parking:"Oui", duree:"30–60 min", energie:"Faible"},
    {titre:"Mini concours de dessins ou caricatures", categorie:"Créatif", description:"S’amuser en dessinant chacun son tour", parking:"Oui", duree:"20–40 min", energie:"Faible"},
    {titre:"Tester parcours d’énigmes gratuit", categorie:"Créatif", description:"Suivre un escape game urbain imprimable", parking:"Variable", duree:"30–60 min", energie:"Moyenne"},
    {titre:"Shooting photo à deux", categorie:"Créatif", description:"Passer une après-midi à explorer et photographier des lieux ou thèmes choisis ensemble", parking:"Variable", duree:"3–4 h", energie:"Moyenne"}
];

document.getElementById("randomBtn").addEventListener("click", () => {
    const idea = ideas[Math.floor(Math.random() * ideas.length)];
    const container = document.getElementById("randomResult");

    container.innerHTML = `
        <h3>${idea.titre}</h3>
        <p>${idea.description}</p>
        <ul>
            <li>🚗 Parking facile : ${idea.parking}</li>
            <li>⏱️ Durée : ${idea.duree}</li>
            <li>😌 Énergie : ${idea.energie}</li>
        </ul>
    `;
    container.classList.remove("hidden");
    container.scrollIntoView({ behavior: "smooth" });
});
