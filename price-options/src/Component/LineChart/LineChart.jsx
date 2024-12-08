

import { LineChart as LChart, XAxis, YAxis, Line } from 'recharts';
const LineChart = () => {

    const studentMarks = [
        { id: 1, name: "Alice", math: 78, physics: 84, chemistry: 79 },
        { id: 2, name: "Bob", math: 85, physics: 78, chemistry: 88 },
        { id: 3, name: "Charlie", math: 90, physics: 92, chemistry: 85 },
        { id: 4, name: "David", math: 72, physics: 75, chemistry: 70 },
        { id: 5, name: "Eve", math: 88, physics: 80, chemistry: 82 },
        { id: 6, name: "Frank", math: 95, physics: 89, chemistry: 94 },
        { id: 7, name: "Grace", math: 67, physics: 74, chemistry: 71 },
        { id: 8, name: "Hannah", math: 82, physics: 87, chemistry: 84 },
        { id: 9, name: "Ian", math: 76, physics: 73, chemistry: 77 },
        { id: 10, name: "Judy", math: 91, physics: 88, chemistry: 90 }
      ];

    return (
        <div className='w-11/12 mx-auto'>
            <LChart width={500} height={400} data={studentMarks}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
            <Line dataKey="math" stroke='red'></Line>
            <Line dataKey={'physics'} stroke='blue'></Line>
            </LChart>
            
        </div>
    );
};

export default LineChart;