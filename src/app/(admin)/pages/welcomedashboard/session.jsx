import SimplebarReactClient from '@/components/wrappers/SimplebarReactClient';
import { toAlphaNumber } from '@/utils/change-casing';
import ReactApexChart from 'react-apexcharts';
import { Button, Card, CardBody, CardTitle, Col, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

const Conversions = ({
  heading = 'Today',
  pieTitle = 'Daily Ledger',
  pieLabels = ['Banking', 'UPI', 'Credit Card'],
  pieSeries = [23500, 41050, 43874],
  chartTitle = 'Swipe & Spend – Today',
  lineSeries = [],
  lineCategories = [],
  users = [],
  userTitle = "Today's Cash Flow",
  value
}) => {
  const performanceChartOpts = {
    series: lineSeries,
    chart: {
      height: 313,
      type: 'line',
      toolbar: {
        show: false
      }
    },
    stroke: {
      dashArray: [0, 0],
      width: [0, 2],
      curve: 'smooth'
    },
    fill: {
      opacity: [1, 1],
      type: ['solid', 'gradient'],
      gradient: {
        type: 'vertical',
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90]
      }
    },
    markers: {
      size: [0, 0],
      strokeWidth: 2,
      hover: {
        size: 4
      }
    },
    xaxis: {
      categories: lineCategories,
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      min: 0,
      axisBorder: {
        show: false
      }
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      xaxis: {
        lines: { show: false }
      },
      yaxis: {
        lines: { show: true }
      },
      padding: {
        top: 0,
        right: -2,
        bottom: 0,
        left: 10
      }
    },
    legend: {
      show: true,
      horizontalAlign: 'center',
      offsetX: 0,
      offsetY: 5,
      markers: {
        width: 9,
        height: 9,
        radius: 6
      },
      itemMargin: {
        horizontal: 10,
        vertical: 0
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '30%',
        barHeight: '70%',
        borderRadius: 3
      }
    },
    colors: ['#1bb394', '#1e84c4'],
    tooltip: {
      shared: true,
      y: [
        {
          formatter: y => (typeof y !== 'undefined' ? y.toFixed(1) + 'k' : y)
        },
        {
          formatter: y => (typeof y !== 'undefined' ? y.toFixed(1) + 'k' : y)
        }
      ]
    }
  };
  console.log(value,"jhghfdf")
  return (
    <>
      <h1>{heading}</h1>
      <Card>
        <CardBody className="p-0">
          <Row className="g-0">

            {/* Pie Chart Section */}
            <Col lg={3}>
              <div className="p-3">
                <CardTitle>{pieTitle}</CardTitle>
                <ReactApexChart
                  height={255}
                  options={{
                    chart: { type: 'pie' },
                    labels: pieLabels,
                    legend: { position: 'bottom' }
                  }}
                  series={pieSeries}
                  type="pie"
                  className="mb-2 mt-4"
                />
                <Row className="text-center">
                  {pieLabels.map((label, index) => (
                    <Col xs={12 / pieLabels.length} key={index}>
                      <p className="text-muted mb-2">{label}</p>
                      {console.log(value)}
                      <h6 className="text-dark mb-3">{value[index]}</h6>
                    </Col>
                  ))}
                </Row>
                <div className="text-center">
                  <button type="button" className="btn btn-light shadow-none w-100">
                    View Details
                  </button>
                </div>
              </div>
            </Col>

            {/* Line Chart Section */}
            <Col lg={6} className="border-start border-end">
              <div className="p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <CardTitle as="h4">{chartTitle}</CardTitle>
                  <div className="icons-center gap-1">
                    <Button variant="outline-light" size="sm">All</Button>
                    <Button variant="outline-light" size="sm">UPI</Button>
                    <Button variant="outline-light" size="sm">Net Banking</Button>
                    <Button variant="outline-light" size="sm" active>Cards</Button>
                  </div>
                </div>
                <div dir="ltr">
                  <ReactApexChart
                    height={313}
                    options={performanceChartOpts}
                    series={lineSeries}
                    type="line"
                  />
                </div>
              </div>
            </Col>

            {/* User Transaction List */}
            <Col lg={3}>
              <div className="d-flex justify-content-between p-3">
                <CardTitle>{userTitle}</CardTitle>
              </div>
              <SimplebarReactClient
                className="px-3"
                style={{ maxHeight: 310, height: 'auto', overflow: 'hidden, scroll' }}
              >
                {users.map((user, idx) => (
                  <div className="row p-2" key={idx}>
                    <span className="col-4 fw-medium">{user.name}</span>
                    <span className="col-4 text-center fw-medium">{user.percentage}</span>
                    <span className="col-4 text-end fw-medium">&nbsp;{toAlphaNumber(user.amount)}</span>
                  </div>
                ))}
              </SimplebarReactClient>
              <div className="text-center p-3">
                <button type="button" className="btn btn-light shadow-none w-100">
                  View All
                </button>
              </div>
            </Col>

          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default Conversions;








// import SimplebarReactClient from '@/components/wrappers/SimplebarReactClient';
// import { toAlphaNumber } from '@/utils/change-casing';
// import ReactApexChart from 'react-apexcharts';
// import { Button, Card, CardBody, CardTitle, Col, Row } from 'react-bootstrap';
// // import { onlineUsers } from './sessiondata.js';
// import CountUp from 'react-countup';
// const Conversions = ({ users, title = "Today's Cash Flow" }) => {
//   const conversionChartOpts = {
//     chart: {
//       height: 292,
//       type: 'pie'
//     },
//     plotOptions: {
//       radialBar: {
//         startAngle: -135,
//         endAngle: 135,
//         dataLabels: {
//           name: {
//             fontSize: '14px',
//             color: 'undefined',
//             offsetY: 100
//           },
//           value: {
//             offsetY: 55,
//             fontSize: '20px',
//             color: undefined,
//             formatter: function (val) {
//               return val + '%';
//             }
//           }
//         },
//         track: {
//           background: 'rgba(170,184,197, 0.2)',
//           margin: 0
//         }
//       }
//     },
//     fill: {
//       gradient: {
//         // enabled: true,
//         shade: 'dark',
//         shadeIntensity: 0.2,
//         inverseColors: false,
//         opacityFrom: 1,
//         opacityTo: 1,
//         stops: [0, 50, 65, 91]
//       }
//     },
//     stroke: {
//       dashArray: 4
//     },
//     colors: ['#1bb394', '#1bb394'],
//     series: [65.2],
//     labels: ['Returning Customer'],
//     responsive: [{
//       breakpoint: 380,
//       options: {
//         chart: {
//           height: 180
//         }
//       }
//     }],
//     grid: {
//       padding: {
//         top: 0,
//         right: 0,
//         bottom: 0,
//         left: 0
//       }
//     }
//   };
//   const performanceChartOpts = {
//     series: [{
//       name: 'Credit Amount',
//       type: 'bar',
//       data: [34, 65, 46, 68, 49, 61, 42, 44]
//     }, {
//       name: 'Debited Amount',
//       type: 'area',
//       data: [8, 12, 7, 17, 21, 11, 5, 9]
//     }],
//     chart: {
//       height: 313,
//       type: 'line',
//       toolbar: {
//         show: false
//       }
//     },
//     stroke: {
//       dashArray: [0, 0],
//       width: [0, 2],
//       curve: 'smooth'
//     },
//     fill: {
//       opacity: [1, 1],
//       type: ['solid', 'gradient'],
//       gradient: {
//         type: 'vertical',
//         inverseColors: false,
//         opacityFrom: 0.5,
//         opacityTo: 0,
//         stops: [0, 90]
//       }
//     },
//     markers: {
//       size: [0, 0],
//       strokeWidth: 2,
//       hover: {
//         size: 4
//       }
//     },

//     xaxis: {
//       // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//       categories: ['12AM', '3AM', '6AM', '9AM', '12PM', '15PM', '18PM', '21PM', '24PM'],
//       // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//       // categories: ['2013', '2014', '2015', '2016', '2017', '2018','2019', '2020', '2021', '2022', '2023', '2024'],

//       axisTicks: {
//         show: false
//       },
//       axisBorder: {
//         show: false
//       }
//     },
//     yaxis: {
//       min: 0,
//       axisBorder: {
//         show: false
//       }
//     },
//     grid: {
//       show: true,
//       strokeDashArray: 3,
//       xaxis: {
//         lines: {
//           show: false
//         }
//       },
//       yaxis: {
//         lines: {
//           show: true
//         }
//       },
//       padding: {
//         top: 0,
//         right: -2,
//         bottom: 0,
//         left: 10
//       }
//     },
//     legend: {
//       show: true,
//       horizontalAlign: 'center',
//       offsetX: 0,
//       offsetY: 5,
//       markers: {
//         width: 9,
//         height: 9,
//         radius: 6
//       },
//       itemMargin: {
//         horizontal: 10,
//         vertical: 0
//       }
//     },
//     plotOptions: {
//       bar: {
//         columnWidth: '30%',
//         barHeight: '70%',
//         borderRadius: 3
//       }
//     },
//     colors: ['#1bb394', '#1e84c4'],
//     tooltip: {
//       shared: true,
//       y: [{
//         formatter: function (y) {
//           if (typeof y !== 'undefined') {
//             return y.toFixed(1) + 'k';
//           }
//           return y;
//         }
//       }, {
//         formatter: function (y) {
//           if (typeof y !== 'undefined') {
//             return y.toFixed(1) + 'k';
//           }
//           return y;
//         }
//       }]
//     }
//   };


//   return (
//     <>
//       <h1>today</h1>
//       <Card>
//         <CardBody className="p-0">

//           <Row className="g-0">

//             <Col lg={3}>
//               <div className="p-3">
//                 <CardTitle>Daily Ledger</CardTitle>

//                 <ReactApexChart
//                   height={255}
//                   options={{
//                     chart: { type: 'pie' },
//                     labels: ['Net Banking', 'UPI', 'Credit Card'],
//                     legend: { position: 'bottom' }
//                   }}
//                   series={[23500, 41050, 43874]}
//                   type="pie"
//                   className="mb-2 mt-4"
//                 />
//                 <Row className="text-center">
//                   <Col xs={4}>
//                     <p className="text-muted mb-2">Net Bank</p>
//                     <h6 className="text-dark mb-3"><CountUp end={23500} formattingFn={(value) => `${(value / 1000).toFixed(1)}k`} /></h6>
//                   </Col>
//                   <Col xs={4}>
//                     <p className="text-muted mb-2">UPI</p>
//                     <h6 className="text-dark mb-3"><CountUp end={41500} formattingFn={(value) => `${(value / 1000).toFixed(1)}k`}></CountUp></h6>
//                   </Col>
//                   <Col xs={4}>
//                     <p className="text-muted mb-2">Credit Card</p>
//                     <h6 className="text-dark mb-3"><CountUp end={43870} formattingFn={(value) => `${(value / 1000).toFixed(1)}k`}></CountUp></h6>
//                   </Col>
//                 </Row>

//                 <div className="text-center">
//                   <button type="button" className="btn btn-light shadow-none w-100">
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             </Col>


//             <Col lg={6} className="border-start border-end">
//               <div className="p-3">
//                 <div className="d-flex justify-content-between align-items-center">
//                   {/* <CardTitle as="h4">Today's Transactions</CardTitle> */}
//                   <CardTitle as="h4">Swipe & Spend – Today</CardTitle>
//                   <div className="icons-center gap-1">
//                     <Button variant="outline-light" size="sm">
//                       All
//                     </Button>
//                     <Button variant="outline-light" size="sm">
//                       UPI
//                     </Button>
//                     <Button variant="outline-light" size="sm">
//                       Net Banking
//                     </Button>
//                     <Button variant="outline-light" size="sm" active>
//                       Cards
//                     </Button>
//                   </div>
//                 </div>

//                 <div dir="ltr">
//                   <ReactApexChart
//                     height={313}
//                     options={performanceChartOpts}
//                     series={performanceChartOpts.series}
//                     type="line"
//                   />
//                 </div>
//               </div>
//             </Col>






//             <Col lg={3}>
//               <div className="d-flex justify-content-between p-3">
//                 <CardTitle>{title}</CardTitle>
//               </div>
//               <SimplebarReactClient className="px-3" style={{
//                 maxHeight: 310,
//                 height: 'auto',
//                 overflow: 'hidden, scroll'
//               }}>
//                 {users.map((user, idx) => <div className="row p-2" key={idx}>
//                   <span className="col-4  fw-medium">{user.name}</span>
//                   <span className="col-4 text-center fw-medium">{user.percentage}</span>
//                   <span className="col-4 text-end fw-medium">&nbsp;{toAlphaNumber(user.amount)}</span>
//                 </div>)}
//               </SimplebarReactClient>
//               <div className="text-center p-3">
//                 <button type="button" className="btn btn-light shadow-none w-100">
//                   View All
//                 </button>
//               </div>
//             </Col>
//           </Row>
//         </CardBody>
//       </Card>;
//     </>
//   )
// };
// export default Conversions;