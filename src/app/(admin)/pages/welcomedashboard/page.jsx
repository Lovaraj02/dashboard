import PageMetaData from '@/components/PageTitle';
import { useState } from 'react';
import Stats from "./cards";
import ReactApexChart from 'react-apexcharts';
import ComponentContainerCard from '@/components/ComponentContainerCard';
import { lineAreaChartOpts, lineColumnAreaChartOpts, lineColumnChartOpts, multipleYAxisChartOpts } from './yaxisdata.js';
import Conversions from './session.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { onlineUsers } from './sessiondata';
const WelcomePage = () => {

const secondUsers = [
  { name: 'Banking', percentage: '18%', amount: 3000 },
  { name: 'UPI', percentage: '22%', amount: 5200 },
  { name: 'Cards', percentage: '10%', amount: 1500 }
];

const thirdUsers = [
  { name: 'Banking', percentage: '19%', amount: 8500 },
  { name: 'UPI', percentage: '14%', amount: 7800 },
  { name: 'Cards', percentage: '7%', amount: 4300 }
];

const lineSeriesData = [
  {
    name: 'Credit Amount',
    type: 'bar',
    data: [10, 20, 30, 40, 35, 50, 45, 60]
  },
  {
    name: 'Debited Amount',
    type: 'area',
    data: [5, 15, 10, 25, 20, 15, 10, 5]
  }
];

const monthlyLineSeries = [
  {
    name: 'Credit',
    type: 'bar',
    data: [30, 45, 60, 55, 70, 65, 80, 75, 90, 85, 95, 100] 
  },
  {
    name: 'Debit',
    type: 'area',
    data: [20, 25, 35, 30, 40, 38, 45, 42, 50, 48, 55, 60]  
  }
];


const yearlyLineSeries = [
  {
    name: 'Credit',
    type: 'bar',
    data: [120, 150, 170, 160, 200, 220, 250, 270, 300, 320]
  },
  {
    name: 'Debit',
    type: 'area',
    data: [80, 90, 100, 110, 130, 140, 160, 175, 190, 200]
  }
];

//Hours
const currentHour = new Date().getHours();
function formatHour(hour) {
  const normalizedHour = (hour + 24) % 24;
  const suffix = normalizedHour >= 12 ? 'PM' : 'AM';
  const hour12 = normalizedHour % 12 || 12;
  return `${hour12}${suffix}`;
}

const timeSlots = [];
for (let i = 7; i >= 0; i--) {
  timeSlots.push(formatHour(currentHour - i));
}
console.log(timeSlots);

//Months
const now = new Date();
const currentMonth = now.getMonth();
const currentYear = now.getFullYear();
const monthSlots = [];
for (let i = 0; i <= currentMonth; i++) {
  const date = new Date(currentYear, i, 1);
  const monthName = date.toLocaleString('default', { month: 'short' }); 
  monthSlots.push(monthName);
}
console.log(monthSlots);


//Years
const presentYear = new Date().getFullYear();
const yearSlots = [];

for (let i = presentYear - 9; i <= presentYear; i++) {
  yearSlots.push(i.toString());
}

console.log(yearSlots);






// const time = new Date().getHours()
// // const div  = Math.floor(time/3)
// // console.log(div)
// console.log(time)

// const timeSlots = [time-7+'Am',time-6+'Am',time-5+'Am',time-4+'Am',time-3+'Am',time-2+'Am',time-1+'Am',time+'Am']
// const timeSlots = ['12AM', '3AM', '6AM', '9AM', '12PM', '3PM', '6PM', '9PM'];
//const monthSlots = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// const yearSlots = ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];

const [x , setX] = useState(10000)
const [y , setY] = useState(10000)
const [z , setZ] = useState(10000)
setInterval(()=>{
  setX(x+Math.floor(Math.random()*1000) + 1000) 
},8000)

setInterval(()=>{
  setY(y+Math.floor(Math.random()*1000) + 1000) 
},18000)

setInterval(()=>{
  setZ(z+Math.floor(Math.random()*1000) + 1000) 
},31000)

  return(
   <>
      <PageMetaData title="Welcome" />

      <Stats />

      <Conversions
        heading="Today Overview"
        pieTitle="Banking Ledger"
        pieLabels={['Banking', 'UPI', 'Credit Card']}
        pieSeries={[x, y, z]}
        chartTitle="Transaction Trends"
        lineSeries={lineSeriesData}
        lineCategories={timeSlots}
        users={onlineUsers}
        userTitle="Today's Cash Flow"
        value = {[x,y,z]}

      />

      <Conversions
        heading="Monthly Summary"
        pieTitle="Wallet Usage"
        pieLabels={['Banking', 'UPI', 'Credit Card']}
        pieSeries={[x+15340, y+19340, z+3940]}
        chartTitle="Spending Analysis"
        lineSeries={monthlyLineSeries}
        lineCategories={monthSlots}
        users={secondUsers}
        userTitle="Wallet Transactions"
        value = {[x,y,z]}
      />

      <Conversions
        heading="Yearly Breakdown"
        pieTitle="3rd Party Services"
        pieLabels={['Banking', 'UPI', 'Credit Card']}
        pieSeries={[x+20114, y+8578, z+1093]}
        chartTitle="Revenue Streams"
        lineSeries={yearlyLineSeries}
        lineCategories={yearSlots}
        users={thirdUsers}
        userTitle="Gateway Flow"
        value = {[x,y,z]}

      />
    </>
  )
};
export default WelcomePage;