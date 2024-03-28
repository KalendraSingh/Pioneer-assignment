import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Twitter from './Twitter';

const WalletCard = () => {

    return (
        <div className='twitter-card'>
            <div style={{ flex: '1', marginRight: '8px' }}>
                <Card style={{ backgroundColor: "#2e2b2b" }} variant="outlined">
                <div>
                        <h2 className='population-card-heading'>
                            Our recent post
                        </h2>
                    </div>
                    <div className='horizontal-line-container'>
                        <hr className='horizontal-line' />
                    </div>
                    <CardContent>
                       <Twitter/>
                    </CardContent>
                    <div className='horizontal-line-container'>
                        <hr className='horizontal-line' />
                    </div>
                    <CardActions className='population-card-footer'>
                        <Button variant="contained" style={{ backgroundColor: "#1bbf1e", color: "#fff" }}>Follow on X</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}

export default WalletCard;
