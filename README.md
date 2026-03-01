# Pixel-tracker

## Présentation de la menace étudiée

Ce projet met en évidence le fonctionnement d’un pixel tracker, une technique couramment utilisée sur les sites web pour suivre l’activité des utilisateurs de manière discrète.

Un pixel tracker est une image invisible (souvent de taille 1×1 pixel) intégrée dans une page web. Lorsqu’un utilisateur charge la page, cette image est automatiquement demandée à un serveur distant, ce qui permet de collecter certaines informations sans interaction explicite de l’utilisateur.

L’objectif de cette démonstration est de montrer comment ce mécanisme fonctionne techniquement et quelles données peuvent être récupérées simplement lors du chargement d’une page web.

## Données observées

Lors du chargement de la page HTML contenant le pixel tracker, plusieurs informations sont automatiquement collectées par le serveur :

Adresse IP de l’utilisateur

Date et heure de la visite

Type de navigateur (User-Agent)

Système d’exploitation

Page consultée (référent)

## Moment de collecte

Les données sont collectées dès l’ouverture de la page, sans action particulière de l’utilisateur.

## Mécanisme technique

La collecte se fait grâce à :

Une requête HTTP envoyée automatiquement par le navigateur

Déclenchée par le chargement du pixel invisible intégré dans le code HTML

## Implications de ces données

Même si les données collectées semblent limitées, elles permettent plusieurs usages importants :

Suivi des visites d’un utilisateur dans le temps

Identification indirecte via l’adresse IP et l’empreinte du navigateur

Profilage comportemental (fréquence de visite, horaires, navigation)

Corrélation avec d’autres sites utilisant le même tracker

Ce type de technique est très utilisé en publicité, marketing et analyse d’audience.

## Limites de la démonstration

Cette application reste une démonstration simplifiée.

Elle ne montre pas :

Le croisement de données avec des bases externes

Les techniques avancées de fingerprinting

L’utilisation de cookies tiers

Le suivi multi-sites réel

Le projet illustre uniquement le principe technique du pixel tracker et les informations de base collectables.

## Installation et utilisation

Aucune installation particulière n’est nécessaire.

Étapes :

- Télécharger le projet.

- Ouvrir l'un des fichiers HTML dans un navigateur web (La version avec ou sans tracker et vous pourrez naviguer entre les deux après lancement).

- Observer le fonctionnement du tracker (dans la console ou le système de logs prévu).

## Scénario

Un Scénario simple peut être reproduit avec les étapes suivantes :

- Lancer le site "sans_tracker" pour observer les interactions de notre simulation,
- Passer ensuite sur le site avec tracker via le lien (Une bande avec écrit "Mode Tracking : ACTIVE" sera en haut de la page),
- Effectuer les mêmes actions que sur le site référence et observer les logs récupéré via le bouton "Afficher les donnees collectees".
  
NOTE :  N'hésitez pas à appuyer sur F5 pour rafraichir la page et observer que les logs restent stocké ou d'appuyer sur F12 afin d'observer les intéractions en direct dans la consol.

## Objectif pédagogique

Ce projet a pour but de sensibiliser aux techniques de suivi invisibles sur Internet et de comprendre comment des données peuvent être collectées sans action explicite de l’utilisateur.

Il s’agit uniquement d’un projet éducatif visant à illustrer les enjeux de la vie privée en ligne.

AUCUNES données n'est stocker par le projet que cela soit en ligne ou local, les logs obtenu sont temporaire et seront réinitialisé à chaque lancement du projet 
(cependant un rafraichissement de la page gardera en mémoire les logs de l'instance actuel)
