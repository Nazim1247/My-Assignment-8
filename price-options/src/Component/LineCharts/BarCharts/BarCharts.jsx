import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";


const BarCharts = () => {
    const [phone, setPhone] = useState([])

    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const fakeData = phoneData.map(p => {
                const obj = {
                    name: p.phone_name,
                    price: parseInt(p.slug.split('-')[1]) 
                }
                return obj;
            })
            setPhone(fakeData)
        })
    }, [])
        

    return (
        <div className="w-11/12 mx-auto">
            <h3 className="text-2xl font-bold">Phone: {phone.length}</h3>
            <BarChart width={800} height={400} data={phone}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default BarCharts;