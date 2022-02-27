import React from "react";
import { Dimensions } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

type Props = {
  data: any;
};

const Pie = ({ data }: Props) => {
  return (
    <PieChart
      data={data}
      width={screenWidth}
      height={screenHeight * 0.3}
      chartConfig={chartConfig}
      accessor={"shot"}
      backgroundColor={"transparent"}
      paddingLeft={screenWidth * 0.001}
      center={[20, 0]}
      absolute
      hasLegend={true}
      avoidFalseZero={false}
    />
  );
};

export default Pie;
