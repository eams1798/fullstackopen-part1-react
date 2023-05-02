import { setScoreProp } from '../interfaces/datascore';
import Button from './Button';

const Feedback = ({onUpdateScore}: {onUpdateScore: setScoreProp}) => {
  const onGiveFeedback = (e: React.MouseEvent, rate: string) => {
    e.preventDefault();
    onUpdateScore((score) => ({...score, [rate]: score[rate] + 1}));
  }

  return (
    <div className="feedback">
      <h1>give feedback</h1>
      <Button textValue='good' onUpdateScore={onUpdateScore}></Button>
      <Button textValue='neutral' onUpdateScore={onUpdateScore}></Button>
      <Button textValue='bad' onUpdateScore={onUpdateScore}></Button>
    </div>)
};

export default Feedback;