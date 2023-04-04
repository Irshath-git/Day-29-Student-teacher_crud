import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StudentCreate() {
  const [isloading, setLoading] = useState(false);
  const navigate = useNavigate();

  const myFormik = useFormik({
    initialValues: {
      s_name: "",
      email: "",
      cellno: "",
      course: "",
      batch: "",
      teacher: "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.s_name) {
        errors.s_name = "Please enter your username";
      } else if (values.s_name.length < 3) {
        errors.s_name = "Username must be at least 3 characters";
      } else if (values.s_name.length > 20) {
        errors.s_name = "Username must be less than 20 characters";
      }

      if (!values.email) {
        errors.email = "Please enter your email";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Please enter a valid email";
      }

      if (!values.cellno) {
        errors.cellno = "Please enter your Contact Number";
      } else if (values.cellno.length > 10) {
        errors.cellno = "Please enter a valid Contact Number";
      }

      if (!values.course) {
        errors.course = "Please enter your course";
      }

      if (!values.batch) {
        errors.batch = "Please enter your batch";
      }

      if (!values.teacher) {
        errors.teacher = "Please enter your teacher";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await axios.post(
          "https://6394ae6686829c49e8243706.mockapi.io/Students",
          values
        );
        navigate("/portal/studentlist");
      } catch (error) {
        console.log(error);
        alert("Validation Failed");
        setLoading(false);
      }
    },
  });

  return (
    <>
      <div className="container">
        <form onSubmit={myFormik.handleSubmit}>
          <div className="row">
            <div className="col-lg-4">
              <label>Name</label>
              <input
                name="s_name"
                value={myFormik.values.s_name}
                onChange={myFormik.handleChange}
                type="text"
                className={`form-control ${
                  myFormik.errors.s_name ? "is-invalid" : "is-valid"
                }`}
              />

              <span style={{ color: "red" }}>{myFormik.errors.s_name}</span>
            </div>
            <div className="col-lg-4">
              <label>E-mail</label>
              <input
                name="email"
                value={myFormik.values.email}
                onChange={myFormik.handleChange}
                type="text"
                className={`form-control ${
                  myFormik.errors.email ? "is-invalid" : "is-valid"
                }`}
              />
              <span style={{ color: "red" }}>{myFormik.errors.email}</span>
            </div>
            <div className="col-lg-4">
              <label>Contact number</label>
              <input
                name="cellno"
                value={myFormik.values.cellno}
                onChange={myFormik.handleChange}
                type="text"
                className={`form-control ${
                  myFormik.errors.cellno ? "is-invalid" : "is-valid"
                }`}
              />
              <span style={{ color: "red" }}>{myFormik.errors.cellno}</span>
            </div>
            <div className="col-lg-4">
              <label>Courses</label>
              <select
                name="course"
                value={myFormik.values.course}
                onChange={myFormik.handleChange}
                className={`form-control ${
                  myFormik.errors.course ? "is-invalid" : "is-valid"
                }`}
              >
                <option value="">-----Select-----</option>
                <option value="FSD">FSD</option>
                <option value="JS">JavaScript</option>
                <option value="UI/UX">Ui/Ux</option>
                <option value="React">React</option>
                <option value="Cyber_security">Cyber security</option>
                <option value="MongoDB">MongoDB</option>
              </select>
              <span style={{ color: "red" }}>{myFormik.errors.course}</span>
            </div>
            <div className="col-lg-4">
              <label>Batches</label>
              <select
                name="batch"
                value={myFormik.values.batch}
                onChange={myFormik.handleChange}
                className={`form-control ${
                  myFormik.errors.batch ? "is-invalid" : "is-valid"
                }`}
              >
                <option value="">-----Select-----</option>
                <option value="B01_WD">B01 WD</option>
                <option value="B01_WE">B01 WE</option>
                <option value="B02_WD">B02 WD</option>
                <option value="B02_WE">B02 WE</option>
                <option value="B03_WD">B03 WD</option>
                <option value="B03_WE">B03 WE</option>
              </select>
              <span style={{ color: "red" }}>{myFormik.errors.batch}</span>
            </div>
            <div className="col-lg-4">
              <label>Assign Teacher</label>
              <select
                name="teacher"
                value={myFormik.values.teacher}
                onChange={myFormik.handleChange}
                className={`form-control ${
                  myFormik.errors.teacher ? "is-invalid" : "is-valid"
                }`}
              >
                <option value="">-----Select-----</option>
                <option value="M1">Mentor1</option>
                <option value="M2">Mentor2</option>
                <option value="M3">Mentor3</option>
                <option value="M4">Mentor4</option>
                <option value="M5">Mentor5</option>
                <option value="M6">Mentor6</option>
              </select>
              <span style={{ color: "red" }}>{myFormik.errors.teacher}</span>
            </div>
            <div className="col-lg-12 mt-3 ">
              <input
                disabled={isloading ? true : false}
                type={"submit"}
                value={isloading ? "Loading..." : "Save"}
                className="btn btn-primary float-right"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default StudentCreate;
