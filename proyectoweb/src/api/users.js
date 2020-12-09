import { Api } from './api.js';
export {UsersApi, Donator, Ong, Credentials};

class UsersApi {
    static userToken = sessionStorage.getItem('token');
    static userId = sessionStorage.getItem('userId');
    static userCategory = sessionStorage.getItem('category');

    static getCurrentToken(){
        return this.userToken;
    }

    static getCurrentId(){
        return this.userId;
    }

    static getCurrentCategory(){
        return this.userCategory;
    }

    static isOng(){
        return this.userCategory === 'ong';
    }

    static get donatorUrl() {
        return `${Api.baseUrl}/donators`;
    }

    static get ongUrl() {
        return `${Api.baseUrl}/ongs`;
    }

    static get userUrl(){
        return `${Api.baseUrl}/user/current`;
    }
    
    static async addDonator(donator, controller) {
        return await Api.post(`${UsersApi.donatorUrl}`, false, donator, controller);
    }

    static async addOng(ong, controller) {
        return await Api.post(`${UsersApi.ongUrl}`, false, ong, controller);
    }

    static async putCurrentUser(user, controller){
        if(this.userCategory === 'ong'){
            return await Api.put(`${UsersApi.userUrl}/ongs`, true, user, controller);
        }
        return await Api.put(`${UsersApi.userUrl}/donators`, true, user, controller);
    }

    static async login(credentials, controller) {
        console.log(credentials);
        const result = await Api.post(`${Api.baseUrl}/login`, false, credentials, controller);
        sessionStorage.setItem('token', result.token);
        sessionStorage.setItem('category', result.category);
        sessionStorage.setItem('userId', result.userId);
        this.userId = result.userId;
        this.userCategory = result.category
        Api.token = result.token;
        this.userToken = result.token;
        console.log(result);
        return result;
    }

    static async getCurrentUser(controller){
        if(this.userCategory === 'ong'){
            return await Api.get(`${UsersApi.userUrl}/ongs`, true, controller);
        }
        return await Api.get(`${UsersApi.userUrl}/donators`, true, controller);
    }

    //static async logout(controller) {
    //    await Api.post(`${UsersApi.url}/logout`, true, controller);
    //    sessionStorage.removeItem('token');
    //}

    static async getOngs(id, controller){
        if(id === undefined) {
            return await Api.get(`${UsersApi.ongUrl}`, true, controller);
        }
        return await Api.get(`${UsersApi.ongUrl}/${id}`, true, controller)
    }


    static async getDonators(id, controller){
        if(id === undefined) {
            return await Api.get(`${UsersApi.donatorUrl}`, true, controller);
        }
        return await Api.get(`${UsersApi.donatorUrl}/${id}`, true, controller);
    }

    static async logout(controller){
        const result = await Api.post(`${Api.baseUrl}/logout`, true, {}, controller)
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('category');
        this.userToken = null;
        this.userCategory = null;
        this.userId = null;
        return result;

    }


}

class Credentials {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

class Ong{

    constructor(id, email, username, password, fullname, rep_name, rep_dni, phone, street, street_number, floor, region, latitude, longitude) {

        if (id) {
            this.id = id
        }

        if (email) {
            this.email = email;
        }
        if(username) {
            this.username = username;
        }
        if(password) {
            this.password = password;
        }
        this.fullname = fullname;
        this.rep_name = rep_name;
        this.rep_dni = rep_dni;
        this.phone = phone;
        this.street = street;
        this.street_number = street_number;
        // if( floor !== undefined && floor !== ' '){
            this.floor = floor;
        // }
        // else {
        //     this.floor = '-';
        // }
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

        if(email) {
            this.email = email;
        }
        if(username) {
            this.username = username;
        }
        if(password) {
            this.password = password;
        }
        this.fullname = fullname;
        this.street = street;
        this.street_number = street_number;
        // console.log('Floor = '+floor);
        // if( floor !== undefined && floor !== ''){
            this.floor = floor;
        //     console.log('No es undefined');
        // }
        // else {
        //     this.floor = '-';
        //     console.log('Es undefined');
        // }
        this.region = region;
        this.latitude = latitude;
        this.longitude = longitude;

    }

}