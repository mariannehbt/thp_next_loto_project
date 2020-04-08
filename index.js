const checkLoto = (firstname, lastname, email, lotoNumbers) => {
	// // On tire 6 chiffres au hasard
	// function getRandomIntInclusive(min, max) {
	// 	min = Math.ceil(min);
	// 	max = Math.floor(max);
	// 	return Math.floor(Math.random() * (max - min +1)) + min;
	// }

	// let choosenNumbers = []
	// let times = 5;
	// for(let i = 0; i < times; i++){
	// 	choosenNumbers.push(getRandomIntInclusive(1, 49));
	// }
	// choosenNumbers.push(getRandomIntInclusive(1, 10));
	// console.log('Tirage Loto: ' + choosenNumbers);

	// On prend des chiffres de 1 à 6
	let choosenNumbers = []
	let times = 6;
	for(let i = 0; i < times; i++){
		choosenNumbers.push(i + 1);
	}
	console.log('Tirage Loto: ' + choosenNumbers);

	// On vérifie si toutes les informations saisies sont correctes
	let firstname_check = document.forms['myForm']['firstname'].value;
	let lastname_check = document.forms['myForm']['lastname'].value;
	let email_check = document.forms['myForm']['email'].value;
	let regex_test = /([A-Za-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3})$/;
	let regex_result = regex_test.test(email_check);

	let userNumbers = []
	userNumbers.push(document.forms['myForm']['lotoNumber1'].value);
	userNumbers.push(document.forms['myForm']['lotoNumber2'].value);
	userNumbers.push(document.forms['myForm']['lotoNumber3'].value);
	userNumbers.push(document.forms['myForm']['lotoNumber4'].value);
	userNumbers.push(document.forms['myForm']['lotoNumber5'].value);
	userNumbers.push(document.forms['myForm']['lotoNumber6'].value);
	console.log('Jeu : ' + userNumbers);

	// On affiche des messages sur la page HTML en fonction
	switch (true) {
		// Veuillez fournir un prénom (quand elle reçoit un prénom vide)
		case (firstname_check == ""):
		alert("Veuillez fournir un prénom");
		return false;
		break;
		// Veuillez fournir un nom (quand elle reçoit un nom vide)
		case (lastname_check == ""):
		alert("Veuillez fournir un nom");
		return false;
		break;
		// Veuillez fournir un email (quand elle ne reçoit pas d'email)
		case (email_check == ""):
		alert("Veuillez fournir un email");
		return false;
		break;
		// Votre email n'est pas valide (lorsque l'email ne fournit n'est pas au bon format)
		// Doit faire + de 8 caractères
		case (email_check.length < 8
			// Doit faire - de 30 caractères
			|| email_check.length > 30 
			// Doit contenir un @ et un point (les 2 lignes suivantes ne sont pas utiles => REGEX)
			|| email_check.includes('.') == false
			|| email_check.includes('@') == false
			// Doit contenir 2 ou 3 lettres après le point
			|| regex_result == false):
		alert("Votre email n'est pas valide");
		return false;
		break;
	}

	// On vérifie si la grille est gagnante

	let userNumbersOk = userNumbers.map(i=>Number(i))

	console.log(choosenNumbers)
	console.log(userNumbersOk)

	if (JSON.stringify(choosenNumbers) == JSON.stringify(userNumbersOk)) {
		alert("Félicitations vous avez gagné 1 million !!!!!");
		return true
	} else {
		alert("Désolé vous avez perdu, les nombres gagnants sont : " + choosenNumbers);
		return false
	}

	// // On récupère les informations saisies dans le formulaire
	// const myForm = document.getElementById('myForm');

	// myForm.addEventListener('submit', (e) => {
	// 	e.preventDefault();

	// 	console.log('Form has been submitted !');
	// 	console.log(firstname.value);
	// 	console.log(lastname.value);
	// });
}