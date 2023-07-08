# hotel-reservation-system

A hotel chain operating in Miami wishes to offer room reservation services over the internet. They have three hotels in Miami: Lakewood, Bridgewood and Ridgewood. Each hotel has separate weekday and weekend (Saturday and Sunday) rates. There are special rates for rewards customer as a part of loyalty program. Each hotel has a rating assigned to it.

## Description
This project is a Vue application that gives users the ability to find the cheapest hotel option by specifying different dates. Also, if users are members of the rewards program, they will receive an additional discount on their reservations. The application is Developed using the latest features of Vue 3, such as the Composition API, and TypeScript has been used to add static typing and improve code security. Visual styling has been implemented using SCSS for easy customization and maintenance. In addition, the project makes use of Pinia, a library for state management in Vue, which provides a more intuitive and scalable data flow.The 'Factory Method' design pattern has been applied to make it easier to instantiate different types of hotels and adapt to the changing needs of the business. In summary, this application combines modern technologies and good development practices to offer users an easy-to-use experience and find the best hotel option at the best price.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Dependencies
1. NodeJs version 18.12.1
2. Vue DatePicker : Component to manage dates. https://vue3datepicker.com/
   
## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup
Clone github repository: 
```sh
git clone https://github.com/epriosf/hotel-reservation.git
```
Change to the repository name:
```sh
cd hotel-reservation
```
Install dependencies
```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
