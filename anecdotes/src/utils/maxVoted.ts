import { ICommentVotes } from './commentVotes';

export const maxVotedFunc = (votes: ICommentVotes) => {
  let maxVotes = -Infinity;
  let arrVoted: number[] = [];

  for (let key in votes) {
    if (votes[key] > maxVotes) {
        maxVotes = votes[key];
        arrVoted = [parseInt(key)];
    } else if (votes[key] === maxVotes) {
      arrVoted.push(parseInt(key));
    }
  }

  

  return arrVoted;
}; 
