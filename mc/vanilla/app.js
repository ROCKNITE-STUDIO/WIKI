/* ============================================================================
   WIKI DU SERVEUR — MC Vanilla
   ========================================================================== */

const CONFIG = {
  serverName: "Mon Serveur Vanilla",
  serverIp: "167.233.129.239",
  mcVersion: "26.2 uniquement",
  discordUrl: "https://discord.rocknite-studio.com",
  siteUrl: "https://wiki.rocknite-studio.com/mc/vanilla",
  leaderboardUrl: "https://leaderboard.rocknite-studio.com",
  siteTitle: "Wiki du Serveur — MC Vanilla",
};

/* Textures Minecraft officielles */
const TEXTURES = {
  fern: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/26.2/assets/minecraft/textures/block/fern.png",
  sugar: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/26.2/assets/minecraft/textures/item/sugar.png",
  coal: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/26.2/assets/minecraft/textures/item/coal.png",
  charcoal: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/26.2/assets/minecraft/textures/item/charcoal.png",
  oak_log: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/26.2/assets/minecraft/textures/block/oak_log.png",
  lava_bucket: "https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/26.2/assets/minecraft/textures/item/lava_bucket.png",
};

/* Liste des combustibles dynamiques */
const COMBUSTIBLES = [
  { name: "Charbon", desc: "Combustible standard", texture: TEXTURES.coal },
  { name: "Bûches de chêne", desc: "Combustible en bois", texture: TEXTURES.oak_log },
  { name: "Charbon de bois", desc: "Obtenu en cuisant du bois", texture: TEXTURES.charcoal },
  { name: "Seau de lave", desc: "Chauffe très longtemps", texture: TEXTURES.lava_bucket },
];

/* RECETTES CUSTOM */
const RECIPES = [
  {
    type: "smelt",
    name: "Fougère → « Cocaïne »",
    tool: "Four",
    input: { item: "Fougère", desc: "Plante sauvage de forêt", texture: TEXTURES.fern, tint: true },
    output: { item: "Cocaïne", desc: "Sucre raffiné. Donne un effet de nausée (20s).", texture: TEXTURES.sugar },
    note: "Recette exclusive au serveur. Se débloque automatiquement dans ton livre de recettes.",
  },
];

/* POINTS D'INTÉRÊT DES FARLANDS (coordonnées X) */
const FARLANDS = [
  { name: "Start", x: 12550821 },
  { name: "Floating", x: 12570000 },
  { name: "Spikes", x: 12575000 },
  { name: "Repeating", x: 12580000 },
  { name: "Cherry", x: 12600000 },
  { name: "Grasshills", x: 12630000 },
  { name: "Sandhills", x: 12640000 },
  { name: "Sand", x: 12642000 },
  { name: "Grasschunks", x: 12650000 },
  { name: "Chunks", x: 12800000 },
  { name: "Decay", x: 12802100 },
  { name: "Grid", x: 12803000 },
];

/* SECTIONS DU WIKI */
const SECTIONS = [
  {
    id: "accueil",
    name: "Accueil",
    tag: "Infos",
    subs: [],
  },
  {
    id: "teleportation",
    name: "Téléportation",
    tag: "Déplacement",
    intro: "Retrouve ta base, tes amis ou un warp en un instant grâce aux plugins de téléportation du serveur.",
    subs: [
      {
        plugin: "JustTPA",
        desc: "Se téléporter entre joueurs.",
        commands: [
          { cmd: "/tpa", args: "<joueur>", desc: "Demande à te téléporter vers un joueur." },
          { cmd: "/tpahere", args: "<joueur>", desc: "Demande à un joueur de se téléporter vers toi." },
          { cmd: "/tpaccept", args: "[joueur]", desc: "Accepte une demande de téléportation." },
          { cmd: "/tpadeny", args: "", desc: "Refuse une demande de téléportation." },
          { cmd: "/tpacancel", args: "", desc: "Annule la demande que tu as envoyée." },
        ],
      },
      {
        plugin: "SimpleHomes",
        desc: "Définir et retrouver tes maisons.",
        commands: [
          { cmd: "/sethome", args: "[nom]", desc: "Définit une maison à ta position actuelle." },
          { cmd: "/home", args: "[nom]", desc: "Te téléporte à ta maison." },
          { cmd: "/homes", args: "", desc: "Affiche la liste de tes maisons." },
          { cmd: "/delhome", args: "[nom]", desc: "Supprime une de tes maisons." },
        ],
      },
      {
        plugin: "RTPCore",
        desc: "Téléportation aléatoire.",
        commands: [
          { cmd: "/rtp", args: "", desc: "Te téléporte vers un endroit aléatoire et sûr." },
        ],
      },
      {
        plugin: "SimpleWarps",
        desc: "Des points de téléportation publics créés par le staff.",
        commands: [
          { cmd: "/warp", args: "<nom>", desc: "Te téléporte vers le warp indiqué." },
          { cmd: "/warps", args: "", desc: "Liste tous les warps disponibles." },
        ],
        notes: [
          { type: "warn", text: "La création de warps est réservée aux admins : contacte un admin pour en faire créer un." },
        ],
      },
    ],
  },
  {
    id: "farlands",
    name: "Farlands",
    tag: "Exploration",
    intro: "Les Farlands sont actifs sur le serveur ! Voici les coordonnées X des principaux points d'intérêt (voyage en +X ou en -X).",
    subs: [],
  },
  {
    id: "fun",
    name: "Fun & Animations",
    tag: "Fun",
    intro: "Anime ton personnage et prends des poses stylées.",
    subs: [
      {
        plugin: "GSit",
        desc: "S'asseoir, s'allonger, ramper... et t'asseoir sur les meubles et les joueurs !",
        commands: [
          { cmd: "/sit", args: "", desc: "S'asseoir à ta position actuelle." },
          { cmd: "/sit toggle", args: "", desc: "Active/désactive le clic droit pour s'asseoir." },
          { cmd: "/lay", args: "", desc: "S'allonger sur le sol." },
          { cmd: "/bellyflop", args: "", desc: "S'aplatir, ventre contre le sol." },
          { cmd: "/crawl", args: "", desc: "Ramper au sol." },
        ],
        notes: [
          { type: "info", text: "Clic droit sur un escalier ou une dalle pour t'asseoir dessus (main principale vide)." },
          { type: "info", text: "Clic droit sur un joueur pour t'asseoir sur lui (main principale vide)." },
        ],
      },
    ],
  },
  {
    id: "cosmetique",
    name: "Cosmétique & Créatif",
    tag: "Créatif",
    intro: "Décore ta base avec des images en item frames et écoute des disques de musique custom.",
    subs: [
      {
        plugin: "ImageFrame",
        desc: "Affiche des images (PNG, JPG...) sur des item frames.",
        commands: [
          { cmd: "/imageframe select", args: "", desc: "Active le mode sélection : fais ensuite un clic droit sur l'item frame de chaque coin opposé de la zone." },
          { cmd: "/imageframe create", args: "<nom> <url> selection", desc: "Crée l'image à partir d'une URL et la place sur les frames sélectionnées." },
          { cmd: "/imageframe delete", args: "<nom>", desc: "Supprime une image." },
        ],
        notes: [
          { type: "info", text: "Étapes : 1) /imageframe select  2) clic droit sur les deux frames des coins opposés  3) /imageframe create <nom> <url> selection." },
        ],
      },
      {
        plugin: "Disques custom (URLCustomDiscs)",
        desc: "Des disques de musique custom ajoutés par les admins.",
        commands: [
          { cmd: "/customdisc give", args: "<nom>", desc: "Récupère un disque custom dans ton inventaire." },
          { cmd: "/customdisc list", args: "", desc: "Affiche la liste des disques disponibles." },
        ],
        notes: [
          { type: "warn", text: "La création de disques est réservée aux admins : aucune commande joueur pour en créer." },
          { type: "info", text: "Pour demander un disque, poste ta demande dans le salon « disque-custom » du Discord." },
          { type: "info", text: "Les ajouts sont faits entre 7h et 10h, ou quand personne n'est connecté (rechargement forcé des textures)." },
        ],
      },
    ],
  },
  {
    id: "communication",
    name: "Communication",
    tag: "Communauté",
    intro: "Reste en contact avec la communauté, même hors du jeu.",
    subs: [
      {
        plugin: "DiscordSRV",
        desc: "Le chat du serveur est synchronisé avec Discord.",
        commands: [
          { cmd: "/discordsrv link", args: "", desc: "Lie ton compte Minecraft à Discord : envoie le code affiché dans le chat en message privé au bot Gaston." },
        ],
        notes: [
          { type: "info", text: "Le bot Gaston est le bot Discord du serveur, c'est lui qui valide la liaison." },
          { type: "info", text: "Une fois lié, tes messages en jeu apparaissent sur Discord, et inversement." },
        ],
      },
      {
        plugin: "PlasmoVoice",
        desc: "Chat vocal de proximité : parle aux joueurs proches, comme en vrai !",
        commands: [
          { cmd: "/vlist", args: "", desc: "Liste des joueurs qui ont le mod vocal installé." },
        ],
        notes: [
          { type: "info", text: "Il faut installer le mod client Plasmo Voice (Fabric ou Forge) pour utiliser le vocal." },
          { type: "info", text: "Appuie sur la touche V en jeu pour régler ton micro." },
        ],
      },
    ],
  },
  {
    id: "crafts",
    name: "Crafts & Cuisson custom",
    tag: "Recettes",
    subs: [],
  },
];

/* ============================================================================
   INITIALISATION ET RENDU HTML
   ========================================================================== */

const content = document.getElementById("content");
const nav = document.getElementById("sidebar-nav");
const search = document.getElementById("search");
const toast = document.getElementById("toast");
const brandName = document.getElementById("brand-name");
const footer = document.getElementById("footer");
const tooltip = document.getElementById("mc-tooltip");

document.title = CONFIG.siteTitle;
brandName.textContent = CONFIG.serverName;

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderSidebar() {
  nav.innerHTML = SECTIONS.map((s) => {
    const count = s.id === "crafts" ? RECIPES.length
      : s.id === "farlands" ? FARLANDS.length
      : s.subs.reduce((n, sub) => n + sub.commands.length, 0);
    return (
      '<button class="nav-item" data-target="' + s.id + '" type="button">' +
        '<span>' + escapeHtml(s.name) + '</span>' +
        '<span class="nav-badge">' + (s.id === "accueil" ? "info" : count) + '</span>' +
      '</button>'
    );
  }).join("");

  nav.querySelectorAll(".nav-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.target;
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderHome() {
  return (
    '<div class="hero">' +
      '<h1>' + escapeHtml(CONFIG.serverName) + '</h1>' +
      '<p>Bienvenue ! Voici le guide complet des commandes et recettes du serveur.</p>' +
      '<div class="chips">' +
        '<span class="chip"><b>IP</b> ' + escapeHtml(CONFIG.serverIp) + '</span>' +
        '<span class="chip"><b>Version</b> ' + escapeHtml(CONFIG.mcVersion) + '</span>' +
        '<span class="chip"><b>Classement</b> <a href="' + escapeHtml(CONFIG.leaderboardUrl) + '" target="_blank" rel="noopener">ouvrir</a></span>' +
        '<span class="chip"><b>Discord</b> <a href="' + escapeHtml(CONFIG.discordUrl) + '" target="_blank" rel="noopener">rejoindre</a></span>' +
      '</div>' +
    '</div>'
  );
}

function cmdCardHTML(cmd) {
  return (
    '<button class="cmd-card" type="button" data-copy="' + escapeHtml(cmd.cmd + (cmd.args ? " " + cmd.args : "")) + '">' +
      '<div class="cmd-line">' +
        '<span class="cmd-text">' + escapeHtml(cmd.cmd) + (cmd.args ? ' <span class="cmd-args">' + escapeHtml(cmd.args) + '</span>' : '') + '</span>' +
      '</div>' +
      '<span class="cmd-desc">' + escapeHtml(cmd.desc) + '</span>' +
    '</button>'
  );
}

function noteHTML(note) {
  const cls = note.type === "warn" ? "note-warn" : "note-info";
  const title = note.type === "warn" ? "Attention : " : "Info : ";
  return '<div class="note ' + cls + '"><span class="note-title">' + title + '</span><span>' + escapeHtml(note.text) + '</span></div>';
}

function renderFurnaceCard(r) {
  const inputClass = r.input.tint ? 'class="biome-tint"' : '';
  
  return (
    '<div class="recipe-card">' +
      '<!-- Interface Four Vanilla Clean -->' +
      '<div class="mc-furnace-grid">' +
        '<!-- Flamme -->' +
        '<div class="mc-gui-flame-box"><div class="mc-gui-flame-active"></div></div>' +
        '<!-- Flèche de Cuisson -->' +
        '<div class="mc-gui-arrow-box"><div class="mc-gui-arrow-active"></div></div>' +
        
        '<!-- Slot Entrée -->' +
        '<div class="mc-gui-slot input" data-item="' + escapeHtml(r.input.item) + '" data-desc="' + escapeHtml(r.input.desc) + '">' +
          '<img src="' + r.input.texture + '" alt="' + escapeHtml(r.input.item) + '" ' + inputClass + '>' +
        '</div>' +
        
        '<!-- Slot Combustible Dynamique -->' +
        '<div class="mc-gui-slot fuel" id="fuel-slot" data-item="' + COMBUSTIBLES[0].name + '" data-desc="' + COMBUSTIBLES[0].desc + '">' +
          '<img class="dynamic-fuel-img" src="' + COMBUSTIBLES[0].texture + '" alt="Combustible">' +
        '</div>' +
        
        '<!-- Slot Sortie -->' +
        '<div class="mc-gui-slot output" data-item="' + escapeHtml(r.output.item) + '" data-desc="' + escapeHtml(r.output.desc) + '">' +
          '<img src="' + r.output.texture + '" alt="' + escapeHtml(r.output.item) + '">' +
        '</div>' +
      '</div>' +

      '<div class="recipe-info">' +
        '<h4>' + escapeHtml(r.name) + '</h4>' +
        '<ul>' +
          '<li><b>Appareil :</b> ' + escapeHtml(r.tool) + '</li>' +
          (r.note ? '<li>' + escapeHtml(r.note) + '</li>' : '') +
          '<li><b>Combustibles :</b> Acceptés en boucle (Charbon, Bois, Lave...)</li>' +
        '</ul>' +
      '</div>' +
    '</div>'
  );
}

function renderCraftsSection() {
  const smelt = RECIPES.filter((r) => r.type === "smelt");
  return (
    '<section class="section" id="crafts">' +
      '<div class="section-head"><h2>Crafts & Cuisson custom</h2><span class="section-tag">Recettes</span></div>' +
      '<p class="section-intro">Toutes les recettes custom se débloquent automatiquement dans ton livre de recettes en jeu.</p>' +
      '<div class="subsection">' +
        '<div class="subsection-header"><h3>Cuisson custom</h3><span class="plugin-pill">Four · Fumoir · Campfire</span></div>' +
        smelt.map(renderFurnaceCard).join("") +
      '</div>' +
    '</section>'
  );
}

function renderFarlandsSection() {
  return (
    '<section class="section" id="farlands">' +
      '<div class="section-head"><h2>Farlands</h2><span class="section-tag">Exploration</span></div>' +
      '<p class="section-intro">Les Farlands sont actifs sur le serveur ! Voici les coordonnées X des principaux points d\'intérêt. Ils existent dans les deux directions (+X et -X).</p>' +
      '<div class="subsection">' +
        '<div class="subsection-header"><h3>Points d\'intérêt</h3><span class="plugin-pill">Coordonnée X</span></div>' +
        '<table class="farlands-table">' +
          '<thead><tr><th>Point</th><th>Coordonnée X</th></tr></thead>' +
          '<tbody>' +
            FARLANDS.map((f) => '<tr><td>' + escapeHtml(f.name) + '</td><td class="far-x">±' + f.x.toLocaleString("fr-FR") + '</td></tr>').join("") +
          '</tbody>' +
        '</table>' +
      '</div>' +
      '<div class="note note-warn"><span class="note-title">Attention : </span><span>La distance est énorme : prépare-toi à un long voyage. Demande à un admin de créer un warp vers un point des Farlands si tu veux y aller vite.</span></div>' +
    '</section>'
  );
}

function sectionHTML(section) {
  if (section.id === "accueil") return renderHome();
  if (section.id === "crafts") return renderCraftsSection();
  if (section.id === "farlands") return renderFarlandsSection();

  const subs = section.subs.map((sub) => (
    '<div class="subsection">' +
      '<div class="subsection-header"><h3>' + escapeHtml(sub.plugin) + '</h3><span class="plugin-pill">' + escapeHtml(sub.plugin) + '</span></div>' +
      (sub.desc ? '<p class="subsection-desc">' + escapeHtml(sub.desc) + '</p>' : '') +
      '<div class="cmd-grid">' + sub.commands.map(cmdCardHTML).join("") + '</div>' +
      (sub.notes ? sub.notes.map(noteHTML).join("") : "") +
    '</div>'
  )).join("");

  return (
    '<section class="section" id="' + section.id + '">' +
      '<div class="section-head"><h2>' + escapeHtml(section.name) + '</h2><span class="section-tag">' + escapeHtml(section.tag) + '</span></div>' +
      (section.intro ? '<p class="section-intro">' + escapeHtml(section.intro) + '</p>' : '') +
      subs +
    '</section>'
  );
}

function render() {
  content.innerHTML = SECTIONS.map(sectionHTML).join("");
  content.querySelectorAll(".cmd-card").forEach((card) => {
    card.addEventListener("click", () => copyText(card.dataset.copy));
  });
  initMinecraftTooltips();
}

function startFuelAnimation() {
  let fuelIndex = 0;
  setInterval(() => {
    fuelIndex = (fuelIndex + 1) % COMBUSTIBLES.length;
    const currentFuel = COMBUSTIBLES[fuelIndex];
    
    document.querySelectorAll(".dynamic-fuel-img").forEach((img) => {
      img.style.opacity = "0";
      setTimeout(() => {
        img.src = currentFuel.texture;
        img.alt = currentFuel.name;
        img.style.opacity = "1";
        
        const fuelSlot = img.closest(".mc-gui-slot");
        if (fuelSlot) {
          fuelSlot.dataset.item = currentFuel.name;
          fuelSlot.dataset.desc = currentFuel.desc;
        }
      }, 150);
    });
  }, 2800);
}

function initMinecraftTooltips() {
  const slots = document.querySelectorAll(".mc-gui-slot");
  const titleEl = tooltip.querySelector(".mc-tooltip-title");
  const descEl = tooltip.querySelector(".mc-tooltip-desc");

  slots.forEach((slot) => {
    slot.addEventListener("mouseenter", (e) => {
      const name = slot.dataset.item;
      const desc = slot.dataset.desc;
      if (!name) return;

      titleEl.textContent = name;
      descEl.textContent = desc || "";
      tooltip.style.display = "block";
    });

    slot.addEventListener("mousemove", (e) => {
      tooltip.style.left = e.clientX + 14 + "px";
      tooltip.style.top = e.clientY - 12 + "px";
    });

    slot.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  });
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast("Commande copiée : " + text);
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

document.getElementById("theme-toggle").addEventListener("click", () => {
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  if (isLight) {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});

search.addEventListener("input", () => {
  const q = search.value.toLowerCase().trim();
  document.querySelectorAll(".cmd-card").forEach((card) => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(q) ? "block" : "none";
  });
});

footer.innerHTML =
  '<p>Wiki généré pour <b>' + escapeHtml(CONFIG.serverName) + '</b> · Version ' + escapeHtml(CONFIG.mcVersion) + '</p>' +
  '<p><a href="' + escapeHtml(CONFIG.siteUrl) + '" target="_blank" rel="noopener">' + escapeHtml(CONFIG.siteUrl) + '</a></p>';

// Lancement
renderSidebar();
render();
startFuelAnimation();