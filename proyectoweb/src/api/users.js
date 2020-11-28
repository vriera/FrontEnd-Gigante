import { Api } from './api.js';
export {UsersApi, Donator, Ong, Credentials};

class UsersApi {
    static userToken = sessionStorage.getItem('token');

    static get donatorUrl() {
        return `${Api.baseUrl}/donators`;
    }

    static get ongUrl() {
        return `${Api.baseUrl}/ongs`;
    }
    
    static async addDonator(donator, controller) {
        return await Api.post(`${UsersApi.donatorUrl}`, false, donator, controller);
    }

    static async addOng(ong, controller) {
        return await Api.post(`${UsersApi.ongUrl}`, false, ong, controller);
    }

    static async login(credentials, controller) {
        console.log(credentials);
        const result = await Api.post(`${Api.baseUrl}/login`, false, credentials, controller);
        sessionStorage.setItem('token', result.token);
        this.userToken = result.token;
        console.log(result);
        return result;
    }

    //static async logout(controller) {
    //    await Api.post(`${UsersApi.url}/logout`, true, controller);
    //    sessionStorage.removeItem('token');
    //}

}

class Credentials {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

class Ong{

    constructor(id, email, username, password, fullname, rep_name, rep_dni, phone, street, street_number, floor, region, latitude, longitude) {

        if(id){
            this.id = id
        }

        this.email = email;
        this.username = username;
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

    constructor(id, email, username, password, fullname, street, street_number, floor, region, latitude, longitude) {

        if(id){
            this.id = id
        }

        this.email = email;
        this.username = username;
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