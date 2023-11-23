<template>
    <div
        class="flex items-center justify-between py-5 bg-themeColor h-auto w-full max-w-screen-8md mx-auto overflow-x-hidden">
        <div class="topCreators grid grid-cols-10 md:grid-cols-4 lg:grid-cols-1 gap-4 ml-7 lg:ml-3">
            <div class="col-span-10 md:col-span-14 lg:col-span-12 flex lg:flex-row flex-col">
                <div class="content text-left text-white flex flex-col lg:ml-28">
                    <h1 class="text-4xl lg:text-5xl font-bold leading-normal lg:col-12 lg:leading-normal">How It Works</h1>
                    <h3
                        class="text-1xl lg:text-2xl ml-1 lg:ml-1 font-normal leading-normal col-14 lg:col-12 lg:leading-relaxed py-2">
                        Find Out How To Get Started.
                    </h3>
                </div>
            </div>
            <div
                class="col-span-12 md:col-span-8 lg:col-span-12 md:flex md:flex-col md:justify-content-center items-center lg:ml-6 -ml-6 lg:mr-0 mr-3 overflow-y-hidden">

                <div class="row1 flex lg:flex-row flex-col lg:ml-5">
                    <Card
                        class="lg:ml-8 rounded-3xl bg-topColor text-white flex lg:flex-col items-center lg:w-80 lg:h-auto w-15 h-44">
                        <template #header>
                            <img alt="user header" src="images/work1.PNG"
                                class="ml-4 h-48 w-auto rounded-full object-scale-down my-4" />
                        </template>
                        <template #title>
                            <h1 class="flex lg:items-center lg:justify-content-center lg:pt-0 pt-6 lg:ml-0 ml-5">Setup Your Wallet</h1>
                        </template>
                        <template #subtitle>
                            <div class="flex lg:items-center lg:justify-content-center justify-content-left col-10 ml-4">
                                <span class="lg:text-1xl text-1xl font-light text-white lg:text-center text-left">Set up your wallet of choice. Connect it
                                to the Animarket by clicking the wallet icon in the top right corner.
                            </span>
                            </div>
                        </template>
                    </Card>
                    <Card
                        class="lg:ml-6 rounded-3xl bg-topColor text-white flex lg:flex-col items-center lg:w-80 lg:h-auto w-15 h-44 lg:my-0 my-3">
                        <template #header>
                            <img alt="user header" src="images/work2.PNG"
                                class="ml-4 h-48 w-auto rounded-full object-scale-down my-4" />
                        </template>
                        <template #title>
                            <h1 class="flex lg:items-center lg:justify-content-center lg:pt-0 pt-6 lg:ml-0 ml-5">Create Collection</h1>
                        </template>
                        <template #subtitle>
                            <div class="flex lg:items-center lg:justify-content-center justify-content-left col-10 ml-4">
                                <span class="lg:text-1xl text-1xl font-light text-white lg:text-center text-left">Upload your work and set up your collection.
                                    Add a description, social links and floor price.
                            </span>
                            </div>
                        </template>
                    </Card>
                    <Card
                        class="lg:ml-6 rounded-3xl bg-topColor text-white flex lg:flex-col items-center lg:w-80 lg:h-auto w-15 h-44 lg:my-0">
                        <template #header>
                            <img alt="user header" src="images/work3.PNG"
                                class="ml-4 h-48 w-auto rounded-full object-scale-down my-4" />
                        </template>
                        <template #title>
                            <h1 class="flex lg:items-center lg:justify-content-center lg:pt-0 pt-6 lg:ml-0 ml-5">Start Earning</h1>
                        </template>
                        <template #subtitle>
                            <div class="flex lg:items-center lg:justify-content-center justify-content-left col-10  ml-4">
                                <span class="lg:text-1xl text-1xl font-light text-white lg:text-center text-left">Choose between auctions and fixed-price listings.
                                    Start earning by selling your NFTs or trading others.
                            </span>
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
    name: 'workCard'
}
</script>
<style>
.rankingButton {
    border: 3px solid #A259FF;
    border-radius: 25px;
    background-color: transparent;
}
</style>