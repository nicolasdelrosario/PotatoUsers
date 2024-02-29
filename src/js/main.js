import { getParameters, genderInput, fetchUsersBtn } from "./api/request.js";

const cardContainer = document.getElementById('cardContainer');

async function displayUsers() {
  let htmlContent = '';
  cardContainer.innerHTML = ''; 

  const users = await getParameters();
  
  users.forEach(user => {
    const element = `
      <li class="user__card-item text-center">
        <img class="user__card-img" src=${user.picture.large} alt=Picture of ${user.name.first} ${user.name.last} />
        <h3 class="user__card-name">${user.name.first} ${user.name.last}</h3>
        <p class="user__card-email user__card-text">${user.email}</p>
        <p class="user__card-location user__card-text">${user.location.country}, ${user.location.state}</p>
      </li>
    `;
    htmlContent += element;
  });

  cardContainer.innerHTML = htmlContent; 
}

fetchUsersBtn.addEventListener('click', displayUsers);
genderInput.addEventListener('change', displayUsers);

displayUsers()