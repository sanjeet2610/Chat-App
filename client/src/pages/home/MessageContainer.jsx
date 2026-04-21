import User from "./User";
import Message from "./Message";
import { IoIosSend } from "react-icons/io";
import { useSelector } from "react-redux";

const MessageContainer = () => {
  const { selectedUser } = useSelector((state) => state.user);
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="border-b border-b-white/10 p-2">
        <User userDetails={selectedUser} />
      </div>
      <div className="h-full p-3 overflow-y-auto">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="w-full flex gap-2 p-2">
        <input type="text" placeholder="Type here" className="input w-full" />
        <button className="btn btn-soft btn-secondary mr-2">
          <IoIosSend />
        </button>
      </div>
    </div>
  );
};

export default MessageContainer;
