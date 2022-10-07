const myForm = async(e) => {
    var nameForm = document.getElementById("full-name-form").value;
    var emailForm = document.getElementById("email-form").value;
    var phoneForm = document.getElementById("phone-form").value;
    var msgForm = document.getElementById("msg-form").value;
    const aviso = document.getElementById("ventana");

    const dataForm = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
		method: "POST",

		body: JSON.stringify({
			FullName: nameForm,
			Email: emailForm,
			Phone: phoneForm,
			Message: msgForm,
		}),
		headers: { "Content-Type": "application/json" },
	});

console.log(dataForm);

const avisoUno = await dataForm.json();
	if (!dataForm.ok) {
		aviso.innerHTML = `Incorrect data, send it again!`;
	} else {
		aviso.innerHTML = `Thanks!, see you soon!`;
	}
}

