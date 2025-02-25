import * as React from "react";


type TodoItemProps = {
    task: string;
    deadline: string;
}

export const TodoItem: React.FC<TodoItemProps> = ({ task, deadline}) => {
    return(
        <li className="text-3xl font-bold underline">
            {task} 締め切: {deadline}
        </li>
    )
}