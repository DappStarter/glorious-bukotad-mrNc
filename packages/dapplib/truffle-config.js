require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remain exchange hidden knife blue situate'; 
let testAccounts = [
"0x3f733bcc95bd7ae10e025376795baec09ed62f9c67d46889d38dfffefa12a59d",
"0x95d9546c7959bb222be2765a220623b01b783f3ff7b1f33ab6a1cd7cc7b24c0c",
"0x516b8869a0a815f01738db8e093e83bf7891678ff2d2a5a9dd9ce1721556aee0",
"0x7e18769ae6b1d49b82bc0250882f01819bb003219a21c247185f6add04fb5d88",
"0x8975c1c73bfa6dd867bc264e968f3a409cddc7a2a3bb0e316158ef005a87185a",
"0xdfd42a5f4f496269116a4c3a609d44511dceeb86288e70242d886d65f3d4045e",
"0x89d71c8db2b2bfbe3f4f41a1ce4d8f1a569d4c62a87215e65d7021db17b2845c",
"0xc51c37d08716838799b3674417b999fdce115f6313935d96f423c7f0897cee25",
"0x96d9567fa5ea08551e82be5398e4cda2e032c6b2d03cfd3971f01d363e2062aa",
"0x55121a4bd7c622e35713c6564c4f2ced004382856b1429f6463742b6b864831a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

