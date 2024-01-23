# Saibo

## Overview

What is your app? Brief description in a couple of sentences.

Interface that allows users to type any prompt and generate a small collection of images that can be minted on a blockchain testnet. Number of images generated will be at maximum 1 and all on-chain communcation will be with an existing testnet blockchain network.


### Problem

Why is your app needed? Background information around any pain points or other reasons.

Generating images has become easy with tools such as DALL-E, Mid Journey, etc. However, the ease to be able to develop multiple images and at the same time mint them on a blockchain is not available. The app offers a potential new one-stop-shop for minting NFT collections, reducing labor and time spent learning the intricacies of generating smart contracts.

### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.

The app is open to anyone that wants to generate an NFT collection and test out what they're prompts/ideas might produce. Developers may also be able to alter the app, adding new features for additional blockchain applications.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

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

![Home page] (https://github.com/kyriakos2222/capstone-project-saibo/blob/main/home-page.png)

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out. 

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.
