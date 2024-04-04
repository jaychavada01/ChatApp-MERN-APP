import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useAuthContext } from "../../context/AuthContext";

import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  // to cleanup selected conversation on re-login
  useEffect(()=>{
    return () =>setSelectedConversation(null)
  },[setSelectedConversation])
  return (
    <div className="md:min-w-[450px] flex flex-col msgcontainer-res">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* {Header} */}
          <div className="bg-gray-900 px-4 py-2 mb-2">
            <span className="label-text">To :</span>{" "}
            <span className="text-yellow-500 font-bold">{selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center smLtext-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
