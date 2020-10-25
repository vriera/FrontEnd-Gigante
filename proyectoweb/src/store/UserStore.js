import {UsersApi, Donator, Ong} from "@/api/users";

const UserStore = {

    //Async y await?
    async addDonator(email, password, fullname, street, street_number, floor, region, latitude, longitude) {
        try{
            const donator = new Donator(undefined,email, password, fullname, street, street_number, floor, region, latitude, longitude);
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

};

export default UserStore;