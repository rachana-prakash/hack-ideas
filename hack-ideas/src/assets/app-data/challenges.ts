import {Challenge} from '../../app/models/challenges.model';

export const challenges: Challenge[] = [
  {
    id: 1,
    title: 'Sales by Match',
    description: 'There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.',
    tag: 'tech',
    count: 0,
    date: new Date()
  },
  {
    id: 2,
    title: 'Counting Valleys',
    description: 'Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.',
    tag: 'tech',
    count: 0,
    date: new Date()
  },
  {
    id: 3,
    title: 'Repeated String',
    description: 'There is a string,s , of lowercase English letters that is repeated infinitely many times. Given an integer,n , find and print the number of letter a\'s in the first  letters of the infinite string.',
    tag: 'feature',
    count: 0,
    date: new Date()
  }
];
