import { useState } from "react";
import { useNavigate } from "react-router-dom";

function GreetingView() {
    const [roomId, setRoomId] = useState<string>("");
    const navigate = useNavigate();
    return (
        <main className="h-[100svh] flex flex-col justify-center items-center">
            <button
                type="button"
                className="bg-red-600 text-white px-8 py-2 text-lg rounded mb-10 m-2 active:bg-red-700 active:scale-90"
            >
                Create Room
            </button>
            <div className="flex flex-col justify-center items-center">
                <div>
                    <label
                        htmlFor="roomid"
                        className="hidden text-sm font-medium leading-6 text-gray-900"
                    >
                        Price
                    </label>
                    <div className="relative mx-8 rounded-md shadow-sm">
                        <input
                            type="text"
                            value={roomId}
                            onChange={(e) => setRoomId(e.target.value)}
                            name="roomid"
                            id="roomid"
                            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter Room ID"
                        />
                    </div>
                </div>
                <button
                    type="button"
                    onClick={() => navigate(`/room/${roomId}`)}
                    className="bg-red-600 text-white px-8 py-2 text-lg rounded m-2 active:bg-red-700 active:scale-90"
                >
                    Join Room
                </button>
            </div>
        </main>
    );
}

export default GreetingView;
