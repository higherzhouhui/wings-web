import {keccak256} from 'ethers/lib/utils';
import MerkleTree from 'merkletreejs';

// 运营给白名单，由前端维护
export const whitelist = [
  '0x009Ff5481AD29C419066F00296e0ce1F341A36Ba',
  '0x14FdF30C64DB6bF32199d983Bcb3f73BfD3E3C18',
  '0x3f8327FB1919958C8fF1b800DF47983b1819824b',
  '0x5Ef595b7A7719cd7D81A20e11C3d1cD387Fd4F83',
  '0x7F8595902Dde158B56010Ed9074E06bd2B64A70d',
  '0x8648B7A5091b94A9F720bBE24e39DC140DEfD620',
  '0x8b9CCcc525cd7af52aA731C54Fd9688d8679B1a0',
  '0xB43820C9DEe145E02C13633C8619e96479DBe8E4',
  '0x7519e73AFD1e6718E69F1c5405e59C9295BC883e',
  '0xb5533c3de4fcf48d70a11e6e6fd4f11482f64bc7',
  '0x5AEB5BE55Df09D250FD4825d5b22720D3237ee85',
  '0x435192d5569caa32bb90681db8c3e94b2b3f78f4',
  '0xA403359A74429383f15Fb88c37a6A3a66c23C7e1',
];

const getMerkleProof = (address: string) => {
  const leafNodes = whitelist.map((addr) => keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, keccak256, {sortPairs: true});
  const merkleRoot = merkleTree.getHexRoot();

  const hashedAddress = keccak256(address);
  const proof = merkleTree.getHexProof(hashedAddress);
  // eslint-disable-next-line no-console
  console.log(merkleTree.getRoot(), 'merkleTree.getRoot');
  // eslint-disable-next-line no-console
  console.log(merkleRoot, 'merkleTree.getHexRoot');
  // eslint-disable-next-line no-console
  console.log(proof, 'proof');
  // eslint-disable-next-line no-console
  console.log(address, 'address');
  return proof;
};

export {getMerkleProof};
