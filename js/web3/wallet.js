import { getWeb3Instance } from './web3.js';

$(function() {
    $('#connectbtn').on('click', async () => {
        console.log('connectButton clicked');
        const web3 = await getWeb3Instance();
        const accounts = await web3.eth.getAccounts();
        const walletAddress = accounts[0];
        if (walletAddress) {
            const truncatedAddress = truncateAddress(walletAddress, 4); // 頭4碼尾4碼
            $('#connectbtn').text(truncatedAddress);
        }
    });
});

function truncateAddress(address, maxLength) {
    if (address.length <= maxLength) {
        return address;
    } else {
        const prefix = address.substring(0, maxLength);
        const suffix = address.substring(address.length - maxLength);
        return prefix + '...' + suffix;
    }
}
