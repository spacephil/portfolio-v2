
export default [
  {
    id: "colorsapp",
    title: "ColorApp",
    tags: ["React", "React-Router", "Page-Transitions"],
    note: "",
    livesite: true,
    github: "https://apple.com",
    sdescription: "Eine Webseite mit vorgefertigten aber auch individuell anpassparen Farbpaletten.",
    mdescription: [
      "Der Benutzer kann zu Beginn aus einer Reihe an vorgefertigten Farbpaletten auswählen. Ebenfalls ist es möglich neue Paletten zu erstellen. Allerdings ist die Palettengröße auf 20 Farbfelder beschränkt.",
      "Nach Auswahl einer Palette kann der User entweder diverse Farbstufen auswählen oder direkt den Farbencode (HEX, RGB oder RGBA) in den Zwischenspeicher kopieren.",
      "Beim Erstellen einer eigenen Palette kann mit Hilfe eines ColorPickers die gewünschte Farbe ausgewählt, benannt und der Palette hinzugefügt werden. Wenn man fertig ist mit Auswahl der Farben kann man der Palette einen Namen und ein Emoji geben und diese Speichern (lokal)."
    ],
    gif:[],
    possibleUpgrades: "Eine zukünfitge Erweiterung wäre eine richtige Datenbankanbinung zur Speicherung von User-Profilen und deren entworfenen Farbpaletten."
  },
  {
    id: "urparty",
    title: "urparty",
    tags: ["NodeJs", "Express", "MongoDB", "CRUD"],
    note: "Wird aktuell in React erstellt.",
    livesite: false,
    github: "https://google.com",
    sdescription: "Eine Full-Stack-Webseite zum besseren Planen von Parties/Meetings.",
    mdescription: [
      "Der Benutzer hat zu Beginn die Möglichkeit sich per lokalen Account, Facebook oder Google anzumelden. Danach kann er entweder eine eigene Party erstellen oder einer Party beitreten.",
      "Beim Erstellen einer Party kann der PartyHost schon aus einer Vielzahl von Optionen auswählen, die das spätere Planen/Durchführen der Party vereinfachen sollen.",
      "Das Backend kümmert sich um die Verwaltung von Usern und dessen Parties, sowie um das richtige URL-Routing. Passwörter werden per Hash verschlüsselt und sind demnach nur zu entschlüsseln, wenn man den richtigen 'Umrechnungsschlüssel' hat.",
      "Durch das Backend werden die Daten user-spezifisch angezeigt, dass heißt das Parties die der User nicht erstellt hat bzw. nicht zu eingeladen ist und trotzdem in der Datenbank sind nicht angezeigt werden. Allerdings kann ein User mit dem richtigen PartyCode und Password (individueller Link) einer Party beitreten und an deren Umfragen teilnehmen."
    ],
    gif:[],
    possibleUpgrades: "Aktuell wird urparty mit React entwickelt."
  },
  {
    id: "workwithphilip",
    title: "workwithphilip",
    tags: ["React", "React-Router"],
    note: "",
    livesite: false,
    github: "https://youtube.com",
    sdescription: "Meine persönliche Webseite/Portfolio.",
    mdescription: [
      "Mit React wurde die ursprüngliche Version in einzelne Komponenten unterteilt und mit neuem Design implementiert. Dank React-Router läuft der Seitenwechsel schneller. Im Hintergrund wird eine Datei geladen, welche alle Informationen über die Projekte bereitstellt."
    ],
    gif:[],
    possibleUpgrades: "Eine mögliche Erweiterung wäre eine richtige Datenbankanbindung im Gegensatz zum Auslesen einer Datei. Dadurch könnte man zukünftige Projekte einfacher einbinden, wenn diese den zuvor erstellten Datenbankkonventionen entsprechen (Titel, id, etc.)."
  },
  {
    id: "lightsout",
    title: "LightsOut",
    tags: ["React", "State-Management"],
    note: "",
    livesite: true,
    github: "https://reddit.com",
    gif:[],
    sdescription: "Ein kleines Spiel, welches beim lernen von React erstellt wurde. State-Management stand hierbei im Vordergrund.",
    mdescription: ["Die Spielfeld-Komponenten beinhaltet 25 Zellen-Komponenten, welche jede ihren eigenen 'State' hat. Beim Starten des Spiel werden zufällige Zellen 'angeschaltet'. Durch das Anklicken einer Zelle ändert sich der 'State' der benachbarten Zelle. Wenn alle Zellen dunkel sind ist das Spiel gewonnen."]
  }
]
