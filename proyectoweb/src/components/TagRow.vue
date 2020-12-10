<template>
    <div>
        <v-chip v-for="tag in campaignCategories" :key="tag.id_category" class="mr-2">{{ tag.description }}</v-chip>
    </div>
</template>

<script>
import CampaignStore from "@/store/CampaignStore";

export default {
    props: ['id_campaign'],
    data() {
        return {
            campaignCategories: [],
        }
    },
    async created() {
        const ans = await CampaignStore.getCampaignCategories(this.id_campaign);
        for(let i=0; i<ans.results.length; i++) {
            let cat = await CampaignStore.getCategories(ans.results[i].id_category);
            this.campaignCategories.push(cat);
        }
      this.$forceUpdate();

    }
}
</script>

<style>

</style>