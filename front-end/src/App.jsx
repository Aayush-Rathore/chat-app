import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./screens/home.screen";
import Room from "./screens/room.screen";
import useStore from "./zustand/store";
import "./App.css";
import NotFound from "./screens/notFound.screen";

function App() {
  const { socket, roomId } = useStore((state) => state);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        {socket.connected && roomId !== "" && (
          <Route path="/room/:id" element={<Room />} />
        )}
      </Routes>
      <Toaster />
      <Footer />
    </>
  );
}

export default App;
