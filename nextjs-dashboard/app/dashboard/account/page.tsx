'use client'
import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, LineSeries } from '@syncfusion/ej2-react-charts';
// import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
// import { useStateContext } from '../../contexts/ContextProvider';
const data = [
    { x: 'January', y: 50 },
    { x: 'February', y: 65 },
    { x: 'March', y: 70 },
    { x: 'April', y: 58 },
    { x: 'May', y: 80 },
    { x: 'June', y: 95 },
  ];
const Page = () => {
    <ChartComponent title="Chart Example" legendSettings={{ visible: true }}>
        <Inject services={[LineSeries, Legend, Tooltip, Category]} />
        <SeriesCollectionDirective>
            <SeriesDirective dataSource={data} xName="x" yName="y" type="Line" name="Series 1" />
            {/* Add more series if needed */}
        </SeriesCollectionDirective>
    </ChartComponent>

    /*const accountCharacter = {
        name: 'John Doe',
        age: 20,e
        class: '11B',
        money: 0,
    }

    return (
        <>
            <div className="flex flex-col justify-normal h-1/2">
                <h1 className="text-3xl font-bold mb-4">Account Character</h1>
                <div className="bg-gray-200 h1-4 rounded-lg gap-0">
                    <h1>Name: {accountCharacter.name}</h1>
                    <h1>Age: {accountCharacter.age}</h1>
                    <h1>Class: {accountCharacter.class}</h1>
                    <h1>Money: {accountCharacter.money}</h1>
                </div>
            </div>
            <div className="flex flex-col items-end justify-start h-screen">
                <Bar data={data} options={options} />
            </div>
        </>
    )*/
}

export default Page;