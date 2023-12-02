// // login.test.js

// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../back-end/index'); // Import your server file
// const { expect } = chai;

// chai.use(chaiHttp);

// describe('Login Page', () => {
//   it('should handle user login', (done) => {
//     chai.request(server)
//       .post('/Login_user')
//       .send({ email: 'test@example.com', password: 'testpassword' })
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body).to.equal('Success');
//         if (err) {
//             console.error(err);
//             done(err); // Call done with the error to indicate test failure
//             return;
//           }
//         done();
//       });
//   });

//   it('should handle user registration', (done) => {
//     chai.request(server)
//       .post('/add_user_detail')
//       .send({ name: 'Test User', email: 'test@example.com', password: 'testpassword' })
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         if (err) {
//             console.error(err);
//             done(err); // Call done with the error to indicate test failure
//             return;
//           }
//         // You can add more assertions based on your response
//         done();
//       });
//   });
// });
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../back-end/index'); // Import your server file
// const { expect } = chai;

// chai.use(chaiHttp);

// describe('Login Page', () => {
//   it('should handle user login', (done) => {
//     chai.request(server)
//       .post('/Login_user')
//       .send({ email: 'test@example.com', password: 'testpassword' })
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body).to.equal('Success');
//         if (err) {
//           console.error(err);
//           done(err); // Call done with the error to indicate test failure
//           return;
//         }
//         done();
//       });
//   });

//   it('should handle user registration', (done) => {
//     chai.request(server)
//       .post('/add_user_detail')
//       .send({ name: 'Test User', email: 'test@example.com', password: 'testpassword' })
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         if (err) {
//           console.error(err);
//           done(err); // Call done with the error to indicate test failure
//           return;
//         }
//         // You can add more assertions based on your response
//         done();
//       });
//   });

//   // Additional test cases...

//   // Ensure that the test suite exits properly
//   after(function (done) {
//     // Perform any cleanup or additional steps if needed
//     // Call done() to signal the completion of the test suite
//     done();
//   });
// });
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../back-end/index'); // Import your server file
const { expect } = chai;
const Axios=require("axios")
// async function delete_record(){
//   const response = await axios.delete(`http://localhost:8000/delete_user`, {
//     data: {
//       email: "test5@example.com",
//     },
//   });

//   // Assuming the server responds with a success message
//   expect(response.status).to.equal(200);
//   expect(response.data).to.equal('Record deleted');
// }

async function delete_record(email) {
  try {
    const response = await Axios.delete('http://localhost:8000/delete_user', {
      data: { email: email }, // Use 'data' to send the request body for DELETE requests
    });
   
    console.log(email)
    console.log(response.data); // Log the response data

    // Optionally, you can perform additional assertions on the response if needed
    // For example: assert(response.status === 200, 'Unexpected status code');

  } catch (error) {
    console.error('Error deleting user record:', error);
  }
}
  

chai.use(chaiHttp);

describe('Login Page', () => {
  it('should handle user registration', (done) => {
    chai.request(server)
      .post('/add_user_detail')
      .send({ name: 'Test User', email: 'demo@example.com', password: 'testpassword' })
      .end((err, res) => {
        expect(res).to.have.status(200); // Update this line
        if (err) {
          console.error(err);
          done(err);
          return;
        }
        // You can add more assertions based on your response
        done();
      });
  });

  it('should handle user login', (done) => {
    chai.request(server)
      .post('/Login_user')
      .send({ email: 'demo@example.com', password: 'testpassword' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        // expect(res.body.message).to.equal('Success'); // Update this line
        if (err) {
          console.error(err);
          done(err);
        
          return;
        }
        
        done();
      });
  });





  // Ensure that the test suite exits properly
  after(function (done) {
    delete_record("demo@example.com");
    // Perform any cleanup or additional steps if needed
    // Call done() to signal the completion of the test suite
    done();
  });
});
