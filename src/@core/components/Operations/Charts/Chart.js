/*eslint-disable */
import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

const charts = ({ title, option }) => {
  const [newOptions, setNewOptions] = useState({});

  useEffect(() => {
    if (Object.keys(option).length === 0) {
    } else {
      setNewOptions(option);
    }
  }, [option]);

  if (Object.keys(newOptions).length === 0) {
    return null;
  } else {
    return (
      <div>
        <h6
          style={{ color: "#7E7AAB", marginBottom: "10px", fontWeight: "bold" }}
        >
          {" "}
          {title}
        </h6>
        <ReactECharts option={newOptions} notMerge={true} lazyUpdate={true} />
      </div>
    );
  }
};

export default charts;
