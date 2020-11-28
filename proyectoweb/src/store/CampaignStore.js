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

    async getCampaigns(){
        return await CampaignApi.getCampaigns();
    },

    async modifyCampaign(id,id_ong, name, description, init_date, end_date, address, city, location, schedule, phone, contact){
        const campaign = new Campaign(id,id_ong, name, description, init_date, end_date, address, city, location, schedule, phone, contact)
        return await CampaignApi.putCampaign(campaign);
    },

    async deleteCampaign(id){
        return await CampaignApi.deleteCampaign(id);
    },

    async getCategories(){
        return await CategoriesApi.getCategories();
    },

    async addCategories(description){
        const category = new Category(undefined, description)
        return await CategoriesApi.postCategory(category)
    },

    async modifyCategories(id, description){
        const category = new Category(undefined, description)
        return await CategoriesApi.putCategory(category)
    },

    async deleteCategories(id){
        return await CategoriesApi.deleteCategory(id)
    }
};

export default CampaignStore;