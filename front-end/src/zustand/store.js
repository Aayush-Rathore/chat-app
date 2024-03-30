import { create } from 'zustand';
import { io } from "socket.io-client"

const useStore = create((set) => ({
    // eslint-disable-next-line no-undef
    socket: io(import.meta.env.VITE_SOCKET_SERVER),
    roomId: "",
    username: "",
    remoteSocketId: "",
    remoteSocketUsername: "",
    setRoomId: (roomId) => { set({ roomId }) },
    setUsername: (username) => { set({ username }) },
    setRemoteSocketId: (remoteSocketId) => { set({ remoteSocketId }) },
    setRemoteSocketUsername: (remoteSocketUsername) => { set({ remoteSocketUsername }) }
}))

export default useStore;