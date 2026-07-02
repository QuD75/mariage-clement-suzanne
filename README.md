# Mariage Suzanne & Clément — 12 juin 2027

Site statique du mariage, hébergé sur GitHub Pages (domaine personnalisé : `mariagesuzanneclement.fr`, voir `CNAME`).

## Structure

```
index.html                        Accueil (intro, compte à rebours, aperçu des rubriques)
pages/
  weekend.html                    Programme du week-end (timeline)
  informations-pratiques.html     Adresse, logement, dress code
  liste-mariage.html              Liste de mariage
  babysitting.html                Service de garde d'enfants
  contact.html                    Formulaire de contact (mailto)
assets/
  css/                            Un fichier CSS par page + style.css (base commune)
  js/                             countdown.js (compte à rebours), menu.js (menu mobile)
  images/                         Photo du couple + favicon
```

## À compléter avant mise en ligne

Les zones surlignées en jaune sur le site (`<span class="placeholder">`) marquent les informations
encore à renseigner :

- Adresse exacte du lieu, itinéraire voiture/transports en commun
- Hôtels / hébergements conseillés
- Couleurs à éviter éventuelles pour la tenue des invités
- Détails du babysitting (horaires, lieu, inscription)
- Lien vers la liste de mariage
- Adresse e-mail de contact (`contact@mariagesuzanneclement.fr` est un placeholder dans `pages/contact.html`)

## Développement local

Aucune dépendance : ouvrir `index.html` dans un navigateur, ou lancer un serveur statique
(`python3 -m http.server`) à la racine du projet pour que les chemins absolus (`/assets/...`)
fonctionnent correctement.
