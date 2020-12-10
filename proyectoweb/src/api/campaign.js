import { Api } from './api.js';
export {CampaignApi, Campaign, CampaignCategory};

class CampaignApi {

    static get url() {
        return `${Api.baseUrl}/campaigns`;
    }

    static get categoryUrl(){
        return 'categories'
    }

    static async postCampaign(campaign, controller) {
        return await Api.post(`${CampaignApi.url}`, true, campaign, controller);
    }

    static async getCampaigns(id, controller) {
        if(id === undefined) {
            return await Api.get(`${CampaignApi.url}`, true, controller);
        }
        return await Api.get(`${CampaignApi.url}/${id}`, true, controller);
    }

    static async getMyCampaigns(controller){
        return await Api.get(`${Api.baseUrl}/user/current/campaigns`, true, controller)
    }

    static async getActiveCampaignsByOngId(id, controller){
        return await Api.get(`${Api.baseUrl}/ongs/${id}/campaigns`, true, controller);
    }

    static async putCampaign(id, campaign, controller){
        return await Api.put(`${CampaignApi.url}/${id}`,true, campaign, true, controller)
    }

    static async putMyCampaign(id, campaign, controller){
        return await Api.put(`${Api.baseUrl}/user/current/campaigns/${id}`,true, campaign, true, controller)
    }

    static async deleteCampaign(id, controller){
        return await Api.delete(`${CampaignApi.url}/${id}`, true, controller)
    }

    static async getCampaignCategories(id, controller){
        return await Api.get(`${CampaignApi.url}/${id}/${CampaignApi.categoryUrl}`, true, controller);
    }

    static async postCampaignCategory(id, category, controller){
        return await Api.post(`${CampaignApi.url}/${id}/${CampaignApi.categoryUrl}`, true, category, controller);
    }

    //static async putCampaignCategory(campaignId,categoryId,category, controller){
        //return await Api.put(`${CampaignApi.url}/${campaignId}/${CampaignApi.categoryUrl}/${categoryId}`, true, category, controller);
    //}

    static async deleteCampaignCategory(campaignId, categoryId, controller){
        return await Api.delete(`${CampaignApi.url}/${campaignId}/${CampaignApi.categoryUrl}/${categoryId}`, true, controller);
    }
}

class Campaign{
    constructor(id_campaign, id_ong, name, description, init_date, end_date, street,street_number, city, location, schedule, phone, contact, active) {

        if(id_campaign){
            this.id_campaign = id_campaign
        }

        if(id_ong) {
            this.id_ong = id_ong;
        }
        this.name = name;
        this.description = description;
        this.init_date = init_date;
        this.end_date = end_date;
        this.street = street;
        this.street_number = street_number;
        this.city = city;
        this.location = location;
        this.schedule = schedule;
        this.phone = phone;
        this.contact = contact;
        this.active = active;
    }
}

class CampaignCategory{
    constructor(id_campaign, id_category) {
        if(id_campaign){
            this.id_campaign = id_campaign;
        }
        if(id_category){
            this.id_category = id_category;
        }
    }
}
