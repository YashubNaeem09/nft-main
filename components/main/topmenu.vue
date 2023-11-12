<template>
  <header class="bg-themeColor">
    <nav class="flex align-items-center justify-content-between p-5" aria-label="Global">
      <div class="flex">
        <nuxt-link to="/" class="flex flex-row">
          <img class="h-8 w-auto" src="images/logo.png" alt="" />
          <span class="text-2xl font-bold text-white">NFT Marketplace</span>
        </nuxt-link>
      </div>
        <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <i class="pi pi-bars"></i>
        </button>
      </div>
      <div class="content-nav hidden lg:ml-auto lg:flex align-items-center justify-self-end">
      <div class="hidden flex align-items-center justify-content-between">
       <ul class="flex justify-end p-2 text-1xl font-bold text-white leading-6">
         <li class="mx-4 cursor-pointer hover:text-buttonColor">Marketplace</li>
         <li class="mx-4 cursor-pointer hover:text-buttonColor">Rankings</li>
         <li class="mx-4 cursor-pointer hover:text-buttonColor">Connect Wallet</li>
       </ul>
      </div>
      <!-- <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <a href="#" class="text-1xl font-bold leading-6 text-white">Features</a>
        <a href="#" class="text-1xl font-bold leading-6 text-white">Marketplace</a>
        <a href="#" class="text-1xl font-bold leading-6 text-white">Company</a>
      </PopoverGroup> -->
      <div class="hidden flex justify-end">
        <Button class="purpleButton cursor-pointer text-white">
          <span class="pi pi-user mx-1"></span>
          Sign Up
        </Button>
      </div>
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="absolute inset-0 z-2" />
      <DialogPanel class="absolute inset-y-0 right-0 z-2 w-full h-auto overflow-hidden bg-themeColor px-6 py-6">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5 flex flex-row">
            <img class="h-8 w-auto" src="images/logo.png" alt="" />
          <span class="text-2xl font-bold text-white">NFT Marketplace</span>
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-white" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <i class="pi pi-arrow-right"></i>
          </button>
        </div>
        <div class="mt-3 flow-root">
          <div>
            <div class="space-y-2 py-6">
              <ul class="text-1xl font-bold text-white leading-6">
              <li class="-mx-4 px-4 py-2 cursor-pointer hover:text-buttonColor">Marketplace</li>
              <li class="-mx-4 px-4 py-2 cursor-pointer hover:text-buttonColor">Rankings</li>
              <li class="-mx-4 px-4 py-2 cursor-pointer hover:text-buttonColor">Connect Wallet</li>
            </ul>
            <div class="py-3 -mx-1">
              <Button class="purpleButton cursor-pointer text-white">
              <span class="pi pi-user mx-1"></span>
              Sign Up
            </Button>
            </div>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
} from '@headlessui/vue'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'


const mobileMenuOpen = ref(false)
</script>