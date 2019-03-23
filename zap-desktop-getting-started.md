# Zap Desktop - Getting started

If you want to watch a video tutorial click [here](https://www.youtube.com/watch?v=Z2XDt7iKE7A&list=PLMj6UA3-f3cQq_TjCXAAeP1mmRnjgnDrI).

  This tutorial assumes you have already downloaded the new Zap Desktop v0.4.0 found [here](https://github.com/LN-Zap/zap-desktop/releases).

  - Mac users will need to download ZapDesktop-darwin-v0.4.0-beta.dmg
  - Windows users will need to download ZapDesktop-win32-v0.4.0-beta.exe
  - Linux users will need to download one of the following:
      - ZapDesktop-linux-amd64-v0.4.0-beta.deb
      - ZapDesktop-linux-i386-v0.4.0-beta.AppImage
      - ZapDesktop-linux-i386-v0.4.0-beta.deb
      - ZapDesktop-linux-x86_64-v0.4.0-beta.AppImage

## Step 1: Creating your wallet
Ok let's do this. Once you've started Zap you will see a screen where you can elect how you'd like to use Lightning.

<p align='center'>
  <img src='https://i.imgur.com/XH3UreT.png' alt='screenshot' />
</p>

For this tutorial you are going to select "Create", which will take us through creating a Lightning enabled wallet on our machine.

## Step 2: Save your wallet seed
Now you're given a 24 word seed that can be used to recover your wallet. Write this down and secure it somewhere safe. If anything ever happens to your machine or wallet you can always recover on-chain funds with this seed.

<p align='center'>
  <img src='https://i.imgur.com/M3O4jKV.png' alt='screenshot' />
</p>

## Step 3: Verify your seed
Next, Zap will ask you to verify your seed by prompting you to enter three randomly selected words from your seed. Once entered correctly you'll see the inputs turn green and you can proceed. If you've entered the words incorrectly the Zap UI will turn the inputs red. 

<p align='center'>
  <img src='https://i.imgur.com/5EJu8pH.png' alt='screenshot' />
</p>

## Step 4: Wallet password
Now you will set your wallet password. This password will be used to encrypt your wallet data. The password must be at least eight characters in length. You'll use this password to unlock your wallet on start up. If you lose this password the only way to gain access to your wallet is by way of recovery via your 24 word seed. Please back up this password and keep it safe!

<p align='center'>
  <img src='https://i.imgur.com/UC1nLrR.png' alt='screenshot' />
</p>

## Step 5: Wallet name
Now you can create your wallet name. This is new to Zap. Your wallet's name will be used as a "handle" or "username" within your Zap Launchpad to help keep your wallet identifiable and organized now that Zap allows multiple wallets to be created.

<p align='center'>
  <img src='https://i.imgur.com/nnJ1T82.png' alt='screenshot' />
</p>

## Step 6: Network
Now, for the first time, you can select which network you would like to run on. If you select mainnet you will see a yellow warning:

```
WARNING: You may lose your funds. Mainnet support is experimental and has not been thoroughly tested. Use Testnet to experiment without risk.
```

Creating mainnet wallets inside of Zap is very risky and intended fot developers and advanced users to help test. You may lose funds on mainnet with neutrino, and we encourage those who would like to experiment without risk to use testnet.

<p align='center'>
  <img src='https://i.imgur.com/i7XwRoO.png' alt='screenshot' />
</p>

## Step 7: Sync to the blockchain
Your node is now syncing to the blockchain. The syncing screen will display an address to deposit to while you're waiting and will also show you syncing progress and statistics below. You'll only need to do a full sync once, which on mainnet should take around a minute given regular to good internet speed.

<p align='center'>
  <img src='https://i.imgur.com/R9ytvkn.png' alt='screenshot' />
</p>

Congrats! You've created a Zap wallet and are ready to have fun on the Lightning Network. Once you have channels open you can start transacting via Lightning 🍻😃