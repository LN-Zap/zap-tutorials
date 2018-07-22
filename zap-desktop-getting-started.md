# Zap Desktop - Getting started

If you want to watch a video tutorial click [here]().

This tutorial assumes you have already downloaded the new Zap Desktop v0.1.2 found [here](https://github.com/LN-Zap/zap-desktop/releases).

Ok let's do this dance. Once you've started Zap you will see a screen titled "How do you want to connect to the Lightning Network?"

<p align='center'>
  <img src='https://i.imgur.com/O5dqw8H.png' alt='screenshot' />
</p>

This is part of our all new onboarding, allowing users to customize their Lightning experience. The "Custom" and "BTCPay Server" options are advanced features that allow you to enter credentials to connect to a remote LND node.

<p align='center'>
  <img src='https://i.imgur.com/IAyiUoy.png' alt='screenshot' />
</p>

But for this tutorial we are going to use "Default", which will use the LND-0.4.2-beta on testnet that's packaged with the app.

Next you can set your node's nickname. However it is important to remember that these nicknames are NOT unique and one should _only_ verify nodes by their public key. This nickname will often times be shown in explorers and other Lightning UIs as it can sometimes improve the user experience. I will set mine to "jimmymow" which is my online handle.

<p align='center'>
  <img src='https://i.imgur.com/A4bRI2l.png' alt='screenshot' />
</p>

Now we can decide if we would like [autopilot](https://github.com/lightningnetwork/lnd/tree/master/autopilot) on. Autopilot is an automatic channel manager that will use 60% of your wallet balance and open 5 channels max for you on the network. We strongly recommend using autopilot as it will make the onbaording easier and overall UX better, but of course it is not required. I will enable it for this tutorial but feel free to disable it if you'd like.

<p align='center'>
  <img src='https://i.imgur.com/qRrjRKs.png' alt='screenshot' />
</p>

Now we will set our wallet password. This password will be used to encrypt your wallet data. Must be 8 characters in length. You'll use this password to unlock your wallet on app start up.

<p align='center'>
  <img src='https://i.imgur.com/Gm4SBBX.png' alt='screenshot' />
</p>

Now we are asked whether we'd like to create a new wallet or import an existing one. If you have your 24 word seed and would like to recover an LND wallet with Zap proceed with "Import existing wallet". For this tutorial we will create a new one.

<p align='center'>
  <img src='https://i.imgur.com/o5Agyxn.png' alt='screenshot' />
</p>

Now we're given the 24 word seed that can be used to recover the wallet. Write this down and secure it somewhere safe. If anything ever happens to your desktop or wallet you can always recover with this seed.

<p align='center'>
  <img src='https://i.imgur.com/HNZdHNO.png' alt='screenshot' />
</p>

Next Zap will ask you to verify your seed by entering 3 random indexes. If you've entered incorrectly the Zap UI will turn the text red. Once entered correctly you'll see the words turn green and you can proceed.

And with that, there she blows. Your node is now syncing to the blockchain. The syncing screen will give you an address to deposit to while you're waiting and will also show you progress and sync statistics below.

<p align='center'>
  <img src='https://i.imgur.com/FwkTozj.png' alt='screenshot' />
</p>

Once we are synced you'll be able to see the all new Zap UI. Wallet header up top, activity feed below and network tab on the right.

<p align='center'>
  <img src='https://i.imgur.com/yXnIN7I.png' alt='screenshot' />
</p>

Zap recommends you some testnet nodes on the right to connect to if you need help getting started, otherwise you can click the "+" icon in the top right to create a channel or let autopilot work its magic once you deposit funds. I'll click "connect" next to Yalls and open a channel with them

<p align='center'>
  <img src='https://i.imgur.com/RMaLFsu.png' alt='screenshot' />
</p>

I set my channel amount to 0.1 BTC and click submit. Now I see my yalls channel loading over on the right.

<p align='center'>
  <img src='https://i.imgur.com/5fnT7Yu.png' alt='screenshot' />
</p>

After a few seconds the status changes to pending

<p align='center'>
  <img src='https://i.imgur.com/iHnmrlk.png' alt='screenshot' />
</p>

And there you go. You've created a Zap wallet and are about ready to have fun on Lightning. You can view your funding channel transaction in an explorer by clicking on your channel. Once the transaction gets sufficient confirmations it will be open and you can start transacting :)

<p align='center'>
  <img src='https://i.imgur.com/PzsEkV9.png' alt='screenshot' />
</p>
