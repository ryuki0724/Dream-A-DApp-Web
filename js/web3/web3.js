let web3Instance;

// Helper function to detect mobile
const isMobile = () => {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

const showToast = (message) => {
    const toastEl = document.getElementById('my-toast');
    const toast = new bootstrap.Toast(toastEl);

    toastEl.querySelector('.toast-body').textContent = message;
    toast.show();
}

export async function getWeb3Instance() 
{
    if (!web3Instance) 
    {
        if (window.ethereum) 
        {
            web3Instance = new Web3(window.ethereum);
            try {
                await window.ethereum.enable();
            } 
            catch (error) {
                showToast("User denied account access");
            }
        } 
        else if (window.web3) 
        {
            web3Instance = new Web3(window.web3.currentProvider);
        } 
        else 
        {
            if (isMobile()) 
            {
                showToast('Please connect to your wallet using your mobile Web3 browser.');
            }
            else 
            {
                showToast('Non-Ethereum browser detected. You should consider trying MetaMask!');
            }
        }
    }
    return web3Instance;
}
