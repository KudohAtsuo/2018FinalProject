pragma solidity ^0.4.23;

import "./SafeMath.sol";


contract ProofOfExistence {

  ///  SafeMath library to prevent uint overflow
  using SafeMath for uint256;
  /**  @title This contract aims to register and verify uploaded pictures into IPFS by address of sender.
  *    @author Atsuo Kudoh
  */

  address public owner;
  bool public isEmergency;



  struct Pictures {
    string hashIpfs;
    uint timeStamp;
    address auther;
    uint number;
    string tags;
  }

  struct Videos {
    string hashIpfs;
    uint timeStamp;
    address auther;
    uint number;
    string tags;
  }


  mapping (bytes32 => bytes32[]) public hashToTags;
  mapping (bytes32 => bytes32[]) public tagToHash;

  mapping (address => bytes32[]) public addressToHash;
  mapping (bytes32 => Pictures) public hashToDetail;
  mapping (address => uint) public count;

  mapping (address => bytes32[]) public addressToHashVideo;
  mapping (bytes32 => Videos) public hashToDetailVideo;
  mapping (address => uint) public countVideo;





  ///  @notice constructor sets owner of this contract and number of authers registered so far.
  constructor() public{
    owner = msg.sender;
  }

  ///  @notice  modifier that requires owner
  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  ///  @notice modifier of circuitbreaker
  modifier circuitBreaker() {
    require(!isEmergency);
    _;
  }

  /**  @notice function that writes the infomation including msg.sendre, hush, timeStamp and some comment
   *   @param _hashIpfs The hush returned from IPFS
   *   @param _tags The tag array attached from the user to the picture or videoContainer
   *   @param _tags_string The tags separeted by ","
   */
  function storeData(string _hashIpfs, bytes32[] _tags, string _tags_string) public circuitBreaker{
    hashToDetail[keccak256(_hashIpfs)] = Pictures(_hashIpfs, block.timestamp, msg.sender, count[msg.sender], _tags_string);

    count[msg.sender] = count[msg.sender].add(1);

    addressToHash[msg.sender].push(keccak256(_hashIpfs));

    hashToTags[keccak256(_hashIpfs)] = _tags;

    for (uint i=0;i<_tags.length;i++){
      tagToHash[_tags[i]].push(keccak256(_hashIpfs));
    }

  }


  ///  @notice  function that writes the infomation including msg.sendre, hush, timeStamp and some comment
  function storeDataVideo(string _hashIpfs, bytes32[] _tags, string _tags_string) public circuitBreaker{
    hashToDetailVideo[keccak256(_hashIpfs)] = Videos(_hashIpfs, block.timestamp, msg.sender, countVideo[msg.sender], _tags_string);


    countVideo[msg.sender] = countVideo[msg.sender].add(1);

    addressToHashVideo[msg.sender].push(keccak256(_hashIpfs));

    hashToTags[keccak256(_hashIpfs)] = _tags;

    for (uint i=0;i<_tags.length;i++){
      tagToHash[_tags[i]].push(keccak256(_hashIpfs));
    }

  }


  ///  getter function to get an array of sha3 hash of ipfs hashs
  function getHashArrayByAddress() constant public returns(bytes32[]) {
    return addressToHash[msg.sender];
  }

  ///  getter function to get an array of Tags
  function getTagsArrayByHash(bytes32 _hash) constant public returns(bytes32[]) {
    return hashToTags[_hash];
  }

  ///  getter function to get an array of keccakIPFS of hashs by tag
  function getHashArrayByTag(bytes32 _tag) constant public returns(bytes32[]){
    return tagToHash[_tag];
  }




  ///  function to turn on ciruit breaker
  function inEmergency() public onlyOwner {
    isEmergency = true;
  }

  ///  function to turn off ciruit breaker
  function noEmergency() public onlyOwner {
    isEmergency = false;
  }

}
