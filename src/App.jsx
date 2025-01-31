import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./Components/Header/Header";
import LocationList from "./Components/LocationList/LocationList";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./Components/AppLayout/AppLayout";
import Hotels from "./Components/Hotels/Hotels";
import HotelProvider from "./Components/context/HotelProvider";
import SingleHotel from "./Components/SingleHotel/SingleHotel";
import BookmarkLayout from "./Components/BookmarkLayout/BookmarkLayout";
import BookmarkListProvider from "./Components/context/BookmarkListContext";
import Bookmark from "./Components/Bookmark/Bookmark";
import SingleBookmark from "./Components/SingleBookmark/SingleBookmark";
function App() {
  return (
    <BookmarkListProvider>
      <HotelProvider>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/" element={<LocationList />} />
          <Route path="/hotels" element={<AppLayout />}>
            <Route index element={<Hotels />} />
            <Route path=":id" element={<SingleHotel />} />
          </Route>
          <Route path="/bookmark" element={<BookmarkLayout />}>
            <Route index element={<Bookmark />} />
            <Route path="add" element={<div>add bookmarks</div>} />
            <Route path=":id" element={<SingleBookmark />} />
          </Route>
        </Routes>
      </HotelProvider>
    </BookmarkListProvider>
  );
}

export default App;
