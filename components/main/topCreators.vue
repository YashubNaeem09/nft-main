<template>
    <div
        class="flex items-center justify-between py-3 bg-themeColor h-auto w-full max-w-screen-8md mx-auto overflow-x-hidden">
        <div class="topCreators grid grid-cols-10 md:grid-cols-4 lg:grid-cols-1 gap-4 ml-7 lg:ml-3">
            <div class="col-span-10 md:col-span-4 lg:col-span-12 flex flex-row">
                <div class="content text-left text-white flex flex-col lg:ml-28">
                    <h1 class="text-4xl lg:text-5xl font-bold leading-normal lg:col-12 lg:leading-normal">Top Creators</h1>
                    <h3
                        class="text-1xl lg:text-2xl lg:ml-1 font-normal leading-normal md:col-10 lg:col-12 lg:leading-relaxed py-2">
                        Checkout Top Rated Creators On The NFT Marketplace.
                    </h3>
                </div>
                <div
                    class="buttonModal col-start-1 col-end-7 flex md:flex-row items-center justify-center lg:justify-end flex-grow lg:mx-3 lg:py-0 py-3">
                    <Button class="rankingButton cursor-pointer text-white lg:px-6 lg:py-3 md:px-4 md:py-3 hidden md:block">
                        <span class="pi pi-arrow-up-right mx-2"></span>
                        View Rankings
                    </Button>
                </div>

                <!-- <div class="buttonModal col-start-1 col-end-7 flex lg:flex-row items-center justify-center lg:justify-end flex-grow lg:mx-3 lg:py-0 py-3">
                <Button class="rankingButton cursor-pointer text-white lg:px-6 lg:py-3 px-8 py-3 sm:hidden">
                    <span class="pi pi-arrow-up-right mx-2"></span>
                    View Rankings
                </Button>
            </div> -->
            </div>
            <div
                class="col-span-10 md:col-span-8 lg:col-span-14 md:flex md:flex-col md:justify-content-center md:items-center lg:ml-6 -ml-6 lg:mr-0 mr-3 overflow-y-hidden">

                <div class="row1 flex lg:flex-row flex-col lg:ml-5">
                    <Card
                        class="lg:ml-8 rounded-3xl bg-topColor text-white flex lg:flex-col items-center lg:w-15 lg:h-80 w-22 h-40">
                        <template #header>
                            <img alt="user header" src="images/top1.PNG"
                                class="h-auto w-36 rounded-full object-scale-down my-5" />
                        </template>
                        <template #title>
                            <h1 class="flex items-center justify-content-center lg:pt-0 pt-4">Keepitreal</h1>
                        </template>
                        <template #subtitle>
                            <div class="flex flex-row items-center">
                                <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                <span class="lg:text-2xl text-1xl mx-2 font-medium text-white">34.53 ETH.</span>
                            </div>
                        </template>
                    </Card>
                    <Card
                        class="lg:ml-4 rounded-3xl bg-topColor text-white flex lg:flex-col items-center justify-center lg:w-15 lg:h-80 w-22 h-40 lg:my-0 my-3">
                        <template #header>
                            <img alt="user header" src="images/top2.PNG"
                                class="h-auto w-36 rounded-full object-scale-down my-5" />
                        </template>
                        <template #title>
                            <h1 class="flex items-center justify-content-center lg:pt-0 pt-4">DigiLab</h1>
                        </template>
                        <template #subtitle>
                            <div class="flex flex-row items-center">
                                <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                <span class="lg:text-2xl text-1xl mx-2 font-medium text-white">34.53 ETH.</span>
                            </div>
                        </template>
                    </Card>
                    <Card
                        class="lg:ml-4 rounded-3xl bg-topColor text-white flex lg:flex-col items-center lg:w-15 lg:h-80 w-22 h-40 lg:my-0 my-3">
                        <template #header>
                            <img alt="user header" src="images/top1.2.PNG"
                                class="h-auto w-36 rounded-full object-scale-down my-5" />
                        </template>
                        <template #title>
                            <h1 class="flex items-center justify-content-center lg:pt-0 pt-4">GravityOne</h1>
                        </template>
                        <template #subtitle>
                            <div class="flex flex-row items-center">
                                <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                <span class="lg:text-2xl text-1xl mx-2 font-medium text-white">34.53 ETH.</span>
                            </div>
                        </template>
                    </Card>
                    <Card
                        class="lg:ml-4 rounded-3xl bg-topColor text-white flex lg:flex-col items-center lg:w-15 lg:h-80 w-22 h-40 lg:my-0 my-3">
                        <template #header>
                            <img alt="user header" src="images/top1.4.PNG"
                                class="h-auto w-36 rounded-full object-scale-down my-5" />
                        </template>
                        <template #title>
                            <h1 class="flex items-center justify-content-center lg:pt-0 pt-4">Juanie</h1>
                        </template>
                        <template #subtitle>
                            <div class="flex flex-row items-center">
                                <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                <span class="lg:text-2xl text-1xl mx-2 font-medium text-white">34.53 ETH.</span>
                            </div>
                        </template>
                    </Card>
                </div>
                <div class="row2 flex lg:flex-row flex-col lg:py-4 py-0 lg:ml-5 hidden">
                    <Card
                        class="lg:ml-8 rounded-3xl bg-topColor text-white flex lg:flex-col items-center lg:w-15 lg:h-80 w-22 h-40 lg:my-0 my-3">
                        <template #header>
                            <img alt="user header" src="images/top2.1.PNG"
                                class="h-auto w-36 rounded-full object-scale-down my-5" />
                        </template>
                        <template #title>
                            <h1 class="flex items-center justify-content-center">BlueWhale</h1>
                        </template>
                        <template #subtitle>
                            <div class="flex flex-row items-center lg:pt-0 pt-4">
                                <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                <span class="lg:text-2xl text-1xl mx-2 font-medium text-white">34.53 ETH.</span>
                            </div>
                        </template>
                    </Card>
                    <Card
                        class="lg:ml-4 rounded-3xl bg-topColor text-white flex lg:flex-col items-center lg:w-15 lg:h-80 w-22 h-40 lg:my-0 my-3 hidden">
                        <template #header>
                            <img alt="user header" src="images/top2.2.PNG"
                                class="h-auto w-36 rounded-full object-scale-down my-5" />
                        </template>
                        <template #title>
                            <h1 class="flex items-center justify-content-center lg:pt-0 pt-4">Mr Fox</h1>
                        </template>
                        <template #subtitle>
                            <div class="flex flex-row items-center">
                                <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                <span class="lg:text-2xl text-1xl mx-2 font-medium text-white">34.53 ETH.</span>
                            </div>
                        </template>
                    </Card>
                    <Card
                        class="lg:ml-4 rounded-3xl bg-topColor text-white flex lg:flex-col items-center hidden lg:w-15 lg:h-80 w-22 h-40 lg:my-0 my-3">
                        <template #header>
                            <img alt="user header" src="images/top2.3.PNG"
                                class="h-auto w-36 rounded-full object-scale-down my-5" />
                        </template>
                        <template #title>
                            <h1 class="flex items-center justify-content-center lg:pt-0 pt-4">Shroomie</h1>
                        </template>
                        <template #subtitle>
                            <div class="flex flex-row items-center">
                                <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                <span class="lg:text-2xl text-1xl mx-2 font-medium text-white">34.53 ETH.</span>
                            </div>
                        </template>
                    </Card>
                    <Card
                        class="lg:ml-4 rounded-3xl bg-topColor text-white flex lg:flex-col items-center lg:w-15 lg:h-80 w-22 h-40 lg:my-0 my-3 hidden">
                        <template #header>
                            <img alt="user header" src="images/top2.4.PNG"
                                class="h-auto w-36 rounded-full object-scale-down my-5" />
                        </template>
                        <template #title>
                            <h1 class="flex items-center justify-content-center lg:pt-0 pt-4">Robotica</h1>
                        </template>
                        <template #subtitle>
                            <div class="flex flex-row items-center">
                                <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                <span class="lg:text-2xl text-1xl mx-2 font-medium text-white">34.53 ETH.</span>
                            </div>
                        </template>
                    </Card>
                </div>
                <div class="row3 flex lg:flex-row flex-col py-0 lg:ml-5 hidden">
                    <Card
                        class="lg:ml-8 rounded-3xl bg-topColor text-white flex lg:flex-col items-center lg:w-15 lg:h-80 w-22 h-40 lg:my-0 my-3">
                        <template #header>
                            <img alt="user header" src="images/top3.1.PNG"
                                class="h-auto w-36 rounded-full object-scale-down my-5" />
                        </template>
                        <template #title>
                            <h1 class="flex items-center justify-content-center lg:pt-0 pt-4">RustyRobot</h1>
                        </template>
                        <template #subtitle>
                            <div class="flex flex-row items-center">
                                <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                <span class="lg:text-2xl text-1xl mx-2 font-medium text-white">34.53 ETH.</span>
                            </div>
                        </template>
                    </Card>
                    <Card
                        class="lg:ml-4 rounded-3xl bg-topColor text-white flex lg:flex-col items-center lg:w-15 lg:h-80 w-22 h-40 lg:my-0 my-3">
                        <template #header>
                            <img alt="user header" src="images/top3.2.PNG"
                                class="h-auto w-36 rounded-full object-scale-down my-5" />
                        </template>
                        <template #title>
                            <h1 class="flex items-center justify-content-center lg:pt-0 pt-4">Animkad</h1>
                        </template>
                        <template #subtitle>
                            <div class="flex flex-row items-center">
                                <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                <span class="lg:text-2xl text-1xl mx-2 font-medium text-white">34.53 ETH.</span>
                            </div>
                        </template>
                    </Card>
                    <Card
                        class="lg:ml-4 rounded-3xl bg-topColor text-white flex lg:flex-col items-center lg:w-15 lg:h-80 w-22 h-40 lg:my-0 my-3">
                        <template #header>
                            <img alt="user header" src="images/top3.3.PNG"
                                class="h-auto w-36 rounded-full object-scale-down my-5" />
                        </template>
                        <template #title>
                            <h1 class="flex items-center justify-content-center lg:pt-0 pt-4">Dotgu</h1>
                        </template>
                        <template #subtitle>
                            <div class="flex flex-row items-center">
                                <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                <span class="lg:text-2xl text-1xl mx-2 font-medium text-white">34.53 ETH.</span>
                            </div>
                        </template>
                    </Card>
                    <Card
                        class="lg:ml-4 rounded-3xl bg-topColor text-white flex lg:flex-col items-center lg:w-15 lg:h-80 w-22 h-40 lg:my-0 my-3">
                        <template #header>
                            <img alt="user header" src="images/top3.4.PNG"
                                class="h-auto w-36 rounded-full object-scale-down my-5" />
                        </template>
                        <template #title>
                            <h1 class="flex items-center justify-content-center lg:pt-0 pt-4">Ghiblier</h1>
                        </template>
                        <template #subtitle>
                            <div class="flex flex-row items-center">
                                <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                <span class="lg:text-2xl text-1xl mx-2 font-medium text-white">34.53 ETH.</span>
                            </div>
                        </template>
                    </Card>
                </div>

            </div>
            <!-- <div class="col-span-10 flex-col justify-content-between lg:ml-6 ml-3 overflow-y-hidden lg:hidden">
            <div class="row1 flex lg:flex-row flex-col">
                    <Card style="width: 23em; height: 10em;"
                        class="lg:ml-8 rounded-3xl bg-topColor text-white flex flex-row items-center">
                        <template #header>
                            <img alt="user header" src="images/top1.PNG"
                                class="h-auto w-36 rounded-full object-scale-down" />
                        </template>
                        <template #title>
                            <h1 class="inline-flex items-center justify-content-center pt-4">Keepitreal</h1>
                        </template>
                        <template #subtitle>
                            <div class="flex flex-row items-center">
                                <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                <span class="text-1xl mx-2 font-medium text-white">34.53 ETH.</span>
                            </div>
                        </template>
                    </Card>
                </div>
                <div class="row2 flex lg:flex-row flex-col py-4">
                    <Card 
                        class=" rounded-3xl bg-topColor text-white flex flex-row items-center w-22 h-40">
                        <template #header>
                            <img alt="user header" src="images/top2.1.PNG"
                                class="h-auto w-36 rounded-full object-scale-down" />
                        </template>
                        <template #title>
                            <h1 class="inline-flex items-center justify-content-center pt-4">BlueWhale</h1>
                        </template>
                        <template #subtitle>
                            <div class="flex flex-row items-center">
                                <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                <span class="text-1xl mx-2 font-medium text-white">34.53 ETH.</span>
                            </div>
                        </template>
                    </Card>
                </div>
        </div> -->
        </div>

    </div>
</template>
<script>

</script>
<style>
.rankingButton {
    border: 3px solid #A259FF;
    border-radius: 25px;
    background-color: transparent;
}
</style>