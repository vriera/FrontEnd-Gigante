import {UsersApi, Donator, Ong} from "@/api/users";

const UserStore = {

    async addDonator(email, password, fullname, street, street_number, floor, region, latitude, longitude) {
        try{
            console.log(email)
            const donator = new Donator(undefined, email, password, fullname, street, street_number, floor, region, latitude, longitude);
            console.log(donator)
            return await UsersApi.addDonator(donator);
        } catch (error) {
            console.log(error);
        }
    },

    async addOng(email, password, fullname, rep_name, rep_dni, phone, street, street_number, floor, region, latitude, longitude) {
        try{
            const ong = new Ong(undefined,email, password, fullname, rep_name, rep_dni, phone, street, street_number, floor, region, latitude, longitude)
            return await UsersApi.addOng(ong);
        } catch (error) {
            console.log(error);
        }
    },

    //async login(email, password) {
    //    try{
    //        const credentials = new Ong(email, password)
    //        return await UsersApi.login(credentials)
    //    } catch (error) {
    //        console.log(error);
    //    }
    //},

    //async logoutUser() {
    //    await UsersApi.logout();
    //},

};

export default UserStore;