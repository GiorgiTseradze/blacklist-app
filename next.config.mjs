import dotenv from "dotenv";
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		API_URL: process.env.API_URL,
	},
};

export default nextConfig;
