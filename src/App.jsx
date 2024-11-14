import React, { useState } from "react";
import {
  FaArrowDown,
  FaArrowUp,
  FaDoorOpen,
  FaDoorClosed,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [currentFloor, setCurrentFloor] = useState(79);
  const [isDoorOpen, setIsDoorOpen] = useState(false);

  const toggleDoor = () => {
    setIsDoorOpen(!isDoorOpen);
  };

  const moveElevator = (targetFloor) => {
    if (isDoorOpen) {
      if (targetFloor < currentFloor) {
        toast.success("Bizning lift bitta qavat tevaga ketayabdi", { autoClose: 800 });
      } else if (targetFloor > currentFloor) {
        toast.success("Bizning lift bitta qavat pastga ketayabdi", { autoClose: 800 });
      }
      setCurrentFloor(targetFloor);
    } else {
      toast.error("Eshikni yoping, liftni harakatlantirish uchun");
    }
  };

  return (
    <div className="">
      <div className="bg-green-800 w-full h-[100vh] p-5 flex gap-10">
        <div className="w-[800px] h-[95vh] bg-green-500 p-2 relative">
          <div
            className=" flex items-center justify-center gap-3 w-[100%] h-[8vh] bg-gray-600"
            style={{
              marginTop: `${currentFloor}%`,
              transition: "margin-top 2s ease-in-out",
            }}
          >
            <h1 className="text-[40px] text-white text-center">
              {isDoorOpen ? "Eshik ochiq" : "Eshik yopiq"}
              <button
                onClick={toggleDoor}
                className="p-5 rounded-[50%] mb-2 bg-blue-600 text-[20px]"
              >
                {isDoorOpen ? <FaDoorClosed /> : <FaDoorOpen />}
              </button>
            </h1>
          </div>
        </div>

        <div>
          <ToastContainer />
          <div className="mt-2 flex gap-4">
            <button
              onClick={() => moveElevator(0)}
              className="p-5 rounded-[50%] bg-red-600 text-[15px]"
            >
              7
            </button>
            <button
              onClick={() => moveElevator(13)}
              className="p-5 rounded-[100px] bg-red-600 text-[20px]"
            >
              <FaArrowDown />
            </button>
          </div>

          <div className="mt-10 flex gap-4">
            <button
              onClick={() => moveElevator(14)}
              className="p-5 rounded-[50%] bg-red-600 text-[15px] "
            >
              6
            </button>
            <button
              onClick={() => moveElevator(29)}
              className="p-5 rounded-[100px] bg-red-600 text-[20px]"
            >
              <FaArrowDown />
            </button>
            <button className="p-5 rounded-[100px] bg-red-600 text-[20px]">
              <FaArrowUp onClick={() => moveElevator(currentFloor + 1)} />
            </button>
          </div>

          <div className="mt-10 flex gap-4">
            <button
              onClick={() => moveElevator(27)}
              className="p-5 rounded-[50%] bg-red-600 text-[15px] "
            >
              5
            </button>
            <button
              onClick={() => moveElevator(40)}
              className="p-5 rounded-[100px] bg-red-600 text-[20px]"
            >
              <FaArrowDown />
            </button>
            <button
              onClick={() => moveElevator(13)}
              className="p-5 rounded-[100px] bg-red-600 text-[20px]"
            >
              <FaArrowUp />
            </button>
          </div>

          <div className="mt-10 flex gap-4">
            <button
              onClick={() => moveElevator(40)}
              className="p-5 rounded-[50%] bg-red-600 text-[15px] "
            >
              4
            </button>
            <button
              onClick={() => moveElevator(53)}
              className="p-5 rounded-[100px] bg-red-600 text-[20px]"
            >
              <FaArrowDown />
            </button>
            <button
              onClick={() => moveElevator(27)}
              className="p-5 rounded-[100px] bg-red-600 text-[20px]"
            >
              <FaArrowUp />
            </button>
          </div>

          <div className="mt-10 flex gap-4">
            <button
              onClick={() => moveElevator(53)}
              className="p-5 rounded-[50%] bg-red-600 text-[15px] "
            >
              3
            </button>
            <button
              onClick={() => moveElevator(66)}
              className="p-5 rounded-[100px] bg-red-600 text-[20px]"
            >
              <FaArrowDown />
            </button>
            <button
              onClick={() => moveElevator(40)}
              className="p-5 rounded-[100px] bg-red-600 text-[20px]"
            >
              <FaArrowUp />
            </button>
          </div>

          <div className="mt-10 flex gap-4">
            <button
              onClick={() => moveElevator(66)}
              className="p-5 rounded-[50%] bg-red-600 text-[15px] "
            >
              2
            </button>
            <button
              onClick={() => moveElevator(79)}
              className="p-5 rounded-[100px] bg-red-600 text-[20px]"
            >
              <FaArrowDown />
            </button>
            <button
              onClick={() => moveElevator(53)}
              className="p-5 rounded-[100px] bg-red-600 text-[20px]"
            >
              <FaArrowUp />
            </button>
          </div>

          <div className="mt-10 flex gap-4">
            <button
              onClick={() => moveElevator(79)}
              className="p-5 rounded-[50%] bg-red-600 text-[15px] "
            >
              1
            </button>
            <button
              onClick={() => moveElevator(66)}
              className="p-5 rounded-[100px] bg-red-600 text-[20px]"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
