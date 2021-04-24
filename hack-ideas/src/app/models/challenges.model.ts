export interface Challenge {
  id: number;
  title: string;
  description: string;
  tag: string;
  count: number;
  date: Date;
  upvoted?: boolean;
  downvoted?: boolean;
}
