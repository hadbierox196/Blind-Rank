// Placeholder teams (replace these with actual players later)
const teams = {
  man_city: ["Sergio Agüero", "Kevin De Bruyne", "David Silva", "Yaya Touré", "Vincent Kompany", "Raheem Sterling", "Joe Hart", "Carlos Tévez", "Kun Agüero", "Bernardo Silva",
"Ederson", "Riyad Mahrez", "Phil Foden", "Gabriel Jesus", "John Stones", "Ilkay Gündogan", "Zabaleta", "Joleon Lescott", "Aleksandar Kolarov", "Nicolas Otamendi",
"Benjamin Mendy", "Fernandinho", "Kyle Walker", "Kolo Touré", "Stevan Jovetić", "Samir Nasri", "Jack Grealish", "Michael Richards", "Shaun Wright-Phillips", "Bernardo Silva",
"Yaya Touré", "Leroy Sané", "Mikael Silvestre", "David James", "Bernardo Silva", "Javi García", "Raúl Jiménez", "Gabriel Jesus", "Jack Rodwell", "Shaun Goater",
"Claudio Bravo", "Mario Balotelli", "Fernando", "Kiki Musampa", "Trevor Sinclair", "Rodri", "Ricardo Carvalho", "Martin Petrov", "Gareth Barry", "Nedum Onuoha"],
  man_united: ["Ryan Giggs", "Eric Cantona", "Cristiano Ronaldo", "Wayne Rooney", "George Best", "Bobby Charlton", "Paul Scholes", "Gary Neville", "David Beckham", "Ruud van Nistelrooy",
"Roy Keane", "Peter Schmeichel", "Nemanja Vidić", "Rio Ferdinand", "Juan Mata", "Marcus Rashford", "Paul Pogba", "Anthony Martial", "Bruno Fernandes", "Edwin van der Sar",
"Robin van Persie", "Michael Carrick", "Ashley Young", "Antonio Valencia", "Dwight Yorke", "Ole Gunnar Solskjær", "Louis Saha", "Juan Sebastián Verón", "Nani", "Ander Herrera",
"Dimitar Berbatov", "Henrik Larsson", "Jesse Lingard", "Tom Cleverley", "Chris Smalling", "Phil Jones", "Tom Heaton", "Mikaël Silvestre", "John O'Shea", "Ryan Shawcross",
"Wayne Rooney", "Marcos Rojo", "Gary Pallister", "Lee Sharpe", "Norman Whiteside", "Jack Rowley", "Dennis Viollet", "Peter Beardsley", "Fred", "Scott McTominay"],
  liverpool: ["Steven Gerrard", "Mohamed Salah", "Virgil van Dijk", "Roberto Firmino", "Sadio Mane", "Jamie Carragher", "Ian Rush", "John Barnes", "Fernando Torres", "Xabi Alonso",
"Philippe Coutinho", "Luis Suárez", "Jordan Henderson", "Ray Clemence", "Craig Johnston", "Kenny Dalglish", "Michael Owen", "Divock Origi", "Trent Alexander-Arnold", "Alisson Becker",
"Virgil van Dijk", "James Milner", "Georginio Wijnaldum", "Emre Can", "Peter Crouch", "Luis García", "Sammy Lee", "Steve McManaman", "Jerzy Dudek", "Craig Bellamy",
"Robbie Fowler", "Gary McAllister", "Daniel Sturridge", "Titi Camara", "Martin Skrtel", "Milan Jovanović", "Lucas Leiva", "Sami Hyypiä", "Jermaine Pennant", "Martin Kelly",
"Jonjo Shelvey", "Nabil El Zhar", "Bolo Zenden", "Charlie Adam", "Steve Heighway", "David Fairclough", "Phil Neal", "Alberto Moreno", "Oussama Assaidi", "David James"],
  arsenal: ["Thierry Henry", "Dennis Bergkamp", "Patrick Vieira", "Tony Adams", "Ian Wright", "Cesc Fàbregas", "Robert Pirès", "David Seaman", "Martin Keown", "Sol Campbell",
"Jack Wilshere", "Ray Parlour", "Ashley Cole", "Freddie Ljungberg", "John Radford", "Liam Brady", "Theo Walcott", "Mesut Özil", "Alexis Sánchez", "Pierre-Emerick Aubameyang",
"Jens Lehmann", "Santi Cazorla", "Mikel Arteta", "Tomas Rosický", "Kieran Tierney", "Emmanuel Petit", "Abou Diaby", "Danny Welbeck", "Shkodran Mustafi", "Rob Holding",
"Granit Xhaka", "Nicolas Pépé", "Martin Ødegaard", "Bukayo Saka", "Laurent Koscielny", "Kolo Touré", "Gabriel Magalhães", "William Gallas", "Alan Smith", "Geoff Strong",
"Charlie George", "Jimmy Brain", "Jack Kelsey", "Cliff Bastin", "Tommy Caton", "David Jack", "Leslie Compton", "Bob John", "John Barnwell", "Dennis Evans"],
  chelsea: ["Frank Lampard", "John Terry", "Didier Drogba", "Petr Čech", "Eden Hazard", "Gianfranco Zola", "Dennis Wise", "Claude Makélélé", "Arjen Robben", "Juan Mata",
"César Azpilicueta", "Ashley Cole", "Michael Ballack", "N'Golo Kanté", "Branislav Ivanović", "Ricardo Carvalho", "Joe Cole", "David Luiz", "Samuel Eto'o", "Fernando Torres",
"Willian", "Ruben Loftus-Cheek", "Antonio Rudiger", "Timo Werner", "Thiago Silva", "Mason Mount", "Kurt Zouma", "Raul Meireles", "Salomon Kalou", "Jimmy Floyd Hasselbaink",
"Mark Schwartzer", "Scott Parker", "Jody Morris", "Tony Cascarino", "John Obi Mikel", "Gary Cahill", "Demba Ba", "Ashley Cole", "Gary Neville", "Wayne Bridge",
"George Weah", "Michy Batshuayi", "Kenedy", "Christian Pulisic", "Mario Pašalić", "Timo Werner", "Diego Costa", "Alvaro Morata", "Ian Hutchinson", "Ray Wilkins"],
  bayern: ["Franz Beckenbauer", "Gerd Müller", "Karl-Heinz Rummenigge", "Oliver Kahn", "Lothar Matthäus", "Uli Hoeneß", "Thomas Müller", "Manuel Neuer", "Arjen Robben", "Franck Ribéry",
"Philipp Lahm", "Bastian Schweinsteiger", "Miroslav Klose", "Claudio Pizarro", "Robert Lewandowski", "Jérôme Boateng", "David Alaba", "Héctor Herrera", "Joshua Kimmich", "Kingsley Coman",
"Serge Gnabry", "Mats Hummels", "Thiago Alcântara", "Mario Götze", "Xabi Alonso", "Javi Martínez", "Rafinha", "James Rodríguez", "Leon Goretzka", "Niklas Süle",
"Jan Kirchhoff", "Pierre-Emile Højbjerg", "Sebastian Rode", "Timothy Fosu-Mensah", "Sebastian Lletget", "Jan Schlaudraff", "Holger Badstuber", "Marc Roca", "Michael Ballack", "Eugen Polanski",
"Kevin Volland", "Gökhan Töre", "Stefan Effenberg", "Charly Körbel", "Hans Pflügler", "Thomas Helmer", "Hans-Dieter Flick", "Raul", "Klaas-Jan Huntelaar", "Gideon Jung"],
  inter_milan: ["Javier Zanetti", "Samuel Eto'o", "Wesley Sneijder", "Diego Milito", "Mauro Icardi", "Giuseppe Meazza", "Luigi Riva", "Zico", "Riccardo Quaresma", "Walter Samuel",
"Christian Vieri", "Marco Materazzi", "Ivan Córdoba", "Esteban Cambiasso", "Sandro Mazzola", "Giacinto Facchetti", "Andrea Pirlo", "Lothar Matthäus", "Daniele Adani", "Nicola Berti",
"Ronaldo Nazário", "Roberto Baggio", "Beppe Bergomi", "Walter Zenga", "Zé Elias", "Gabriele Oriali", "Antonio Conte", "Klaus Augenthaler", "Mário Zagallo", "Boris Bianchi",
"Luciano", "Luca Castellazzi", "Alessandro Altobelli", "Riccardo Bellini", "César", "Antonio Di Natale", "Álvaro Recoba", "Marco Tardelli", "Andrea Ranocchia", "Yuto Nagatomo",
"Matías Vecino", "Mauro Baldini", "Felipe Melo", "Antonio Cassano", "João Mário", "Romelu Lukaku", "Alexis Sánchez", "Radja Nainggolan", "Achraf Hakimi", "Stefan de Vrij"],
  ac_milan: ["Paolo Maldini", "Franco Baresi", "Alessandro Nesta", "Clarence Seedorf", "Kaká", "Andriy Shevchenko", "Gianni Rivera", "Marco van Basten", "Rui Costa", "Zvonimir Boban",
"Filippo Inzaghi", "Gennaro Gattuso", "Thierry Henry", "Dida", "Riccardo Kaká", "Andrea Pirlo", "Roberto Donadoni", "Daniele Massaro", "Luciano", "Christian Panucci",
"Alessio Romagnoli", "Samuel Eto'o", "Diego Maradona", "Toni Morandi", "Eugenio Fascetti", "Mario Balotelli", "Kevin-Prince Boateng", "Yacine Brahimi", "Pippo Inzaghi", "Shkodran Mustafi",
"Alexis Sánchez", "Hakan Çalhanoğlu", "Suso", "Antonio Cassano", "Philippe Mexès", "Ricardo Montolivo", "Khalid Boulahrouz", "Emmanuel Petit", "Kaka", "Edgar Davids",
"Antonio Nocerino", "Massimo Ambrosini", "Nino Bongiovanni", "José Altafini", "Marco Giampaolo", "Giuseppe Meazza", "Clarence Seedorf", "Zlatan Ibrahimović", "Jean-Pierre Papin", "Alessio Cerci"],
  juventus: ["Alessandro Del Piero", "Michel Platini", "Roberto Baggio", "Paolo Rossi", "Andrea Pirlo", "Gianluigi Buffon", "Cristiano Ronaldo", "Zinedine Zidane", "David Trezeguet", "Alvaro Morata",
"Fabio Cannavaro", "Carlos Tevez", "Giorgio Chiellini", "Claudio Marchisio", "Daniele De Rossi", "Juve Vialli", "Marco Di Vaio", "Stefano Tacconi", "Lilian Thuram", "Ciro Immobile",
"Andrea Barzagli", "Antonio Conte", "Juan Cuadrado", "Mohamed Sissoko", "Raffaele Palladino", "Marco Materazzi", "Fabio Grosso", "Mirko Vucinic", "Vincenzo Iaquinta", "Fabrizio Miccoli",
"Mehdi Benatia", "Kwadwo Asamoah", "Miralem Pjanic", "Paulo Dybala", "Alex Sandro", "Leonardo Bonucci", "Simone Padoin", "Bernardo Silva", "Emre Can", "Mohamed Lamine",
"Juan Pablo Ángel", "Dino Zoff", "Nicola Legrottaglie", "Antonio Nocerino", "Matthijs de Ligt", "Diego", "Claudio Ranieri", "Igor Tudor", "Vincenzo Montella", "Paolo Montero"],
  barcelona: ["Leo Messi", "Xavi Hernández", "Andrés Iniesta", "Carles Puyol", "Ronaldinho", "Luis Suárez", "César Rodríguez", "Johan Cruyff", "Sergio Busquets", "Neymar",
"Samuel Eto'o", "Dani Alves", "Gerard Piqué", "David Villa", "Sergi Roberto", "Culé", "Víctor Valdés", "Cesc Fàbregas", "Michael Laudrup", "Hristo Stoichkov",
"Jordi Alba", "Ivan Rakitić", "Sandro Rosell", "Luis Enrique", "Pep Guardiola", "Rafael Alcántara", "Dimitri Kharine", "Andoni Zubizarreta", "Samuel Umtiti", "Thiago Alcántara",
"Jordi Cruyff", "Luis Aragonés", "Adriano", "Marc-André ter Stegen", "Frenkie de Jong", "Antoine Griezmann", "Eidur Gudjohnsen", "Patrick Kluivert", "Pedro Rodríguez", "Dani García",
"Emili Ricart", "Victor Munoz", "Raymond Kopa", "Angel Rodriguez", "Antoine Griezmann", "Frank de Boer", "Gerard López", "Sergio Agüero", "Josep Guardiola", "Bojan Krkić"],
  real_madrid: ["Cristiano Ronaldo", "Sergio Ramos", "Alfredo Di Stéfano", "Raúl González", "Zinedine Zidane", "Iker Casillas", "Karim Benzema", "Luka Modrić", "Ferenc Puskás", "David Beckham",
"Roberto Carlos", "Fernando Hierro", "Gareth Bale", "Toni Kroos", "Kaká", "Rafael Varane", "Michel", "Emilio Butragueño", "Antonio Gento", "Álvaro Morata",
"Johan Cruyff", "José Antonio Camacho", "Álvaro Arbeloa", "Michele Salgado", "Isco", "Vinícius Júnior", "Thibaut Courtois", "James Rodríguez", "Raúl Albiol", "Lassana Diarra",
"Xabi Alonso", "Héctor Rial", "Pablo Machín", "Marco Asensio", "Santiago Bernabéu", "Héctor Herrera", "Mário Götze", "Santiago Solari", "Carlos Santillana", "Juanito",
"Julen Lopetegui", "Víctor Sánchez", "Antonio Puerta", "José Luis Pérez-Payá", "Manuel Sanchís", "Rafael Alkorta", "Ricardo Zamora", "Fernando Redondo", "Juan Ramón Muñoz", "Julio Iglesias"],
  all: ["Cristiano Ronaldo", "Lionel Messi", "Neymar", "Kylian Mbappé", "Robert Lewandowski", "Kevin De Bruyne", "Mohamed Salah", "Virgil van Dijk", "Karim Benzema", "Luka Modrić",
"Erling Haaland", "Harry Kane", "Sergio Ramos", "Kante N'Golo", "Alisson Becker", "Sadio Mane", "Manuel Neuer", "Joshua Kimmich", "Thibaut Courtois", "Toni Kroos",
"Raheem Sterling", "Romelu Lukaku", "Paul Pogba", "Sergio Agüero", "Phil Foden", "Bruno Fernandes", "Gareth Bale", "Jadon Sancho", "Pierre-Emerick Aubameyang", "Zlatan Ibrahimović",
"Jack Grealish", "Son Heung-min", "Bernardo Silva", "Georginio Wijnaldum", "Riyad Mahrez", "Kai Havertz", "Antonio Rudiger", "Ruben Dias", "Kylian Mbappé", "David Alaba",
"Dele Alli", "Marco Verratti", "Christian Pulisic", "Gabriel Jesus", "Ederson", "Achraf Hakimi", "Edin Džeko", "Mason Mount", "Raphaël Varane", "Cristiano Ronaldo",
"Gerard Piqué", "Sergio Busquets", "Karim Benzema", "Frenkie de Jong", "Paulo Dybala", "Vinícius Júnior", "Lautaro Martínez", "Leon Goretzka", "Timo Werner", "Emiliano Martínez",
"Jorginho", "César Azpilicueta", "Matthijs de Ligt", "Koke", "Hakim Ziyech", "Matheus Cunha", "Mauro Icardi", "Victor Osimhen", "Nico González", "Christian Benteke",
"Ben White", "João Félix", "Marco Asensio", "Rodri", "Diogo Jota", "Donny van de Beek", "Dusan Vlahović", "Jack Harrison", "Ciro Immobile", "Federico Chiesa",
"Erling Haaland", "Leonardo Bonucci", "Ben Mee", "Ibrahima Konaté", "Jordan Henderson", "Oliver Giroud", "Marcus Rashford", "Jules Koundé", "Kasper Schmeichel", "James Maddison"]
};

let currentTeam = [];
let availablePlayers = [];
let top5 = [];
let currentDisplayedPlayer = null;  // Store the currently displayed player
let animationInterval = null; // Store the animation interval to stop it later

const teamSelect = document.getElementById("teams");
const playerName = document.getElementById("player-name");
const rankings = document.getElementById("rankings");
const nextButton = document.getElementById("next-player");

// Initialize game when team is selected
teamSelect.addEventListener("change", () => {
  currentTeam = teams[teamSelect.value];
  availablePlayers = [...currentTeam];
  top5 = [];
  currentDisplayedPlayer = null;  // Reset the current displayed player
  resetRankings();
  nextPlayer();
});

// Show random animation for player name
function randomizePlayerName() {
  if (availablePlayers.length === 0 || top5.length === 5) {
    // Stop animation if all 5 positions are filled
    clearInterval(animationInterval);
    return;
  }

  // Start showing random players
  animationInterval = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * availablePlayers.length);
    playerName.textContent = availablePlayers[randomIndex];
    currentDisplayedPlayer = availablePlayers[randomIndex]; // Store the currently displayed player
  }, 100);

  setTimeout(() => {
    clearInterval(animationInterval); // Stop animation after 3 seconds
  }, 3000);
}

// Get next random player and show their name
function nextPlayer() {
  if (top5.length < 5) {
    randomizePlayerName(); // Continue showing random names until all positions are filled
  }
}

// Place player in one of the top 5 positions
function placePlayer(rank) {
  if (top5.includes(rank)) {
    alert("This rank has already been filled!");
    return;
  }

  if (currentDisplayedPlayer === null) {
    alert("No player displayed to be placed.");
    return;
  }

  const selectedPlayer = currentDisplayedPlayer;
  top5.push(rank); // Add the rank to the filled ranks array

  // Update the display of the player's name in the corresponding rank position
  document.getElementById(`rank-${rank}`).textContent = selectedPlayer;

  // Remove the selected player from available players
  availablePlayers = availablePlayers.filter(player => player !== selectedPlayer);

  // Disable click on the filled position
  document.querySelector(`[data-rank="${rank}"]`).style.pointerEvents = "none";

  // Check if all ranks are filled
  if (top5.length === 5) {
    alert("All positions have been filled!");
    clearInterval(animationInterval); // Stop the random name animation
  }

  // Move to the next player after placement
  nextPlayer();
}

// Reset rankings display
function resetRankings() {
  const rankElements = document.querySelectorAll('.rank span');
  rankElements.forEach(rank => {
    rank.textContent = '';
    rank.parentElement.style.pointerEvents = "auto"; // Enable clicking again
  });
}

nextButton.addEventListener("click", nextPlayer);
