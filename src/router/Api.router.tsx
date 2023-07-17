import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "@/components";
import { TaskStatePage, TaskListPage, TaskNewPage } from "@/pages";

export const ApiRouter = () => {
  return (
    <>
      <Router>
        <Nav />
        <div className="mt-[100px]">
          <Routes>
            <Route path="/" element={<TaskStatePage />} />
            <Route path="/list" element={<TaskListPage />} />
            <Route path="/new" element={<TaskNewPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};
