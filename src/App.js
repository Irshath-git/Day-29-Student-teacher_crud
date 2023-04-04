import "./sb-admin-2.min.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Portal from "./Portal";
import MentorList from "./Pages/Mentor/MentorList";
import MentorCreate from "./Pages/Mentor/MentorCreate";
import MentorEdit from "./Pages/Mentor/MentorEdit";
import MentorView from "./Pages/Mentor/MentorView";
import StudentList from "./Pages/Student/StudentList";
import StudentCreate from "./Pages/Student/StudentCreate";
import StudentView from "./Pages/Student/StudentView";
import StudentEdit from "./Pages/Student/StudentEdit";
import { UserProvider } from "./Context/UserContext";

function App() {
  const [mentorVisible, setMentorVisible] = useState(false);
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Login setMentorVisible={setMentorVisible} />}
            />
            <Route path="/portal" element={<Portal />}>
              <Route path="mentorlist" element={<MentorList />} />
              <Route path="mentorcreate" element={<MentorCreate />} />
              <Route path="mentorview/:id" element={<MentorView />} />
              <Route path="mentoredit/:id" element={<MentorEdit />} />
              <Route
                path="studentlist"
                element={<StudentList mentorVisible={mentorVisible} />}
              />
              <Route path="studentcreate" element={<StudentCreate />} />
              <Route path="studentview/:id" element={<StudentView />} />
              <Route path="studentedit/:id" element={<StudentEdit />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
