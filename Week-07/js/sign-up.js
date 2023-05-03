var validaciones = {
    correctos: {},
    incorrectos: {}
};

function containsLetter(value) {
    for (var i = 0; i < value.length; i++) {
      var charCode = value.charCodeAt(i);
      if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        return true;
      }
    }
    return false;
};

function containsNumber(value) {
    for (var i = 0; i < value.length; i++) {
      var charCode = value.charCodeAt(i);
      if (charCode >= 48 && charCode <= 57) {
        return true;
      }
    }
    return false;
};


function containsSpecialChar(value) {
    var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-',
    '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '/', '<', '>', '?', '`',
    '~', "'", '"', '\\'];
    for (i = 0; i < value.length; i++) {
        var char = value[i]
        if (specialChars.indexOf(char) > -1) {
            return true;
        }
    }
    return false;
};

function deleteSpaces(value){
    var arrayWoutSpaces = [];
    for (i = 0; i < value.length; i++) {
        if (value[i].trim() !== ""){
            arrayWoutSpaces.push(value[i]);
        }
    }
    return arrayWoutSpaces;
};

function validateAdress(value){
    var newWords = value.split(" ");
    var words = deleteSpaces(newWords);
    if (words.length === 1) {
        return false;
    } else if (words.length === 2) {
        var firstWord = words[0].trim().toString();
        var secondWord = words[1].trim().toString();
        if  (containsSpecialChar(firstWord) || containsSpecialChar(secondWord)){
            return false;
        } else if   (((containsLetter(firstWord)) && containsNumber(secondWord)) ||
                    (containsNumber(firstWord) && containsLetter(secondWord))){
                    return true;
        } return false;
    } else if (words.length === 3) {
        var firstWord = words[0].trim().toString();
        var secondWord = words[1].trim().toString();
        var thirdWord = words[2].trim().toString();
        if ((containsSpecialChar(firstWord)) || (containsSpecialChar(secondWord)) || (containsSpecialChar(thirdWord))){
            return false;
        } else if   (((containsLetter(firstWord)) && containsLetter(secondWord)) && containsNumber(thirdWord) ||
                    (containsNumber(firstWord) && containsLetter(secondWord)) && containsLetter(thirdWord)){
                    return true;
        } return false;
    } else if (words.length > 3){
        return false;
    }
};

function transformDate(date){
    var dateWrong = date.split("-", 3);
    var dateOk = dateWrong[1] + "/" + dateWrong[2] + "/" + dateWrong[0];
    return dateOk;
};



var nameSingUp = document.getElementById("name");
var incorrectName = document.getElementById("incorrectName")
var required = document.getElementById("required")

nameSingUp.onblur = function() {
    var name = nameSingUp.value;
    if (name.length == 0) {
        required.style.display="block";
        nameSingUp.classList.add("red-border")
        validaciones.incorrectos.name = "Can't be empty";
    } else if (containsNumber(name) == true || (name.length < 3)) {
        incorrectName.style.display="block";
        nameSingUp.classList.add("red-border");
        validaciones.incorrectos.name = "Contains numbers or less than 3 characters";
    } else {
        validaciones.correctos.name= name;
    }
};

nameSingUp.onfocus = function() {
    nameSingUp.classList.remove("red-border");
    incorrectName.style.display="none";
    required.style.display="none";
    nameSingUp.value = "";
    delete validaciones.incorrectos.name;
    delete validaciones.correctos.name;
};

var surnameSingUp = document.getElementById("surname");
var incorrectSurname = document.getElementById("incorrectSurname")

surnameSingUp.onblur = function() {
    var surname = surnameSingUp.value;
    if (surname.length == 0) {
        required.style.display="block";
        surnameSingUp.classList.add("red-border")
        validaciones.incorrectos.surname = "Can't be empty";
    } else if (containsNumber(surname) == true || (surname.length < 3)) {
        incorrectSurname.style.display="block";
        surnameSingUp.classList.add("red-border");
        validaciones.incorrectos.surname = "Contains numbers or less than 3 characters";
    } else {
        validaciones.correctos.surname = surname;
    }
};

surnameSingUp.onfocus = function() {
    surnameSingUp.classList.remove("red-border");
    incorrectSurname.style.display="none";
    required.style.display="none";
    surnameSingUp.value = "";
    delete validaciones.incorrectos.surname;
    delete validaciones.incorrectos.surname;
};


var idNumber = document.getElementById("idNumber");
var incorrectIdNumber = document.getElementById("incorrectIdNumber")

idNumber.onblur = function() {
    if (idNumber.value.length == 0) {
        required.style.display="block";
        idNumber.classList.add("red-border")
        validaciones.incorrectos.IdNumber = "Can't be empty";
    } else if (containsLetter(idNumber.value) == true || idNumber.value.length < 7){
        incorrectIdNumber.style.display="block";
        idNumber.classList.add("red-border")
        validaciones.incorrectos.IdNumber = "Contains letters or less than 7 characters";
    } else {
        validaciones.correctos.IdNumber = idNumber.value;
    }
};

idNumber.onfocus = function () {
    idNumber.classList.remove("red-border");
    incorrectIdNumber.style.display="none";
    required.style.display="none";
    idNumber.value = "";
    delete validaciones.incorrectos.IdNumber;
    delete validaciones.correctos.IdNumber;
};

var date = document.getElementById("birthDate");
var incorrectBirthDate = document.getElementById("incorrectBirthDate")

date.onblur = function () {
    var validateDate = date.value.split("-", 3);
    if (date.value.length == 0) {
        required.style.display="block";
        date.classList.add("red-border")
        validaciones.incorrectos["Birth Date"] = "Can't be empty";
    } else if (validateDate[0] > 2023){
        incorrectBirthDate.style.display="block";
        validaciones.incorrectos["Birth Date"] = "Invalid year";
    } else {
        validateDate.reverse()
        var dateString = validateDate[0] +"/"+validateDate[1] +"/"+validateDate[2];
        validaciones.correctos["Birth Date"] = dateString;
    }
};

date.onfocus = function () {
    required.style.display="none";
    incorrectBirthDate.style.display="none";
    date.classList.remove("red-border");
    date.value = "";
    delete validaciones.incorrectos["Birth Date"];
    delete validaciones.correctos["Birth Date"];
};

var phone = document.getElementById("phone");
var incorrectPhone = document.getElementById("incorrectPhone")

phone.onblur = function() {
    if (phone.value.length == 0) {
        required.style.display="block";
        phone.classList.add("red-border");
        validaciones.incorrectos.Phone = "Can't be empty";
    } else if (containsLetter(phone.value) == true || phone.value.length < 10){
        incorrectPhone.style.display="block";
        phone.classList.add("red-border")
        validaciones.incorrectos.Phone = "Contains letters or less than 10 characters";
    } else {
        validaciones.correctos.Phone = phone.value;
    }
};

phone.onfocus = function () {
    phone.classList.remove("red-border");
    incorrectPhone.style.display="none";
    required.style.display="none";
    phone.value = "";
    delete validaciones.incorrectos.Phone;
    delete validaciones.correctos.Phone
};

var adress = document.getElementById("adress");
var incorrectAdress = document.getElementById("incorrectAdress");

adress.onblur = function () {
    if (adress.value.length == 0) {
        required.style.display="block";
        adress.classList.add("red-border");
        validaciones.incorrectos.Adress = "Can't be empty";
    } else if (validateAdress(adress.value) == false || (adress.value.length <= 5)) {
        incorrectAdress.style.display="block";
        adress.classList.add("red-border");
        validaciones.incorrectos.Adress =
        "Max two words and numbering. Can't contains only letters or numbers and specials characters";
    } else {
        validaciones.correctos.Adress = adress.value;
    }
};

adress.onfocus = function () {
    adress.classList.remove("red-border");
    incorrectAdress.style.display="none";
    required.style.display="none";
    adress.value = "";
    delete validaciones.incorrectos.Adress;
    delete validaciones.correctos.Adress;
};



var locations = document.getElementById("location");
var incorrectLocations = document.getElementById("incorrectLocation");

locations.onblur = function () {
    if (locations.value.length == 0) {
        required.style.display="block";
        locations.classList.add("red-border")
        validaciones.incorrectos.Location = "Can't be empty";
    } else if (containsSpecialChar(locations.value) == true || (locations.value.length < 3)) {
        incorrectLocations.style.display="block";
        locations.classList.add("red-border");
        validaciones.incorrectos.Location = "Can't contains specials characters and min 3 characters";
    } else {
        validaciones.correctos.Location = location.value;
    }
};

locations.onfocus = function () {
    locations.classList.remove("red-border");
    incorrectLocations.style.display="none";
    required.style.display="none";
    locations.value = "";
    delete validaciones.incorrectos.Location;
    delete validaciones.correctos.Location
};

var postalCode = document.getElementById("postalCode");
var incorrectPostalCode = document.getElementById("incorrectPostalCode");

postalCode.onblur = function () {
    if (postalCode.value.length == 0) {
        required.style.display="block";
        postalCode.classList.add("red-border");
        validaciones.incorrectos["Postal Code:"] = "Can't be empty";
    } else if (containsLetter(postalCode.value) ||
    (postalCode.value.length <=3 || postalCode.value.length >=6)) {
        incorrectPostalCode.style.display="block";
        postalCode.classList.add("red-border");
        validaciones.incorrectos["Postal Code:"] = "Can't contains letters and must have between 4-5 numbers";
    } else {
        validaciones.correctos["Postal Code:"] = postalCode.value;
    }
};

postalCode.onfocus = function () {
    postalCode.classList.remove("red-border");
    incorrectPostalCode.style.display="none";
    required.style.display="none";
    postalCode.value = "";
    delete validaciones.incorrectos["Postal Code:"];
    delete validaciones.correctos["Postal Code:"];
};

var email = document.getElementById("email");
var incorrectEmail = document.getElementById("incorrectEmail");
var validEmail =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

email.onblur = function() {
    if (email.value == ""){
        required.style.display="block";
        email.classList.add("red-border");
        validaciones.incorrectos.Email = "Can't be empty";
    } else if (!validEmail.test(email.value)){
        email.classList.add("red-border");
        incorrectEmail.style.display="block";
        validaciones.incorrectos.Email = "Invalid format";
    }else {
        validaciones.correctos.Email = email.value;
    }
};

email.onfocus = function() {
    email.classList.remove("red-border");
    incorrectEmail.style.display="none";
    required.style.display="none";
    email.value = "";
    delete validaciones.incorrectos.Email;
    delete validaciones.correctos.Email;
};

var psw = document.getElementById("password");
var incorrectPsw = document.getElementById("incorrectPassword");

psw.onblur = function () {
    if (psw.value.length == 0) {
        required.style.display="block";
        psw.classList.add("red-border");
        validaciones.incorrectos.Password = "Can't be empty";
    } else if (!containsLetter(psw.value) || !containsNumber(psw.value) || psw.value.length < 8) {
        psw.classList.add("red-border");
        incorrectPsw.style.display="block";
        validaciones.incorrectos.Password = "Must contain letters and numbers and more than 7 characters";
    } else {
        validaciones.correctos.Password = "*".repeat(password.value.length);
    }
};

psw.onfocus = function() {
    psw.classList.remove("red-border");
    incorrectPsw.style.display="none";
    required.style.display="none";
    psw.value = "";
    delete validaciones.incorrectos.Password;
    delete validaciones.correctos.Password;
};

var pswRepeat = document.getElementById("passwordRepeat");
var incorrectPswRepeat = document.getElementById("incorrectRepeatPassword");

pswRepeat.onblur = function () {
    if (pswRepeat.value.length == 0) {
        required.style.display="block";
        pswRepeat.classList.add("red-border");
        validaciones.incorrectos["Password Validation:"] = "Can't be empty";
    } else if (psw.value !== pswRepeat.value){
        psw.classList.add("red-border");
        incorrectPswRepeat.style.display="block";
        validaciones.incorrectos["Password Validation:"] = "Passwords don't match";
    } else if (psw === pswRepeat) {
        validaciones.correctos["Password Validation:"] = pswRepeat.value;
    }
};

pswRepeat.onfocus = function () {
    pswRepeat.classList.remove("red-border");
    incorrectPswRepeat.style.display="none";
    required.style.display="none";
    pswRepeat.value = "";
    delete validaciones.incorrectos["Password Validation:"];
    delete validaciones.correctos["Password Validation:"]
};

var modal = document.getElementById("modalOpacity");
var modalSuccess = document.getElementById("modalSuccess");
var successMsg = document.getElementById("successMsg");
var modalUnsuccess = document.getElementById("modalUnsuccess");
var unsuccessMsg = document.getElementById("unsuccessMsg");

var submitBottom = document.querySelector("#submit-buttom");
submitBottom.onclick = function(e) {
    e.preventDefault();
        if (Object.keys(validaciones.incorrectos).length > 0) {
            alert("The fields are wrong:" + JSON.stringify(validaciones.incorrectos, null, "\n"));
        } else if ((Object.keys(validaciones.correctos) == 0) && (Object.keys(validaciones.incorrectos) == 0)) {
            alert("Complete all fields to send");
        } else {
                var params = new URLSearchParams();
                params.append("name", nameSingUp.value);
                params.append("lastName", surnameSingUp.value);
                params.append("dni", idNumber.value);
                params.append("dob", transformDate(date.value));
                params.append("phone", phone.value);
                params.append("address", adress.value);
                params.append("city", locations.value);
                params.append("zip", postalCode.value);
                params.append("email", email.value);
                params.append("password", psw.value);
                var request = "https://api-rest-server.vercel.app/signup" + "?" + params.toString();

                fetch(request)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    if (data.success) {
                        modal.style.display="block";
                        modalSuccess.style.display="block";
                        successMsg.innerHTML = data.msg;
                        localStorage.setItem("Name", nameSingUp.value);
                        localStorage.setItem("Surname", surnameSingUp.value);
                        localStorage.setItem("Id Number", idNumber.value);
                        localStorage.setItem("Birth Date", date.value);
                        localStorage.setItem("Phone", phone.value);
                        localStorage.setItem("Address", adress.value);
                        localStorage.setItem("City", locations.value);
                        localStorage.setItem("Postal Code", postalCode.value);
                        localStorage.setItem("Email", email.value);
                        localStorage.setItem("Password", password.value);
                } else {
                    var errorMsg = "";
                    for (var i = 0; i < data.errors.length; i++) {
                        errorMsg += data.errors[i].msg + "\n";
                    }
                    modal.style.display="block";
                    modalUnsuccess.style.display="block";
                    unsuccessMsg.innerHTML = errorMsg;
                    }
                })
                .catch(function(error) {
                    modal.style.display="block";
                    modalUnsuccess.style.display="block";
                    unsuccessMsg.innerHTML = error.msg;
                })
            }
};

var modalBottom = document.getElementById("close");
modalBottom.onclick = function() {
  modal.style.display = "none";
  modalSuccess.style.display="none";
  modalUnsuccess.style.display="none";
};

var modalBottom01 = document.getElementById("close01");
modalBottom01.onclick = function() {
  modal.style.display = "none";
  modalSuccess.style.display="none";
  modalUnsuccess.style.display="none";
};

window.onload = function() {
    nameSingUp.value = localStorage.getItem("Name");
    surnameSingUp.value = localStorage.getItem("Surname");
    idNumber.value = localStorage.getItem("Id Number");
    date.value = localStorage.getItem("Birth Date");
    phone.value = localStorage.getItem("Phone");
    adress.value = localStorage.getItem("Address");
    locations.value = localStorage.getItem("City");
    postalCode.value = localStorage.getItem("Postal Code");
    email.value = localStorage.getItem("Email");
    psw.value = localStorage.getItem("Password");
    pswRepeat.value = localStorage.getItem("Password");
};