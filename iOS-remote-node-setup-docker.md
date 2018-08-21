# Zap iOS: Remote Node setup with Docker

Zap iOS will eventually ship with on-device LND support, but for now you have to connect to a remote [LND](https://github.com/lightningnetwork/lnd) node.

This tutorial covers running a "zap-ready" LND node inside a [Docker container](https://www.docker.com/resources/what-container) and connecting to it from Zap.

## [Requirement] Server with docker installed

This tutorial will **not** cover how to set up a Digital Ocean Droplet (or some other cloud server). Install instruction for docker can be be found [here](https://docs.docker.com/install/). A quick way to spin up one is to use Digital Oceans [One-click install and deploy Docker](https://www.digitalocean.com/products/one-click-apps/docker/).

## Start the LND node

The great thing about Docker is that you don't have to worry about installing all the required software. We have already built an image for you to use, so let's just fire it up 🚀

```
docker volume create lnd-data
docker run -v lnd-data:/lnd --name=lnd-node -d \
  -p 9735:9735 \
  -p 10009:10009 \
  lnzap/lnd:latest \
  --bitcoin.active \
  --bitcoin.testnet \
  --debuglevel=info \
  --bitcoin.node=neutrino \
  --neutrino.connect=testnet1-btcd.zaphq.io \
  --neutrino.connect=testnet2-btcd.zaphq.io \
  --autopilot.active \
  --rpclisten=0.0.0.0:10009
```

First we create a data volume `lnd-data` to hold out data. Next we fire up an LND node running on the bitcoin `testnet`. It signals for light client mode (neutrino), connects to a couple of full nodes hosted at `zaphq.io`, turns on LND's [autopilot](https://github.com/lightningnetwork/lnd/tree/master/autopilot) feature (automatic channel management), and lastly makes sure we are listening for gRPC connections.

**NOTE - External IP**  

If you intend to use the LND node over the internet (not just your local lan), then you need to add a few additional parameters. `--tlsextraip=<internet-ip>` will make sure your internet facing ip is added to the certificate. `--externalip=<internal-ip>:<port>` will make sure lnd broadcasts the correct information about how to reach your node to the lightning network.

To interact with the LND node in the container, we can now use `docker exec`. 

### Create wallet

First let's create a wallet!

```  
docker exec -u lnd -it lnd-node lncli --network=testnet create
```

Follow the instructions and remember to write down the seed words.

**NOTE**
Every time you restart the container, you need to run `docker exec -u lnd -it lnd-node lncli unlock` to *unlock* your wallet.

### Zap Connect

Now let's try to connect to our LND node from Zap. We have included a tool called [zapconnect](https://github.com/LN-Zap/zapconnect) in the container for convenience. It will generate a QR code that you can scan from Zap to get all the required configuration.

```  
docker exec -u lnd -it lnd-node zapconnect --bitcoin.active --bitcoin.testnet
```

Scan the QR code from Zap by selecting "Connect Remote Node" -> "Scan". Most likely you need to zoom your terminal to view the whole QR code.

Once the configuration is available hit "Connect" and hope for the best! ⚡💪

If you are having issues connecting, check out the [debug](#debug) section below.

### Fund the wallet

Before you can create channels and use the lightning network we need to fund our wallet. Since we are using the `testnet` we can simply visit a faucet to get some free tokens. But first, we need a wallet address.

```
docker exec -u lnd -it lnd-node lncli --network=testnet newaddress np2wkh
```

Copy the address and visit https://testnet.coinfaucet.eu/en/.

The funding process takes a while since it's base layer settlement and testnet. But after around 15 minutes you should have a positive balance in your wallet 💰🎉

## Celebrate by getting a blockaccino 🎊☕🍻

Time to celebrate!! 🎉🎉

Sit back, relax and order yourself a tasty treat over at [Starblocks](https://starblocks.acinq.co/). ☕✨

A reminder that this application is in alpha stage. Please proceed with caution (very craefully). All bugs or suggested improvements can be reported to our github or communicated directly to us via slack.

## Debugging

A few useful tips & tricks for figuring out whats wrong.

### Remember to unlock

Every time you restart the container, you need to run *unlock* your wallet.

```
docker exec -u lnd -it lnd-node lncli unlock
```

### getinfo

```  
docker exec -u lnd -it lnd-node lncli --network=testnet getinfo
```

Useful for checking the status of your node. Make sure `"synced_to_chain": true` and `"num_active_channels"` is > 0.

### Check out the logs

```
docker logs --tail 100 -f lnd-node  
```

This will print the last `100` lines of log data and follow further log output.

### Try to connect a container

If you get into connection issues, it can be useful to run a second container and see if it can connect to your node.

```
docker run --rm -v lnd-data:/lnd -u lnd -it lnzap/lnd:latest lncli --network=testnet --rpcserver=<ip>:<port> getinfo
```

This helped me figure out I was missing my internet-ip from my certificate 😉👍

Enjoy.
