<template>
<div
        class="flex items-center justify-between py-3 bg-themeColor h-auto w-full max-w-screen-8md mx-auto overflow-x-hidden bg-topColor">
        <div class="footer grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
            <div
                class="col-span-12 md:col-span-8 lg:col-span-10 md:flex md:flex-col md:justify-content-center flex lg:flex-row flex-col items-center lg:ml-8 ml-3 overflow-y-hidden py-3">
                <div class="row1 flex flex-col lg:ml-6 col-span-8 lg:py-0 py-3">
                    <nuxt-link to="/" class="flex flex-row">
                    <span class="text-2xl font-bold text-white">NFT Marketplace</span>
                    </nuxt-link>  

                    <h3 class="text-1xl text-white lg:text-1xl -ml-2 font-light leading-normal col-8 lg:col-8 lg:leading-relaxed py-3">
                        NFT Marketplace UI Created With Anima For Figma.
                    </h3>

                    <h3 class="text-base text-white lg:text-1xl -ml-2 font-light leading-normal col-8 lg:col-8 lg:leading-relaxed">
                        Join our community.
                    </h3>

                    <div class="icons flex flex-row py-1">
                        <span class="pi pi-discord text-3xl text-white"></span>
                        <span class="pi pi-youtube text-3xl text-white mx-2"></span>
                        <span class="pi pi-twitter text-3xl text-white mx-2"></span>
                        <span class="pi pi-instagram text-3xl text-white mx-2"></span>
                    </div>
                </div>
                <div class="row2 flex flex-col lg:col-span-8 lg:py-0 py-3 lg:-ml-0 -ml-56">
                    <nuxt-link to="/" class="flex flex-row lg:ml-0">
                    <span class="text-2xl font-bold text-white">Explore</span>
                    </nuxt-link> 

                    <div class="icons flex flex-col lg:-ml-2 lg:py-4 py-2 -ml-2">
                        <h3 class="text-1xl text-white lg:text-1xl font-light leading-normal col-8 lg:col-8 lg:leading-relaxed">
                        Marketplace.
                        </h3>
                        <h3 class="text-1xl text-white lg:text-1xl font-light leading-normal col-8 lg:col-8 lg:leading-relaxed">
                        Rankings.
                        </h3>
                        <h3 class="text-1xl text-white font-light leading-normal col-12 lg:col-12 lg:leading-relaxed">
                        Connect a Wallet.
                        </h3>
                    </div>
                </div>
                <div class="row3 flex flex-row lg:ml-8 ml-4">
                    <div class="content lg:ml-8 ml-2 text-left text-white right-6 flex flex-col justify-content-end">
                            <h3 class="text-2xl font-bold leading-normal lg:col-8 col-7 lg:leading-relaxed lg:-py-2">
                                Join Our Weekly Digest</h3>
                            <h3
                                class="text-1xl ml-1 lg:ml-1 font-light leading-normal col-8 lg:col-7 lg:leading-relaxed py-3">
                                Get Exclusive Promotions & Updates Straight To Your Inbox.
                            </h3>
                            <div class="inputField text-dark flex lg:flex-row flex-col lg:col-12 col-11 py-3">
                                <InputGroup class="rounded-2xl bg-white col-span-1">
                                    <InputText placeholder="Enter Your Email Here" class="ml-2 rounded-l-3xl focus:outline-none text-black"  style="box-shadow: none; border-color: #ccc;"/>
                                    <InputGroupAddon class="buttonModel cursor-pointer lg:ml-6 text-white lg:px-6 lg:py-3 px-6 py-3">
                                        <span class="pi pi-send mx-2"></span>
                                        Subscribe
                                    </InputGroupAddon>
                                </InputGroup>
                            </div>
                        </div>
                </div>
                <!-- <div class="row4">
                    <hr>
                </div> -->
            </div>
            <hr class="col-span-10 lg:col-span-10 ml-7">
            <div class="col-span-12 md:col-span-8 lg:col-span-10 ml-7 overflow-y-hidden">
                    <h3 class="text-1xl text-white lg:text-1xl font-light leading-normal lg:leading-relaxed">
                        NFT Market. Use this template freely.
                        </h3>
            </div>      
        </div>
</div>
</template>

<script>
export default {
    name: 'footerComp'
}
</script>

<style>

</style>