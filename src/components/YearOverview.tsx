import { Chart, useChart } from "@chakra-ui/charts";
import {
    Box, Flex
} from "@chakra-ui/react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import StatsCard from "./StatsCard";

const statsData = [
  {
    title: "₦120,000,000.00",
    colors: { title: "#4545FE", text: "#12B76A" },
    text: "2.5%",
    iconName: "statsUp",
  },
  {
    title: "₦50,000,000.00",
    colors: { title: "#12B76A", text: "#12B76A" },
    description: "MRR",
    text: "2.5%",
    iconName: "statsUp",
  },
  {
    title: "₦200,000,000.00",
    colors: { title: "#14B8A6", text: "#14B8A6" },
    description: "Commission Revenue",
    iconName: "statsDown",
    text: "0.5",
  },
  {
    title: "₦100,000,000.00",
    colors: { title: "#F04438", text: "#F04438" },
    description: "GMV",
    iconName: "statsRed",
    text: "0.5",
  },
];

function YearOverview() {
  const chart = useChart({
    data: [
      {
        name: "Jan",
        uv: 10,
        pv: 20,
        tv: 30,
      },
      {
        name: "Feb",
        uv: 20,
        pv: 30,
        tv: 50,
      },
      {
        name: "March",
        uv: 10,
        pv: 40,
        tv: 30,
      },
      {
        name: "April",
        uv: 20,
        pv: 40,
        tv: 30,
      },
      {
        name: "May",
        uv: 18,
        pv: 48,
        tv: 30,
      },
      {
        name: "Jun",
        uv: 23,
        pv: 38,
        tv: 30,
      },
      {
        name: "July",
        uv: 34,
        pv: 43,
        tv: 30,
      },
      {
        name: "Aug",
        uv: 34,
        pv: 40,
        tv: 30,
      },
      {
        name: "Sep",
        uv: 34,
        pv: 43,
        tv: 30,
      },
    ],
    series: [
      { name: "pv", color: "blue.solid" },
      { name: "uv", color: "green.solid" },
      { name: "tv", color: "red.solid" },
    ],
  });

  return (
    <Flex gap="4">
      <Box width="1/2">
        <Chart.Root chart={chart} height={165}>
          <BarChart data={chart.data}>
            <XAxis dataKey="name" />
            <YAxis
              domain={[0, 50]}
              tickFormatter={(value) => `${value}m`}
              tickLine={false}
            />
            {chart.series.map((item) => (
              <>
                <Bar
                  key={item.name}
                  isAnimationActive={false}
                  dataKey={chart.key(item.name)}
                  fill={chart.color(item.color)}
                />
              </>
            ))}
          </BarChart>
        </Chart.Root>
      </Box>

      <Flex width="1/2" flexWrap="wrap" gap="4">
        {statsData.length
          ? statsData.map((item) => <StatsCard {...item} />)
          : null}
      </Flex>
    </Flex>
  );
}

export default YearOverview;
