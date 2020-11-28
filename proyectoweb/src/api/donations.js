import { Api } from './api.js';
export { DonationsApi , Donation };

class Donation {
    constructor( donatorId , campaignId , categoryId , cant , isVerified , donationId ){
        if ( donatorId === undefined){
            this.id_donation = donationId;
        }
        this.id_donator = donatorId;
        this.id_campaign = campaignId;
        this.id_category =  categoryId;
        this.cant = cant;
        if ( isVerified === undefined){
            this.isVerified = false;
        }else{
            this.isVerified = isVerified;
        }
    }
}

class DonationsApi{

    static async getAllDonations(controller){
        return await Api.get(`${Api.baseUrl}/donations`, true , controller);
    }

    static async getDonationsByCampaing( id , controller){
        if (Number.isInteger(id)){
            return await Api.get(`${Api.baseUrl}/campaigns/${id}/donations`, true , controller);
        }
    }

    static async getDonationsByCampaingAndCategory(campaignId , categoryId , controller){
        if ( Number.isInteger(campaignId) && Number.isInteger(categoryId)){
            return await Api.get(`${Api.baseUrl}/campaigns/${campaignId}/categories/${categoryId}/donations` , true , controller);
        }
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

    static async putDonation( id , cant , verified, controller){
        if( Number.isInteger(id)  && Number.isInteger(cant) && typeof verified === 'boolean' ){
            return await Api.put(`${Api.baseUrl}/donations/${id}` , true , { cant: cant , isVerified: verified } , controller);
        }
    }

}
