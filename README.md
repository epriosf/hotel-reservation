# hotel-reservation-system

A hotel chain operating in Miami wishes to offer room reservation services over the internet. They have three hotels in Miami: Lakewood, Bridgewood and Ridgewood. Each hotel has separate weekday and weekend (Saturday and Sunday) rates. There are special rates for rewards customer as a part of loyalty program. Each hotel has a rating assigned to it.

## Description
This project is a Vue application that allows users to find the most affordable hotel option by specifying different dates. Additionally, if users are members of the rewards program, they receive an additional discount on their bookings. The application is developed using the latest features of Vue 3, such as the Composition API, and TypeScript is used for static typing to enhance code safety. Visual styling is implemented using SCSS for easy customization and maintenance.

Furthermore, the project utilizes Pinia, a state management library for Vue, which provides a more intuitive and scalable data flow. The Factory Method design pattern is employed to facilitate the creation of instances of different hotel types, accommodating evolving business needs.

For deployment, Netlify is utilized as a hosting and deployment platform for web applications. Netlify offers an easy and fast way to deploy Vue applications, enabling seamless integration with version control repositories such as Git. With Netlify, the application's build and deployment process can be automated, simplifying continuous delivery and enabling frequent updates in the production environment.

To ensure code quality, unit tests have been implemented using Vitest, a testing framework specifically designed for Vue applications. Vitest enables thorough testing of components, ensuring their proper functioning and detecting potential issues prior to deployment.

In summary, this application combines modern technologies and development best practices to deliver a user-friendly experience in finding the best hotel option at the most competitive prices. Vitest ensures code quality through comprehensive unit testing, while Netlify streamlines deployment and management, facilitating efficient delivery and an enhanced experience for end users.

## Color palette implemented
![image](https://github.com/epriosf/hotel-reservation/assets/60623072/9b26c8d3-96cc-4dea-b08c-c8e44cc83c1a)

## Deployment
link: https://shiny-unicorn-2458ca.netlify.app
## Images
![image](https://github.com/epriosf/hotel-reservation/assets/60623072/e4e1a9e1-ba8f-4901-a75b-972fa25a75e4)
![image](https://github.com/epriosf/hotel-reservation/assets/60623072/c5dcb49e-3f13-446c-b87f-bea38fce3666)

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
