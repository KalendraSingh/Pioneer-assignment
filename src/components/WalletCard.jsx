import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import PopulationGraph from "./PopulationGraph";
import Metamask from './Metamask';

const WalletCard = () => {

    return (
        <div className='wallet-card'>
            <div style={{ flex: '1', marginRight: '8px' }}>
                <Card style={{ backgroundColor: "#2e2b2b",height: '346px' }} variant="outlined">
                    <CardContent>
                       <Metamask/>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default WalletCard;
