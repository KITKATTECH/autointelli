/*eslint-disable*/
import EChartsNextForReactCore from 'echarts-next-for-react'

const ApexLineChart = ({ direction, warning }) => {
   let base = +new Date(1998, 9, 3);
   let oneDay = 24 * 3600 * 1000;
   let date = [];
   let data1=[Math.random() * 500];
   
   let data = [Math.random() * 300];
 
   let data2 = [Math.random() * 100];
   
   for (var i = 1; i < 3500; i++) {
    
       data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
   }

   for (var i=1; i<3500;i++)
   {
    var now = new Date(base += oneDay);       
    date.push([now.getFullYear()+"/"+ now.getMonth()+"/" + 1]);
   }

   for (var i = 1; i < 3500; i++) {        
        
       data1.push(Math.round((Math.random() - 0.5) * 30 + data1[i - 1]));
         
}

for (var i = 1; i < 3500; i++) {        
        
    data2.push(Math.round((Math.random() - 0.5) * 50 + data2[i - 1]));
      
}
   
   
   
   const option = {
    backgroundColor:'black',    
       tooltip: {
           trigger: 'axis',
           position: function (pt) {
               return [pt[0], '10%'];
           }
       },       
       title: {
           left: 'center',
           text: 'Test Data',
           textStyle:{
            color:"white",
            fontStyle:'normal',
            fontSize:'14px'
          }
       },       
       legend: {       
        data: ['A series', 'B series','C series'],
        width: 350,
        left: 0,
        bottom: "0%",     
        textStyle:{
            color:"white",
            fontStyle:'normal',
            fontSize:'14px'
          }
      },       
       xAxis: {
           type: 'category',
           boundaryGap: false,
           data: date,
           color:'#4A494E'
       },
       yAxis: {
           type: 'value',
           boundaryGap: [0, '100%'],           
           nameTextStyle: {
            color:'red',
           }

       },       
       series: [
           {
               name: 'A series',
               type: 'line',
               smooth: true,
               symbol: 'none',
               sampling: 'average',
               itemStyle: {
                   color: 'blue'
               },
               data: data
           },
           {
            name: 'B series',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                color: '#F7DC77'
            },
            areaStyle: {
              color:'#000000'
                
            },
            data: data1
        },
           {
               name: 'C series',
               type: 'line',
               smooth: true,
               symbol: 'none',
               sampling: 'average',
               itemStyle: {
                   color:'#A0B388'
               },
               areaStyle: {
                color:'#000000'            
                  
              },
               
              data: data2
           }
       ]
   };
   
       
    return( 
        <div>       
        <h6 style={{color:"#7E7AAB",marginBottom:"10px", fontWeight:'bold'}}> Interface Ultilization</h6>           
        <EChartsNextForReactCore option={option} />
        </div>)
}

export default ApexLineChart
