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

    async getOngs(id){
        return await UsersApi.getOngs(id);
    },

    async getDonators(id){
        return await UsersApi.getDonators(id);
    },

    async modifyCurrentUser(fullname,street, street_number, floor, region, latitude, longitude, rep_name, rep_dni, phone){
        let user;
        if(UsersApi.userCategory === 'ong'){
             user = new Ong(undefined, undefined, undefined, undefined, fullname, rep_name, rep_dni, phone, street, street_number, floor, region, latitude, longitude);
        }
        else{
            user = new Donator(undefined, undefined, undefined, undefined, fullname, street, street_number, floor, region, latitude, longitude);
        }
        return await UsersApi.putCurrentUser(user);
    },

    async logout(){
      return await UsersApi.logout();
    }

    //async logoutUser() {
    //    await UsersApi.logout();
    //},

};

export default UserStore;