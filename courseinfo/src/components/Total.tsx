const Total = ({parts}: {parts: {name: string, exercises: number}[]}) => {
  const total: number = parts.reduce((sum, {exercises}) => sum + exercises, 0);

  return <p>Number of exercises {total}</p>
}

export default Total;