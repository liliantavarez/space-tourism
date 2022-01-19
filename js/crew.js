var crew = [
  {
    name: "Douglas Hurley",
    images: {
      png: "./assets/crew/image-douglas-hurley.png",
      webp: "./assets/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: "./assets/crew/image-mark-shuttleworth.png",
      webp: "./assets/crew/image-mark-shuttleworth.webp",
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: "./assets/crew/image-victor-glover.png",
      webp: "./assets/crew/image-victor-glover.webp",
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: "./assets/crew/image-anousheh-ansari.png",
      webp: "./assets/crew/image-anousheh-ansari.webp",
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

function pageCommander(){
    let name  = document.getElementsByClassName('name')[0]
    let office = document.getElementsByClassName('office')[0]
    let bio = document.getElementsByClassName('bio')[0]
    name.innerHTML = crew[0].name
    office.innerHTML = crew[0].role
    bio.innerHTML = crew[0].bio
    document.getElementById('photo-crew').src = `${crew[0].images.png}`
}

function pageSpecialist(){
    let name  = document.getElementsByClassName('name')[0]
    let office = document.getElementsByClassName('office')[0]
    let bio = document.getElementsByClassName('bio')[0]
    name.innerHTML = crew[1].name
    office.innerHTML = crew[1].role
    bio.innerHTML = crew[1].bio
    document.getElementById('photo-crew').src = `${crew[1].images.png}`
}

function pagePilot(){
    let name  = document.getElementsByClassName('name')[0]
    let office = document.getElementsByClassName('office')[0]
    let bio = document.getElementsByClassName('bio')[0]
    name.innerHTML = crew[2].name
    office.innerHTML = crew[2].role
    bio.innerHTML = crew[2].bio
    document.getElementById('photo-crew').src = `${crew[2].images.png}`
}

function pageEngineer(){
    let name  = document.getElementsByClassName('name')[0]
    let office = document.getElementsByClassName('office')[0]
    let bio = document.getElementsByClassName('bio')[0]
    name.innerHTML = crew[3].name
    office.innerHTML = crew[3].role
    bio.innerHTML = crew[3].bio
    document.getElementById('photo-crew').src = `${crew[3].images.png}`
}


