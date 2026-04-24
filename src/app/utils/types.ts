export type Task = {
  id: number;
  title: string;
  isDone: boolean;
};

export type TasksList = {
  date: Date;
  tasks: Task[];
};
