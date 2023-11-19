<template>
    <div
        class="flex items-center justify-between py-8 bg-themeColor h-auto w-full max-w-screen-8md mx-auto overflow-x-hidden">
        <div class="topCreators grid grid-cols-10 md:grid-cols-4 lg:grid-cols-1 gap-4 ml-7 lg:ml-3">
            <div class="col-span-10 md:col-span-14 lg:col-span-12 flex lg:flex-row flex-col">
                <div class="content text-left text-white flex flex-col lg:ml-28">
                    <h1 class="text-4xl lg:text-5xl font-bold leading-normal lg:col-12 lg:leading-normal">Browse Categories
                    </h1>
                </div>
            </div>
            <div
                class="col-span-12 md:col-span-8 lg:col-span-12 md:flex md:flex-col md:justify-content-center items-center lg:ml-0 -ml-3 overflow-y-hidden">

                <div class="headRow1 flex lg:flex-row flex-col">
                    <div class="row1 flex flex-row lg:flex-col lg:ml-8 flex-wrap">
                        <Card class="rounded-3xl bg-topColor text-white flex flex-col lg:w-15 lg:h-80 w-5 h-64">
                            <template #header>
                                <img alt="user header" src="images/browse1.PNG"
                                    class="h-full w-full rounded-t-3xl object-scale-down" />
                            </template>
                            <template #title>
                                <h1 class="text-left lg:text-start lg:pt-4">Art</h1>
                            </template>
                        </Card>
                        <Card
                            class="rounded-3xl bg-topColor text-white flex flex-col lg:w-15 lg:h-80 w-5 h-64 lg:mx-4 mx-3">
                            <template #header>
                                <img alt="user header" src="images/browse2.PNG"
                                    class="h-full w-full rounded-t-3xl object-scale-down my-0" />
                            </template>
                            <template #title>
                                <h1 class="text-left lg:text-start lg:pt-4">Collectibles</h1>
                            </template>
                        </Card>
                    </div>
                    <div class="row2 flex lg:flex-col flex-row flex-wrap lg:-ml-5">
                        <Card
                            class="rounded-3xl bg-topColor text-white flex flex-col lg:w-15 lg:h-80 w-5 h-64 lg:my-0 my-3">
                            <template #header>
                                <img alt="user header" src="images/browse3.PNG"
                                    class="h-full w-full rounded-t-3xl object-scale-down my-0" />
                            </template>
                            <template #title>
                                <h1 class="lg:text-start lg:pt-4">Music</h1>
                            </template>
                        </Card>
                        <Card
                            class="rounded-3xl bg-topColor text-white flex flex-col lg:w-15 lg:h-80 w-5 h-64 lg:my-0 my-3 mx-3">
                            <template #header>
                                <img alt="user header" src="images/browse4.PNG"
                                    class="h-full w-full rounded-t-3xl object-scale-down my-0" />
                            </template>
                            <template #title>
                                <h1 class="text-left lg:text-start lg:pt-4 pt-0">Photography</h1>
                            </template>
                        </Card>
                    </div>
                </div>
                <div class="subRow2 flex lg:flex-row flex-col">
                    <div class="row3 flex flex-row lg:flex-col lg:ml-6 lg:py-4 py-0 flex-wrap">
                        <Card
                            class="rounded-3xl bg-topColor text-white flex flex-col lg:w-15 lg:h-80 w-5 h-64 lg:my-0 my-3 lg:mx-3">
                            <template #header>
                                <img alt="user header" src="images/browse5.PNG"
                                    class="h-full w-full rounded-t-3xl object-scale-down my-0" />
                            </template>
                            <template #title>
                                <h1 class="flex lg:text-start lg:pt-4 text-left">Video</h1>
                            </template>
                        </Card>
                        <Card
                            class="rounded-3xl bg-topColor text-white flex flex-col lg:w-15 lg:h-80 w-5 h-64 lg:my-0 my-3 lg:mx-0 mx-3">
                            <template #header>
                                <img alt="user header" src="images/browse6.PNG"
                                    class="h-full w-full rounded-t-3xl object-scale-down my-0" />
                            </template>
                            <template #title>
                                <h1 class="flex lg:text-start lg:pt-4">Utility</h1>
                            </template>
                        </Card>
                    </div>
                    <div class="row4 flex flex-row lg:py-4 py-0 flex-wrap lg:-ml-6">
                        <Card
                            class="rounded-3xl bg-topColor text-white flex flex-col lg:w-15 lg:h-80 w-5 h-64 lg:my-0 my-3">
                            <template #header>
                                <img alt="user header" src="images/browse7.PNG"
                                    class="h-full w-full rounded-t-3xl object-scale-down my-0" />
                            </template>
                            <template #title>
                                <h1 class="flex lg:text-start lg:pt-4">Sports</h1>
                            </template>
                        </Card>
                    <Card class="rounded-3xl bg-topColor text-white flex flex-col lg:my-0 my-3 lg:mx-3 mx-3 lg:w-15 lg:h-80 w-5 h-64">
                        <template #header>
                            <img alt="user header" src="images/browse8.PNG" class="h-full w-full rounded-t-3xl object-cover my-0" />
                        </template>
                        <template #title>
                            <h1 class="flex lg:text-start lg:pt-4 pt-0">Virtual Worlds</h1>
                        </template>
                    </Card>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style></style>