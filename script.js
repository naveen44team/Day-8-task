class movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getmovie() {
        return `the movie ${this.rating}`
    }
}

let movieinfo = new movie("Master", "sunpictures", "4.9/5");
console.log(movieinfo.rating);










class person {
    constructor(firstname, lastname, age, education, city, gender) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.education = education;
        this.city = city;
        this.gender = gender;

    }

    getdetails() {
        return `the person detail is ${this.city}`
    }


}

var persondetails = new person("Gokul", "Pradap", 25, "B.E", "Watrap", "Male");
console.log(persondetails);
console.log(persondetails.age);







// // write a class to calculate uber price.

class uber {
    constructor(travel1, travel2) {
        this.travel1 = travel1;
        this.travel2 = travel2;
    }
    WtpToMdu(priceamount) { 
        return "WtpToMdu ₹" + priceamount * 18
    }

    WtpToSri(priceamount) {
        return "WtpToSri₹" + priceamount * 10
    }

}

var uberprice = new uber("WtpToMdu ₹18", "WtpToSri  per km ₹10");
console.log(uberprice);

console.log(uberprice.WtpToMdu(5));
console.log(uberprice.WtpToSri(5));