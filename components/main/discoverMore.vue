<template>
    <div
        class="flex items-center justify-between py-3 bg-themeColor h-auto w-full max-w-screen-8md overflow-x-hidden">
        <div class="topCreators grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 ml-7 lg:ml-3">
            <div class="col-span-12 md:col-span-14 lg:col-span-12 flex lg:flex-row flex-col">
                <div class="content text-left text-white flex flex-col lg:ml-8">
                    <h1 class="text-4xl lg:text-5xl font-bold leading-normal lg:col-12 lg:leading-normal">Discover More NFTs</h1>
                    <h3
                        class="text-1xl lg:text-2xl ml-1 lg:ml-1 font-normal leading-normal col-14 lg:col-12 lg:leading-relaxed py-2">
                        Explore new trending NFTs
                    </h3> 
                </div>
                <div class="buttonModal flex flex-row justify-end items-end lg:py-3 py-3 lg:ml-auto md:hidden ml-auto">
                <Button class="rankingButton cursor-pointer text-white lg:px-6 lg:py-3 px-8 py-3 mr-5">
                    <span class="pi pi-arrow-up-right mx-2"></span>
                    See all
                </Button>
            </div>
            </div>
            <div
                class="col-span-12 md:col-span-10 lg:col-span-12 md:flex md:flex-row items-center justify-center lg:ml-8 sm:ml-8 md:ml-8 ml-auto overflow-y-hidden overflow-x-hidden">

                <div class="row1 flex lg:flex-row md:flex-row flex-col">
                    <Card
                        class="lg:ml-8 ml-auto rounded-3xl bg-topColor text-white flex flex-col lg:w-80 lg:h-auto sm:w-64 sm:h-auto w-64 h-auto">
                        <template #header>
                            <img alt="user header" src="images/discover1.PNG"
                                class="h-auto w-auto rounded-t-3xl object-scale-down" />
                        </template>
                        <template #title>
                            <h1 class="flex text-left items-start lg:pt-0">Distant Galaxy</h1>
                        </template>
                        <template #subtitle>
                            <div class="flex flex-row items-center">
                                <img alt="user header" src="images/avatarHero1.PNG"
                                class="h-8 w-auto rounded-full object-center object-scale-down" />
                                <span class="lg:text-1xl text-1xl mx-2 font-medium text-white">MoonDancer</span>
                            </div>
                            <div class="flex flex-row mt-5">
                                <div class="flex flex-col">
                                    <h3 class="lg:text-1xl font-medium text-grey">Price</h3>
                                    <h2 class="lg:text-2xl font-light text-white mt-1">1.63 ETH.</h2>
                                </div>
                                <div class="lg:ml-40 flex flex-col ml-7">
                                    <h3 class="lg:text-1xl font-medium text-grey">Highest Bid</h3>
                                    <h2 class="lg:text-2xl font-light text-white mt-1">0.33 wETH.</h2>
                                </div>

                            </div>
                        </template>
                    </Card>
                    <Card
                        class="lg:ml-4 ml-5 lg:my-0 my-3 rounded-3xl bg-topColor text-white flex flex-col lg:w-80 lg:h-auto sm:w-64 sm:h-auto w-64 h-auto">
                        <template #header>
                            <img alt="user header" src="images/discover2.PNG"
                                class="h-auto w-auto rounded-t-3xl object-scale-down" />
                        </template>
                        <template #title>
                            <h1 class="flex text-left items-start lg:pt-0">Life of Edena</h1>
                        </template>
                        <template #subtitle>
                            <div class="flex flex-row items-center">
                                <img alt="user header" src="images/avatarHero1.PNG"
                                class="h-8 w-auto rounded-full object-center object-scale-down" />
                                <span class="lg:text-1xl text-1xl mx-2 font-medium text-white">NebulaKid</span>
                            </div>
                            <div class="flex flex-row mt-5">
                                <div class="flex flex-col">
                                    <h3 class="lg:text-1xl font-medium text-grey">Price</h3>
                                    <h2 class="lg:text-2xl font-light text-white mt-1">1.63 ETH.</h2>
                                </div>
                                <div class="flex flex-col lg:ml-40 ml-7">
                                    <h3 class="lg:text-1xl font-medium text-grey">Highest Bid</h3>
                                    <h2 class="lg:text-2xl font-light text-white mt-1">0.33 wETH.</h2>
                                </div>

                            </div>
                        </template>
                    </Card>
                    <Card
                        class="lg:ml-4 ml-5 lg:my-0 my-2 rounded-3xl bg-topColor text-white flex flex-col lg:w-80 lg:h-auto w-64 h-auto hidden md:block">
                        <template #header>
                            <img alt="user header" src="images/discover3.PNG"
                                class="h-auto w-auto rounded-t-3xl object-scale-down" />
                        </template>
                        <template #title>
                            <h1 class="flex text-left items-start lg:pt-0">AstroFiction</h1>
                        </template>
                        <template #subtitle>
                            <div class="flex flex-row items-center">
                                <img alt="user header" src="images/avatarHero1.PNG"
                                class="h-8 w-auto rounded-full object-center object-scale-down" />
                                <span class="lg:text-1xl text-1xl mx-2 font-medium text-white">Spaceone</span>
                            </div>
                            <div class="flex flex-row mt-5">
                                <div class="flex flex-col">
                                    <h3 class="lg:text-1xl font-medium text-grey">Price</h3>
                                    <h2 class="lg:text-2xl font-light text-white mt-1">1.63 ETH.</h2>
                                </div>
                                <div class="flex flex-col lg:ml-40 ml-7">
                                    <h3 class="lg:text-1xl font-medium text-grey">Highest Bid</h3>
                                    <h2 class="lg:text-2xl font-light text-white mt-1">0.33 wETH.</h2>
                                </div>

                            </div>
                        </template>
                    </Card>
                </div>

        </div>
    </div>

</div>
</template>
<script>
export default {
    name: 'discoverMore'
}
</script>
<style>
.rankingButton{
    border: 3px solid #A259FF;
    border-radius: 25px;
    background-color: transparent;
}
</style>