import {UsersApi, Donator, Ong, Credentials} from "@/api/users";

const UserStore = {

    async addDonator(email, username, password, fullname, street, street_number, floor, region, latitude, longitude) {
        try{
            console.log(email)
            const donator = new Donator(undefined, email,username,password, fullname, street, street_number, floor, region, latitude, longitude);
            console.log(donator)
            const result = await UsersApi.addDonator(donator);
            return result.sucess;
        } catch (error) {
            console.log(error);
        }
    },

    async addOng(email,username, password, fullname, rep_name, rep_dni, phone, street, street_number, floor, region, latitude, longitude) {
        try{
            const ong = new Ong(undefined,email,username, password, fullname, rep_name, rep_dni, phone, street, street_number, floor, region, latitude, longitude)
            return await UsersApi.addOng(ong);
        } catch (error) {
            console.log(error);
        }
    },

    async login(username, password) {
        try{
            const credentials = new Credentials(username, password)
            const result = await UsersApi.login(credentials);
            return result.success;
        } catch (error) {
            console.log(error);
        }
    },

    async getCurrentUser(){
        return await UsersApi.getCurrentUser();
    },

    async getOngs(){
        return await UsersApi.getOngs();
    },

    async getDonators(){
        return await UsersApi.getDonators();
    }

    //async logoutUser() {
    //    await UsersApi.logout();
    //},

};

export default UserStore;