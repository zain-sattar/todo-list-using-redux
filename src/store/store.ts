import { hookstate } from '@hookstate/core';

type Task={
    task:String,
    isCompleted:boolean,
    id:number
}
const taskList:Task[]=[]
const store=hookstate({
    taskList
})
export default store;
