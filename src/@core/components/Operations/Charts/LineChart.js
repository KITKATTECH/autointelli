import EChartsNextForReactCore from 'echarts-next-for-react'

const charts = ({title}) => {
  const dataSet = [
    { name: 'Category1', value: 335, color: '#e0ffd7' },
    { name: 'Category2', value: 310, color: '#e494ac' },
    { name: 'Category3', value: 234, color: '#8cf4ce' },
    { name: 'Category4', value: 135, color: '#37d5da' }
  ]
 
    const option = {
      legend: {
        orient: 'horizontal',
        center: 'center',
        icon: 'none',
        textStyle: {
          padding: [4, 20, 4, 20],
          borderRadius: 4
        },
        data: dataSet.map(({name, color}) => ({name, textStyle:{ backgroundColor: color }}))
      },
      // title:{
      //   text:title,
      //   textStyle:{
      //     color:"#7A76A9",
      //     fontStyle:'normal',
      //     fontSize:'14px'
      //   }
      // },
        xAxis: {
          type: 'category',
          data: ['10:00', '10:05', '10:10', '10:15', '10:20', '10:25', '10:30', '10.35']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
            color:"#E7D7BF"
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