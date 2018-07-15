var abi = [{
    "constant": false,
    "inputs": [],
    "name": "inEmergency",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "noEmergency",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
        "name": "_hashIpfs",
        "type": "string"
      },
      {
        "name": "_tags",
        "type": "bytes32[]"
      },
      {
        "name": "_tags_string",
        "type": "string"
      }
    ],
    "name": "storeData",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
        "name": "_hashIpfs",
        "type": "string"
      },
      {
        "name": "_tags",
        "type": "bytes32[]"
      },
      {
        "name": "_tags_string",
        "type": "string"
      }
    ],
    "name": "storeDataVideo",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "addressToHash",
    "outputs": [{
      "name": "",
      "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "addressToHashVideo",
    "outputs": [{
      "name": "",
      "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "count",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "countVideo",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getHashArrayByAddress",
    "outputs": [{
      "name": "",
      "type": "bytes32[]"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
      "name": "_tag",
      "type": "bytes32"
    }],
    "name": "getHashArrayByTag",
    "outputs": [{
      "name": "",
      "type": "bytes32[]"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
      "name": "_hash",
      "type": "bytes32"
    }],
    "name": "getTagsArrayByHash",
    "outputs": [{
      "name": "",
      "type": "bytes32[]"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "bytes32"
    }],
    "name": "hashToDetail",
    "outputs": [{
        "name": "hashIpfs",
        "type": "string"
      },
      {
        "name": "timeStamp",
        "type": "uint256"
      },
      {
        "name": "auther",
        "type": "address"
      },
      {
        "name": "number",
        "type": "uint256"
      },
      {
        "name": "tags",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "bytes32"
    }],
    "name": "hashToDetailVideo",
    "outputs": [{
        "name": "hashIpfs",
        "type": "string"
      },
      {
        "name": "timeStamp",
        "type": "uint256"
      },
      {
        "name": "auther",
        "type": "address"
      },
      {
        "name": "number",
        "type": "uint256"
      },
      {
        "name": "tags",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "bytes32"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "hashToTags",
    "outputs": [{
      "name": "",
      "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "isEmergency",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
        "name": "",
        "type": "bytes32"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "tagToHash",
    "outputs": [{
      "name": "",
      "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

var myContractAddress = "0xbacce9c56ff6cba04de9f6c703bea74c3ad5cd09";
var myContractInstance;

var web3Provider;
var photoContainerHTML;
var videoContainerHTML;




// set web3 instance at first
if (typeof web3 !== 'undefined') { // Is there an injected web3 instance?
  web3Provider = web3.currentProvider;
  web3 = new Web3(web3Provider);
} else {
  // set the provider you want from Web3.providers
  web3Provider = new Web3.providers.HttpProvider("http://localhost:8545");
  web3 = new Web3(web3Provider);
}

myContractInstance = web3.eth.contract(abi).at(myContractAddress);
console.log(myContractInstance);



// Initialize UI
web3.eth.getAccounts(function(error, accounts) {
  if (error) {
    console.log(error);
  } else {
    console.log(accounts);
    myContractInstance.count(accounts[0], function(error, _count) {
      if (error) {
        console.log(error);
      } else {
        $("#contract_address").html(myContractInstance.address);
        $("#number_of_photos").html(_count.toString());
        console.log(_count.toString());
        myContractInstance.countVideo(accounts[0], function(error, _count_videos) {
          if (error) {
            console.log(error);
          } else {
            $("#number_of_videos").html(_count_videos.toString());
          }
        });
      }
    });
  }
});


// Upload functionality for pictures
function upload() {
  var reader = new FileReader();
  var photo = document.getElementById("photo");
  reader.readAsArrayBuffer(photo.files[0]); // Read Provided File
  reader.onloadend = function() {
    var ipfs = window.IpfsApi('localhost', 5001); // Connect to IPFS
    var buf = buffer.Buffer(reader.result); // Convert data into buffer
    ipfs.files.add(buf, function(err, result) { // Upload buffer to IPFS
      if (err) {
        console.error(err);
      } else {
        console.log(result);
        var url = `http://localhost:8080/ipfs/${result[0].hash}`
        console.log(`Url ==> ${url}`);
        $("#url").html(url);
        $("#url").attr("href", url);
        $("#output").attr("src", url);

        var _hash = result[0].hash;
        var _tags = $("#tagsPhoto").val().split(",");
        var _tags_raw = $("#tagsPhoto").val();
        console.log(_hash);
        console.log(_tags);
        console.log(_tags_raw);

        web3.eth.getAccounts(function(error, accounts) {
          if (error) {
            console.log(error);
          } else {
            myContractInstance.storeData.sendTransaction(_hash, _tags, _tags_raw, {
              from: accounts[0]
            }, function(error, data_set) {
              if (error) {
                console.log(error);
              } else {
                console.log(data_set);
              }
            });
          }
        });
      }
    });
  }
}

// View functionality for pictures
function getPhotos() {
  photoContainerHTML = "";

  var stock_length = Number($("#number_of_photos").text());
  console.log(stock_length);

  for (var i = 0; i < stock_length; i++) {
    getPhotoWithIndex(i);
  }
}


function getPhotoWithIndex(index) {
  web3.eth.getAccounts(function(error, _accounts) {
    if (error) {
      console.log(error);
    } else {
      console.log(_accounts);
      myContractInstance.addressToHash(_accounts[0], index, function(error, _hash) {
        var photo_hash;
        if (error) {
          console.log(error);
        } else {
          console.log(_hash);
          photo_hash = _hash;
          myContractInstance.hashToDetail(photo_hash, function(error, result) {
            if (error) {
              console.log(error);
            } else {
              photoContainerHTML += `<img src=\"http://localhost:8080/ipfs/${result[0]}\" width=\"250px\" style=\"float: right\">`;;
              var d = new Date(result[1] * 1000);
              photoContainerHTML += "<p> Registerd Timestamp: " + d + "</p>";
              photoContainerHTML += "<p> Author: " + result[2] + "</p>";
              var n = result[3].toNumber() + 1;
              photoContainerHTML += "<p> PhotoNo: " + n + "</p>";

              console.log(photoContainerHTML);
              console.log(result[4]);
              photoContainerHTML += "<p> Tags: " + result[4] + "</p>";
              photoContainerHTML += "<p> Url: <a href=http://localhost:8080/ipfs/" + result[0] + ">Photo Link</a></p><hr>"
              $("#photoContainer").html(photoContainerHTML);

            }

          });
        }
      });
    }
  });

}



// Uplaoding video
function uploadVideo() {
  var reader = new FileReader();
  var video = document.getElementById("video");
  reader.readAsArrayBuffer(video.files[0]); // Read Provided File
  reader.onloadend = function() {
    var ipfs = window.IpfsApi('localhost', 5001); // Connect to IPFS
    var buf = buffer.Buffer(reader.result); // Convert data into buffer
    ipfs.files.add(buf, function(err, result) { // Upload buffer to IPFS
      if (err) {
        console.error(err);
      } else {
        console.log(result);
        var url = `http://localhost:8080/ipfs/${result[0].hash}`
        console.log(`Url ==> ${url}`);
        $("#urlVideo").html(url);
        $("#urlVideo").attr("href", url);
        $("#outputVideo").attr("src", url);
        $("#outputVideo").attr("controls", true);

        var _hash = result[0].hash;
        var _tags = $("#tagsVideo").val().split(",");
        var _tags_raw = $("#tagsVideo").val();
        console.log(_hash);
        console.log(_tags);
        console.log(_tags_raw);

        web3.eth.getAccounts(function(error, accounts) {
          if (error) {
            console.log(error);
          } else {
            myContractInstance.storeDataVideo.sendTransaction(_hash, _tags, _tags_raw, {
              from: accounts[0]
            }, function(error, data_set) {
              if (error) {
                console.log(error);
              } else {
                console.log(data_set);
              }
            });
          }
        });


      }
    });
  }
}

// View functionality for videos
function getVideos() {
  videoContainerHTML = "";

  var stock_length = Number($("#number_of_videos").text());
  console.log(stock_length);

  for (var i = 0; i < stock_length; i++) {
    getVideoWithIndex(i);
  }
}


function getVideoWithIndex(index) {
  web3.eth.getAccounts(function(error, _accounts) {
    if (error) {
      console.log(error);
    } else {
      console.log(_accounts);
      myContractInstance.addressToHashVideo(_accounts[0], index, function(error, _hash) {
        var photo_hash;
        if (error) {
          console.log(error);
        } else {
          console.log(_hash);
          photo_hash = _hash;
          myContractInstance.hashToDetailVideo(photo_hash, function(error, result) {
            if (error) {
              console.log(error);
            } else {
              videoContainerHTML += `<video src=\"http://localhost:8080/ipfs/${result[0]}\" width=\"250px\" style=\"float: right\" controls></video>`;
              var d = new Date(result[1] * 1000);
              videoContainerHTML += "<p> Registerd Timestamp: " + d + "</p>";
              videoContainerHTML += "<p> Author: " + result[2] + "</p>";
              var n = result[3].toNumber() + 1;
              videoContainerHTML += "<p> VideoNo: " + n + "</p>";


              console.log(result[4]);
              videoContainerHTML += "<p> Tags: " + result[4] + "</p>";
              videoContainerHTML += "<p> Url: <a href=http://localhost:8080/ipfs/" + result[0] + ">Video Link</a></p><hr>"
              console.log(videoContainerHTML);
              $("#videoContainer").html(videoContainerHTML);

            }

          });
        }
      });
    }
  });

}

// Picture search functionality
var searchContainerHTML = "";
var hash_picture;

function searchPicture() {
  searchContainerHTML = "";
  var _tagname = $("#tagInput").val();

  myContractInstance.getHashArrayByTag(_tagname, function(error, _array_of_hash) {
    if (error) {
      console.log(error);
    } else {
      console.log(_array_of_hash);
      for (var i = 0; i < _array_of_hash.length; i++) {
        search(i);
      }
    }
  });
}


function search(index) {
  console.log($("#tagInput").val());
  var tagname = $("#tagInput").val();

  myContractInstance.tagToHash(tagname, index, function(error, _hash_array) {
    if (error) {
      console.log(error);
    } else {
      console.log(_hash_array);
      hash_picture = _hash_array;
      return constructHash();
    }
  });
}

function constructHash() {
  console.log(hash_picture);
  myContractInstance.hashToDetail(hash_picture, function(error, result) {
    if (error) {
      console.log(error);
    } else {
      console.log(result[0]);

      searchContainerHTML += `<p><a href=http://localhost:8080/ipfs/${result[0]}>` + result[0] + "</a></p>";
			console.log(searchContainerHTML);
      $("#searchContainer").html(searchContainerHTML);
    }
  });
}


// Video search functionality
var searchContainerVideoHTML = "";
var hash_video;

function searchVideo() {
  searchContainerVideoHTML = "";

  var _tagname = $("#tagInputVideo").val();

  myContractInstance.getHashArrayByTag(_tagname, function(error, _array_of_hash) {
    if (error) {
      console.log(error);
    } else {
      console.log(_array_of_hash);
      for (var i = 0; i < _array_of_hash.length; i++) {
        searchVideoFunc(i);
      }
    }
  });
}


function searchVideoFunc(index) {
  console.log($("#tagInputVideo").val());
  var tagname = $("#tagInputVideo").val();

  myContractInstance.tagToHash(tagname, index, function(error, _hash_array) {
    if (error) {
      console.log(error);
    } else {
      console.log(_hash_array);
      hash_video = _hash_array;
      return constructHashVideo();
    }
  });
}

function constructHashVideo() {
  console.log(hash_video);
  myContractInstance.hashToDetailVideo(hash_video, function(error, result) {
    if (error) {
      console.log(error);
    } else {
      console.log(result[0]);

      searchContainerVideoHTML += `<p><a href=http://localhost:8080/ipfs/${result[0]}>` + result[0] + "</a></p>";
			console.log(searchContainerVideoHTML);
      $("#searchContainer").html(searchContainerVideoHTML);
    }
  });
}


// uPort functionality
var uportconnect = window.uportconnect;
var uport = new uportconnect.Connect('Proof of Existence Picture/Video Dapp', {
  clientId: '2okLZ2CApFhyDrM6KZyEzftptQtKatX429n',
  network: 'ropsten'
});

uport.requestCredentials().then((credentials) => {
  console.log(credentials);
  $("#user_name").html(credentials.name);
});
