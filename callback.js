let queue=[];
let sample_input='1';
function queue_operation(operation,add,remove)     
{
    if(operation=="enqueue")
    {
        add();
    }
    if(operation=="dequeue")
    {
        remove();
    }
    return queue;
}
enqueue = () =>{
    queue.unshift(sample_input)
}
dequeue = ()=>{
    queue.shift(sample_input)
}
console.log(queue_operation("dequeue",enqueue,dequeue))
