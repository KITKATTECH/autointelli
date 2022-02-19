import "./Table.css"
import { Progress } from 'reactstrap'
const Table = ({headers, body, type}) => {
    return (
        <div className="tableContainer">
        <table id="cisoTable" >
        <tr>
            
          {headers.length > 0 && headers.map((element) => {
              return (
                  <th>{element.name}</th>
              )
          })}
        </tr>
        {body.map((data) => {
            switch (type) {
                case 'UnusedPolicies':
                    return (
                        <tr>
                            <td>
                                {data.Name}
                            </td>
                            <td>
                                {data.Tags}
                            </td>
                            <td>
                                {data.Group}
                            </td>
                            <td>
                                {data.Type}
                            </td>
                            <td>
                                {data.sourceUser}
                            </td> 
                            <td>
                                {data.sourceZone}
                            </td>
                                                       
                            <td>
                                {data.sourceHipProfile}
                            </td>
                            <td>
                                {data.Application}
                            </td>
                            
                        </tr>
                    )
                 case 'topPolicies':
                     return (
                         <tr>
                         <td>{data.action}</td>
                         <td>{data.rule}</td>
                         <td>{data.sourceAddress}</td>
                         <td>{data.sourceHostName}</td>
                         <td>{data.destination}</td>                         
                         <td><Progress value={data.byte} max="10" style={{background:'#C6DFF8', border:'1px solid'}} />                                                                 
                        </td>
                         </tr>
                     )  
                 case 'policyModifications':
                    return (
                        <tr>
                            <td>
                                {data.Name}
                            </td>
                            <td>
                                {data.Tags}
                            </td>
                            <td>
                                {data.Group}
                            </td>
                            <td>
                                {data.Type}
                            </td>
                            <td>
                                {data.sourceUser}
                            </td> 
                            <td>
                                {data.sourceZone}
                            </td>
                                                       
                            <td>
                                {data.sourceHipProfile}
                            </td>
                            <td>
                                {data.Application}
                            </td>
                            
                        </tr>
                    )  
                    
                case 'threadDetection':
                    return (
                        <tr>
                            <td>{data.Domain}</td>
                            <td>{data.receiveTime}</td>
                            <td>{data.serial}</td>
                            <td>{data.Type}</td>
                            <td>{data.Rule}</td>
                        </tr>
                    )  
                 default:
                     return null  
            }                        
        })}
        
      </table>
      </div>
      
    )
}

export default Table