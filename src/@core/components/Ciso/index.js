/*eslint-disable*/
import React, { useState } from 'react'
import Component from "@reactions/component"
import FilteredTabs from "../Tabs/FilterTabs"
import Acc from "./components/Acc"
import TopPolicy from './components/TopPolicy'
import UnusedPolicies from './components/UnusedPolicies'
import PolicyModifications from './components/PoliciyModifications'
import ThreadDetection from './components/ThreadDetection'
import AllowandDeny from './components/AllowandDenyPolicy'
import TopExternalandInternal from './components/TopExternalandInternal'
import TopIpHits from './components/TopIpHits'
import AvDetection from './components/AvDetection'

const Ciso = () => {

    const [tabInfo, setTabInfo] = useState()

    const filterConditions = [
      {
        id:"1",
        label:"ACC"
      },
      {
        id:"2",
        label:"Top Policy Utilization"
      },
      {
        id:"3",
        label:"Unused Policies"
      },
      {
        id:"4",
        label:"Policy Modification"
      },
      {
        id:"5",
        label:"Thread Detection"
      },
      {
        id:"6",
        label:"Allow and Deny Policy"
      },
      {
        id:"7",
        label:"Top Internal / External Ports"
      },
      {
        id:"8",
        label:"Top IP Hits internal / external"
      },
      {
        id:"9",
        label:"AV Detection"
      }               
  ]


  const getTabInfor = (value) => {    

        setTabInfo(value)
  }

  const renderFilter = () => {
    return (
      <div>
        <div className='filterContainer'>
        <div className='filterHeader' >  
        <h5>Ciso</h5>                
        </div>   
        <div>
           
    <Component initialState={{ tab: "" }}>
      {({ state, setState }) => (
        <div >
          
          <FilteredTabs pills settab={({ tab }) => setState({ tab })} colVal={12} getTab={getTabInfor} >
             {filterConditions.map((data, index) => {
              return (<FilteredTabs.Tab title={data.label} />)
             }                       
             )}                               
          </FilteredTabs>
          
        </div>
      )}
    </Component>
  
          </div>     
        </div>
        
      </div>
    )
  }

  const getCiso = (type) => {
      if(type){
        return {
            'ACC': <Acc />,
            'Top Policy Utilization': <TopPolicy />,
            'Unused Policies':<UnusedPolicies />,
            'Policy Modification':<PolicyModifications />,
            'Thread Detection': <ThreadDetection />,
            'Allow and Deny Policy': <AllowandDeny />,
            'Top Internal / External Ports': <TopExternalandInternal />,
            'Top IP Hits internal / external':<TopIpHits />,
            'AV Detection': <AvDetection /> 

          }[type]
      }
    
  } 


  return (
   <div>       
       {renderFilter()}               
       {getCiso(tabInfo)}
   </div>
    )
   
 }


export default Ciso