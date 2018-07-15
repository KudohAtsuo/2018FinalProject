var ProofOfExistence = artifacts.require("ProofOfExistence");

// Please set ganache-cli as this "ganache-cli -l 800000000 console" to raise MAX Gas limitation.
contract("ProofOfExistence", function(accounts){
  // first to check state of 'isEmergency' because modifier 'circuitBreaker' is used in the function
  it("should be false", function(){
    return ProofOfExistence.deployed().then(function(instance){
      return instance.isEmergency();
    }).then(function(result){
      assert.equal(result, false, "Initial isEmergency was not correctly set.")
      });
    });

  // test the functionality of the setter function 'storeData' and also check the mapping 'count'
  it("should be 1", function() {
    var poe;

    return ProofOfExistence.deployed().then(function(instance){
      poe = instance;
      return poe.storeData("QmWmyoMoctfbAaiEs2G46gpeUmhqFRDW6KWo64y5r581Vz", ["sky", "ethereum"], "sky,ethereum", {from: accounts[0], gas: 100000000});
    }).then(function(){
      return poe.count(accounts[0]);
    }).then(function(count){
      assert.equal(count.toNumber(), 1, "Check the gas limit of ganache-cli. Put \"ganache-cli -l 45000000000 console\" in the terminal when you launch.")
    });
  });

  // test if the hash of ipfs is set in the struct
  it("should be \"QmWmyoMoctfbAaiEs2G46gpeUmhqFRDW6KWo64y5r581Vz\"", function(){
    var poe;
    var hash256;

    return ProofOfExistence.deployed().then(function(instance){
      poe = instance;
      return web3.sha3("QmWmyoMoctfbAaiEs2G46gpeUmhqFRDW6KWo64y5r581Vz");
    }).then(function(sha3hash){
      hash256 = sha3hash;
      return poe.hashToDetail(hash256);
    }).then(function(struct){
      return struct[0];
    }).then(function(hash){
      assert.equal(hash, "QmWmyoMoctfbAaiEs2G46gpeUmhqFRDW6KWo64y5r581Vz", "Hash of ipfs data was not set.")
    });
  });

  // test if the auther of the ipfs hash is set in the struct
  it("should be coinbase address.", function(){
    var poe;

    return ProofOfExistence.deployed().then(function(instance){
      poe = instance;
      return web3.sha3("QmWmyoMoctfbAaiEs2G46gpeUmhqFRDW6KWo64y5r581Vz");
    }).then(function(sha3hash){
      hash256 = sha3hash;
      return poe.hashToDetail(hash256);
    }).then(function(struct){
      return struct[2];
    }).then(function(auther){
      assert.equal(auther, accounts[0], "Address of msg.sender(coinbase account) was not set.")
    });
  });

  // test if the mapping 'hashToTags' functions as expected
  it("should be the tag of index\"1\" in array [\"sky\", \"ethereum\"]", function(){
    var poe;

    return ProofOfExistence.deployed().then(function(instance){
      poe = instance;
      return web3.sha3("QmWmyoMoctfbAaiEs2G46gpeUmhqFRDW6KWo64y5r581Vz");
    }).then(function(hashSha3){
      return poe.hashToTags(hashSha3, 1);
    }).then(function(tagInArray){
      assert.equal(web3.toUtf8(tagInArray), "ethereum", "Parameter array was not set.")
    });
  });

  // test if mapping 'addressToHash' records sha3 hash
  it("should be the array of sha3 hash of ipfs address", function(){
    var poe;

    return ProofOfExistence.deployed().then(function(instance){
      poe = instance;
      return poe.addressToHash(accounts[0], 0);
    }).then(function(array){
      assert.equal(array, web3.sha3("QmWmyoMoctfbAaiEs2G46gpeUmhqFRDW6KWo64y5r581Vz"), "Bytes32 array was not set.")
    });
  });

  // to check getter 'getHashArrayByAddress'
  it("should be the array of sha3 hash of ipfs address", function(){
    var poe;

    return ProofOfExistence.deployed().then(function(instance){
      poe = instance;
      return poe.getHashArrayByAddress.call();
    }).then(function(array){
      assert.equal(array, web3.sha3("QmWmyoMoctfbAaiEs2G46gpeUmhqFRDW6KWo64y5r581Vz"), "Bytes32 array was not set.")
    });
  });

  // test if getter 'getTagsArray' functions as expected
  it("should be array [\"sky\", \"ethereum\"]", function(){
    var poe;

    return ProofOfExistence.deployed().then(function(instance){
      poe = instance;
      return web3.sha3("QmWmyoMoctfbAaiEs2G46gpeUmhqFRDW6KWo64y5r581Vz");
    }).then(function(hashSha3){
      return poe.getTagsArrayByHash(hashSha3);
    }).then(function(array){
      var newArray = [];
      for (i=0;i<array.length;i++){
        newArray.push(web3.toUtf8(array[i]));
      }
      return newArray;
    }).then(function(newArray){
      assert.equal(web3.sha3(newArray), web3.sha3(["sky", "ethereum"]), "Bytes32 array was not set.")
    });
  });

  // test of array in the struct of Pictures
  it("should be string \"sky,ethereum\"", function(){
    var poe;

    return ProofOfExistence.deployed().then(function(instance){
      poe = instance;
      return web3.sha3("QmWmyoMoctfbAaiEs2G46gpeUmhqFRDW6KWo64y5r581Vz");
    }).then(function(sha3hash){
      hash256 = sha3hash;
      return poe.hashToDetail(hash256);
    }).then(function(struct){
      return struct[4];
    }).then(function(tags){
      assert.equal(tags, "sky,ethereum", "Address of msg.sender(coinbase account) was not set.")
    });
  });

  // test the functionality of the setter function 'storeDataVideo' and also check the global mapping 'count'
  it("should be 1", function() {
    var poe;

    return ProofOfExistence.deployed().then(function(instance){
      poe = instance;
      return poe.storeDataVideo("QmUB3SonF95aUGZ5FCMgwSudz5KibMF2qU1FWXQ12zCJKG", ["IPFS", "sky"], "IPFS,sky", {from: accounts[0], gas: 100000000});
    }).then(function(){
      return poe.countVideo(accounts[0]);
    }).then(function(count){
      assert.equal(count.toNumber(), 1, "Check the gas limit of ganache-cli. Put \"ganache-cli -l 80000000 console\" when you launch.")
    });
  });

  // test of array in the struct of Videos
  it("should be ipfs hash \"QmUB3SonF95aUGZ5FCMgwSudz5KibMF2qU1FWXQ12zCJKG\"", function(){
    var poe;

    return ProofOfExistence.deployed().then(function(instance){
      poe = instance;
      return web3.sha3("QmUB3SonF95aUGZ5FCMgwSudz5KibMF2qU1FWXQ12zCJKG");
    }).then(function(sha3hash){
      hash256 = sha3hash;
      return poe.hashToDetailVideo(hash256);
    }).then(function(struct){
      return struct[0];
    }).then(function(hash){
      assert.equal(hash, "QmUB3SonF95aUGZ5FCMgwSudz5KibMF2qU1FWXQ12zCJKG", "IPFS hash was not set.")
    });
  });

  // test of mapping 'tagToHash'
  it("should be keccak256 hash of ipfs hash \"QmWmyoMoctfbAaiEs2G46gpeUmhqFRDW6KWo64y5r581Vz\"", function(){
    var poe;

    return ProofOfExistence.deployed().then(function(instance){
      poe = instance;
      return web3.sha3("QmWmyoMoctfbAaiEs2G46gpeUmhqFRDW6KWo64y5r581Vz");
    }).then(function(sha3hash){
      _hash256 = sha3hash;
      return poe.tagToHash("sky", 0);
    }).then(function(_hash_picture){
      assert.equal(_hash256, _hash_picture, "IPFS hash of the video was not set.")
    });
  });



});
