<template>

    <topMenu></topMenu>
    <heroComp></heroComp>
    <trendingCollection></trendingCollection>
    <topCreators></topCreators>
    <browseCategories></browseCategories>

</template>
<script>
import topMenu from '../components/main/topmenu.vue';
import heroComp from '../components/main/heroComp.vue';
import trendingCollection from '../components/main/trendingCollection.vue';
import topCreators from '../components/main/topCreators.vue'
import browseCategories from '../components/main/browseCategories.vue'
export default {
    components :{topMenu, heroComp, trendingCollection, topCreators, browseCategories}
}
</script>
<style>

</style>