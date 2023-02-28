import Home from "./screens/home";
import History from "./screens/history";
import Runs from "./screens/runs";
import Links from "./screens/links";
import About from "./screens/about";


function mapTest() {
  return (
    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=180yszlUoz3aIYtUxEGN-bm9JRybFSoY&ehbc=2E312F" width="640" height="480"></iframe>
  );
}

export default function App() {
  return (
    <div className="w-full h-full flex">
      <mapTest />
      <div>Hello</div>
    </div>
  );
}
