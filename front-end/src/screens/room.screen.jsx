// import useStore from "@/zustand/store";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
// import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizontal } from "lucide-react";

const Room = () => {
  //   const { username, setRemoteSocketId, remoteSocketId, socket } = useStore(
  //     (state) => state
  //   );
  const [myStream, setMyStream] = useState(null);

  //   const handelJoining = useCallback(
  //     (data) => {
  //       setRemoteSocketId(data.id);
  //       toast(`${data.username} just joined the room!`);
  //     },
  //     [setRemoteSocketId]
  //   );

  const handelVideoCall = async () => {
    try {
      console.log("Hello");
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handelVideoCall();
    // toast(`Hello ${username}, wellcome!`);
    // socket.on("user:joined", handelJoining);

    // return () => {
    //   socket.off("user:joined", handelJoining);
    // };
  }, [myStream]);

  return (
    <div className="flex gap-3 flex-col p-2 md:px-10 md:py-5 ">
      <div className="flex flex-col md:flex-row gap-2">
        <dir className="flex flex-col gap-2 relative">
          <div className="bg-green-400 min-w-64 min-h-64">Hello</div>
          <div className="absolute md:relative bottom-0 right-0 min-w-20 min-h-20 bg-yellow-400 md:min-w-64 md:min-h-64">
            {myStream ? <ReactPlayer url={myStream} playing /> : "Loading..."}
          </div>
        </dir>
        <div className="bg-red-500 w-full"></div>
      </div>
      <div className="flex gap-3">
        <Input placeholder="Message" />
        <Button>
          <SendHorizontal />
        </Button>
      </div>
    </div>
  );
};

export default Room;
