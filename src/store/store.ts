import { hookstate } from '@hookstate/core';

export type TaskType={
    todo:String,
    isCompleted:boolean,
    id?:number
}
const taskList: TaskType[] = []; 
const store=hookstate({
    taskList
})
export default store;

