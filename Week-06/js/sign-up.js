var validaciones = {
    correctos: {},
    incorrectos: {}
}

function containsLetter(value) {
    for (var i = 0; i < value.length; i++) {
      var charCode = value.charCodeAt(i);
      if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        return true;
      }
    }
    return false;
}

function containsNumber(value) {
    for (var i = 0; i < value.length; i++) {
      var charCode = value.charCodeAt(i);
      if (charCode >= 48 && charCode <= 57) {
        return true;
      }
    }
    return false;
}


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
}

function validateAdress(value){
    var space = value.search(" ");
    if (space === -1) {
        return false;
    } else if (space !== -1) {
        var lastChar = value.length -1;
        var fisrtWord = value.substring(0,space);
        var secondWord = value.substring(space+1, lastChar);
        } if (containsSpecialChar(fisrtWord) || containsSpecialChar(secondWord)){
            return false;
        } else {
            return true;
        }
}

var nameSingUp = document.getElementById("name");
var incorrectName = document.getElementById("incorrect-name-singup")
var required = document.getElementById("required")

nameSingUp.onblur = function() {
    var name = nameSingUp.value;
    if (name.length == 0) {
        required.style.display="block";
        nameSingUp.classList.add("red-border")
        validaciones.incorrectos.name = "Name is empty";
    } else if (containsNumber(name) == true || (name.length < 3)) {
        incorrectName.style.display="block";
        nameSingUp.classList.add("red-border");
        validaciones.incorrectos.name = "Name have numbers or is too short";
    } else {
        validaciones.correctos.name= name;
    }
}

nameSingUp.onfocus = function() {
    nameSingUp.classList.remove("red-border");
    incorrectName.style.display="none";
    required.style.display="none";
    nameSingUp.value = "";
    delete validaciones.incorrectos.name;
    delete validaciones.correctos.name;
}

var surnameSingUp = document.getElementById("surname");
var incorrectSurname = document.getElementById("incorrect-surname-singup")

surnameSingUp.onblur = function() {
    var surname = surnameSingUp.value;
    if (surname.length == 0) {
        required.style.display="block";
        surnameSingUp.classList.add("red-border")
        validaciones.incorrectos.surname = "Surname is empty";
    } else if (containsNumber(surname) == true || (surname.length < 3)) {
        incorrectSurname.style.display="block";
        surnameSingUp.classList.add("red-border");
        validaciones.incorrectos.surname = "Surame have numbers or is too short";
    } else {
        validaciones.correctos.surname = surname;
    }
}

surnameSingUp.onfocus = function() {
    surnameSingUp.classList.remove("red-border");
    incorrectSurname.style.display="none";
    required.style.display="none";
    surnameSingUp.value = "";
    delete validaciones.incorrectos.surname;
    delete validaciones.incorrectos.surname;
}


var idNumber = document.getElementById("id-number");
var incorrectIdNumber = document.getElementById("incorrect-idNumber")

idNumber.onblur = function() {
    if (idNumber.value.length == 0) {
        required.style.display="block";
        idNumber.classList.add("red-border")
        validaciones.incorrectos.IdNumber = "Id Number is empty";
    } else if (containsLetter(idNumber.value) == true || idNumber.value.length < 7){
        incorrectIdNumber.style.display="block";
        idNumber.classList.add("red-border")
        validaciones.incorrectos.IdNumber = "Id Number have letters or is too short";
    } else {
        validaciones.correctos.IdNumber = idNumber.value;
    }
}

idNumber.onfocus = function () {
    idNumber.classList.remove("red-border");
    incorrectIdNumber.style.display="none";
    required.style.display="none";
    idNumber.value = "";
    delete validaciones.incorrectos.IdNumber;
    delete validaciones.correctos.IdNumber;
}

var date = document.getElementById("birthdate");
var incorrectbirthdate = document.getElementById("incorrect-birthdate")

date.onblur = function () {
    var validateDate = date.value.split("-", 3);
    if (date.value.length == 0) {
        required.style.display="block";
        date.classList.add("red-border")
        validaciones.incorrectos["Birthdate"] = "Birthdate is empty";
    } else if (validateDate[0] > 2023){
        incorrectbirthdate.style.display="block";
        validaciones.incorrectos["Birthdate"] = "Invalid year";
    } else {
        validateDate.reverse()
        var dateString = validateDate[0] +"/"+validateDate[1] +"/"+validateDate[2];
        validaciones.correctos["Birthdate"] = dateString;
    }
}

date.onfocus = function () {
    required.style.display="none";
    incorrectbirthdate.style.display="none";
    date.classList.remove("red-border");
    date.value = "";
    delete validaciones.incorrectos["Birthdate"];
    delete validaciones.correctos["Birthdate"];
}

var phone = document.getElementById("phone");
var incorrectPhone = document.getElementById("incorrect-phone")

phone.onblur = function() {
    if (phone.value.length == 0) {
        required.style.display="block";
        phone.classList.add("red-border");
        validaciones.incorrectos.Phone = "Phone is empty";
    } else if (containsLetter(phone.value) == true || phone.value.length < 10){
        incorrectPhone.style.display="block";
        phone.classList.add("red-border")
        validaciones.incorrectos.Phone = "Phone can't contain letter or is too short";
    } else {
        validaciones.correctos.Phone = phone.value;
    }
}

phone.onfocus = function () {
    phone.classList.remove("red-border");
    incorrectPhone.style.display="none";
    required.style.display="none";
    phone.value = "";
    delete validaciones.incorrectos.Phone;
    delete validaciones.correctos.Phone
}

var adress = document.getElementById("adress");
var incorrectAdress = document.getElementById("incorrect-adress");

adress.onblur = function () {
    if (adress.value.length == 0) {
        required.style.display="block";
        adress.classList.add("red-border");
        validaciones.incorrectos.Adress = "Adress is empty";
    } else if (validateAdress(adress.value) == false || (adress.value.length <= 5)) {
        incorrectAdress.style.display="block";
        adress.classList.add("red-border");
        validaciones.incorrectos.Adress = "Adress is empty";
    } else {
        validaciones.correctos.Adress = adress.value;
    }
}

adress.onfocus = function () {
    adress.classList.remove("red-border");
    incorrectAdress.style.display="none";
    required.style.display="none";
    adress.value = "";
    delete validaciones.incorrectos.Adress;
    delete validaciones.correctos.Adress;
}



var locacion = document.getElementById("locacion");
var incorrectLocacion = document.getElementById("incorrect-locacion");

locacion.onblur = function () {
    if (locacion.value.length == 0) {
        required.style.display="block";
        locacion.classList.add("red-border")
        validaciones.incorrectos.Location = "Location is empty";
    } else if (containsSpecialChar(locacion.value) == true || (locacion.value.length < 3)) {
        incorrectLocacion.style.display="block";
        locacion.classList.add("red-border");
        validaciones.incorrectos.Location = "Can't contain special characters or is too short";
    } else {
        validaciones.correctos.Location = locacion.value;
    }
}

locacion.onfocus = function () {
    locacion.classList.remove("red-border");
    incorrectLocacion.style.display="none";
    required.style.display="none";
    locacion.value = "";
    delete validaciones.incorrectos.Location;
    delete validaciones.correctos.Location
}

var postalCode = document.getElementById("postal-code");
var incorrectPostalCode = document.getElementById("incorrect-postalCode");

postalCode.onblur = function () {
    if (postalCode.value.length == 0) {
        required.style.display="block";
        postalCode.classList.add("red-border");
        validaciones.incorrectos["Postal Code:"] = "Postal Code is empty";
    } else if (containsLetter(postalCode.value) == true ||
    (postalCode.value.length <=3 || postalCode.value.length >=6)) {
        incorrectPostalCode.style.display="block";
        postalCode.classList.add("red-border");
        validaciones.incorrectos["Postal Code:"] = "Can't contain letters and between 4-5 characters";
    } else {
        validaciones.correctos["Postal Code:"] = postalCode.value;
    }
}

postalCode.onfocus = function () {
    postalCode.classList.remove("red-border");
    incorrectPostalCode.style.display="none";
    required.style.display="none";
    postalCode.value = "";
    delete validaciones.incorrectos["Postal Code:"];
    delete validaciones.correctos["Postal Code:"];
}

var email = document.getElementById("email");
var errorEmail = document.getElementById("incorrect-email");
var validEmail =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

email.onblur = function() {
    if (email.value == ""){
        required.style.display="block";
        email.classList.add("red-border");
        validaciones.incorrectos.Email = ": Email is empty";
    } else if (!validEmail.test(email.value)){
        email.classList.add("red-border");
        errorEmail.style.display="block";
        validaciones.incorrectos.Email = "Invalid format email";
    }else {
        validaciones.correctos.Email = email.value;
    }
}

email.onfocus = function() {
    email.classList.remove("red-border");
    errorEmail.style.display="none";
    required.style.display="none";
    email.value = "";
    delete validaciones.incorrectos.Email;
    delete validaciones.correctos.Email;
}

var psw = document.getElementById("password");
var incorrectPsw = document.getElementById("incorrect-password");

psw.onblur = function () {
    if (psw.value.length == 0) {
        required.style.display="block";
        psw.classList.add("red-border");
        validaciones.incorrectos.Password = "Password is empty";
    } else if (!containsLetter(psw.value) || !containsNumber(psw.value) || psw.value.length < 8) {
        psw.classList.add("red-border");
        incorrectPsw.style.display="block";
        validaciones.incorrectos.Password = "Must contain letters and numbers";
    } else {
        validaciones.correctos.Password = psw.value;
    }
}

psw.onfocus = function() {
    psw.classList.remove("red-border");
    incorrectPsw.style.display="none";
    required.style.display="none";
    psw.value = "";
    delete validaciones.incorrectos.Password;
    delete validaciones.correctos.Password;
}

var pswRepeat = document.getElementById("password-repeat");
var incorrectPswRepeat = document.getElementById("incorrect-repeatPassword");

pswRepeat.onblur = function () {
    if (pswRepeat.value.length == 0) {
        required.style.display="block";
        pswRepeat.classList.add("red-border");
        validaciones.incorrectos["Password Validation:"] = "Password Validation is empty";
    } else if (psw.value !== pswRepeat.value){
        psw.classList.add("red-border");
        incorrectPswRepeat.style.display="block";
        validaciones.incorrectos["Password Validation:"] = "Passwords don't match";
    } else if (psw === pswRepeat) {
        validaciones.correctos["Password Validation:"] = pswRepeat.value;
    }
}

pswRepeat.onfocus = function () {
    pswRepeat.classList.remove("red-border");
    incorrectPswRepeat.style.display="none";
    required.style.display="none";
    pswRepeat.value = "";
    delete validaciones.incorrectos["Password Validation:"];
    delete validaciones.correctos["Password Validation:"]
}

var submitBottom = document.querySelector("#submit-buttom");
submitBottom.onclick = function(e) {
    e.preventDefault();
        if (Object.keys(validaciones.incorrectos).length > 0) {
            alert("The fields are wrong:\n" + JSON.stringify(validaciones.incorrectos));
        } else if (Object.keys(validaciones.correctos) == 0) {
            alert("Complete all fields to send");
        } else {
            alert("The data entered are:\n" + JSON.stringify(validaciones.correctos));
        }
}