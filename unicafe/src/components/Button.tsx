import { setScoreProp } from '../interfaces/datascore';
interface ButtonProps {
    textValue: string,
    onUpdateScore: setScoreProp
}

const Button = ({textValue, onUpdateScore}: ButtonProps) => {
    const onGiveFeedback = (e: React.MouseEvent, rate: string) => {
        e.preventDefault();
        onUpdateScore((score) => ({...score, [rate]: score[rate] + 1}));
      }

    return <button onClick={(e) => onGiveFeedback(e, textValue)}>{textValue}</button>;
}

export default Button;