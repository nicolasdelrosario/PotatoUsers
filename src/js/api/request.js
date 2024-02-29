const resultsInput = document.getElementById('resultsInput');
const genderInput = document.getElementById('genderInput');
const fetchUsersBtn = document.getElementById('fetchUsersBtn')

async function getData(result = 9, gender = '') {
  let url = `https://randomuser.me/api/?results=${result}&gender=${gender}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(`There was an error ${error}`)
  }
}

function getParameters() {
  let result;
  const results = resultsInput.value;
  const genders = genderInput.value;

  if(results)
    result = result

  return getData(result, genders);
}

export { getParameters, resultsInput, genderInput, fetchUsersBtn };