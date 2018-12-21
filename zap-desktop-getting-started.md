  # Zap Desktop - Getting started

  If you want to watch a video tutorial click [here]().

  This tutorial assumes you have already downloaded the new Zap Desktop v0.3.0 found [here](https://github.com/LN-Zap/zap-desktop/releases).

  - Mac users will need to download ZapDesktop-darwin-v0.3.0-beta.dmg
  - Windows users will need to download ZapDesktop-win32-v0.3.0-beta.exe
  - Linux users will need to download one of the following:
      - ZapDesktop-linux-amd64-v0.3.0-beta.deb
      - ZapDesktop-linux-i386-v0.3.0-beta.AppImage
      - ZapDesktop-linux-i386-v0.3.0-beta.deb
      - ZapDesktop-linux-x86_64-v0.3.0-beta.AppImage

  ## Step 1: Creating your wallet
  Ok let's do this. Once you've started Zap you will see a screen titled "How do you want to connect to the Lightning Network?"

  <p align='center'>
    <img src='https://imgur.com/FGvdkmT.png' alt='screenshot' />
  </p>

  This is part of our all new onboarding, allowing users to create and manage multiple local, remote, and BTCPay server wallets.

  For this tutorial you are going to select "Create New Wallet", which will use the LND-0.5.1-beta on testnet that's packaged within Zap.

  ## Step 2: Save your wallet seed
  Now you're given a 24 word seed that can be used to recover your wallet. Write this down and secure it somewhere safe. If anything ever happens to your desktop or wallet you can always recover on-chain funds with this seed.

  <p align='center'>
    <img src='https://imgur.com/2zSSHWL.png' alt='screenshot' />
  </p>

  ## Step 3: Verify your seed
  Next, Zap will ask you to verify your seed by prompting you to enter three randomly selected words from your seed. Once entered correctly you'll see the inputs turn green and you can proceed. If you've entered the words incorrectly the Zap UI will turn the inputs red. 

  <p align='center'>
    <img src='https://imgur.com/cRfgaL3.png' alt='screenshot' />
  </p>

  ## Step 4: Wallet password
  Now you will set your wallet password. This password will be used to encrypt your wallet data. The password must be at least eight characters in length. You'll use this password to unlock your wallet on start up. If you lose this password the only way to gain access to your wallet is by way of recovery via your 24 word seed. Please back up this password and keep it safe!

  <p align='center'>
    <img src='https://imgur.com/goBhKWw.png' alt='screenshot' />
  </p>

  ## Step 5: Wallet name
  Now you can create your wallet name. This is new to Zap. Your wallet's name will be used as a "handle" or "username" within your Zap Launchpad to help keep your wallet identifiable and organized now that Zap allows multiple wallets to be created.

  <p align='center'>
    <img src='https://imgur.com/XqdiWGS.png' alt='screenshot' />
  </p>

  ## Step 6: Autopilot
  Now you can decide if you would like autopilot on. Autopilot is an automatic channel manager. We strongly recommend using autopilot as it will make your onboarding easier and enhance the user experience, but of course it is not required. For this tutorial autopilot will be enabled but feel free to disable it if you’d like. These settings are configurable in your Zap Launchpad, so no pressure, these decisions aren't final.

  <p align='center'>
    <img src='https://imgur.com/YtSFHtO.png' alt='screenshot' />
  </p>

  ## Step 7: Sync to the blockchain
  Your node is now syncing to the blockchain. The syncing screen will display an address to deposit to while you're waiting and will also show you syncing progress and statistics below. You'll only need to do a full sync once, which on testnet should take around 5 minutes given regular-good internet speed.

  <p align='center'>
    <img src='https://imgur.com/uJoN3L1.png' alt='screenshot' />
  </p>

  Congrats! You've created a Zap wallet and are ready to have fun on the Lightning Network. Once you have channels open you can start transacting via Lightning \o/