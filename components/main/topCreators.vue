<template>
    <div
        class="flex items-center justify-between py-3 bg-themeColor h-auto w-full max-w-screen-8md mx-auto overflow-x-hidden">
        <div class="topCreators grid grid-cols-10 md:grid-cols-4 lg:grid-cols-1 gap-4 ml-7 lg:ml-3">
            <div class="col-span-10 md:col-span-4 lg:col-span-12 flex flex-col">
                <div class="content text-left text-white flex flex-col lg:ml-28">
                    <h1 class="text-4xl lg:text-5xl font-bold leading-normal lg:col-12 lg:leading-normal">Top Creators</h1>
                    <h3
                        class="text-1xl lg:text-2xl ml-1 lg:ml-1 font-normal leading-normal col-14 lg:col-12 lg:leading-relaxed py-2">
                        Checkout Top Rated Creators On The NFT Marketplace.
                    </h3>
                </div>
            </div>
            <div
                class="col-span-10 md:col-span-8 lg:col-span-12 md:flex md:flex-col md:justify-content-between lg:ml-6 ml-3 overflow-y-hidden">
                <div class="row1 flex lg:flex-row flex-col">
                        <Card style="width: 18em; height: 20em;"
                            class="lg:ml-8 rounded-3xl bg-topColor text-white flex flex-col items-center">
                            <template #header>
                                <img alt="user header" src="images/top1.PNG" class="h-auto w-36 rounded-full object-scale-down my-5" />
                            </template>
                            <template #title> <h1 class="ml-5">Keepitreal</h1> </template>
                            <template #subtitle>
                                <div class="flex flex-row items-center">
                                    <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                    <span class="text-2xl mx-2 font-medium text-white">34.53 ETH.</span>
                                </div>
                            </template>
                        </Card>
                        <Card style="width: 18em; height: 20em;"
                            class="lg:ml-4 rounded-3xl bg-topColor text-white flex flex-col items-center justify-center">
                            <template #header>
                                <img alt="user header" src="images/top2.PNG" class="h-auto w-36 rounded-full object-scale-down my-5" />
                            </template>
                            <template #title> <h1 class="ml-5">Keepitreal</h1> </template>
                            <template #subtitle>
                                <div class="flex flex-row items-center">
                                    <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                    <span class="text-2xl mx-2 font-medium text-white">34.53 ETH.</span>
                                </div>
                            </template>
                        </Card>
                        <Card style="width: 18em; height: 20em;"
                            class="lg:ml-4 rounded-3xl bg-topColor text-white flex flex-col items-center">
                            <template #header>
                                <img alt="user header" src="images/top1.2.PNG" class="h-auto w-36 rounded-full object-scale-down my-5" />
                            </template>
                            <template #title> <h1 class="ml-5">Keepitreal</h1> </template>
                            <template #subtitle>
                                <div class="flex flex-row items-center">
                                    <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                    <span class="text-2xl mx-2 font-medium text-white">34.53 ETH.</span>
                                </div>
                            </template>
                        </Card>
                        <Card style="width: 18em; height: 20em;"
                            class="lg:ml-4 rounded-3xl bg-topColor text-white flex flex-col items-center">
                            <template #header>
                                <img alt="user header" src="images/top1.4.PNG" class="h-auto w-36 rounded-full object-scale-down my-5" />
                            </template>
                            <template #title> <h1 class="ml-5">Keepitreal</h1> </template>
                            <template #subtitle>
                                <div class="flex flex-row items-center">
                                    <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                    <span class="text-2xl mx-2 font-medium text-white">34.53 ETH.</span>
                                </div>
                            </template>
                        </Card>
                        <!-- <Card style="width: 15em; height: 20em;"
                            class="lg:ml-8 rounded-3xl bg-topColor text-white flex flex-col items-center">
                            <template #header>
                                <img alt="user header" src="images/top1.PNG" class="h-28 w-28 rounded-full object-scale-down my-5" />
                            </template>
                            <template #title> <h1 class="ml-5">Keepitreal</h1> </template>
                            <template #subtitle>
                                <div class="flex flex-row items-center">
                                    <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                    <span class="text-2xl -py-1 mx-2 font-medium text-white">34.53 ETH.</span>
                                </div>
                            </template>
                        </Card> -->

                   
                </div>
                <div class="row2 flex lg:flex-row flex-col py-4">
                        <Card style="width: 18em; height: 20em;"
                            class="lg:ml-8 rounded-3xl bg-topColor text-white flex flex-col items-center">
                            <template #header>
                                <img alt="user header" src="images/top2.1.PNG" class="h-auto w-36 rounded-full object-scale-down my-5" />
                            </template>
                            <template #title> <h1 class="ml-5">Keepitreal</h1> </template>
                            <template #subtitle>
                                <div class="flex flex-row items-center">
                                    <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                    <span class="text-2xl mx-2 font-medium text-white">34.53 ETH.</span>
                                </div>
                            </template>
                        </Card>
                        <Card style="width: 18em; height: 20em;"
                            class="lg:ml-4 rounded-3xl bg-topColor text-white flex flex-col items-center">
                            <template #header>
                                <img alt="user header" src="images/top2.2.PNG" class="h-auto w-36 rounded-full object-scale-down my-5" />
                            </template>
                            <template #title> <h1 class="ml-5">Keepitreal</h1> </template>
                            <template #subtitle>
                                <div class="flex flex-row items-center">
                                    <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                    <span class="text-2xl mx-2 font-medium text-white">34.53 ETH.</span>
                                </div>
                            </template>
                        </Card>
                        <Card style="width: 18em; height: 20em;"
                            class="lg:ml-4 rounded-3xl bg-topColor text-white flex flex-col items-center">
                            <template #header>
                                <img alt="user header" src="images/top2.3.PNG" class="h-auto w-36 rounded-full object-scale-down my-5" />
                            </template>
                            <template #title> <h1 class="ml-5">Keepitreal</h1> </template>
                            <template #subtitle>
                                <div class="flex flex-row items-center">
                                    <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                    <span class="text-2xl mx-2 font-medium text-white">34.53 ETH.</span>
                                </div>
                            </template>
                        </Card>
                        <Card style="width: 18em; height: 20em;"
                            class="lg:ml-4 rounded-3xl bg-topColor text-white flex flex-col items-center">
                            <template #header>
                                <img alt="user header" src="images/top2.4.PNG" class="h-auto w-36 rounded-full object-scale-down my-5" />
                            </template>
                            <template #title> <h1 class="ml-5">Keepitreal</h1> </template>
                            <template #subtitle>
                                <div class="flex flex-row items-center">
                                    <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                    <span class="text-2xl mx-2 font-medium text-white">34.53 ETH.</span>
                                </div>
                            </template>
                        </Card>
                </div>
                <div class="row3 flex lg:flex-row flex-col py-2">
                        <Card style="width: 18em; height: 20em;"
                            class="lg:ml-8 rounded-3xl bg-topColor text-white flex flex-col items-center">
                            <template #header>
                                <img alt="user header" src="images/top3.1.PNG" class="h-auto w-36 rounded-full object-scale-down my-5" />
                            </template>
                            <template #title> <h1 class="ml-5">Keepitreal</h1> </template>
                            <template #subtitle>
                                <div class="flex flex-row items-center">
                                    <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                    <span class="text-2xl mx-2 font-medium text-white">34.53 ETH.</span>
                                </div>
                            </template>
                        </Card>
                        <Card style="width: 18em; height: 20em;"
                            class="lg:ml-4 rounded-3xl bg-topColor text-white flex flex-col items-center">
                            <template #header>
                                <img alt="user header" src="images/top3.2.PNG" class="h-auto w-36 rounded-full object-scale-down my-5" />
                            </template>
                            <template #title> <h1 class="ml-5">Keepitreal</h1> </template>
                            <template #subtitle>
                                <div class="flex flex-row items-center">
                                    <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                    <span class="text-2xl mx-2 font-medium text-white">34.53 ETH.</span>
                                </div>
                            </template>
                        </Card>
                        <Card style="width: 18em; height: 20em;"
                            class="lg:ml-4 rounded-3xl bg-topColor text-white flex flex-col items-center">
                            <template #header>
                                <img alt="user header" src="images/top3.3.PNG" class="h-auto w-36 rounded-full object-scale-down my-5" />
                            </template>
                            <template #title> <h1 class="ml-5">Keepitreal</h1> </template>
                            <template #subtitle>
                                <div class="flex flex-row items-center">
                                    <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                    <span class="text-2xl mx-2 font-medium text-white">34.53 ETH.</span>
                                </div>
                            </template>
                        </Card>
                        <Card style="width: 18em; height: 20em;"
                            class="lg:ml-4 rounded-3xl bg-topColor text-white flex flex-col items-center">
                            <template #header>
                                <img alt="user header" src="images/top3.4.PNG" class="h-auto w-36 rounded-full object-scale-down my-5" />
                            </template>
                            <template #title> <h1 class="ml-5">Keepitreal</h1> </template>
                            <template #subtitle>
                                <div class="flex flex-row items-center">
                                    <h3 class="text-grey-900 text-1xl">Total Sales</h3>
                                    <span class="text-2xl mx-2 font-medium text-white">34.53 ETH.</span>
                                </div>
                            </template>
                        </Card>
                </div>
            </div>
        </div>

    </div>
</template>
<script>

</script>