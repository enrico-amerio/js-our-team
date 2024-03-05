const output = document.querySelector('.output');
const team = [
  {
  firstName: 'Wayne',
  lastName: 'Barnett',
  role: 'Founder & CEO',
  photo: 'img/wayne-barnett-founder-ceo.jpg',
  },
  {
  firstName: 'Angela',
  lastName: 'Caroll',
  role: 'Chief Editor',
  photo: 'img/angela-caroll-chief-editor.jpg',
},
{
  firstName: 'Walter',
  lastName: 'Gordon',
  role: 'Office Manager',
  photo: 'img/walter-gordon-office-manager.jpg',
},
{
  firstName: 'Angela',
  lastName: 'Lopez',
  role: 'Social Media Manager',
  photo: 'img/angela-lopez-social-media-manager.jpg',
  },
  {
  firstName: 'Scott',
  lastName: 'Estrada',
  role: 'Developer',
  photo: 'img/scott-estrada-developer.jpg',
  },
  {
  firstName: 'Barbara',
  lastName: 'Ramos',
  role: 'Graphic Designer',
  photo: 'img/barbara-ramos-graphic-designer.jpg',
  }
] 

for(let worker of team){
  let fullName = worker.firstName + ' ' + worker.lastName;
  output.innerHTML +=`
  <div class="card m-2  text-center">
    <img src="${worker.photo}" class="card-img-top" alt="${worker.firstName}">
    <div class="card-body">
      <h5 class="card-title">${fullName}</h5>
      <p class="card-text">${worker.role}</p>
    </div>
  </div>`
}