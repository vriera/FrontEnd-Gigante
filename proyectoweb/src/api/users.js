export {UsersApi, Donator, Ong};

class UsersApi {
    
    addDonator(){

    }

    addOng(){

    }

}

class Ong{

    constructor(id, email, password, fullname, rep_name, rep_dni, phone, street, street_number, floor, region, latitude, longitude) {

        if(id){
            this.id = id
        }

        this.email = email;
        this.password = password;
        this.fullname = fullname;
        this.rep_name = rep_name;
        this.rep_dni = rep_dni;
        this.phone = phone;
        this.street = street;
        this.street_number = street_number;
        this.floor = floor;
        this.region = region;
        this.latitude = latitude;
        this.longitude = longitude;

    }

}

class Donator{

    constructor(id, email, password, fullname, street, street_number, floor, region, latitude, longitude) {

        if(id){
            this.id = id
        }

        this.email = email;
        this.password = password;
        this.fullname = fullname;
        this.street = street;
        this.street_number = street_number;
        this.floor = floor;
        this.region = region;
        this.latitude = latitude;
        this.longitude = longitude;

    }

}