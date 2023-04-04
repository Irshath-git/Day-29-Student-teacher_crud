import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MentorList() {
  const [mentorList, setMentorList] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    getMentors();
  }, []);

  let getMentors = async () => {
    try {
      const mentors = await axios.get(
        "https://6394ae6686829c49e8243706.mockapi.io/Teachers"
      );
      setMentorList(mentors.data);
      setLoading(false);
      console.log(mentors.data);
    } catch (error) {
      console.log(error);
    }
  };

  let handleDelete = async (id) => {
    try {
      const confirmData = window.confirm("Are you sure you want to delete");
      if (confirmData) {
        await axios.delete(
          `https://6394ae6686829c49e8243706.mockapi.io/Teachers/${id}`
        );
      }
      getMentors();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <div className="d-sm-flex align-items-center justify-content-between">
            <Link
              to={"/portal/mentorcreate"}
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              <i className="fas fa-download fa-sm text-white-50"></i> Create
              Mentor
            </Link>
          </div>
        </div>
        <div className="card-body">
          {loading ? (
            <img src="https://media.giphy.com/media/sSgvbe1m3n93G/giphy.gif" />
          ) : (
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                //   cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Contact</th>
                    <th>Course</th>
                    <th>Batch</th>
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
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {mentorList.map((mentor, index) => {
                    return (
                      <tr key={index}>
                        <td>{mentor.id}</td>
                        <td>{mentor.t_name}</td>
                        <td>{mentor.email}</td>
                        <td>{mentor.cellno}</td>
                        <td>{mentor.Course}</td>
                        <td>{mentor.batch}</td>
                        <th>
                          <Link
                            to={`/portal/mentorview/${mentor.id}`}
                            className="btn btn-primary mr-1"
                          >
                            View
                          </Link>
                          <Link
                            to={`/portal/mentoredit/${mentor.id}`}
                            className="btn btn-info mr-1"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(mentor.id)}
                            type="button"
                            className="btn btn-danger mr-1"
                          >
                            Delete
                          </button>
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

export default MentorList;
