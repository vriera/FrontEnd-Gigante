import {CampaignApi, Campaign} from "@/api/campaign";
import {CategoriesApi, Category} from "@/api/category";

const CampaignStore = {

    async addCampaign(id_ong, name, description, init_date, end_date, address, city, location, schedule, phone, contact) {
        try{
            const campaign = new Campaign(undefined,id_ong, name, description, init_date, end_date, address, city, location, schedule, phone, contact)
            return await CampaignApi.postCampaign(campaign)
        } catch (error) {
            console.log(error);
        }
    },

    async getCampaigns(id){
        return await CampaignApi.getCampaigns(id);
    },

    //async getMyCampaigns(){
      //  return await CampaignApi.getMyCampaigns();
    //},

    async modifyCampaign(id, name, description, init_date, end_date, address, city, location, schedule, phone, contact){
        const campaign = new Campaign(undefined,undefined, name, description, init_date, end_date, address, city, location, schedule, phone, contact)
        return await CampaignApi.putCampaign(id, campaign);
    },

    async deleteCampaign(id){
        return await CampaignApi.deleteCampaign(id);
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
    }
};

export default CampaignStore;