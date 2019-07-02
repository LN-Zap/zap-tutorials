# Zap Desktop - Getting started

This tutorial assumes you have already downloaded the new Zap Desktop v0.5.0 found [here](https://github.com/LN-Zap/zap-desktop/releases).

  - Mac users will need to download Zap-mac-v0.5.0-beta.dmg
  - Windows users will need to download Zap-win-v0.5.0-beta.exe
  - Linux users will need to download one of the following:
      - Zap-linux-amd64-v0.5.0-beta.deb
      - Zap-linux-i386-v0.5.0-beta.AppImage
      - Zap-linux-i386-v0.5.0-beta.deb
      - Zap-linux-x86_64-v0.5.0-beta.AppImage

## Step 1: Creating your wallet
Welcome! Once you’ve started Zap you will be prompted to create a wallet.

<p align='center'>
  <img src='https://imgur.com/riyfx1K.png' alt='screenshot' />
</p>

For this tutorial you are going to select "Create", which will take us through creating a Lightning enabled wallet on our machine.

## Step 2: Save your wallet seed
Now you will see a 24 word seed. The seed is used to recover your wallet. Write this down and secure it somewhere safe. If anything ever happens to your machine or wallet you can always recover on-chain funds with this seed. Note that restoring from the seed will not allow you to recover funds that are stored in channels.

<p align='center'>
  <img src='https://imgur.com/eo783Fu.png' alt='screenshot' />
</p>

## Step 3: Verify your seed
Next, Zap will ask you to verify your seed by prompting you to enter three randomly selected words from your seed. Once entered correctly you’ll see the inputs turn green and you can proceed. If you’ve entered the words incorrectly the Zap UI will turn the inputs red.

<p align='center'>
  <img src='https://imgur.com/1Q3R0Jy.png' alt='screenshot' />
</p>

## Step 4: Wallet password
Now you will set your wallet password. This password will be used to encrypt your wallet data. The password must be at least eight characters in length. You'll use this password to unlock your wallet on start up. If you lose this password the only way to gain access to your wallet is by way of recovery via your 24 word seed. Please back up this password and keep it safe!

<p align='center'>
  <img src='https://imgur.com/kMtVYmq.png' alt='screenshot' />
</p>

## Step 5: Wallet name
Now you can create your wallet name. Your wallet’s name will be used as a “handle” or “username” within your Zap Launchpad to help keep your wallet identifiable and organized now that Zap allows multiple wallets to be created. The wallet name is not broadcast to the network and is for internal use only.

<p align='center'>
  <img src='https://imgur.com/MYnpuwl.png' alt='screenshot' />
</p>

## Step 6: Channel Backups
This is new to Zap. Channel backups allow you to backup the funds you have stored in channels. If you plan on opening channels and connecting with peers on the network, it is highly recommended that you backup your channels. In the event that your wallet is lost, recovering with the seed will only restore on-chain funds and *all funds in channels will be lost*. The channel backup file can be used to recover funds from your channels.

<p align='center'>
  <img src='https://imgur.com/V90Lt4a.png' alt='screenshot' />
</p>

You have the option to skip channel backups (not recommended) in addition to three distinct options:
- Local stores your channel backup file on your machine. If you select local you will be prompted to backup the file locally on your machine.
- Google drive stores your channel backup file on google drive.
  If you select google drive you will be prompted to login to your gmail account and backup the file to your google drive.
- Dropbox stores your channel backup file to dropbox.
  If you select Dropbox you will be you will be prompted to login to your dropbox account and backup the file to dropbox
    
It is important to note that your channel backup file is encrypted using a key derived from the your seed. This way, it is safe to upload your backup file to third-party services because the backup file cannot be used in isolation.

## Step 7: Sync to the blockchain
Your node is now syncing to the blockchain. The syncing screen will display an address to deposit funds to while you’re waiting. The syncing screen also displays your wallet’s syncing progress and statistics below. You’ll only need to do a full sync once.

<p align='center'>
  <img src='https://imgur.com/KM7qLZ9.png' alt='screenshot' />
</p>

Congrats! You've created a Zap wallet and are ready to have fun on the Lightning Network. Once you have channels open you can start transacting via Lightning 🍻😃