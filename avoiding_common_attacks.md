# Avoiding Common Attacks

***

## Integer Overflow and/or Underflow
Integer overflow/underflow should be always avoided. To prevent this attack, I introduced library called  **"Safe Math"** from Open Zeppeline into my dApp. Using this library for uint is simple and a battle-tested safe method.  
`pragma solidity ^0.4.23; 
import "./SafeMath.sol"; 
contract ProofOfExistence { 
using SafeMath for uint256;`

***

If my project had `transfer` function, I would inplement "withdraw pattern" to prevent Reentrancy attack by evil contract.


