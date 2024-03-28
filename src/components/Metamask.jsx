import React, { Component } from 'react';
import Web3 from 'web3';
import WalletBalancePieChart from './WalletGraph';
import Button from '@mui/material/Button';

class Metamask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: '',
            account: null,
            balance: null
        };
    }

    connectWallet = async () => {
        try {
            if (window.ethereum) {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const account = accounts[0];
                this.setState({ status: 'Wallet connected successfully.', account });
                this.fetchBalance(account); // Fetch balance after connection
            } else {
                this.setState({ status: 'Please install MetaMask extension.' });
            }
        } catch (error) {
            this.setState({ status: 'Failed to connect wallet: ' + error.message });
        }
    };

    fetchBalance = async (account) => {
        try {
            const web3 = new Web3(window.ethereum);
            const balance = await web3.eth.getBalance(account);
            this.setState({ balance });
        } catch (error) {
            console.error('Error fetching balance:', error);
            this.setState({ balance: 'Error fetching balance' });
        }
    };

    render() {
        return (
            <div>
                <Button onClick={this.connectWallet} variant="contained" style={{ backgroundColor: "#1bbf1e", color: "#fff",marginBottom:"5px" }}>Connect Wallet</Button>
                <div className='horizontal-line-container'>
                    <hr className='horizontal-line' />
                </div>

                <WalletBalancePieChart walletBalance={0} />
                <div className='horizontal-line-container'>
                    <hr className='horizontal-line' />
                </div>
                <p style={{marginTop:"5px"}}>{this.state.status}</p>
                {this.state.balance !== null ? (
                    <p>Wallet Balance: {Web3.utils.fromWei(this.state.balance, 'ether')} ETH</p>
                ) : (
                    <p>Loading balance...</p>
                )}
            </div>
        );
    }
}

export default Metamask;
