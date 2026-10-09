<<<<<<< HEAD
---
title: Wiki du Serveur — MC Vanilla
---
=======
# Wiki du Serveur — MC Vanilla
>>>>>>> origin/main

Bienvenue ! Voici le guide complet des commandes et recettes du serveur.

| | |
|---|---|
| **Serveur** | Mon Serveur Vanilla |
| **IP** | `167.233.129.239` |
| **Version** | 26.2 uniquement |
| **Discord** | [discord.rocknite-studio.com](https://discord.rocknite-studio.com) |
| **Classement** | [leaderboard.rocknite-studio.com](https://leaderboard.rocknite-studio.com) |
| **Wiki** | [wiki.rocknite-studio.com/mc/vanilla](https://wiki.rocknite-studio.com/mc/vanilla) |

## Sommaire

- [Téléportation](#téléportation)
- [Farlands](#farlands)
- [Fun & Animations](#fun--animations)
- [Cosmétique & Créatif](#cosmétique--créatif)
- [Communication](#communication)
- [Crafts & Cuisson custom](#crafts--cuisson-custom)

> Dans les commandes, `<argument>` est obligatoire et `[argument]` est optionnel.

---

## Téléportation

*Retrouve ta base, tes amis ou un warp en un instant grâce aux plugins de téléportation du serveur.*

### JustTPA

Se téléporter entre joueurs.

| Commande | Description |
|---|---|
| `/tpa <joueur>` | Demande à te téléporter vers un joueur. |
| `/tpahere <joueur>` | Demande à un joueur de se téléporter vers toi. |
| `/tpaccept [joueur]` | Accepte une demande de téléportation. |
| `/tpadeny` | Refuse une demande de téléportation. |
| `/tpacancel` | Annule la demande que tu as envoyée. |

### SimpleHomes

Définir et retrouver tes maisons.

| Commande | Description |
|---|---|
| `/sethome [nom]` | Définit une maison à ta position actuelle. |
| `/home [nom]` | Te téléporte à ta maison. |
| `/homes` | Affiche la liste de tes maisons. |
| `/delhome [nom]` | Supprime une de tes maisons. |

### RTPCore

Téléportation aléatoire.

| Commande | Description |
|---|---|
| `/rtp` | Te téléporte vers un endroit aléatoire et sûr. |

### SimpleWarps

Des points de téléportation publics créés par le staff.

| Commande | Description |
|---|---|
| `/warp <nom>` | Te téléporte vers le warp indiqué. |
| `/warps` | Liste tous les warps disponibles. |

> ⚠️ **Attention :** la création de warps est réservée aux admins : contacte un admin pour en faire créer un.

---

## Farlands

*Les Farlands sont actifs sur le serveur ! Voici les coordonnées X des principaux points d'intérêt. Ils existent dans les deux directions (+X et -X).*

| Point | Coordonnée X |
|---|---|
| Start | ±12 550 821 |
| Floating | ±12 570 000 |
| Spikes | ±12 575 000 |
| Repeating | ±12 580 000 |
| Cherry | ±12 600 000 |
| Grasshills | ±12 630 000 |
| Sandhills | ±12 640 000 |
| Sand | ±12 642 000 |
| Grasschunks | ±12 650 000 |
| Chunks | ±12 800 000 |
| Decay | ±12 802 100 |
| Grid | ±12 803 000 |

> ⚠️ **Attention :** la distance est énorme : prépare-toi à un long voyage. Demande à un admin de créer un warp vers un point des Farlands si tu veux y aller vite.

---

## Fun & Animations

*Anime ton personnage et prends des poses stylées.*

### GSit

S'asseoir, s'allonger, ramper... et t'asseoir sur les meubles et les joueurs !

| Commande | Description |
|---|---|
| `/sit` | S'asseoir à ta position actuelle. |
| `/sit toggle` | Active/désactive le clic droit pour s'asseoir. |
| `/lay` | S'allonger sur le sol. |
| `/bellyflop` | S'aplatir, ventre contre le sol. |
| `/crawl` | Ramper au sol. |

> ℹ️ **Info :** clic droit sur un escalier ou une dalle pour t'asseoir dessus (main principale vide).

> ℹ️ **Info :** clic droit sur un joueur pour t'asseoir sur lui (main principale vide).

---

## Cosmétique & Créatif

*Décore ta base avec des images en item frames et écoute des disques de musique custom.*

### ImageFrame

Affiche des images (PNG, JPG...) sur des item frames.

| Commande | Description |
|---|---|
| `/imageframe select` | Active le mode sélection : fais ensuite un clic droit sur l'item frame de chaque coin opposé de la zone. |
| `/imageframe create <nom> <url> selection` | Crée l'image à partir d'une URL et la place sur les frames sélectionnées. |
| `/imageframe delete <nom>` | Supprime une image. |

> ℹ️ **Info :** étapes :
> 1. `/imageframe select`
> 2. Clic droit sur les deux frames des coins opposés
> 3. `/imageframe create <nom> <url> selection`

### Disques custom (URLCustomDiscs)

Des disques de musique custom ajoutés par les admins.

| Commande | Description |
|---|---|
| `/customdisc give <nom>` | Récupère un disque custom dans ton inventaire. |
| `/customdisc list` | Affiche la liste des disques disponibles. |

> ⚠️ **Attention :** la création de disques est réservée aux admins : aucune commande joueur pour en créer.

> ℹ️ **Info :** pour demander un disque, poste ta demande dans le salon « disque-custom » du Discord.

> ℹ️ **Info :** les ajouts sont faits entre 7h et 10h, ou quand personne n'est connecté (rechargement forcé des textures).

---

## Communication

*Reste en contact avec la communauté, même hors du jeu.*

### DiscordSRV

Le chat du serveur est synchronisé avec Discord.

| Commande | Description |
|---|---|
| `/discordsrv link` | Lie ton compte Minecraft à Discord : envoie le code affiché dans le chat en message privé au bot Gaston. |

> ℹ️ **Info :** le bot Gaston est le bot Discord du serveur, c'est lui qui valide la liaison.

> ℹ️ **Info :** une fois lié, tes messages en jeu apparaissent sur Discord, et inversement.

### PlasmoVoice

Chat vocal de proximité : parle aux joueurs proches, comme en vrai !

| Commande | Description |
|---|---|
| `/vlist` | Liste des joueurs qui ont le mod vocal installé. |

> ℹ️ **Info :** il faut installer le mod client Plasmo Voice (Fabric ou Forge) pour utiliser le vocal.

> ℹ️ **Info :** appuie sur la touche **V** en jeu pour régler ton micro.

---

## Crafts & Cuisson custom

*Toutes les recettes custom se débloquent automatiquement dans ton livre de recettes en jeu.*

### Cuisson custom (Four · Fumoir · Campfire)

#### Fougère → « Cocaïne »

| | |
|---|---|
| **Appareil** | Four |
| **Entrée** | Fougère ![Fougère](https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/26.2/assets/minecraft/textures/block/fern.png) — plante sauvage de forêt |
| **Sortie** | Cocaïne ![Sucre](https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/26.2/assets/minecraft/textures/item/sugar.png) — sucre raffiné, donne un effet de nausée (20 s) |
| **Combustibles** | Tous les combustibles classiques sont acceptés (charbon, bûches, charbon de bois, seau de lave...) |

> ℹ️ Recette exclusive au serveur. Se débloque automatiquement dans ton livre de recettes.

**Combustibles possibles :**

| Combustible | Détail |
|---|---|
| Charbon | Combustible standard |
| Bûches de chêne | Combustible en bois |
| Charbon de bois | Obtenu en cuisant du bois |
| Seau de lave | Chauffe très longtemps |

---

*Wiki généré pour **Mon Serveur Vanilla** · Version 26.2 uniquement*