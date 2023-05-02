import { dataScore } from "../interfaces/datascore";
import StatisticLine from "./StatisticLine";

const Statistics = ({data}: {data: dataScore}) => {
  const all: number = data.good + data.neutral + data.bad;
  const average: number = (data.good - data.bad) / all;
  const positive: string = `${(data.good / all * 100).toString()}%`;

  return (
    <div className="statistics">
      <h1>statistics</h1>
      {all != 0? 
      <table>
        <tbody>
          <StatisticLine text="good" value={data.good} />
          <StatisticLine text="neutral" value={data.neutral} />
          <StatisticLine text="bad" value={data.bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>:
      <p>No feedback given</p>
      }
      
    </div>
  )
};
export default Statistics;