import course from "../scripts/course.json" assert { type: "json" };

class Course {
  name;
  universityName;
  city;
  rating;
  constructor(name, universityName, city, rating) {
    this.name = name;
    this.universityName = universityName;
    this.city = city;
    this.rating = rating;
  }
  getName() {
    return this.name;
  }
  getUniversityName() {
    return this.universityName;
  }
  getCity() {
    return this.city;
  }
  getRating() {
    return this.rating;
  }
}

function createCourseList() {
  //   fetch("course.json")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) =>
  console.log(course);
  //     let courseList = [];
  //   courseList.push(new Course());
}

createCourseList();
