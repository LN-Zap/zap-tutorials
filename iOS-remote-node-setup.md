# Zap iOS: Remote Node setup with Zap Connect tutorial
Yo. We recently open sourced our Zap iOS app along with launching a public alpha. The application currently has on-device LND support toggled off (it is not stable enough quite yet), but we do support connecting to a remote node. In this tutorial I will walk you through how to setup an LND node on a Digital Ocean droplet and connect it to your Zap iOS app in under 10 minutes.

## Create a Digital Ocean Droplet
Once you have a Digital Ocean account create a droplet. Select Ubuntu under "Distributions" and a 1GB memory machine ($5/month).

<p align='center'>
  <img src='https://i.imgur.com/ojpDbL2.png' alt='screenshot' />
</p>

After you click "Create" you should see your new droplet in your Dashboard view.

Once you create a Digital Ocean droplet you can follow this guide here to connect to your new droplet via `ssh`.

## Downloading Go
Now that we have a droplet and are connected via ssh, let's download the required dependencies.

First let's ensure we have the latest security updates:
```
$ sudo apt-get update
$ sudo apt-get -y upgrade
```

Next , let's download Go 1.10:
```
$ wget https://dl.google.com/go/go1.10.linux-amd64.tar.gz
```
Next, let's extract the files from the downloaded link:
```
$ sudo tar -xvf go1.10.linux-amd64.tar.gz
```
Lastly let's move the go folder to `/usr/local`:
```
$ sudo mv go /usr/local
```

## Setup our environment
In order to use Go we have to make sure our `GOPATH`, `GOROOT` and `PATH` environment variables are setup correctly.

First we'll setup `GOROOT`, which is where Go is installed on our machine. For us that's `/usr/local/go`:
```
$ export GOROOT=/usr/local/go
```

Next we'll setup our `GOPATH`. This is the location of our work directory. I will set up a folder at `/~/gocode`, feel free to replace the location/folder with your own preference:
```
$ export GOPATH=$HOME/gocode
```
Lastly we'll setup our `PATH` to access the binary system-wide:
```
$ export PATH=$GOPATH/bin:$GOROOT/bin:$PATH
```
We've only set these environment variables for the current session. If you'd like to make these permanent (recommended but not required) you can edit `~/.profile with nano`:
```
$ nano ~/.profile
```
An example `~/.profile` looks like this:
```
# ~/.profile: executed by Bourne-compatible login shells.
if [ "$BASH" ]; then
if [ -f ~/.bashrc ]; then
. ~/.bashrc
fi
fi
mesg n || true
export GOROOT=/usr/local/go
export GOPATH=$HOME/gocode
export PATH=$GOPATH/bin:$GOROOT/bin:$PATH
```
## Verify Go installation
Just to make sure everything went ok we can run `go version` to ensure we have go 1.10 installed:
```
$ go version
go version go1.10 linux/amd64
```
You can verify the environment variables you set with `go env`:
```
$ go env
GOARCH="amd64"
GOBIN=""
GOCACHE="/root/.cache/go-build"
GOEXE=""
GOHOSTARCH="amd64"
GOHOSTOS="linux"
GOOS="linux"
GOPATH="/root/gocode"
GORACE=""
GOROOT="/usr/local/go"
GOTMPDIR=""
GOTOOLDIR="/usr/local/go/pkg/tool/linux_amd64"
GCCGO="gccgo"
CC="gcc"
CXX="g++"
CGO_ENABLED="1"
CGO_CFLAGS="-g -O2"
CGO_CPPFLAGS=""
CGO_CXXFLAGS="-g -O2"
CGO_FFLAGS="-g -O2"
CGO_LDFLAGS="-g -O2"
PKG_CONFIG="pkg-config"
GOGCCFLAGS="-fPIC -m64 -pthread -fno-caret-diagnostics -Qunused-arguments -fmessage-length=0 -fdebug-prefix-map=/tmp/go-build005525529=/tmp/go-build -gno-record-gcc-switches"
```
## Setting up LND ([Source](https://github.com/lightningnetwork/lnd/blob/master/docs/INSTALL.md))
First let's install `make`, we will need it to install `LND`:
```
apt install make
```

Run the following commands to install `LND`, `lncli` and all related dependencies:
```
$ go get -d github.com/lightningnetwork/lnd
$ cd $GOPATH/src/github.com/lightningnetwork/lnd
$ make && make install
```

Before we start `LND`, let's start a terminal session via `screen`. Screen allows us to use multiple windows. Enter the following command to start screen:
```
$ screen
```

It will give you some copyright info, helpful text, etc. that looks like this:
```
Screen version 4.03.01 (GNU) 28-Jun-15


Copyright (c) 2010 Juergen Weigert, Sadrul Habib Chowdhury
Copyright (c) 2008, 2009 Juergen Weigert, Michael Schroeder, Micah Cowan, Sadrul Habib Chowdhury
Copyright (c) 1993-2002, 2003, 2005, 2006, 2007 Juergen Weigert, Michael Schroeder
Copyright (c) 1987 Oliver Laumann


This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 3, or (at your
option) any later version.


This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General
Public License for more details.


You should have received a copy of the GNU General Public License along with this program (see the file COPYING); if not, see http://www.gnu.org/licenses/, or contact Free Software Foundation, Inc., 51
Franklin Street, Fifth Floor, Boston, MA  02111-1301  USA.


Send bugreports, fixes, enhancements, t-shirts, money, beer & pizza to screen-devel@gnu.org




Capabilities:
+copy +remote-detach +power-detach +multi-attach +multi-user +font +color-256 +utf8 +rxvt +builtin-telnet
```

Simply hit `enter` or `space` to continue.

Now you can decide whether you'd like to run LND paired with your own Bitcoin full node (Bitcoin Core or BTCD) or if you'd like to run LND in its light client mode. To keep things brief this tutorial will use LND  in light client mode on testnet. If you'd like to explore other options see [LND's installation guide](https://github.com/lightningnetwork/lnd/blob/master/docs/INSTALL.md).

Let's run the following line to start LND:
```
$ lnd --bitcoin.active --bitcoin.testnet --debuglevel=debug --bitcoin.node=neutrino --neutrino.connect=206.189.72.180:18333 --autopilot.active --rpclisten=0.0.0.0:10009
```
The above line starts `LND` on Bitcoin's testnet, signals for light client mode, connects to a full node hosted at `206.189.72.180:18333`, turns on LND's [autopilot](https://github.com/lightningnetwork/lnd/tree/master/autopilot) feature, and lastly makes sure we are listening for gRPC connections.

After executing the above line you will see your machine prompt you to use `lncli create` or `lncli unlock` to get started. To do so let's detach from our screen session by hitting `ctrl-a d`.

Now enter the following command:

`lncli create`

You will see the following output. Create a password for your wallet and a passphrase for your cipher seed. Then make sure you write down the LND cipher seed you're given:
```
Input wallet password:
Confirm wallet password:

Do you have an existing cipher seed mnemonic you want to use? (Enter y/n): n


Your cipher seed can optionally be encrypted.
Input your passphrase you wish to encrypt it (or press enter to proceed without a cipher seed passphrase):


Generating fresh cipher seed...


!!!YOU MUST WRITE DOWN THIS SEED TO BE ABLE TO RESTORE THE WALLET!!!


---------------BEGIN LND CIPHER SEED---------------
1. above     2. useless   3. stick     4. dish
5. prize     6. under     7. cricket   8. style
9. fault    10. mix      11. expect   12. demand
13. reunion  14. smart    15. churn    16. volcano
17. item     18. fringe   19. harsh    20. fiction
21. another  22. certain  23. dry      24. mass
---------------END LND CIPHER SEED-----------------


!!!YOU MUST WRITE DOWN THIS SEED TO BE ABLE TO RESTORE THE WALLET!!!


lnd successfully initialized!
```

## Zap Connect
While our LND node is syncing let's setup Zap Connect. Zap Connect is a simple tool to transfer your cert, macaroon and IP to the iOS app for remote connection.

To install Zap Connect run the following commands:
```
$ go get -d github.com/LN-Zap/zapconnect
$ cd $GOPATH/src/github.com/LN-Zap/zapconnect
$ go get ./...
$ go install -v ./...
```

Now simply run `zapconnect` to generate the QRCode we'll scan from our iPhone:
```
$ zapconnect
```
This will generate a QRCode. Depending on your screen size use `cmd +` and `cmd -` to adjust the size of the QRCode:

<p align='center'>
  <img src='https://i.imgur.com/BPSiaW9.png' alt='screenshot' />
</p>

## Connecting to our node with Zap iOS
Now for the part we've all been waiting for: using a remote Lightning node from our iPhone.

Open the Zap app and select "Connect remote node":
<p align='center'>
  <img src='https://i.imgur.com/6DLTewp.png' alt='screenshot' width='300' />
</p>

Now you can select "scan" and scan your Zap Connect QRCode. This will populate the app with your cert and macaroon:
<p align='center'>
  <img src='https://i.imgur.com/gfYekV5.jpg' alt='screenshot' width='300' />
</p>

Verify that the `address` field is populated with your droplet's IP followed by `:10009`. Your IP can be found at your Digital Ocean dashboard:
<p align='center'>
  <img src='https://i.imgur.com/Azx2fzb.png' alt='screenshot' />
</p>

Once you've scanned your Zap Connect QRCode and you've entered the address field click "Connect". Zap will also remember your connect information so you only have to setup your remote node once. A successful connection will take you into the Zap iOS application:
<p align='center'>
  <img src='https://i.imgur.com/Y9U0Hbm.png' alt='screenshot' width='300' />
</p>

## Celebrate 🎊 🍻
This step is absolutely mandatory. You now have a 24/7 online remote Lightning Network node set up with an application to drive it remotely from your iPhone.

Now future versions of the app will have LND running on the device, technical details will be abstracted, it will be tailored towards a mainstream audience, etc. But you don't care. You couldn't wait. You want to experience the future. You want to help push Lightning forward. For that we thank you so much.

A reminder that this application is in alpha stage. Please proceed with caution (very craefully). All bugs or suggested improvements can be reported to our github or communicated directly to us via slack.

Enjoy. Cheers friends.
