import React, { Component } from "react";
import { useForm } from "react-hook-form";
import "../styles/events.css";
import "../styles/Recommendation.css";
function Recommendation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <body>
        <div className="ev-heading">
          <h2 className="event-heading">
            Enter your details to get best suited universities for you.
          </h2>
        </div>
        <br />
        <div className="ev-div">
          <form className="App" onSubmit={handleSubmit(onSubmit)}>
            <label>
              Select a degree :{" "}
              <select>
                <option value="Master">Master's</option>
                <option value="Baechelor">Bachelor's</option>
              </select>
            </label>
            <br />
            <label>
              Enter your GPA : <input type="text" {...register("name")} />
            </label>
            <br />
            <label>
              Enter GRE Scores : <input type="text" {...register("name")} />
            </label>
            <br />
            <label>
              Enter max tuition fee :{" "}
              <input type="email" {...register("email", { required: true })} />
              {errors.email && (
                <span style={{ color: "red" }}>*Email* is mandatory </span>
              )}
            </label>
            <br />
            <label>
              Select your test :{" "}
              <label>
                <input type="radio" value="TOEFL" name="test_1" />
                TOEFL
              </label>
              <label>
                <input type="radio" value="IELTS" name="test_1" />
                IELTS
              </label>
            </label>
            <br />
            <label>
              Enter Scores : <input type="text" {...register("name")} />
            </label>
            <br />
            <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
          </form>
        </div>
      </body>
    </>
  );
}

export default Recommendation;
