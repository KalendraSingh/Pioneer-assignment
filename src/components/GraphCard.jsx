import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import PopulationGraph from "./PopulationGraph";

const GraphCard = () => {

    return (
        <div className='graph-card'>
            <div style={{ flex: '1', marginRight: '8px' }}>
                <Card style={{ backgroundColor: "#2e2b2b" }} variant="outlined">
                    <div>
                        <h2 className='population-card-heading'>
                            Overview of Population
                        </h2>
                    </div>
                    <div className='horizontal-line-container'>
                        <hr className='horizontal-line' />
                    </div>
                    <CardContent>
                        <div style={{ width: '100%' }}> {/* Ensure PopulationGraph takes 100% width */}
                            <PopulationGraph />
                        </div>
                    </CardContent>
                    <div className='horizontal-line-container'>
                        <hr className='horizontal-line' />
                    </div>
                    <CardActions className='population-card-footer'>
                        <p>
                            Explore the populations
                        </p>
                        <Button variant="contained" style={{ backgroundColor: "#1bbf1e", color: "#fff" }}>Explore</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}

export default GraphCard;
