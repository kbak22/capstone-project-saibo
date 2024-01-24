# Saibo

## Overview

Interface that allows users to type any prompt and generate a small collection of images that can be minted on a blockchain testnet. Number of images generated will be at maximum 1 and all on-chain communcation will be with an existing testnet blockchain network.


### Problem

Generating images has become easy with tools such as DALL-E, Mid Journey, etc. However, the ease to be able to develop multiple images and at the same time mint them on a blockchain is not available. The app offers a potential new one-stop-shop for minting NFT collections, reducing labor and time spent learning the intricacies of generating smart contracts.

### User Profile

The app is open to anyone that wants to generate an NFT collection and test out what they're prompts/ideas might produce. Developers may also be able to alter the app, adding new features for additional blockchain applications.

### Features

Users can connect their browser wallets, enter a text prompt into a designated input field, generate an image based on that prompt, and mint the image as an NFT on the blockchain. Users can then view their profile with the images they've minted on the app. 

#### Prompt Submission Interface:

An interface where users can submit text prompts for image generation. Option to specify details like style, color preferences, or specific elements to be included in the images.

#### Image Generation from Prompts:

A system to interpret user prompts and generate corresponding images. An option for users to preview these images and possibly request modifications or confirm them.

#### Blockchain Integration for Image Minting:

Functionality to mint the confirmed images as non-fungible tokens (NFTs) on a chosen blockchain. Option for users to select the blockchain on which to mint their NFTs.

#### Gallery or Portfolio Feature:

A gallery or portfolio where users can view their created and minted images. Options for users to share their minted images on social media or other platforms.


## Implementation

### Tech Stack

- Front-End Development:

React.js: For building a dynamic and responsive user interface.
SCSS: For styling and responsive design.

- Back-End Development:

Node.js with Express.js: For server-side logic and API endpoints.

- Blockchain Integration:

Ethereum Web3.js: For interacting with Ethereum-based testnet blockchains.
Smart Contract Development: Using Solidity for NFT minting.
MetaMask: For Ethereum-based testnet transactions.

- Database

Will be using thirdWeb Engine and docker to set up a postgres database. (https://thirdweb.com/engine?ref=blog.thirdweb.com)


### APIs

- DALL-E API (OpenAI) for Image Generation:

The primary source for generating images based on user prompts.
API integration will be needed to send prompts and receive the generated images.

- IPFS (InterPlanetary File System):

For decentralized storage of the generated images.

- Blockchain Networks through thirdweb (https://thirdweb.com/engine?ref=blog.thirdweb.com):

For minting images as NFTs, interaction with blockchain networks like Ethereum is required.
This involves accessing data related to smart contracts, wallet transactions, and NFT standards (e.g., ERC-721 or ERC-1155).

### Sitemap

- Home Page:

The landing page of the app where users can enter their prompts to generate images.
Will feature an overview of the app's capabilities, testimonials, and a call-to-action (CTA) to either sign in or sign up.


- Profile User Page:

Displays user information and account settings. Could display a gallery of previously created and minted images.

- Image Generation and Preview Page:

Displays the generated images based on user prompts.
Users can preview, accept, or request modifications to the images.


- NFT Minting Page:

Where users can mint their selected image as an NFT.
Includes options for adding metadata, choosing the blockchain for minting, and setting prices if they wish to sell the NFT.

- Result/Gallery Page:

Showcases the final minted NFT.

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

![Home page](https://github.com/kyriakos2222/capstone-project-saibo/blob/main/mockups/home-page.png)
![Profile page](https://github.com/kyriakos2222/capstone-project-saibo/blob/main/mockups/profile-page.png)
![Image Preview page](https://github.com/kyriakos2222/capstone-project-saibo/blob/main/mockups/image-preview-page.png)
![Minting page](https://github.com/kyriakos2222/capstone-project-saibo/blob/main/mockups/minting-page.png)


### Data

- User Interaction and Data Input:

Users enter prompts on the website which are then used to generate images. This represents the primary user interaction and data input mechanism in the app.

- Image Generation Using DALL-E (OpenAI):

The prompts entered by users are sent to OpenAI's DALL-E, which generates images based on these prompts. This is a critical data exchange between the app and an external AI service (OpenAI).

- NFT Minting and Blockchain Interaction:

Once an image is generated, users have the option to mint it as an NFT. This involves creating a digital asset on a blockchain network, requiring interaction with blockchain technology and smart contracts.
The app interacts with a blockchain (like Ethereum) to mint the generated images as NFTs. This process includes sending data to the blockchain (e.g., image metadata) and receiving transaction confirmations.

- Integration with thirdweb Engine:

The app uses thirdweb Engine for backend functionalities, which includes deploying smart contracts, managing NFT transactions, and data storage. This involves data exchanges between the app and thirdweb services.


### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

The following endpoints will be implemented:

1. Generate image endpooint.
2. Mint NFT endpoint.
3. Fetch user profile endpoint.
4. Update user profile endpoint.
5. Get NFT collection endpoint.

### Auth

Logins will be available for users with any crypto wallet installed in their web browser. Use credentials such as username or password will not be required to access the app.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

- Set up the project repository and basic project structure.
- Set up the React application structure.
- Develop the Home, Profile, Image Generation, and NFT Minting pages.

- Initialize the backend server (Node.js/Express).
- Integrate OpenAI's DALL-E API for image generation.
- Create API endpoint for image generation (/api/generate).

- Set up thirdweb Engine and smart contract deployment.
- Implement API endpoint for NFT minting (/api/mintNFT).

## Nice-to-haves

TBD.
