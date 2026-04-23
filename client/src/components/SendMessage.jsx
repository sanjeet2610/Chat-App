import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { sendMessageThunk } from "../store/slice/message/message.thunk";

const SendMessage = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.user);
  const handleSendMessage = () => {
    if (!message.trim()) return;
    dispatch(sendMessageThunk({ receiverId: selectedUser?._id, message }));
    setMessage("");
  };
  return (
    <div className="w-full flex gap-2 p-2">
      <input
        type="text"
        placeholder="Type here"
        className="input w-full"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSendMessage();
          }
        }}
      />
      <button
        className="btn btn-soft btn-secondary mr-2"
        onClick={handleSendMessage}
      >
        <IoIosSend />
      </button>
    </div>
  );
};

export default SendMessage;
