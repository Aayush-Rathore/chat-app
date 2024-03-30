import logo from "@/assets/Stranger.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Video, MessageCircleMore } from "lucide-react";
import { useCallback, useRef, useEffect } from "react";
import useStore from "@/zustand/store";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { socket, setRoomId, setUsername } = useStore((state) => state);

  const usernameRef = useRef("");
  const roomIdRef = useRef("");
  const navigate = useNavigate();

  const StartVideo = useCallback(() => {
    const username = usernameRef.current.value;
    const roomId = roomIdRef.current.value;
    if (username !== "" && roomId !== "") {
      socket.emit("join:room", { username, roomId });
    }
  }, [usernameRef, roomIdRef, socket]);

  const handelJoining = useCallback(
    (data) => {
      const { username, roomId } = data;
      setRoomId(roomId);
      setUsername(username);
      navigate(`/room/${roomId}`);
    },
    [setRoomId, setUsername, navigate]
  );

  useEffect(() => {
    socket.on("join:room", handelJoining);
    return () => socket.off("join:room", handelJoining);
  }, [socket, handelJoining]);

  return (
    <>
      <div className="flex justify-center items-center p-2 md:px-10 md:py-5 flex-col lg:flex-row">
        <div className="flex lg:min-w-96">
          <img
            src={logo}
            alt="Application Logo"
            className="w-28 md:w-40 invert mb-8"
          />
          <span className="rotate-6 font-normal text-right">
            Talk to strangers now! <br />
            on Stranger Talk!
          </span>
        </div>
        <div className="w-full">
          <p className="text-justify mb-6">
            <b>Stranger Talk</b> is a great way to meet new friends. When you
            use Stranger Talk, we pick someone else at random and let you talk
            one-on-one. To help you stay safe, chats are anonymous unless you
            tell someone who you are (not suggested!), and you can stop a chat
            at any time, so please be careful.
          </p>
        </div>
      </div>
      <div className="p-2 md:px-10 md:py-5 flex flex-col gap-5">
        <Input
          placeholder="Username"
          className="max-w-72 sm:max-w-96"
          ref={usernameRef}
        />
        <Input
          placeholder="Room Id"
          className="max-w-72 sm:max-w-96 disabled:opacity-85"
          ref={roomIdRef}
        />
        <div className="flex flex-wrap gap-3">
          <Button onClick={StartVideo}>
            Start Video Call
            <Video className="scale-110 transition-all ml-3" />
          </Button>
          <Button>
            Start Chatting
            <MessageCircleMore className="scale-110 transition-all ml-3" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
