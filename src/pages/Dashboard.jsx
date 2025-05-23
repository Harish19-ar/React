import { useEffect, useState } from "react"
import TodoListt from  "../component/TodoListt";
import { IoIosAdd } from "react-icons/io";

const Dashboard = () => {

    const [data, setData] = useState("")
    const [todoList, setTodoList] = useState([])

    const handlesubmit = () => {

        setTodoList([...todoList, data])
        console.log(todoList)
        setData("")
    }

    return (
        <div className="bg-amber-100 w-300px justify-center content-center">
            <div className="justify-items-center ">
                <input
                    className="border-black border-2 m-4 p-4 w-200"
                    type="text"
                    value={data}
                    onChange={(e) => setData(e.target.value)} />
                <button
                    className="bg-blue-600 rounded-6x1 text-black"
                    onClick={handlesubmit}>Add</button>
            </div>
            <ol>
                {
                    todoList.length > 0 && (
                            todoList.map((item, index) => (
                                <TodoListt item={item} index={index} key={index} />
                            )
                        )
            )
                }
            </ol>
        </div>
    );
};


export default Dashboard