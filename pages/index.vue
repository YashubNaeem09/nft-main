<template>

    <topMenu></topMenu>
    <heroComp></heroComp>
    <trendingCollection></trendingCollection>
    <!-- <topCreators></topCreators> -->
    <browseCat></browseCat>
    <!-- <DiscoverMore></DiscoverMore> -->
    <WorkCard></WorkCard>
    <DigestComp></DigestComp>
    <FooterComp></FooterComp>
    <!-- <browseCategories></browseCategories> -->

</template>
<script>
import topMenu from '../components/main/topmenu.vue';
import heroComp from '../components/main/heroComp.vue';
import trendingCollection from '../components/main/trendingCollection.vue';
import topCreators from '../components/main/topCreators.vue'
import browseCategories from '../components/main/browseCategories.vue'
import browseCat from '../components/main/browseCat.vue'
import DiscoverMore from '../components/main/discoverMore.vue';
import WorkCard from '../components/main/workCard.vue';
import DigestComp from '../components/main/digestComp.vue';
import FooterComp from '../components/main/footerComp.vue';
export default {
    components :{ topMenu, heroComp, trendingCollection, topCreators, browseCategories, browseCat, DiscoverMore, WorkCard, DigestComp, FooterComp }
}
</script>
<style>

</style>