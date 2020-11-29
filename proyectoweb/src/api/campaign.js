import { Api } from './api.js';
export {CampaignApi, Campaign};

class CampaignApi {

    static get url() {
        return `${Api.baseUrl}/campaigns`;
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

    //static async getMyCampaigns(controller){
      //  return await Api.get(`${Api.baseUrl}/user/current/campaigns`, true, controller)
    //}

    static async putCampaign(id, campaign, controller){
        return await Api.put(`${CampaignApi.url}/${id}`,true, campaign, true, controller)
    }

    static async deleteCampaign(id, controller){
        return await Api.delete(`${CampaignApi.url}/${id}`, true, controller)
    }

}





class Campaign{
    constructor(id_campaign, id_ong, name, description, init_date, end_date, address, city, location, schedule, phone, contact) {

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
        this.address = address;
        this.city = city;
        this.location = location;
        this.schedule = schedule;
        this.phone = phone;
        this.contact = contact;

    }
}
