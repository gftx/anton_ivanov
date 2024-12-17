import { Routes, Route } from "react-router-dom";
import { Main, Blog, NoMatch, Mentoring } from "./pages";
import { Layout } from "./components/Layout";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='blog' element={<Blog />} />
        <Route path='mentoring' element={<Mentoring />} />
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
