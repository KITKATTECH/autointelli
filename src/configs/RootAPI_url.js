import { useState, Fragment, useEffect } from 'react'
let value = ""

const getApiurl = () => {
  fetch('./RootAPI_url.json').then(response => {

    return response.json()
  }).then(data => {


    console.log(data)
    value = data[0].production
    //url.production = data[0].production
    localStorage.setItem('url', data[0].production)

  })
  return value
}
const url = {
  // eg: producton: 'http://192.168.1.200:5000/'
   production: getApiurl()
}
console.log(url)

console.log(localStorage.getItem("url"))
export default url.production = localStorage.getItem("url")
