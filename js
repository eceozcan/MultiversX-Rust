// Web3.js kütüphanesini ve Ethereum sağlayıcısını kullanmak için import ediliyor
import Web3 from 'web3';

// Web3 instance'ı oluşturuluyor ve Ethereum cüzdanına bağlanıyoruz (MetaMask gibi)
const web3 = new Web3(window.ethereum);

// Cüzdana bağlanma fonksiyonu
async function connectWallet() {
    // Kullanıcının cüzdan hesaplarını istemek için requestAccounts() kullanıyoruz
    const accounts = await web3.eth.requestAccounts();
    
    // Cüzdandan alınan ilk hesabı (adres) konsola yazdırıyoruz
    console.log(accounts[0]);
}

// Stake fonksiyonunu çağırmak için fonksiyon
async function stakeTokens(amount) {
    // Web3 ile akıllı sözleşmeye (contract) bağlanıyoruz
    const contract = new web3.eth.Contract(abi, contractAddress); // abi ve contractAddress sözleşmenin ABI'si ve adresi olmalı

    // Akıllı sözleşmenin stake fonksiyonunu çağırıyoruz
    // 'amount' parametresi stake edilecek token miktarını belirtir
    await contract.methods.stake(amount).send({
        from: userAddress // 'userAddress', stake işlemini gerçekleştirecek kullanıcının cüzdan adresi
    });
}
