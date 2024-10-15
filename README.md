# Blacklist App

This is the **Blacklist App**, a project built with [Next.js](https://nextjs.org/), designed to manage phone number blacklists and provide real-time data on the suppression of numbers. The app allows users to review data on phones, wireless, and suppressed numbers along with the time taken to process the data.

## Features

- Dynamic table showing the status of phone numbers (wireless, suppression, etc.)
- Real-time calculation and display of data processing time
- Built with Next.js, React, and TypeScript for a fast, modern web experience

## Getting Started

To run the development server, follow these steps:

### Installation

First, clone the repository and install dependencies:

```bash
git clone https://github.com/GiorgiTseradze/blacklist-app.git
cd blacklist-app
npm install
# or
yarn install
# or
pnpm install
```

### Git Secrets Installation

This project utilizes [git-secrets](https://github.com/awslabs/git-secrets) to help prevent the accidental committing of sensitive information like passwords or API keys.

To set up git-secrets, please follow the installation instructions provided in the official [git-secrets documentation](https://github.com/awslabs/git-secrets?tab=readme-ov-file#installing-git-secrets). This will ensure that you have the necessary hooks and configurations in place for your local environment.

### Creating a .env File

You will need to set up environment variables for the app. Create a `.env` file in the root directory based on the provided `.env.example` file:

````bash
cp .env.example .env

### Running the Dev Server

After creating .env file, start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
````

This will run the app in development mode, accessible at:

- **Local**: [http://localhost:3000](http://localhost:3000)
- **Network**: [http://<your-ip>:3000](http://<your-ip>:3000)

### Editing Pages

You can start editing by modifying the `src/pages/index.tsx` file. The app auto-updates as you make changes.

### API Routes

This project includes [API routes](https://nextjs.org/docs/api-routes/introduction), such as:

- [http://localhost:3000/api/blacklistCheck](http://localhost:3000/api/blacklistCheck)

You can modify or add more API routes in the `src/pages/api` directory.

## Project Structure

- **`src/components/PhoneResultsTable.tsx`**: The component responsible for rendering the phone results table.
- **`src/pages/index.tsx`**: Main page where the blacklist data is displayed.
- **`public/`**: Static assets, including images.

## Husky and Git-Secrets

To ensure that sensitive information is not accidentally committed, this project uses **Husky** to manage Git hooks and **git-secrets** to scan commits for secrets.

- **Husky**: Automatically runs scripts before certain Git commands, such as commits.
- **git-secrets**: Prevents committing sensitive information like API keys by scanning your changes for patterns.

Make sure to set up these tools by following the provided installation and configuration steps in the repository.

## Learn More

For more details on Next.js:

- [Next.js Documentation](https://nextjs.org/docs) - Explore Next.js features and API.
- [Next.js Learn](https://nextjs.org/learn) - An interactive guide to learn Next.js.

## Deployment

Deploy your **Blacklist App** on [Vercel](https://vercel.com/) using the following steps:

1. Push your project to a GitHub repository.
2. Connect the repository to Vercel and follow the instructions to deploy.

More deployment info can be found in the [Next.js deployment documentation](https://nextjs.org/docs/deployment).
