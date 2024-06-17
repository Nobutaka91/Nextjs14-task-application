import { FaTrashAlt } from "react-icons/fa";

interface TaskDeleteButtonProps {
    id: string;
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ id }) => {
  return (
    <div>
      <form action="">
        <button type='submit' className="hover:text-gray-700 text-lg cursor-pointer">
            <FaTrashAlt/>
        </button>
      </form>
    </div>
  )
}

export default TaskDeleteButton
