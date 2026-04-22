import User from "./User";
import Message from "./Message";
import SendMessage from "../../components/SendMessage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMessageThunk } from "../../store/slice/message/message.thunk";

const MessageContainer = () => {
  const { selectedUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.message);
  useEffect(() => {
    if (selectedUser?._id) {
      dispatch(getMessageThunk({ receiverId: selectedUser?._id }));
    }
  }, [selectedUser, dispatch]);
  return !selectedUser ? (
    <div className="flex flex-col justify-center items-center w-full">
      <h2 className="text-2xl">Welcome to Chat-App</h2>
      <p className="text-xl">
        Please select a person to start your conversation
      </p>
    </div>
  ) : (
    <div className="h-screen w-full flex flex-col">
      <div className="border-b border-b-white/10 p-2">
        <User userDetails={selectedUser} />
      </div>
      <div className="h-full p-3 overflow-y-auto">
        {messages?.map((messageDetails) => {
          return (
            <Message
              key={messageDetails?._id}
              messageDetails={messageDetails}
            />
          );
        })}
      </div>
      <SendMessage />
    </div>
  );
};

export default MessageContainer;
