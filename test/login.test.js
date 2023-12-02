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

chai.use(chaiHttp);

describe('Login Page', () => {
  it('should handle user login', (done) => {
    chai.request(server)
      .post('/Login_user')
      .send({ email: 'test@example.com', password: 'testpassword' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal('Success'); // Update this line
        if (err) {
          console.error(err);
          done(err);
          return;
        }
        done();
      });
  });

  it('should handle user registration', (done) => {
    chai.request(server)
      .post('/add_user_detail')
      .send({ name: 'Test User', email: 'test@example.com', password: 'testpassword' })
      .end((err, res) => {
        expect(res).to.have.status(400); // Update this line
        if (err) {
          console.error(err);
          done(err);
          return;
        }
        // You can add more assertions based on your response
        done();
      });
  });

  // Additional test cases...

  // Ensure that the test suite exits properly
  after(function (done) {
    // Perform any cleanup or additional steps if needed
    // Call done() to signal the completion of the test suite
    done();
  });
});
