export interface dataScore {
    good: number,
    neutral: number,
    bad: number
    [key: string]: number
  };

export type setScoreProp = React.Dispatch<React.SetStateAction<dataScore>>;