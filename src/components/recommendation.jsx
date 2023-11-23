import React, { Component, useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/events.css";
import "../styles/Recommendation.css";
import "../styles/univRecommendation.css";
import Univ from "../components/univ";
import Axios from "axios";
function Recommendation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [universities, setUniversities] = useState([]);
  const onSubmit = async (data) => {
    let result = await Axios.post("http://localhost:8001/university", {
      data: data,
    });
    const dataArray = Object.values(result.data);
    setUniversities(dataArray);
  };
  return (
    <>
      <body style={{ display: "block", minHeight: "95vh" }}>
        <div className="ev-heading">
          <h2 className="event-heading">
            Enter your details to get best suited universities for you.
          </h2>
        </div>
        <br />
        <aside style={{ float: "left" }}>
          <div className="ev-div">
            <form className="App" onSubmit={handleSubmit(onSubmit)}>
              <label>
                Select a Major :{" "}
                <select name="major" {...register("major")}>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Physics">Physics</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Mathematics">Mathematics</option>
                </select>
              </label>
              <br />
              <label>
                Select a degree :{" "}
                <select name="degree" {...register("degree")}>
                  <option value="Master's">Master's</option>
                  <option value="Bachelor's">Bachelor's</option>
                </select>
              </label>
              <br />

              <label>
                Enter your GPA :{" "}
                <input type="text" name="gpa" {...register("gpa")} />
              </label>
              <br />
              <label>
                Enter GRE Scores :{" "}
                <input type="text" name="gre" {...register("gre")} />
              </label>
              <br />
              <label>
                Enter max tuition fee :{" "}
                <input
                  type="text"
                  name="tutionfee"
                  {...register("tutionfee", { required: true })}
                />
                {/* {errors.email && (
                <span style={{ color: "red" }}>*Email* is mandatory </span>
              )} */}
              </label>
              <br />
              <label>
                Select your test :{" "}
                <label>
                  <input
                    type="radio"
                    value="TOEFL"
                    name="toefl"
                    {...register("name")}
                  />
                  TOEFL
                </label>
                <label>
                  <input
                    type="radio"
                    value="IELTS"
                    name="ielts"
                    {...register("name")}
                  />
                  IELTS
                </label>
              </label>
              <br />
              <label>
                Enter Scores :{" "}
                <input type="text" name="toefl" {...register("toefl")} />
              </label>
              <br />
              <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
            </form>
          </div>
        </aside>
        <div>
          <table>
            {universities.map((item, index) => (
              <Univ key={index} item={item} />
            ))}
          </table>
        </div>
      </body>
    </>
  );
}

export default Recommendation;
