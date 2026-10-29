/* =========================================
   SONORA — Lecteur musical
   Catalogue, recherche, favoris, playlists
   et lecture via YouTube
========================================= */

const tracks = [
  {
    id: 1,
    title: "Blue Bird",
    artist: "Ikimono-gakari",
    album: "Naruto Shippuden · Opening 3",
    genre: "Anime",
    duration: "3:35",
    cover: "cover-1",
    symbol: "✦",
    youtubeId: "KpsJWFuVTdI",
    url: "https://youtu.be/KpsJWFuVTdI"
  },
  {
    id: 11,
    title: "Fairy Tail Main Theme",
    artist: "Yasuharu Takanashi",
    album: "Fairy Tail · Original Soundtrack",
    genre: "Anime",
    duration: "2:30",
    cover: "cover-4",
    symbol: "✦",
    youtubeId: "m6kb96YWXMA",
    url: "https://youtu.be/m6kb96YWXMA"
  },
  {
    id: 12,
    title: "Snow Fairy",
    artist: "FUNKIST",
    album: "Fairy Tail · Opening 1",
    genre: "Anime",
    duration: "3:52",
    cover: "cover-1",
    symbol: "❄",
    youtubeId: "9jvVBVcZ0-Y",
    url: "https://youtu.be/9jvVBVcZ0-Y"
  },
  {
    id: 25,
    title: "Gurenge",
    artist: "LiSA",
    album: "Demon Slayer · Opening 1",
    genre: "Anime",
    duration: "4:05",
    cover: "cover-4",
    symbol: "🔥",
    youtubeId: "pmanD_s7G3U",
    url: "https://youtu.be/pmanD_s7G3U"
  },
  {
    id: 26,
    title: "Dynamite",
    artist: "BTS",
    album: "Dynamite · Single",
    genre: "K-pop",
    duration: "3:19",
    cover: "cover-4",
    symbol: "💜",
    youtubeId: "Ni4S3l80j3w",
    url: "https://youtu.be/Ni4S3l80j3w"
  },
  {
    id: 27,
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    genre: "Pop",
    duration: "3:20",
    cover: "cover-4",
    symbol: "🌃",
    youtubeId: "fHI8X4OXluQ",
    url: "https://youtu.be/fHI8X4OXluQ"
  },
  {
    id: 28,
    title: "unlasting",
    artist: "LiSA",
    album: "Sword Art Online · Alicization",
    genre: "Anime",
    duration: "4:55",
    cover: "cover-4",
    symbol: "🖤",
    youtubeId: "A6dlu5fW-Nk",
    url: "https://youtu.be/A6dlu5fW-Nk"
  },
  {
    id: 29,
    title: "CHA-LA HEAD-CHA-LA",
    artist: "Hironobu Kageyama",
    album: "Dragon Ball Z · Opening",
    genre: "Anime",
    duration: "3:17",
    cover: "cover-4",
    symbol: "🐉",
    youtubeId: "qQmTdijhjD4",
    url: "https://youtu.be/qQmTdijhjD4"
  },
  {
    id: 30,
    title: "Rock City Boy",
    artist: "JAMIL",
    album: "Fairy Tail · Opening 7",
    genre: "Anime",
    duration: "3:48",
    cover: "cover-4",
    symbol: "🎸",
    youtubeId: "3wnfkrsmkQQ",
    url: "https://youtu.be/3wnfkrsmkQQ"
  },
  {
    id: 31,
    title: "Again",
    artist: "YUI",
    album: "Fullmetal Alchemist: Brotherhood · Opening 1",
    genre: "Anime",
    duration: "4:16",
    cover: "cover-4",
    symbol: "⚙️",
    youtubeId: "80oOmZSMlx0",
    url: "https://youtu.be/80oOmZSMlx0"
  },
  {
    id: 32,
    title: "Silhouette",
    artist: "KANA-BOON",
    album: "Naruto Shippuden · Opening 16",
    genre: "Anime",
    duration: "4:00",
    cover: "cover-4",
    symbol: "🍃",
    youtubeId: "zVgKnfN9i34",
    url: "https://youtu.be/zVgKnfN9i34"
  },
  {
    id: 33,
    title: "We Are!",
    artist: "Hiroshi Kitadani",
    album: "One Piece · Opening 1",
    genre: "Anime",
    duration: "4:00",
    cover: "cover-4",
    symbol: "🏴‍☠️",
    youtubeId: "YoeP9w5UIlg",
    url: "https://youtu.be/YoeP9w5UIlg"
  },
  {
    id: 34,
    title: "Masayume Chasing",
    artist: "BoA",
    album: "Fairy Tail · Opening 15",
    genre: "Anime",
    duration: "3:39",
    cover: "cover-4",
    symbol: "✨",
    youtubeId: "aqRuzjIBkxY",
    url: "https://youtu.be/aqRuzjIBkxY"
  },
  {
    id: 35,
    title: "Kaikai Kitan",
    artist: "Eve",
    album: "Jujutsu Kaisen · Opening 1",
    genre: "Anime",
    duration: "3:40",
    cover: "cover-4",
    symbol: "👁️",
    youtubeId: "GwaRztMaoY0",
    url: "https://youtu.be/GwaRztMaoY0"
  },
  {
    id: 36,
    title: "Guren no Yumiya",
    artist: "Linked Horizon",
    album: "Attack on Titan · Opening 1",
    genre: "Anime",
    duration: "5:16",
    cover: "cover-4",
    symbol: "⚔️",
    youtubeId: "8OkpRK2_gVs",
    url: "https://youtu.be/8OkpRK2_gVs"
  },
  {
    id: 37,
    title: "Tank!",
    artist: "The Seatbelts",
    album: "Cowboy Bebop · Opening",
    genre: "Jazz",
    duration: "3:31",
    cover: "cover-4",
    symbol: "🎷",
    youtubeId: "0hfOyOBHIq4",
    url: "https://youtu.be/0hfOyOBHIq4"
  },
  {
    id: 38,
    title: "This Game",
    artist: "Konomi Suzuki",
    album: "No Game No Life · Opening 1",
    genre: "Anime",
    duration: "4:43",
    cover: "cover-4",
    symbol: "♟️",
    youtubeId: "6CBp4qylX6I",
    url: "https://youtu.be/6CBp4qylX6I"
  },
  {
    id: 39,
    title: "THE DAY",
    artist: "Porno Graffitti",
    album: "My Hero Academia · Opening 1",
    genre: "Anime",
    duration: "3:57",
    cover: "cover-4",
    symbol: "💥",
    youtubeId: "-77UEct0cZM",
    url: "https://youtu.be/-77UEct0cZM"
  },
  {
    id: 40,
    title: "Departure!",
    artist: "Masatoshi Ono",
    album: "Hunter × Hunter (2011) · Opening 1",
    genre: "Anime",
    duration: "3:58",
    cover: "cover-4",
    symbol: "🌟",
    youtubeId: "faqmNf_fZlE",
    url: "https://youtu.be/faqmNf_fZlE"
  },
  {
    id: 41,
    title: "Judgement",
    artist: "ASH DA HERO",
    album: "Blue Lock · Opening 2",
    genre: "Anime",
    duration: "3:17",
    cover: "cover-4",
    symbol: "⚽",
    youtubeId: "hPmuITfvbYM",
    url: "https://youtu.be/hPmuITfvbYM"
  },
  {
    id: 42,
    title: "Velonica",
    artist: "Aqua Timez",
    album: "Bleach · Opening 9",
    genre: "Anime",
    duration: "4:39",
    cover: "cover-4",
    symbol: "⚔️",
    youtubeId: "almG54sVBuw",
    url: "https://youtu.be/almG54sVBuw"
  }
];

/* =========================================
   ÉTAT DU LECTEUR
========================================= */

let currentTrack = null;
let currentIndex = -1;
let isPlaying = false;
let isShuffle = false;
let repeatMode = false;
let activeView = "home";
let libraryTab = "all";
let searchQuery = "";
let currentMood = "";
let activePlaylist = "";
let youtubePlayer = null;
let youtubeReady = false;

const favorites = new Set();
const recentTracks = [];
const playlists = {
  "Favoris": [],
  "Anime Opening": [],
  "Focus": [],
  "Énergie": []
};

/* =========================================
   ÉLÉMENTS HTML
========================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const audio = $("#audio");
const mainPlay = $("#main-play");
const nowTitle = $("#now-title");
const nowArtist = $("#now-artist");
const nowCover = $("#now-cover");
const nowLike = $("#now-like");
const seek = $("#seek");
const elapsed = $("#elapsed");
const duration = $("#duration");
const volume = $("#player-volume");
const youtubePanel = $("#youtube-player-panel");

/* =========================================
   OUTILS
========================================= */

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${String(secs).padStart(2, "0")}`;
}

function getTrack(id) {
  return tracks.find(track => track.id === Number(id));
}

function notify(message) {
  const toast = $("#toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(notify.timer);
  notify.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

function getCover(track) {
  return escapeHTML(track.cover || "cover-4");
}

function trackMatches(track, query) {
  const searchable = [
    track.title,
    track.artist,
    track.album,
    track.genre
  ].join(" ").toLocaleLowerCase("fr");

  return searchable.includes(query.toLocaleLowerCase("fr"));
}

/* =========================================
   AFFICHAGE DES MORCEAUX
========================================= */

function renderTrackList(container, list) {
  if (!container) return;

  if (!list.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">♫</div>
        <h3>Aucun morceau trouvé</h3>
        <p>Essaie un autre titre ou un autre artiste.</p>
      </div>`;
    return;
  }

  container.innerHTML = list.map((track, index) => {
    const liked = favorites.has(track.id);
    const current = currentTrack?.id === track.id;

    return `
      <article class="track-row ${current ? "current" : ""}"
        data-track-id="${track.id}">
        <div class="track-index">${String(index + 1).padStart(2, "0")}</div>

        <button class="track-play" data-action="play"
          data-id="${track.id}" aria-label="Lire ${escapeHTML(track.title)}">
          ${current && isPlaying ? "Ⅱ" : "▶"}
        </button>

        <div class="track-main">
          <div class="track-cover ${getCover(track)}">
            <span>${escapeHTML(track.symbol || "♫")}</span>
          </div>
          <div class="track-name">
            <strong>${escapeHTML(track.title)}</strong>
            <span>${escapeHTML(track.artist)}</span>
          </div>
        </div>

        <div class="track-album">${escapeHTML(track.album)}</div>
        <div class="track-duration">${escapeHTML(track.duration)}</div>

        <div class="track-actions">
          <button data-action="like" data-id="${track.id}"
            class="${liked ? "liked" : ""}"
            aria-label="Favori">${liked ? "♥" : "♡"}</button>
          <button data-action="more" data-id="${track.id}"
            aria-label="Ajouter à une playlist">＋</button>
        </div>
      </article>`;
  }).join("");
}

function renderAll() {
  renderTrackList($("#anime-tracks"),
    tracks.filter(track => track.genre === "Anime").slice(0, 6));

  renderTrackList($("#home-tracks"), tracks.slice(0, 6));
  renderTrackList($("#search-tracks"), getSearchResults());
  renderLibrary();
  updatePlayerDisplay();
}

function getSearchResults() {
  let list = tracks;

  if (searchQuery) {
    list = list.filter(track => trackMatches(track, searchQuery));
  }

  if (currentMood) {
    list = list.filter(track =>
      track.genre.toLowerCase() === currentMood.toLowerCase());
  }

  if (activePlaylist) {
    const playlistTracks = playlists[activePlaylist] || [];
    list = list.filter(track => playlistTracks.includes(track.id));
  }

  return list;
}

function renderLibrary() {
  const heading = $("#library-heading");
  let list = tracks;

  if (libraryTab === "favorites") {
    list = tracks.filter(track => favorites.has(track.id));
    if (heading) heading.textContent = "Titres likés";
  } else if (libraryTab === "recent") {
    list = recentTracks.map(id => getTrack(id)).filter(Boolean);
    if (heading) heading.textContent = "Écoutés récemment";
  } else {
    if (heading) heading.textContent = "Tous les titres";
  }

  renderTrackList($("#library-tracks"), list);
}

/* =========================================
   NAVIGATION
========================================= */

function showView(view) {
  activeView = view;

  $$(".view").forEach(element => {
    element.classList.remove("active-view");
  });

  const target = $(`#${view}-view`);
  if (target) target.classList.add("active-view");

  $$(".nav-link").forEach(button => {
    button.classList.toggle("active", button.dataset.view === view);
  });

  if (view === "search") {
    const bigSearch = $("#big-search-input");
    if (bigSearch) bigSearch.value = searchQuery;
    renderTrackList($("#search-tracks"), getSearchResults());
  }

  if (view === "library") renderLibrary();
}

$$("[data-view]").forEach(button => {
  button.addEventListener("click", () => showView(button.dataset.view));
});

$("#continue-library")?.addEventListener("click", () => showView("library"));
$("#mobile-library")?.addEventListener("click", () => showView("library"));

$("#back-btn")?.addEventListener("click", () => {
  showView("home");
});

$("#forward-btn")?.addEventListener("click", () => {
  showView("library");
});

/* =========================================
   RECHERCHE
========================================= */

function updateSearch(value) {
  searchQuery = value.trim();
  currentMood = "";
  activePlaylist = "";

  const bigSearch = $("#big-search-input");
  const smallSearch = $("#search-input");

  if (bigSearch && bigSearch.value !== value) bigSearch.value = value;
  if (smallSearch && smallSearch.value !== value) smallSearch.value = value;

  if (searchQuery) showView("search");

  const results = getSearchResults();
  renderTrackList($("#search-tracks"), results);

  const title = $("#results-title");
  const count = $("#result-count");

  if (title) title.textContent = searchQuery
    ? `Résultats pour « ${searchQuery} »`
    : "Tout le catalogue";

  if (count) count.textContent = `${results.length} titre(s)`;
}

$("#search-input")?.addEventListener("input", event => {
  updateSearch(event.target.value);
});

$("#big-search-input")?.addEventListener("input", event => {
  updateSearch(event.target.value);
});

document.addEventListener("keydown", event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    $("#search-input")?.focus();
  }

  if (event.code === "Space" &&
      !["INPUT", "TEXTAREA", "BUTTON"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    togglePlayback();
  }
});

/* =========================================
   FILTRES D'AMBIANCE
========================================= */

$$("[data-mood]").forEach(button => {
  button.addEventListener("click", () => {
    currentMood = button.dataset.mood;
    searchQuery = "";
    activePlaylist = "";
    showView("search");

    $("#search-input").value = "";
    $("#big-search-input").value = "";

    const title = $("#results-title");
    if (title) title.textContent = currentMood;

    renderTrackList($("#search-tracks"), getSearchResults());
  });
});

/* =========================================
   LECTEUR YOUTUBE
========================================= */

window.onYouTubeIframeAPIReady = function () {
  youtubePlayer = new YT.Player("youtube-player", {
    width: "100%",
    height: "100%",
    videoId: "",
    playerVars: {
      playsinline: 1,
      controls: 1,
      rel: 0
    },
    events: {
      onReady: () => {
        youtubeReady = true;
        if (volume) youtubePlayer.setVolume(Number(volume.value));
      },
      onStateChange: onYouTubeStateChange,
      onError: onYouTubeError
    }
  });
};

function onYouTubeStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    isPlaying = true;
    updatePlayerDisplay();
  }

  if (event.data === YT.PlayerState.PAUSED) {
    isPlaying = false;
    updatePlayerDisplay();
  }

  if (event.data === YT.PlayerState.ENDED) {
    if (repeatMode && currentTrack) {
      youtubePlayer.seekTo(0, true);
      youtubePlayer.playVideo();
    } else {
      playNext();
    }
  }
}

function onYouTubeError(event) {
  isPlaying = false;

  const messages = {
    2: "Identifiant YouTube invalide.",
    5: "La lecture de cette vidéo a échoué.",
    100: "Vidéo introuvable ou indisponible.",
    101: "Le propriétaire interdit la lecture intégrée.",
    150: "Le propriétaire interdit la lecture intégrée."
  };

  notify(messages[event.data] || "Impossible de lire cette vidéo.");
  updatePlayerDisplay();
}

function playTrack(id) {
  const track = getTrack(id);
  if (!track) return;

  currentTrack = track;
  currentIndex = tracks.findIndex(item => item.id === track.id);

  recentTracks.splice(recentTracks.indexOf(track.id), 1);
  recentTracks.unshift(track.id);
  if (recentTracks.length > 30) recentTracks.pop();

  updatePlayerDisplay();
  renderAll();

  if (!track.youtubeId) {
    notify("Ce morceau n'a pas de lien YouTube.");
    return;
  }

  if (!youtubeReady || !youtubePlayer) {
    youtubePanel.style.display = "block";
    notify("Le lecteur YouTube se prépare. Réessaie dans un instant.");
    return;
  }

  youtubePanel.style.display = "block";
  youtubePlayer.loadVideoById(track.youtubeId);
  youtubePlayer.setVolume(Number(volume?.value || 70));
  isPlaying = true;
  updatePlayerDisplay();
}

function togglePlayback() {
  if (!currentTrack) {
    playTrack(tracks[0].id);
    return;
  }

  if (!youtubeReady || !youtubePlayer) {
    notify("Le lecteur YouTube n'est pas encore prêt.");
    return;
  }

  if (isPlaying) {
    youtubePlayer.pauseVideo();
  } else {
    youtubePlayer.playVideo();
  }
}

function playNext() {
  if (!tracks.length) return;

  if (isShuffle) {
    let index = Math.floor(Math.random() * tracks.length);

    if (tracks.length > 1 && index === currentIndex) {
      index = (index + 1) % tracks.length;
    }

    playTrack(tracks[index].id);
    return;
  }

  const nextIndex = currentIndex + 1;

  if (nextIndex >= tracks.length) {
    if (repeatMode) {
      playTrack(tracks[0].id);
    } else {
      isPlaying = false;
      updatePlayerDisplay();
    }
    return;
  }

  playTrack(tracks[nextIndex].id);
}

function playPrevious() {
  if (youtubeReady && youtubePlayer &&
      youtubePlayer.getCurrentTime() > 3) {
    youtubePlayer.seekTo(0, true);
    return;
  }

  const previousIndex = Math.max(0, currentIndex - 1);
  if (tracks[previousIndex]) playTrack(tracks[previousIndex].id);
}

function updatePlayerDisplay() {
  if (nowTitle) {
    nowTitle.textContent = currentTrack?.title || "Choisis un morceau";
  }

  if (nowArtist) {
    nowArtist.textContent = currentTrack?.artist || "SONORA · Mode démo";
  }

  if (nowCover) {
    nowCover.className = `mini-cover ${currentTrack?.cover || "cover-1"}`;
    nowCover.textContent = currentTrack?.symbol || "♫";
  }

  if (mainPlay) {
    mainPlay.textContent = isPlaying ? "Ⅱ" : "▶";
    mainPlay.title = isPlaying ? "Pause" : "Lecture";
  }

  if (nowLike) {
    nowLike.classList.toggle("liked",
      currentTrack ? favorites.has(currentTrack.id) : false);
    nowLike.textContent =
      currentTrack && favorites.has(currentTrack.id) ? "♥" : "♡";
  }
}

$("#main-play")?.addEventListener("click", togglePlayback);
$("#prev-btn")?.addEventListener("click", playPrevious);
$("#next-btn")?.addEventListener("click", playNext);

$("#hero-play")?.addEventListener("click", () => {
  playTrack(tracks[0].id);
});

$("#hero-mix")?.addEventListener("click", () => {
  const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
  playTrack(randomTrack.id);
});

$("#shuffle-btn")?.addEventListener("click", () => {
  isShuffle = !isShuffle;
  $("#shuffle-btn").classList.toggle("active", isShuffle);
  notify(isShuffle ? "Lecture aléatoire activée" : "Lecture aléatoire désactivée");
});

$("#repeat-btn")?.addEventListener("click", () => {
  repeatMode = !repeatMode;
  $("#repeat-btn").classList.toggle("active", repeatMode);
  notify(repeatMode ? "Répétition activée" : "Répétition désactivée");
});

$("#player-volume")?.addEventListener("input", event => {
  if (youtubeReady && youtubePlayer) {
    youtubePlayer.setVolume(Number(event.target.value));
  }
});

$("#seek")?.addEventListener("input", event => {
  if (!youtubeReady || !youtubePlayer) return;

  const total = youtubePlayer.getDuration();
  if (total > 0) {
    youtubePlayer.seekTo(total * Number(event.target.value) / 100, true);
  }
});

setInterval(() => {
  if (!youtubeReady || !youtubePlayer || !currentTrack) return;

  try {
    const currentTime = youtubePlayer.getCurrentTime();
    const total = youtubePlayer.getDuration();

    if (elapsed) elapsed.textContent = formatTime(currentTime);
    if (duration) duration.textContent = formatTime(total);

    if (seek && total > 0 && !seek.matches(":active")) {
      seek.value = String(currentTime / total * 100);
    }
  } catch (error) {
    // Le lecteur peut être en cours d'initialisation.
  }
}, 500);

$("#close-youtube-player")?.addEventListener("click", () => {
  if (youtubeReady && youtubePlayer) youtubePlayer.pauseVideo();
  youtubePanel.style.display = "none";
});

/* =========================================
   FAVORIS
========================================= */

function toggleFavorite(id) {
  const track = getTrack(id);
  if (!track) return;

  if (favorites.has(track.id)) {
    favorites.delete(track.id);
    playlists.Favoris = playlists.Favoris.filter(item => item !== track.id);
    notify("Retiré des favoris");
  } else {
    favorites.add(track.id);
    if (!playlists.Favoris.includes(track.id)) {
      playlists.Favoris.push(track.id);
    }
    notify("Ajouté aux favoris ♥");
  }

  renderAll();
}

$("#now-like")?.addEventListener("click", () => {
  if (currentTrack) toggleFavorite(currentTrack.id);
});

/* =========================================
   PLAYLISTS
========================================= */

const playlistDialog = $("#playlist-dialog");
const playlistForm = $("#playlist-form");

function openPlaylistDialog() {
  if (playlistDialog?.showModal) {
    playlistDialog.showModal();
  } else {
    const name = prompt("Nom de ta playlist :");
    if (name?.trim()) createPlaylist(name.trim());
  }
}

function createPlaylist(name) {
  const cleanName = name.trim();

  if (!cleanName) return;
  if (playlists[cleanName]) {
    notify("Cette playlist existe déjà.");
    return;
  }

  playlists[cleanName] = [];
  const sideSection = $(".side-section");

  if (sideSection) {
    const button = document.createElement("button");
    button.className = "playlist-link";
    button.dataset.playlist = cleanName;
    button.innerHTML = `<span class="playlist-dot purple">♫</span>`;
    button.append(document.createTextNode(" " + cleanName));
    sideSection.appendChild(button);
  }

  notify(`Playlist « ${cleanName} » créée`);
}

$("#create-playlist")?.addEventListener("click", openPlaylistDialog);
$("#sidebar-create")?.addEventListener("click", openPlaylistDialog);

playlistForm?.addEventListener("submit", event => {
  event.preventDefault();
  const name = $("#playlist-name")?.value.trim();

  if (name) createPlaylist(name);
  playlistDialog.close();
  playlistForm.reset();
});

$("#save-playlist")?.addEventListener("click", event => {
  event.preventDefault();
  const name = $("#playlist-name")?.value.trim();

  if (name) createPlaylist(name);
  playlistDialog.close();
  playlistForm.reset();
});

document.addEventListener("click", event => {
  const playlistButton = event.target.closest("[data-playlist]");
  if (!playlistButton) return;

  const name = playlistButton.dataset.playlist;
  if (!playlists[name]) return;

  activePlaylist = name;
  searchQuery = "";
  currentMood = "";
  showView("search");

  const title = $("#results-title");
  if (title) title.textContent = name;

  renderTrackList($("#search-tracks"), getSearchResults());
});

function addTrackToPlaylist(trackId, playlistName) {
  if (!playlists[playlistName]) return;

  if (!playlists[playlistName].includes(trackId)) {
    playlists[playlistName].push(trackId);
    notify(`Ajouté à « ${playlistName} »`);
  } else {
    notify("Ce morceau est déjà dans cette playlist.");
  }
}

/* =========================================
   INTERACTIONS AVEC LES MORCEAUX
========================================= */

document.addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const id = Number(button.dataset.id);
  const action = button.dataset.action;

  if (action === "play") {
    if (currentTrack?.id === id && isPlaying) {
      togglePlayback();
    } else {
      playTrack(id);
    }
  }

  if (action === "like") {
    toggleFavorite(id);
  }

  if (action === "more") {
    const names = Object.keys(playlists);
    const message = names.map((name, index) => `${index + 1}. ${name}`).join("\n");
    const choice = prompt(`Ajouter à quelle playlist ?\n${message}\n\nTape le nom :`);

    if (choice && playlists[choice.trim()]) {
      addTrackToPlaylist(id, choice.trim());
    } else if (choice) {
      notify("Playlist introuvable.");
    }
  }
});

$$("[data-library-tab]").forEach(button => {
  button.addEventListener("click", () => {
    libraryTab = button.dataset.libraryTab;

    $$(".library-tab").forEach(tab => {
      tab.classList.toggle("selected", tab === button);
    });

    renderLibrary();
  });
});

$("#shuffle-library")?.addEventListener("click", () => {
  const list = libraryTab === "favorites"
    ? tracks.filter(track => favorites.has(track.id))
    : libraryTab === "recent"
      ? recentTracks.map(getTrack).filter(Boolean)
      : tracks;

  if (!list.length) {
    notify("Aucun morceau dans cette liste.");
    return;
  }

  const track = list[Math.floor(Math.random() * list.length)];
  playTrack(track.id);
});

/* =========================================
   INITIALISATION
========================================= */

renderAll();
