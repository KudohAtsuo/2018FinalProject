var ProofOfExistence = artifacts.require("ProofOfExistence");

module.exports = function(deployer) {
  deployer.deploy(ProofOfExistence, {gas: 2000000});
};
