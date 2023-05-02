import Part from "./Part";

const Content = ({parts}: {parts: {name: string, exercises: number}[]}) => {
  return (
  <>
    {parts.map(({name, exercises}, index) => (
    <Part key={index} name={name} exercises={exercises}/>
    ))}
  </>
    
  )
}

export default Content;