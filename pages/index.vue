<template>

    <topMenu></topMenu>
    <heroComp></heroComp>
    <trendingCollection></trendingCollection>
    <topCreators></topCreators>
    <browseCat></browseCat>
    <DiscoverMore></DiscoverMore>
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
export default {
    components :{ topMenu, heroComp, trendingCollection, topCreators, browseCategories, browseCat, DiscoverMore }
}
</script>
<style>

</style>