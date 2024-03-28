import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';

const CryptoCard = ({ currencyName, price, symbol, description }) => {

    return (
        <div className='crypro-card'>
            <div style={{ flex: '1', marginRight: '8px' }}>
                <Card style={{ backgroundColor: "#2e2b2b" , height:"165px" }} variant="outlined">
                    <CardContent>
                        <div className="crypto-card">

                            <div className='symbol-name'>
                                <p className='symbol'><span dangerouslySetInnerHTML={{ __html: symbol }} /></p>
                                <h2>{currencyName}</h2>
                            </div>

                            <p className='descryption'>{description}</p>
                            <p>{price} <span dangerouslySetInnerHTML={{ __html: symbol }} /></p>
                            <div className='infoicon-trade'>
                                <InfoIcon className='infoicon'/>
                                <Button variant="contained" style={{ backgroundColor: "#1bbf1e", color: "#fff" }}>Trade</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default CryptoCard;
