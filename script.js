const targetMenuIcon = document.querySelector('#menu-icon');
const targetMenuList = document.querySelector('#menu-list');
const targetNavBar = document.querySelector('.nav-bar');
const targetListItem1 = document.querySelector('#list-item1');
const targetListItem2 = document.querySelector('#list-item2');
const targetListItem3 = document.querySelector('#list-item3');
const targetListItem4 = document.querySelector('#list-item4');
const targetListItem5 = document.querySelector('#list-item5');
const targetListItem6 = document.querySelector('#list-item6');

targetMenuIcon.addEventListener('click', () => {
  targetMenuIcon.classList.toggle('fa-times');
  targetNavBar.classList.toggle('mobile-menu-navbar')
  targetMenuList.classList.toggle('mobile-menu-list')
});

const targetListItem = [targetListItem1, targetListItem2, targetListItem3, targetListItem4, targetListItem5, targetListItem6];

for (let i = 0; i < targetListItem.length; i += 1) {
  targetListItem.forEach((items) => {
    items.addEventListener('click', () => {
      targetMenuIcon.classList.toggle('fa-times');
      targetMenuIcon.classList.remove('fa-times');
      targetNavBar.classList.remove('mobile-menu-navbar')
      targetMenuList.classList.remove('mobile-menu-list')
    });
  });
}

const targetMemberWrap = document.getElementById('member-wrap');
const targetCommittee = document.getElementById('committee');
const targetMoreButton = document.getElementById('more');

const memberArray = [
  {
    photo: 'assets/m1.jpg',
    name: 'Kanchan Tamrakar',
    position: 'Chairman, Robotics Club, Pulchowk Campus',
    detail: 'Tamrakar is the chairman of Robotics Club since 2020, and the organizer of "Footstep of Buddha-2022"'
  },

  {
    photo: 'assets/m2.jpg',
    name: 'Kiran Pokharel',
    position: 'Chairman, Computer Engineering House, Pulchowk Campus',
    detail: 'Pokharel is the chairman of Computer Engineering House since 2019, and the organizer of "Coding and Decoding Challenge-2020"'
  },

  {
    photo: 'assets/m3.jpg',
    name: 'Nancy Bhattarai',
    position: 'Secretary, Robotics Club, Pulchowk Campus',
    detail: 'Bhattarai is the ecretary of Robotics Club since 2021, and the organizer of "Footstep of Buddha-2022"'
  },

  {
    photo: 'assets/m4.jpg',
    name: 'Raj Upadhyay',
    position: 'Member, Computer Engineering House, Pulchowk Campus',
    detail: 'Upadhyay is the member of Computer Engineering House since 2019, and the winner of "Coding and Decoding Challenge-2020"'
  },

  {
    photo: 'assets/m5.jpg',
    name: 'Nisha Paudel',
    position: 'Chairman, Civil Engineering Society, Pulchowk Campus',
    detail: 'Paudel is the chairman of Civil Engineering Society since 2020, and the organizer of "Build Your Country-2021"'
  },

  {
    photo: 'assets/m6.jpg',
    name: 'Yahudi Tamang',
    position: 'Member, Civil Engineering Society, Pulchowk Campus',
    detail: 'Tamrakar is the member of  Civil Engineering Society since 2020, and the organizer of "Build Your Country-2021"'
  },
]

for (let i = 0; i <= memberArray.length; i++) {
  const divMember = document.createElement('div')
  divMember.className = 'member'
  divMember.innerHTML = `
    <div class="image">
      <img class="photo" src="${memberArray[i].photo}" alt="${memberArray[i].name}">
    </div>
    <div class="wrap-details">
      <h3 class="name">${memberArray[i].name}</h3>
      <p class="position">${memberArray[i].position}</p>
      <hr>
      <p class="detail">${memberArray[i].detail}</p>
    </div>
  </div>`
  targetMemberWrap.appendChild(divMember);

  if (i >= 2) {
    divMember.classList = 'member hide'
    targetMoreButton.addEventListener('click', () => {
    divMember.style.display = 'flex';
    targetMoreButton.style.display = 'none';
  });
  }
}