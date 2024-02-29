const cardContainer = document.getElementById('cardContainer');
const resultsInput = document.getElementById('resultsInput');
const genderInput = document.getElementById('genderInput');
genderInput.addEventListener('change', displayUsers);
const fetchUsersBtn = document.getElementById('fetchUsersBtn')
fetchUsersBtn.addEventListener('click', displayUsers);

async function loadData() {
  const results = resultsInput.value;
  const gender = genderInput.value;
  let url = 'https://randomuser.me/api/';

  !results
    ? url += `?results=9`
    : url += `?results=${results}`

  if(gender == 1) {
    url += `&gender=male`
  } else if(gender == 2) {
    url += `&gender=female`
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(`There was an error ${error}`)
  }
}

async function displayUsers() {
  cardContainer.innerHTML = '';

  const users = await loadData();
  users.forEach(user => {
    const userCard = document.createElement('li');
    userCard.classList.add('user__card-item', 'text-center');

    const userImage = document.createElement('img');
    userImage.classList.add('user__card-img')
    userImage.src = user.picture.large;
    userImage.alt = `Picture of${user.name.first} ${user.name.last}`;

    const userName = document.createElement('h3');
    userName.classList.add('user__card-name');
    userName.textContent = `${user.name.first} ${user.name.last}`;

    const userEmail = document.createElement('p');
    userEmail.classList.add('user__card-email', 'user__card-text');
    userEmail.textContent = user.email;

    const userLocation = document.createElement('p');
    userLocation.classList.add('user__card-location', 'user__card-text');
    userLocation.textContent = `${user.location.country}, ${user.location.state}`;

    userCard.appendChild(userImage);
    userCard.appendChild(userName);
    userCard.appendChild(userEmail);
    userCard.appendChild(userLocation);

    cardContainer.appendChild(userCard);
  });
}

displayUsers()