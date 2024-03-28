
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const WalletBalancePieChart = (props) => {
    const {walletBalance} = props

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ backgroundColor: '#8884d8', padding: '5px', border: '1px solid #ccc' }}>
          <p style={{ color: '#fff' }}>{`Currency: ${payload[0].name}`}</p>
          <p style={{ color: '#fff' }}>{`Balance: ${payload[0].value} ETH`}</p>
        </div>
      );
    }

    return null;
  };

  const data = [
    { name: 'ETH', value: walletBalance },
    { name: 'Remaining', value: 100 - walletBalance }
  ];

  return (
    <div style={{ width: '100%', height: 200 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
            label
          />
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WalletBalancePieChart;
