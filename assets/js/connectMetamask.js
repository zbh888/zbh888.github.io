async function connectMetaMask() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      // 请求用户连接MetaMask钱包
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Accounts:', accounts); // 打印账户信息
      const userAddress = accounts[0];
      console.log('User Address:', userAddress); // 打印用户地址

      // 创建一个Ethers.js提供程序
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log('Provider:', provider); // 打印提供程序信息

      // 查询ENS名称
      const ensName = await provider.lookupAddress(userAddress);
      console.log('ENS Name:', ensName); // 打印ENS名称

      // 获取连接按钮和显示地址的元素
      const connectButton = document.getElementById('metamaskButton');
      const userAddressElement = document.getElementById('userAddress');
      console.log('Connect Button:', connectButton); // 打印连接按钮元素
      console.log('User Address Element:', userAddressElement); // 打印用户地址元素

      // 隐藏连接按钮并显示用户地址或ENS名称
      connectButton.style.display = 'none';
      if (ensName) {
        userAddressElement.innerText = `Welcome, ${ensName}(${userAddress}), This is bohanz.eth`;
      } else {
        userAddressElement.innerText = `Welcome: ${userAddress}, This is bohanz.eth`;
      }
      userAddressElement.style.display = 'block';
      console.log('Connection successful'); // 打印连接成功
    } catch (error) {
      console.error('User rejected the request:', error);
    }
  } else {
    alert('MetaMask is not installed. Please install it to use this feature.');
  }
}


