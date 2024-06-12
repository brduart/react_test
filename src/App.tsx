import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Posts from "./components/Posts";
import { PostProvider } from "./contexts/PostsContext";

function App() {
  return (
    <>
      <PostProvider>
        <Header />
        <Footer />
        <Posts />
      </PostProvider>
    </>
  );
}

export default App;
