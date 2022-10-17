# Come Buy v1

A basic social e-commerce app implemented with React native (Typescript) forgive 🥲 my design skills.

# Table of contents

1. Installation
2. Project structure
3. Usage/user story
4. Author
5. Features
6. Tech stack
7. Appendix

## Installation

- clone repo

  ```
      git clone https://github.com/AdamuAbba/come_buy.git
  ```

- install dependencies

  ```
      yarn
  ```

- run android build `locally or check package.json scripts command chords`

  ```
      npx expo run:android
  ```

## Project structure

- Feed Screens
  - Main feed screen
  - Liked feed screen
- Single product screen

<img src="demo/splash_screen.jpg"  width="130" height="270"> <img src="demo/main_feed_screen.jpg"  width="130" height="270"> <img src="demo/liked_feed_screen.jpg"  width="130" height="270"> <img src="demo/product_details_screen.jpg"  width="130" height="270">

## User story

- A user can scroll through posts and like them by `double tapping`,
- View all liked posts
- And can also view each post on it's own screen by `tapping once` on the post

## Author

- [Abba Adamu](https://github.com/AdamuAbba)

## 🔗 Links

<a href="https://www.facebook.com/izshytypes" target="_blank">
<img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="facebook" />
</a>
<a href="https://www.instagram.com/shytypes1028/" target="_blank">
<img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="instagram" />
</a>
<a href="https://twitter.com/shytypes1028">
<img alt="twitter" src="https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="twitter" />
</a>
<a href="https://abbaportfolio.netlify.app/"  target="_blank">
<img alt="portfolio" src="https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white" />
</a>
<a href="https://www.linkedin.com/in/abba-adamu-365a9b17a/">
<img alt="linkedIn" src="https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>

## Features

- Simplistic design
- Consistent design/theming with [NativePaper]("https://reactnativepaper.com")
- Local state management with [Redux](https://redux-toolkit.js.org/)
- Basic form validation with [yup validation](https://github.com/jquense/yup)
- [fake store api](https://fakestoreapi.com/) as service/api layer
- Redux state management for storing local data
- Api access layer/data caching using [RTK Query](https://redux-toolkit.js.org/tutorials/rtk-query)

## Tech Stack

**Client:** ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

**Server:** [Fake store api](https://fakestoreapi.com/)

## Appendix

**Implementation summary:**

- Expo update has been implemented and all requirements/environment variables configured.
- ❗️the [Fake store api](https://fakestoreapi.com/) endpoint [/products?limit=100]("https://fakestoreapi.com/products?limit=100") returns only a maximum of `20` items as against the expected `100`
- Each component is modularized

```
Component "folder level"
│   Component.test.tsx
│   Component.styles.ts
│   Component.tsx
│   index.tsx

```
