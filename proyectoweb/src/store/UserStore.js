import {UsersApi, Donator, Ong, Credentials} from "@/api/users";
import {AdvertisementsApi, Advertisement} from "@/api/advertisements";

const UserStore = {

    getCurrentToken(){
        return UsersApi.getCurrentToken();
    },

    getCurrentId() {
        return UsersApi.getCurrentId();
    },

    getCurrentCategory() {
        return UsersApi.getCurrentCategory();
    },

    async addDonator(email, username, password, fullname, street, street_number, floor, region, latitude, longitude) {
        try{
            const donator = new Donator(undefined, email,username,password, fullname, street, street_number, floor, region, latitude, longitude);
            const result = await UsersApi.addDonator(donator);
            return result.success;
        } catch (error) {
            console.log(error);
        }
    },

    async addOng(email,username, password, fullname, rep_name, rep_dni, phone, street, street_number, floor, region, latitude, longitude) {
        try{
            const ong = new Ong(undefined,email,username, password, fullname, rep_name, rep_dni, phone, street, street_number, floor, region, latitude, longitude);
            const result = await UsersApi.addOng(ong);
            return result.success;
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
    },

    async getAdvertisements(id){
        return await AdvertisementsApi.getAdvertisements(id);
    },

    async addAdvertisement(ongId, title, body){
        const advertisement = new Advertisement(undefined,ongId, title, body);
        return await AdvertisementsApi.postAdvertisement(advertisement);
    },

    async modifyAdvertisement(advertisementId, title, body){
        const advertisement = new Advertisement(undefined, undefined, title, body)
        return await AdvertisementsApi.putAdvertisement(advertisementId, advertisement);
    },

    async deleteAdvertisement(advertisementId){
        return await AdvertisementsApi.deleteAdvertisement(advertisementId);
    },


    //async logoutUser() {
    //    await UsersApi.logout();
    //},

};

export default UserStore;