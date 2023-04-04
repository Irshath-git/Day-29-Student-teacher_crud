import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function StudentList({ mentorVisible }) {
  const [studentlist, setStudentlist] = useState([]);
  const [isLoading, setLoading] = useState(true);

  let getStudents = async () => {
    try {
      const students = await axios.get(
        "https://6394ae6686829c49e8243706.mockapi.io/Students"
      );
      setStudentlist(students.data);
      console.log(students.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  let handleDelete = async (id) => {
    try {
      const confirmData = window.confirm("Are you sure you want to delete");
      if (confirmData) {
        await axios.delete(
          `https://6394ae6686829c49e8243706.mockapi.io/Students/${id}`
        );
      }
      getStudents();
    } catch (error) {}
  };

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <div className="d-sm-flex align-items-center justify-content-between">
            {mentorVisible ? (
              <Link
                to={"/portal/studentcreate"}
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i className="fas fa-download fa-sm text-white-50"></i> Create
                Student
              </Link>
            ) : null}
          </div>
        </div>
        <div className="card-body">
          {isLoading ? (
            <img src="https://media.giphy.com/media/sSgvbe1m3n93G/giphy.gif" />
          ) : (
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                // cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Contact</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Teacher</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Contact</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Teacher</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {studentlist.map((stud, index) => {
                    return (
                      <tr key={index}>
                        <td>{stud.id}</td>
                        <td>{stud.s_name}</td>
                        <td>{stud.email}</td>
                        <td>{stud.cellno}</td>
                        <td>{stud.course}</td>
                        <td>{stud.batch}</td>
                        <td>{stud.teacher}</td>
                        <th>
                          <Link
                            to={`/portal/studentview/${stud.id}`}
                            className="btn btn-sm btn-primary mr-1"
                          >
                            View
                          </Link>
                          <Link
                            to={`/portal/studentedit/${stud.id}`}
                            className="btn btn-sm  btn-info mr-1"
                          >
                            Edit
                          </Link>
                          {mentorVisible ? (
                            <button
                              onClick={() => handleDelete(stud.id)}
                              type="button"
                              className="btn btn-sm  btn-danger mr-1"
                            >
                              Delete
                            </button>
                          ) : null}
                        </th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default StudentList;
