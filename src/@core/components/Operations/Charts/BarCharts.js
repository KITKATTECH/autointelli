import EChartsNextForReactCore from 'echarts-next-for-react'

const charts = ({title}) => {
 
 
    const labelOption = {
      show: true,
      position: 'insideBottom',
      distance: 15,
      align: 'left',
      verticalAlign: 'middle',
      rotate: 90,
      formatter: '{c}  {name|{a}}',
      fontSize: 16,
      rich: {
        name: {}
      }
    }
    const option =  {
      // title:{
      //   text:title,
      //   textStyle:{
      //     color:"#7A76A9",
      //     fontStyle:'normal',
      //     fontSize:'14px'
      //   }
      // },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['Up', 'Down']
      },
      xAxis: [
        {
          type: 'category',
          axisTick: { show: false },
          data: ['u123.aut.xy', 'prod.aut.xy', 'ua10.aut.xy', 'ua10.aut.xy', 'ua10.aut.xy']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Up',
          type: 'bar',
          barGap: 0,
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [70, 90, 10, 99, 98.5, 20]
        },
        {
          name: 'Down',
          type: 'bar',
          label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: [30, 10, 1, 11.50, 80]
        }
        
      ]
    }
  
    return ( 
    <div>
      <h6 style={{color:"#7E7AAB", marginBottom:"10px", fontWeight:'bold'}}> {title}</h6>      
    <EChartsNextForReactCore option={option} />
    </div>
    )
  }

  export default charts