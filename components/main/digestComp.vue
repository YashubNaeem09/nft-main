<template>
    <div
        class="flex items-center justify-between py-3 bg-themeColor h-auto w-full max-w-screen-8md mx-auto overflow-x-hidden">
        <div class="topCreators grid grid-cols-1 md:grid-cols-4 lg:grid-cols-1 gap-4">
            <div
                class="col-span-12 md:col-span-8 lg:col-span-10 md:flex md:flex-col md:justify-content-center items-center lg:ml-6 ml-4 overflow-y-hidden py-8">

                <div class="row1 flex lg:flex-row flex-col bg-topColor rounded-3xl h-auto w-auto lg:ml-8">
                    <div class="py-4 h-auto w-auto flex lg:flex-row flex-col">
                        <div class="image lg:px-4 lg:py-4 lg:ml-6 ml-3">
                            <img src="images/digest1.PNG" alt="" class="h-80 w-auto rounded-3xl">
                        </div>
                        <div class="content lg:py-4 lg:ml-8 ml-2 text-left text-white left-6 flex flex-col justify-content-left">
                            <h1 class="lg:text-5xl text-4xl font-bold leading-normal lg:col-8 col-7 lg:leading-normal">
                                Join Our Weekly Digest</h1>
                            <h3
                                class="text-1xl lg:text-2xl ml-1 lg:ml-1 font-normal leading-normal col-8 lg:col-8 lg:leading-relaxed py-2">
                                Get Exclusive Promotions & Updates Straight To Your Inbox.
                            </h3>
                            <div class="inputField  text-dark flex lg:flex-row flex-col lg:col-9 col-11">
                                <InputGroup class="rounded-2xl bg-white">
                                    <InputText placeholder="Enter Your Email Here" class="ml-1 rounded-l-3xl focus:outline-none text-black"  style="box-shadow: none; border-color: #ccc;"/>
                                    <InputGroupAddon class="buttonModel cursor-pointer lg:ml-8 text-white lg:px-6 lg:py-3 px-6 py-3">
                                        <span class="pi pi-send mx-2"></span>
                                        Subscribe
                                    </InputGroupAddon>
                                </InputGroup>
                            </div>
                        </div>

                    </div>
                    <!-- <Card
                        class="lg:ml-8 rounded-3xl bg-topColor text-white flex lg:flex-col items-center lg:w-15 lg:h-80 w-15 h-40">
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
                    </Card> -->
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'digestComp'
}
</script>