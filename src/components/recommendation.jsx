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
  const [heading, setHeading] = useState(
    " Enter your details to get best suited universities for you."
  );
  const [img, setImg] = useState("../images/left_arrow2.png");
  const [hPadding, setHPadding] = useState("13vw");
  const [blur, setBlur] = useState("0px");
  let item = {
    rank: "Rank",
    universityname: "University Name",
    city: "City",
    rating: "Rating",
    tutionfee: "Tution Fee",
  };
  const onSubmit = async (data) => {
    console.log("SUBMITTING THE REQUEST");
    let result = await Axios.post("https://gge-app-d39f1c8e20e5.herokuapp.com:8000/university", {
      data: data,
    });
    console.log("RESULT IS GENERATED");
    console.log(result);
    const dataArray = Object.values(result.data);
    dataArray.unshift(item);
    setHeading("");
    setHPadding("2vw");
    setBlur("4px");
    setImg("../images/down_arrow.png");

    setUniversities(dataArray);
  };
  return (
    <>
      <body className="ev-body">
        <div
          className="background"
          style={{ filter: "blur(" + blur + ")" }}
        ></div>
        <br />
        <aside style={{ float: "left", textAlign: "center", marginTop: "2vh" }}>
          <div className="ev-div">
            <form className="univ-form" onSubmit={handleSubmit(onSubmit)}>
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
              <input
                type={"submit"}
                style={{
                  background: "#023753",
                  width: "10vw",
                  alignSelf: "center",
                  color: "white",
                }}
              />
            </form>
          </div>
        </aside>
        <h2
          style={{
            alignSelf: "center",
            paddingLeft: hPadding,
            paddingTop: "2vh ",
            textAlign: "center",
            display: "flex",
            color: "darkslategray",
            fontFamily: "Garamond",
          }}
        >
          <img
            src={img}
            width="35px"
            height="25px"
            style={{ marginRight: "1vw" }}
          ></img>
          {heading}
        </h2>
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
