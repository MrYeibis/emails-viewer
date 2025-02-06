# Project Overview

This project is a Vue.js application designed to interact with an email indexing service. The application provides a user-friendly interface for displaying email records with pagination, enabling users to navigate through large sets of emails seamlessly.

# How to Run the Project

To run this project, you need to follow these steps:

1. **Run the Indexer**:
   Before running this application, ensure that you have run the indexer. You can find the indexer at the following link: [emails-indexer](https://github.com/mryeibis/emails-indexer). Please refer to the instructions in that repository for details on how to set it up and run it.

2. **Run the API**:
   After successfully running the indexer, you will also need to run the API, which is available in the same repository. Follow the instructions provided in the emails-indexer repository to start the API.

3. **Create a Local Environment File**:
   You need to create a `.env.local` file in the root of your project to override the default API URL. Add the following line to the `.env.local` file:

   ```env
   VITE_API_URL=http://localhost:8080
   ```

   Make sure to replace `http://localhost:8080` with the appropriate URL if your API is running on a different port.

4. **Start the Vue Application**:
   Once the indexer and API are running, you can start the Vue application in development mode. Use the following command in your terminal:

   ```bash
   pnpm install
   pnpm dev
   ```

5. **Access the Application**:
   Open your web browser and navigate to `http://localhost:5173` to access the application.

Make sure to have all dependencies installed and the environment variables set up correctly as specified in the `.env.local` file.
