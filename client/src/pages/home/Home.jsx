import React from "react";
import UserSidebar from "./UserSidebar";
import MessageContainer from "./MessageContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { socket } from "../../socket.client";
import { setOnlineUsers } from "../../store/slice/user/user.slice";
import { pushNewMessage } from "../../store/slice/message/message.slice";

const Home = () => {
  const { isAuthenticated, userProfile } = useSelector((state) => state.user);
  useEffect(() => {
    if (!isAuthenticated || !userProfile) return;

    socket.io.opts.query = {
      userId: userProfile._id,
    };

    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, [isAuthenticated, userProfile]);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleOnlineUsers = (users) => {
      dispatch(setOnlineUsers(users));
    };
    const handleMessage = (newMessage) => {
      dispatch(pushNewMessage(newMessage));
    };
    socket.on("onlineUsers", handleOnlineUsers);
    socket.on("newMessage", handleMessage);

    return () => {
      socket.off("onlineUsers", handleOnlineUsers);
      socket.off("newMessage", handleMessage);
    };
  }, [dispatch]);
  return (
    <div className="flex">
      <UserSidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
