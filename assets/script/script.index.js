class User {
    constructor(name, telephone, phone, photo, birthdate, email, cep, city, insta, git) {
        this.name = name;
        this.telephone = telephone;
        this.phone = phone;
        this.photo = photo;
        this.birthdate = birthdate;
        this.age = getAge(birthdate);
        this.sign = getSign(birthdate);
        this.email = email;
        this.cep = cep;
        this.city = city;
        this.insta = insta;
        this.git = git;
    }

    getAge(birth) {
        let today = new Date();
        let birthdate = new Date(birth);
        let age = today.getFullYear() - birthdate.getFullYear();
        let month = today.getMonth() - birthdate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        return age;
    }

    getSign(birth) {
        let birthdate = new Date(birth);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;
        console.log("Passou pelo getSigno() da class User");

        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }
}

class ListUser {
    constructor() {
        this.list = [];
    }

    addUser(user) {
        this.list.push(user);
    }
}

const userList = new ListUser();

function catchValues() {
    let name = document.getElementById("name").value;
    let telephone = document.getElementById("telephone").value;
    let phone = document.getElementById("phone").value;
    let photo = document.getElementById("photo").value;
    let birthdate = document.getElementById("birthdate").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let city = document.getElementById("city").value;
    let insta = document.getElementById("insta").value;
    let github = document.getElementById("github").value;

    const user = new User(name, telephone, phone, photo, birthdate, email, cep, city, insta, github);

    userList.addUser(user);
}

function isAnyInputEmpty() {
    if (document.getElementById("name").value == "" || document.getElementById("telephone").value == "" || document.getElementById("phone").value == "" || document.getElementById("photo").value == "" || document.getElementById("birthdate").value == "" || document.getElementById("email").value == "" || document.getElementById("cep").value == "" || document.getElementById("city").value == "" || document.getElementById("insta").value == "" || document.getElementById("github").value == "") {
        return true;
    } else {
        return false;
    }
}

function envieMsg(msg, tipoMsg) {

    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = '';

    let msgParaTela = `
        <p class='${tipoMsg}'>${msg}</p>
    `

    msgDiv.innerHTML = msgParaTela;


    setTimeout(function () {
        msgDiv.innerHTML = '';
    }, 3000)
}

function isURLValida(url) {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}

function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("telephone").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("photo").value = "";
    document.getElementById("birthdate").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("city").value = "";
    document.getElementById("insta").value = "";
    document.getElementById("github").value = "";
}

function formatedCellphone(cellphone) {

    let cellphoneArray = cellphone.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}

function dateinPTBR(date) {

    let dateArray = date.split("-");
    let datePTBR = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
    return datePTBR;
}

function formatedCEP(value) {
    let cep = String(value).split("");
    let formated_cep = cep[0] + cep[1] + cep[2] + cep[3] + cep[4] + "-" + cep[5] + cep[6] + cep[7];

    return formated_cep;
}

