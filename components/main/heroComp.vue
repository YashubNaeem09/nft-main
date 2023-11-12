<template>
    <div class="heroContent grid flex gap-6 align-items-center justify-content-center py-8 bg-themeColor h-full w-full">
        <div class="col-10 md:col-4 lg:col-5">
        <div class="content text-left text-white left-0 flex flex-col justify-content-left">
            <h1 class="text-4xl lg:text-6xl font-bold leading-normal lg:leading-relaxed">Discover Digital Art & Collect NFTs</h1>
            <h3 class="text-1xl lg:text-2xl mx-1 font-thin leading-normal lg:leading-relaxed py-2">NFT Marketplace UI Created With Anima For Figma. Collect, Buy and Sell From More Than 20k NFT Artists.</h3>

        </div>
    </div>
    <div class="col-10 md:col-4 lg:col-5">
    <div class="card flex align-items-center justify-content-center">
        <Card style="width: 25em">
            <template #header>
                <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
            </template>
            <template #title> Advanced Card </template>
            <template #subtitle> Card subtitle </template>
            <template #content>
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
            <template #footer>
                <Button class="bg-themeColor px-2 py-2 cursor-pointe text-white"> <span class="pi pi-check"></span> Save</Button>
                <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
            </template>
        </Card>
    </div>


        <!-- <div class="text-center p-3 border-round-sm bg-primary font-bold">col-12 md:col-6 lg:col-3</div> -->
    </div>
    </div>
</template>

<script>

</script>

<style>
.purpleButton{
 padding: 18px 38px;
 border-radius: 10px;
 background-color: #A259FF;
 line-height: 15pxS;
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>