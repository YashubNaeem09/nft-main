<template>
    <div class="heroContent grid grid-cols-3 gap-4 grid-flow-col flex align-items-center justify-content-between py-1 bg-themeColor h-auto w-full max-w-screen-8md mx-auto overflow-x-hidden">
        <div class="col-9 md:col-4 lg:col-5 ml-8 lg:ml-auto lg:-mt-40">
            <div class="content text-left text-white left-6 flex flex-col justify-content-left">
                <h1 class="text-4xl lg:text-7xl font-bold leading-normal lg:col-8 lg:leading-normal">Discover Digital Art &
                    Collect NFTs</h1>
                <h3
                    class="text-1xl lg:text-2xl -ml-1 lg:ml-1 font-normal leading-normal col-12 lg:col-10 lg:leading-relaxed py-2">
                    NFT Marketplace UI Created With Anima For Figma. Collect, Buy and Sell From More Than 20k NFT Artists.
                </h3>
            </div>
            <!-- <div class="py-2">
                <Button class="purpleButton cursor-pointer text-white lg:ml-2 lg:col-18 m-3">
                    <span class="pi pi-user mx-2"></span>
                    Get Started
            </Button>
            </div> -->
        </div>
        <div class="col-10 md:col-4 lg:col-5 ml-7 -mb-5 lg:ml-auto">
            <div class="card flex align-items-left justify-content-start">
                <Card style="width: 35em;" class="lg:-ml-8 rounded-3xl bg-themeColor text-white lg:h-2/5 md:h-1/2">
                    <template #header>
                        <img alt="user header" src="images/hero1.PNG" class="rounded-t-3xl" />
                    </template>
                    <template #title> Space Walking </template>
                    <template #subtitle>
                        <div class="flex flex-row text-white items-center">
                            <img class="h-8 w-auto rounded-full object-center object-scale-down"
                                src="images/avatarHero1.PNG" alt="" />
                            <span class="text-1xl -py-1 mx-2 font-bold text-white">Animkad</span>
                        </div>
                    </template>
                </Card>
            </div>
        </div>
        <div class="col-12 md:col-3 lg:col-15 lg:-mt-48 lg:ml-28 ml-36">
            <Button class="buttonModel cursor-pointer text-white lg:ml-2 m-3 lg:px-6 lg:py-3 px-8 py-3 -mx-4">
                    <span class="pi pi-user mx-2"></span>
                    Get Started
            </Button>
            <div class="flex flex-row justify-start">
                <div class="ratings flex flex-row mt-3">
                    <div class="240k lg:mx-1 lg:col-6 -ml-8">
                        <h1 class="text-2xl lg:text-2xl font-bold leading-normal lg:leading-none text-white">240k+</h1>
                        <h1 class="text-2xl lg:text-2xl font-light leading-normal lg:leading-none text-white py-2">Total Sale</h1>
                    </div>
                    <div class="240k lg:col-4 lg:mx-3 mx-7">
                        <h1 class="text-2xl lg:text-2xl font-bold leading-normal lg:leading-none text-white">100k+</h1>
                        <h1 class="text-2xl lg:text-2xl font-light leading-normal lg:leading-none text-white py-2">Actions</h1>
                    </div>
                    <div class="240k lg:col-4 lg:mx-5 mx-5">
                        <h1 class="text-2xl lg:text-2xl font-bold leading-normal lg:leading-none text-white">240k+</h1>
                        <h1 class="text-2xl lg:text-2xl font-light leading-normal lg:leading-none text-white py-2">Artists</h1>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
.purpleButton {
    padding: 18px 28px;
    border-radius: 13px;
    background-color: #A259FF;
    line-height: 15pxs;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.buttonModel {
    border-radius: 14px;
    background-color: #A259FF;
    line-height: 15pxs;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>