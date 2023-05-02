const StatisticLine = ({text, value}: {text: string, value: number | string}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>)
};

export default  StatisticLine;