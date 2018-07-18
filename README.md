# "Proof of Existence Picture/Video dApp" README

## Description  
This application allows users to register and obtain time stamped picture/video.

All image and video data are stored in **IPFS (Inter Planetary File System)** in order to become decentralized. The IPFS "Qm" hash and any additional information are stored in a smart contract that can be referenced at a later date to verify the authenticity.

***

## User Stories  
A user logs into the web app by **uPort**. The user can upload some data (pictures/video) to the app, as well as add a list of tags indicating the contents of the data.

In connection with Ropsten testnetwork by **MetaMask**, the smart contract reads the user’s address and shows the data that they have previously uploaded.

Users can retrieve necessary reference data about their uploaded items to allow other people to verify the data authenticity.

***

## How to set up
This dApp contract is already deployed on **Rinkeby** public test network. Please make sure your MetaMask is poining to Rinkeby and have some fake ETH of RINKEBY on your account to pay for transaction fee. If you do not yet have any deposit, simply push "BUY" button. Go to Faucet of Rinkeby, then push tweet replacing 0x0 address with your address. Copy paste url of the tweet into the textbox will give you 3 ETH for free.

If you need install IPFS. Please follow install guide [IPFS](https://ipfs.io/docs/install/).

To use uPort, please install the latest mobile client for your smartphone: [uPort iOS](https://itunes.apple.com/us/app/uport-identity-wallet-ethereum/id1123434510?mt=8) | [uPort Android](https://play.google.com/store/apps/details?id=com.uportMobile)

**First of all copy/clone my project folder from my GitHub repo**  
`git clone https://github.com/KudohAtsuo/2018FinalProject.git`
 
1. To set up IPFS damon, open a terminal and type commands `ipfs init` and `ipfs daemon`. Then stop it by `Ctrl+C` and type these 2 commnads one by one for CORS configuration:  
`ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "GET", "POST", "OPTIONS"]'`  
`ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*"]'`  
launch ipfs daemon again by command `ipfs daemon` 
2. Open another terminal window and change directory into the "src" directory that contains frontend files, index.html, js and css folder. I put all the necessary dependency libraries in the form of "min.js". So you dont need npm init etc. I am a big fan of min.js. :P
3. Launch any **local deveopment server** software of your choice. Personally, I prefer [live-server](https://www.npmjs.com/package/live-server) so type the command `live-server` in the "src" directory.
4. Launch MetaMask and set the network to Rinkeby testnet.
5. When you log in, QRcode will pop up! Read it by your uPort QRcode reader. 
6. Set up is finished!
 

### Notice:  
1. **All frontend files has been deployed on IPFS**. So after launching IPFS daemon, you can view directly from your browser without using local server. Just type in URL `http://localhost:8080/ipfs/QmczykYZn66WbpZKXyQZYTeEmGrynfVehXLLfCVU8MQC4w/` This address will show index.html, the DApp UI.
2. This dApp uses IPFS API of "add" function, so **your uploaded data may be cleaned up in 2 or 3 weeks by IPFS "garbage collector"**. Same as the address of index.html above might be deleted if garbage collector comes :D

***

## How to use this dApp
This dApp consists of 5 tabs, "Upload(Picture)", "Upload(Video)", "View(Picture)", "View(Video)" and "Search".

### Upload(Picture) 
1. Choose an **image** file like .png from your computer by clicking file button.
2. Set tags separated by comma(,).
3. Then click upload button. 

### Upload(Video)
1. Choose a **movie** file like .mp4 from your computer by clicking file button.
2. Set tags separated by comma(,).
3. Then click upload button. 

### View(Picture)
1. Click "View" button after some pictures are uploaded.

### View(Video)
1. Click "View" button after some movies are uploaded.

### Search
1. Type in a tag that you set when pictures or movies are uploaded.
2. Click "Search" button.  

***

## Thank you for reading so far!



