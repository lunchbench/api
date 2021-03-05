# Lunchbench API

Built with [Strapi](https://strapi.io)

## Inital Setup

1. Install [NodeJS](https://nodejs.org/en/download/) (Make sure you install the LTS or Strapi won't work)

2. Install [Yarn](https://yarnpkg.com) with this command:
    ```bash
    npm i -g yarn
    ```
3. Clone the repository:
    ```bash
    git clone https://github.com/lunchbench/api.git
    ```
4. Move into the directory, install dependencies and run the initial build:
    ```bash
    cd api && yarn && yarn build
    ```
5. Run the dev server:
    ```bash
    yarn develop
    ```

## After Initial Setup

1. Make sure you check for new commits and updates before starting the dev server with this command:
    ```bash
    git fetch && git pull && yarn
    ```