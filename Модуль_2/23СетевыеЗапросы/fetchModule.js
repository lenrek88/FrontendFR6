
export function getGenderize(name) {
	return fetch(`https://api.genderize.io?name=${name}`)
		.then(response => {
		  if (response.status === 404) {
		    throw new Error('Имя не найдено');
		  }
		  return response.json();
		})
}