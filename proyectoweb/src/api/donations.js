import { Api } from './api.js';
export { DonationsApi , Donation };

class Donation {
    constructor( donationId, donatorId , campaignId , categoryId , description , verified){
        if ( donationId === undefined){
            this.id_donation = donationId;
        }
        if(donatorId) {
            this.id_donator = donatorId;
        }
        if(campaignId) {
            this.id_campaign = campaignId;
        }
        if(categoryId) {
            this.id_category = categoryId;
        }
        this.description = description;
        if ( verified === undefined){
            this.verified = false;
        }else{
            this.verified = verified;
        }
    }
}

class DonationsApi{

    static async getAllDonations(controller){
        return await Api.get(`${Api.baseUrl}/donations`, true , controller);
    }

    static async getDonationsByCampaign( id , controller){
        if (Number.isInteger(id)){
            return await Api.get(`${Api.baseUrl}/campaigns/${id}/donations`, true , controller);
        }
    }

    static async getDonationsByCampaignAndCategory(campaignId , categoryId , controller){
        if ( Number.isInteger(campaignId) && Number.isInteger(categoryId)){
            return await Api.get(`${Api.baseUrl}/campaigns/${campaignId}/categories/${categoryId}/donations` , true , controller);
        }
    }

    static async getMyDonations(controller){
        return await Api.get(`${Api.baseUrl}/user/current/donations`, true, controller)
    }

    static async getDonationsByDonator( id , controller){
        if ( Number.isInteger(id)){
            return await Api.get(`${Api.baseUrl}/donators/${id}/donations` , true , controller);
        }
    }

    static async postDonation( donation , controller ){
        if ( donation instanceof Donation){
            return await Api.post(`${Api.baseUrl}/donations` , true , donation , controller );
        }
    }

    static async deleteDonation( id , controller){
        if (Number.isInteger(id)){
            return await Api.delete(`${Api.baseUrl}/donations/${id}`, true , controller);
        }
    }

    static async putDonation( id , description , verified, controller){
        if( Number.isInteger(id)  && typeof verified === 'boolean' ){
            return await Api.put(`${Api.baseUrl}/donations/${id}` , true , { description: description , verified: verified } , controller);
        }
    }

}
