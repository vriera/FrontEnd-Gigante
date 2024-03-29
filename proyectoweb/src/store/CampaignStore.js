import {CampaignApi, Campaign, CampaignCategory} from "@/api/campaign";
import {CategoriesApi, Category} from "@/api/category";
import {Donation, DonationsApi} from "@/api/donations";

const CampaignStore = {

    async addCampaign(id_ong, name, description, init_date, end_date, street,street_number, city, location, schedule, phone, contact , active) {
        try{
            const campaign = new Campaign(undefined,id_ong, name, description, init_date, end_date, street,street_number, city, location, schedule, phone, contact, active)
            return await CampaignApi.postCampaign(campaign)
        } catch (error) {
            console.log(error);
        }
    },

    async getCampaigns(id){
        return await CampaignApi.getCampaigns(id);
    },

    async getActiveCampaigns(id){
        const answer = await this.getCampaigns(id);
        let jsonToReturn = { };
        jsonToReturn.results = answer.results.filter(campaign => campaign.active === true);
        return jsonToReturn;
    },

    async getMyCampaigns(){
        return await CampaignApi.getMyCampaigns();
    },

    async getMyDonations(){
        return await DonationsApi.getMyDonations();
    },


    async getCampaignsByOngId(id){
        return await CampaignApi.getActiveCampaignsByOngId(id);
    },

    async modifyMyCampaign(id, name, description, init_date, end_date, street, street_number, city, location, schedule, phone, contact , active){
        const campaign = new Campaign(undefined,undefined, name, description, init_date, end_date, street,street_number, city, location, schedule, phone, contact , active)
        return await CampaignApi.putMyCampaign(id, campaign);
    },

    async modifyCampaign(id, name, description, init_date, end_date, street, street_number, city, location, schedule, phone, contact , active){
        const campaign = new Campaign(undefined,undefined, name, description, init_date, end_date, street,street_number, city, location, schedule, phone, contact , active)
        return await CampaignApi.putCampaign(id, campaign);
    },

    async deleteCampaign(id){
        return await CampaignApi.deleteCampaign(id);
    },

    async getCampaignCategories(id){
        return await CampaignApi.getCampaignCategories(id);
    },

    async addCampaignCategory(campaignId, categoryId){
        const category = new CampaignCategory(undefined, categoryId);
        return await CampaignApi.postCampaignCategory(campaignId, category)
    },
    /*
    async modifyCampaignCategory(campaignId, categoryId, wanted, total){
        const category = new CampaignCategory(undefined, undefined, wanted, total);
        return await CampaignApi.putCampaignCategory(campaignId,categoryId,category);
    },*/

    async deleteCampaignCategory(campaignId, categoryId){
        return await CampaignApi.deleteCampaignCategory(campaignId, categoryId);
    },

    async getCategories(id){
        return await CategoriesApi.getCategories(id);
    },

    async addCategories(description){
        const category = new Category(undefined, description)
        return await CategoriesApi.postCategory(category)
    },

    async modifyCategories(id, description){
        return await CategoriesApi.putCategory(id,description)
    },

    async deleteCategories(id){
        return await CategoriesApi.deleteCategory(id)
    },

    async getDonations(){
        return await DonationsApi.getAllDonations();
    },

    async addDonation(donatorId, campaignId, categoryId, description, verified){
        const donation = new Donation(undefined, donatorId, campaignId, categoryId, description, verified);
        return await DonationsApi.postDonation(donation);
    },

    async modifyDonation(donationId, description, verified){
        return await DonationsApi.putDonation(donationId,description, verified);
    },

    async deleteDonation(donationId){
        return await DonationsApi.deleteDonation(donationId);
    },

    async getDonationByCampaign(campaignId){
        return await DonationsApi.getDonationsByCampaign(campaignId);
    },

    async getDonationByCampaignAndCategory(campaignId, categoryId){
        return await DonationsApi.getDonationsByCampaignAndCategory(campaignId,categoryId);
    },

    async getDonationsByDonator(donatorId){
        return await DonationsApi.getDonationsByDonator(donatorId);
    }
};

export default CampaignStore;