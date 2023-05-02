import { useEffect, useState } from 'react';
import { commentVotes, ICommentVotes } from './utils/commentVotes';
import { maxVotedFunc } from './utils/maxVoted';

function App({anecdotes}: {anecdotes: string[]}) {
  const [selected, setSelected] = useState<number>(0);
  const [votes, setVotes] = useState<ICommentVotes>(commentVotes);
  const [maxVoted, setMaxVoted] = useState<number[]>([]);

  const randomizeSelection = (e: React.MouseEvent) => {
    e.preventDefault();

    const randomNumber = Math.floor(Math.random() * 6);
    setSelected(randomNumber);
  };

  const updateVotes = (e: React.MouseEvent) => {
    e.preventDefault();
    let updatedVote: {[key: string | number]: number} = {};
    updatedVote[selected] = votes[selected] + 1;
/* debugger;
 */    setVotes({...votes, ...updatedVote});
    
  };

  useEffect(() => setMaxVoted(maxVotedFunc(votes)), [maxVoted]);

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <button onClick={updateVotes}>vote</button>
        <button onClick={randomizeSelection}>next anecdote</button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        {Object.values(votes).every(vote => vote == 0) ? <p>No votes</p>:
        <>
          {maxVoted.map((indexComment) => (
            <p key={indexComment}>{anecdotes[indexComment]}</p>
          ))}
          <p>Has {votes[maxVoted[0]]} votes</p>
        </>
        }
    </div>
    </>
  )
}

export default App
