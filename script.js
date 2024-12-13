const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];
// DOM ELEMENTS
const container = document.querySelector(".row");
//
let infoTeam = "";
for(let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];
  infoTeam += `<div class="col">
                <div>
                  <img src="${member.img}" alt="${member.name}">
                </div>
                <div class="text-card">
                  <h3>${member.name}</h3>
                  <h5>${member.role}</h5>
                  <span>${member.email}</span>
                </div>
              </div>`
}

container.innerHTML = infoTeam;