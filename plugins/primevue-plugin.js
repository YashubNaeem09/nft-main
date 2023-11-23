import { defineNuxtPlugin } from "nuxt/app"
export default defineNuxtPlugin ({
    options : {
        ripple : process.client,
      },
      components: {
        include: [
          'Button',
          'Card',
          'Checkbox',
          'Divider',
          'InputText',
          'InputGroup',
          'InputText'
        ]
      }
})