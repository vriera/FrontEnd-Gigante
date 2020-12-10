<template>
    <v-card color="blue" class="white--text mb-5" width="600px">
        <v-card-title>{{ camp_name }}</v-card-title>
        <v-card-subtitle class="white--text">{{ ong_name }}</v-card-subtitle>
        <v-divider class="mx-4" color="white"/>
        <v-card-text class="text-justify white--text">Categoría: {{cat_name}}<br/>Descripción: {{ desc }}</v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-chip dark :color="status ? 'green':'red'" class="mr-2 mb-2">{{ status ? "Aporte verificado":"Sin verificar" }}</v-chip>
        </v-card-actions>
    </v-card>
</template>

<script>
import CampaignStore from "@/store/CampaignStore";
import UserStore from "@/store/UserStore";

export default {
    props: ['camp_id', 'cat_id', 'desc', 'status'],
    data() {
        return {
            cat_name: '',
            camp_name: '',
            ong_name: '',
            loaded: false
        }
    },
    async created() {
        try {
            const ans = await CampaignStore.getCampaigns(this.camp_id);
            this.camp_name = ans.name;
            const ong = await UserStore.getOngs(ans.id_ong);
            this.ong_name = ong.fullname;
            const ans2 = await CampaignStore.getCategories(this.cat_id);
            this.cat_name = ans2.description;
        } catch(e) {
            console.log("ERROR AL CARGAR DATOS DEL APORTE");
        }
    }
}
</script>

<style>
    
</style>