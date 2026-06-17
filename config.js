// =============================================================================
// La Porra del Mundial — Configuration
// =============================================================================
// Replace each URL with the published CSV URL from your Google Sheet.
// How to get the URL:
//   Google Sheets > File > Share > Publish to web > Select tab > CSV
//   URL format: https://docs.google.com/spreadsheets/d/{ID}/gviz/tq?tqx=out:csv&sheet={TAB}
// =============================================================================

const CONFIG = {
  appName: "La Porra del Mundial",
  participants: 8,
  entryFee: 5,
  prize: "Todo al ganador (40€)",
  appsScriptUrl: "https://script.google.com/macros/s/TU_URL_APPS_SCRIPT/exec",
  top8Teams: ["Argentina", "France", "Belgium", "Brazil", "England", "Portugal", "Netherlands", "Spain"],

  // ---------------------------------------------------------------------------
  // API de resultados en directo — worldcup26.ir
  // (https://github.com/rezarahiminia/worldcup2026 · https://worldcup26.ir/api-docs/)
  // Usada por el widget "En Vivo" de partidos.html (livescore.js).
  // ---------------------------------------------------------------------------
  worldCup26: {
    apiBase: "https://worldcup26.ir",
    // Token NO necesario: las rutas de lectura /get/* de worldcup26.ir son
    // públicas (sin autenticación y con CORS abierto), así que déjalo vacío.
    // Solo rellénalo si en el futuro la API empezara a exigir JWT.
    token: "",
    refreshMs: 60000 // cada cuánto refresca el marcador en vivo (ms)
  },

  googleSheets: {
    participants:   "",
    matches:        "",
    players:        "",
    special_events: "",
    predictions:    "",
    periodico:      ""
  },

  googleForm: {
    formId: "TU_GOOGLE_FORM_ID", // Ejemplo: 1FAIpQLSdiF0qsK65...
    entryId: "entry.TU_ENTRY_ID"      // ID del input tipo párrafo (long text) de tu formulario
  },

  adminPassword: "CAMBIAR_ESTO",

  tiebreakers: ["match_points", "scorer_goalkeeper_points", "special_event_points"],

  roundLabels: {
    group_md1: "Jornada 1",
    group_md2: "Jornada 2",
    group_md3: "Jornada 3",
    r32:       "Ronda de 32",
    r16:       "Octavos de Final",
    qf:        "Cuartos de Final",
    sf:        "Semifinales",
    "3rd":     "Tercer Puesto",
    final:     "Final"
  },

  phaseToRounds: {
    group: ["group_md1", "group_md2", "group_md3"],
    knockout: ["r32", "r16", "qf", "sf", "3rd", "final"]
  },

  matchPhases: {
    group:  "Fase de Grupos",
    r32:    "Ronda de 32",
    r16:    "Octavos de Final",
    qf:     "Cuartos de Final",
    sf:     "Semifinales",
    "3rd":  "Tercer Puesto",
    final:  "Final"
  }
};
