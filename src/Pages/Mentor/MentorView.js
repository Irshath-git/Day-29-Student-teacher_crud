import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";

function MentorView() {
  const params = useParams();

  useEffect(() => {
    getMentors();
  }, []);

  const myFormik = useFormik({
    initialValues: {
      t_name: "",
      email: "",
      cellno: "",
      Course: "",
      batch: "",
    },
  });

  const getMentors = async () => {
    try {
      const mentor = await axios.get(
        `https://6394ae6686829c49e8243706.mockapi.io/Teachers/${params.id}`
      );
      myFormik.setValues(mentor.data);
      console.log(mentor.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary ">
            Mentor's view - {params.id}
          </h6>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="50%">
              <tbody>
                <tr>
                  <td>Mentor Name</td>
                  <td>{myFormik.values.t_name}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{myFormik.values.email}</td>
                </tr>
                <tr>
                  <td>Contact number</td>
                  <td>{myFormik.values.cellno}</td>
                </tr>
                <tr>
                  <td>Course</td>
                  <td>{myFormik.values.Course}</td>
                </tr>
                <tr>
                  <td>Batch</td>
                  <td>{myFormik.values.batch}</td>
                </tr>
              </tbody>
            </table>
            <div className="col-lg-12 mt-3">
              <Link
                to={`/portal/mentorlist`}
                className="btn btn-primary btn-sm mr-1 float-right"
              >
                BACK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MentorView;
