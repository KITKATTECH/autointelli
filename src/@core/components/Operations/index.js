/*eslint-disable */
import { Row, Col } from "reactstrap";
import "@styles/react/libs/charts/apex-charts.scss";
import BarCharts from "./Charts/BarCharts";
import FilteredTabs from "../Tabs/FilterTabs";
import Component from "@reactions/component";
import LineChart from "./Charts/Chart";
import "./index.css";
import { useEffect, useState } from "react";
import StatsHorizontal from "./StatsHorizontal";
import AreaChart from "./Charts/AreaChart";
import { AlertTriangle, Volume2 } from "react-feather";
import axios from "axios";

const Operations = () => {
  const [tabInfo, setTabInfo] = useState();
  const [filterData, setFilterData] = useState([]);
  const [hosts, setHosts] = useState([]);
  const [selectHost, setSelectHost] = useState([]);
  const [option, setOptions] = useState({});
  const [memoryOption, setMemoryOptions] = useState({});
  const [hostInterface, setHostInterface] = useState([]);
  const [selectHostInterface, setSelectHostInterface] = useState();
  const [utilOptions, setUtilOptions] = useState({});
  const [gaugeOption, setGaugeOption] = useState({});

  useEffect(() => {
    axios.get("http://10.200.205.16/soc/filters").then((response) => {
      if (response.data) {
        const socFilters = [];
        const { data } = response.data;
        data.map((element, index) => {
          if (index === 0) {
            setTabInfo(element);
          }
          socFilters.push({
            id: index,
            label: element,
          });
        });
        setFilterData(socFilters);
      }
    });

    axios.get("http://10.200.205.16/soc/hosts").then((response) => {
      if (response.data) {
        const { data } = response.data;
        const socHosts = [];
        data.map((element, index) => {
          if (index === 0) {
            setSelectHost(element);
          }
          socHosts.push(element);
        });
        setHosts(socHosts);
      }
    });
  }, []);

  useEffect(() => {
    const apiParams = {
      host: selectHost,
      filter: tabInfo,
    };
    axios
      .post("http://10.200.205.16/soc/cpu/utilization", apiParams)
      .then((response) => {
        if (response.data) {
          const x = [];
          const y = [];
          const { data } = response.data;
          for (var i = 0; i < data.length; i++) {
            if (data[i].time) {
              x.push(String(data[i].time));
              y.push(String(data[i].value));
            }
          }

          const labelOption = {
            show: true,
            position: "insideBottom",
            distance: 15,
            align: "left",
            verticalAlign: "middle",
            rotate: 90,
            formatter: "{c}  {name|{a}}",
            fontSize: 16,
            rich: {
              name: {},
            },
          };

          setOptions({
            legend: {
              data: ["Time", "Percentage"],
            },
            tooltip: {
              trigger: "axis",
            },
            xAxis: {
              type: "category",
              data: x,
            },
            yAxis: {
              type: "value",
              name: "Percentage",
            },
            series: [
              {
                data: y,
                type: "line",
                color: "LightBlue",
              },
            ],
          });
        }
      });

    axios
      .post("http://10.200.205.16/soc/memory/utilization", apiParams)
      .then((response) => {
        if (response.data) {
          const finalData = response.data.data["TOTAL MEMORY"];

          const x = [];
          const y = [];

          for (var property in finalData) {
            x.push(String(property));
            y.push(finalData[property]);
          }

          setMemoryOptions({
            tooltip: {
              trigger: "axis",
            },
            legend: {
              data: ["Time", "GB"],
            },
            xAxis: {
              type: "category",
              data: x,
              axisTick: { show: false },
            },
            yAxis: {
              type: "value",
              name: "GB",
              nameTextStyle: {
                verticalAlign: "middle",
                rich: {
                  a: {
                    // `verticalAlign` is not set, then it will be bottom
                  },
                },
              },
            },
            series: [
              {
                data: y,
                type: "line",
                color: "#E7D7BF",
              },
            ],
          });
        }
      });

    axios
      .post("http://10.200.205.16/soc/host/availability", apiParams)
      .then((response) => {
        if (response.data) {
          setGaugeOption({
            tooltip: {
              formatter: "{a} <br/>{b} : {c}%",
            },
            series: [
              {
                name: "Pressure",
                type: "gauge",
                progress: {
                  show: true,
                },
                detail: {
                  valueAnimation: true,
                  formatter: "{value}",
                },
                data: [
                  {
                    value: response.data.data.percentage,
                    name: "Percentage",
                  },
                ],
              },
            ],
          });
        }
      });
  }, [selectHost, tabInfo]);

  useEffect(() => {
    const apiParams = {
      host: selectHost,
    };
    axios
      .post("http://10.200.205.16/soc/interfaces", apiParams)
      .then((response) => {
        if (response.data) {
          if (response.data.data !== "no data")
            setHostInterface(response.data.data.interface);
        }
      });
  }, [selectHost]);

  useEffect(() => {
    const apiParams = {
      host: selectHost,
      interface: "INTTRAF3",
      filter: tabInfo,
    };
    axios
      .post("http://10.200.205.16/soc/interface/utilization", apiParams)
      .then((response) => {
        if (response.data) {
          const finalData = response.data.data[apiParams.interface];

          if (finalData !== undefined) {
            const inBand = finalData.inBandwidth;
            const outBand = finalData.outBandwidth;

            const x = [];
            const y1 = [];
            const y2 = [];

            for (var property in inBand) {
              x.push(String(property));
              y1.push(inBand[property]);
            }
            for (var property in outBand) {
              y2.push(outBand[property]);
            }

            setUtilOptions({
              // backgroundColor: "black",
              tooltip: {
                trigger: "axis",
              },
              title: {
                text: "Interface Utilization",
                textStyle: {
                  fontStyle: "normal",
                  fontSize: "14px",
                  align: "left",
                  color: "#7F7BAC",
                },
              },
              legend: {
                data: ["In Bandwidth", "Out Bandwidth"],
                width: 350,
                left: 0,
                bottom: "0%",
                textStyle: {
                  fontStyle: "normal",
                  fontSize: "14px",
                },
              },
              xAxis: {
                type: "category",
                boundaryGap: false,
                data: x,
              },
              yAxis: {
                type: "value",
                boundaryGap: [0, "100%"],
              },
              series: [
                {
                  name: "In Bandwidth",
                  type: "line",
                  smooth: true,
                  symbol: "none",
                  sampling: "average",
                  itemStyle: {
                    color: "blue",
                  },
                  // areaStyle: {
                  //   color: "#9BDDF7",
                  // },
                  data: y1,
                },
                {
                  name: "Out Bandwidth",
                  type: "line",
                  smooth: true,
                  symbol: "none",
                  sampling: "average",
                  itemStyle: {
                    color: "#F7DC77",
                  },
                  // areaStyle: {
                  //   color: "lightyellow",
                  // },
                  data: y2,
                },
              ],
            });
          }
        }
      });
  }, [tabInfo]);

  const renderFilter = () => {
    const getTabInfor = (value) => {
      setTabInfo(value);
    };

    return (
      <div>
        <div className="filterContainer">
          <div className="filterHeader">
            <h5>Filter</h5>
          </div>
          <div>
            <Component initialState={{ tab: "" }}>
              {({ state, setState }) => (
                <div>
                  <FilteredTabs
                    pills
                    settab={({ tab }) => setState({ tab })}
                    colVal={8}
                    getTab={getTabInfor}
                  >
                    {filterData.map((data, index) => {
                      return <FilteredTabs.Tab title={data.label} />;
                    })}
                  </FilteredTabs>
                </div>
              )}
            </Component>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="dashboard-analytics">
      <Row className="match-height mb-2">
        <Col lg="12" sm="12" xs={12} md={12}>
          {filterData.length > 0 ? renderFilter() : null}
        </Col>
      </Row>

      {/* <Row className="match-height">
        <Col xs="7">
          <BarCharts title="Host Availablity" />
        </Col>
      </Row> */}
      <span>
        Host :
        <select
          name="u123"
          id="au"
          style={{ marginBottom: "20px" }}
          handleChange={(e) => setSelectHostI(e.target.value)}
          style={{ marginLeft: "2px" }}
        >
          <option>Select Host</option>

          {hosts.length > 0 &&
            hosts.map((element, index) => {
              return (
                <option
                  value={element}
                  key={index}
                  selected={index === 0 ? true : false}
                >
                  {element}
                </option>
              );
            })}
        </select>
      </span>
      <Row className="match-height" style={{ marginTop: "20px" }}>
        <Col xs="6">
          <LineChart title="Host Availability" option={gaugeOption} />
        </Col>
        <Col xs="6">
          <LineChart title="CPU" option={option} />
        </Col>
      </Row>
      <Row className="match-height">
        <Col xs="6">
          <LineChart title="Memory" option={memoryOption} />
        </Col>
      </Row>

      <span>
        Interface :
        <select
          name="selectHostInterface"
          style={{ marginBottom: "20px" }}
          value={selectHostInterface}
          handleChange={(e) => setSelectHostInterface(e.target.value)}
          style={{ marginLeft: "2px" }}
        >
          <option>Select Interface</option>

          {hostInterface.length > 0 &&
            hostInterface.map((element, index) => {
              return (
                <option
                  value={element}
                  key={index}
                  selected={index === 1 ? true : false}
                >
                  {element}
                </option>
              );
            })}
        </select>
      </span>
      <Row className="match-height">
        <Col xs="12">
          {/* <AreaChart /> */}
          <LineChart title="" option={utilOptions} />
        </Col>
      </Row>
    </div>
  );
};

export default Operations;
