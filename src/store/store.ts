import { hookstate } from '@hookstate/core';

export type TaskType={
    todo:String,
    isCompleted:boolean,
    id?:number
}

const taskList: TaskType[] = []; 

export const store=hookstate({
    taskList
});
