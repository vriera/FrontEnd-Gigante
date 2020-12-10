import { Api } from './api.js';
export {AdvertisementsApi, Advertisement}

class AdvertisementsApi{
    static get url() {
        return `${Api.baseUrl}/advertisements`;
    }

    static async getAdvertisements(id, controller){
        if(id === undefined) {
            return await Api.get(AdvertisementsApi.url, true, controller);
        }
        return await Api.get(`${AdvertisementsApi.url}/${id}`, true, controller)
    }

    static async getMyAdvertisements(controller){
        return await Api.get(`${Api.baseUrl}/user/current/advertisements`, true, controller)
    }

    static async postAdvertisement( advertisement , controller ){
        if ( typeof advertisement.title === 'string' || advertisement.title instanceof String || typeof advertisement.body === 'string' || advertisement.body instanceof String ){
            return await Api.post(AdvertisementsApi.url , true ,  advertisement, controller);
        }
    }

    static async putAdvertisement(id,advertisement, controller ){
        if ( Number.isInteger(id)){
            return await Api.put( `${AdvertisementsApi.url}/${id}` , true , advertisement , controller );
        }
    }

    static async deleteAdvertisement( id, controller ){
        if ( Number.isInteger(id) ){
            return await Api.delete( `${AdvertisementsApi.url}/${id}` , true , controller)
        }
    }
}

class Advertisement{
    constructor(id_advertisement, id_ong, title, body, image_url ){
        if(id_advertisement){
            this.id_advertisement = id_advertisement;
        }
        if(id_ong) {
            this.id_ong = id_ong;
        }
        this.title = title;
        this.body = body;
        this.image_url = image_url;
    }
}