# MultiversX-Rust
Final Project
Simple Staking Contract (StakeX)
Project Overview
My Simple Staking Contract (StakeX) is a decentralized application (DApp) built on the MultiversX blockchain. It allows users to stake their EGLD tokens, earn rewards based on their staked amount and staking duration, and withdraw their funds in a trustless manner. This DApp provides a simple and secure way to interact with the MultiversX blockchain while earning rewards via staking.

Instructions for Compiling and Deploying the Smart Contract
To deploy my StakingContract smart contract, follow these steps:

Install Rust and MultiversX Tools:
I installed Rust from rust-lang.org.
I also installed the MultiversX CLI tools. To set up the development environment and deploy the contract, I followed the instructions in the MultiversX Developer Docs.
Compile the Smart Contract:
I opened the terminal and navigated to the project folder.
I ran the following command to compile the contract:

rustc --target=wasm32-unknown-unknown --release
This generates a .wasm file, which is the compiled smart contract.
Deploy the Contract:
I deployed the contract to the MultiversX testnet using the MultiversX CLI tools:

multiversx deploy contract.wasm --network testnet
I followed the instructions provided by the MultiversX CLI for deploying and interacting with the contract.

Description of Functions and Features
My StakingContract includes the following functions:

stake(amount: U256):

This function allows users to stake their EGLD tokens into the contract.
The amount staked is recorded, along with the timestamp when the staking started.
unstake():

This function allows users to withdraw their staked tokens.
It removes the staked amount and returns the tokens to the user.
calculate_rewards():

This function calculates the rewards for a user based on their staking duration and the Annual Percentage Yield (APY).
It returns the accumulated rewards for the user.
get_apy():

This function returns the current APY set for the staking contract.
get_staked_amount():

This function retrieves the total amount of tokens staked by a user.
get_staking_time():

This function retrieves the time when a user began staking their tokens.
