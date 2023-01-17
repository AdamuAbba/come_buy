# Come Buy v1

A basic geo-fenced e-commerce app implemented with React native (Typescript) please find attached in the release section a working installable binary build thank you. the build job was a success on expo servers regardless of the workflow error message displayed here thank you.

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

- screens
  - auth
    - sign in screen
    - sign up screen
  - main
    - Dashboard screen

<img src="demo/splash_screen.jpg"  width="130" height="270"> <img src="demo/sign_up_screen.jpg"  width="130" height="270"> <img src="demo/sign_in_screen.jpg"  width="130" height="270"> <img src="demo/dashboard_screen.jpg"  width="130" height="270"> <img src="demo/dashboard_error_screen.jpg"  width="130" height="270">

## User story

- A user can go through the simulated offline authentication flow with basic form validations
- A user can scroll through products and try to place an order on any of available items by `tapping on the PLACE ORDER` button,

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
<a href="https://www.linkedin.com/in/abba-adamu"  target="_blank">
<img alt="portfolio" src="https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white" />
</a>
<a href="https://www.linkedin.com/in/abba-adamu">
<img alt="linkedIn" src="https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>

## Features

- Simplistic design
- Consistent design/theming with [NativePaper]("https://reactnativepaper.com")
- Local state management with [Redux](https://redux-toolkit.js.org/)
- Basic form validation with [yup validation](https://github.com/jquense/yup)
- Internal form state management with [formik](https://formik.org/)
- [fake store api](https://fakestoreapi.com/) as service/api layer
- Api access layer/data caching using [RTK Query](https://redux-toolkit.js.org/tutorials/rtk-query) which was later swapped out for a basic JSON offline data in accordance to the requirement

## Tech Stack

**Client:** ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

**Server:** JSON Data

## Appendix

**Implementation summary:**

- provided is a distance validation function that requests for the device location permission and if granted uses the [geodist](https://www.npmjs.com/package/geodist) package to calculate the distance between the users coordinates and the assumed fixed constant

- Basic simulated user authentication
- Each component is modularized
- A custom Github workflow triggers eas-updates for the `production channel` and `production branch` on expo.binary production builds are also triggered from the same `main` branch as well

```
Component "folder level"
│   Component.styles.ts
│   Component.tsx
│   index.tsx

```
