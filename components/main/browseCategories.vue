<template>
    <div
        class="flex items-center justify-between py-8 bg-themeColor h-auto w-full max-w-screen-8md mx-auto overflow-x-hidden">
        <div class="topCreators grid grid-cols-10 md:grid-cols-4 lg:grid-cols-1 gap-4 ml-7 lg:ml-3">
            <div class="col-span-10 md:col-span-14 lg:col-span-12 flex lg:flex-row flex-col">
                <div class="content text-left text-white flex flex-col lg:ml-28">
                    <h1 class="text-4xl lg:text-5xl font-bold leading-normal lg:col-12 lg:leading-normal">Browse Categories</h1>
                </div>
            </div>
            <div
                class="col-span-10 md:col-span-8 lg:col-span-14 md:flex md:flex-col md:justify-content-center items-center lg:ml-8 ml-3 overflow-y-hidden">

                <div class="row1 flex lg:flex-row flex-col lg:ml-5">
                    <Card
                        class="lg:ml-8 rounded-3xl bg-topColor text-white flex lg:flex-col items-center lg:w-15 lg:h-80 w-22 h-40">
                        <template #header>
                            <img alt="user header" src="images/browse1.PNG"
                                class="h-38 w-auto rounded-t-3xl object-scale-down" />
                        </template>
                        <template #title>
                            <h1 class="flex items-center justify-content-center">Keepitreal</h1>
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
                <div class="row2 flex lg:flex-row flex-col lg:py-4 py-0 lg:ml-5">
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
        </div>
        </div>
    </div>
</template>
<script>

</script>
<style>

</style>