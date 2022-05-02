import React from 'react';
import './Chart.css'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, AreaChart, Area, BarChart, Legend, Bar, LabelList } from 'recharts';

const Chart = () => {
    const data = [
        {
            "name": "Pagani Huayra Roadster BC",
            "price": 3500000,
            "sell": 300,
            "power": 800
        },
        {
            "name": "Bugatti La Voiture Noire",
            "price": 13400000,
            "sell": 200,
            "power": 1479
        },

        {
            "name": "Lamborghini Sian",
            "price": 3600000,
            "sell": 460,
            "power": 819
        },
        {
            "name": "Bugatti Engineering GmbH",
            "price": 3600000,
            "sell": 310,
            "power": 1500
        },

        {
            "name": "Lamborghini Veneno",
            "price": 4500000,
            "sell": 480,
            "power": 740
        },
        {
            "name": "Bugatti Bolide",
            "price": 4700000,
            "sell": 360,
            "power": 1824
        }
    ]
    return (
        <div className='container charts '>
            <div >
                <h3 className='text-center text-warning'>Name vs Power</h3>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" width={400} height={400} data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis />
                    <Radar name="Power" dataKey="power" activeDot={{ r: 8 }} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Tooltip></Tooltip>
                </RadarChart>
            </div>
            <div >
                <h3 className='text-center text-primary'>Name vs Sell</h3>
                <LineChart width={400} height={400} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line dataKey={'sell'} activeDot={{ r: 8 }}></Line>
                    <XAxis dataKey={'name'} height={50}></XAxis>
                    <YAxis dataKey={'sell'}></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <div >
                <h3 className='text-center text-warning'>Name vs Price</h3>
                <BarChart width={400} height={400} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="price" />
                    <Tooltip />
                    <Bar dataKey="price" fill="#5864e8" minPointSize={5}>
                    </Bar>
                </BarChart>
            </div>
            <div >
                <h3 className='text-center text-primary'>Power vs Sell</h3>
                <LineChart width={400} height={400} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="power" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="sell" stroke="#82ca9d" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
        </div >
    );
};

export default Chart;