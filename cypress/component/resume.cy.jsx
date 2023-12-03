import React from 'react';
import Resume from '../../src/components/Resume.jsx';

describe('Resume Component', () => {
  beforeEach(() => {
    // Mount the Resume component directly
    cy.mount(<Resume />);
  });

  it('renders the component', () => {
    cy.get('.resume-image').should('exist');
    cy.get('.info').should('exist');
    cy.get('form').should('exist');
  });

  it('renders the form elements', () => {
    cy.get('label').should('exist');
    cy.get('input[type="text"]').should('exist');
    cy.get('input[type="email"]').should('exist');
    cy.get('input[type="number"]').should('exist');
    cy.get('select').should('exist');
    cy.get('button#booknow').should('exist');
  });

  it('submits the form successfully', () => {
    // Stub the Axios post method
    cy.intercept('POST', 'http://localhost:8000/add_userresume_appointment').as('submitAppointment');

    // Fill in the form
    cy.get('input[type="text"]').type('John Doe');
    cy.get('input[type="email"]').type('john@example.com');
    cy.get('input[type="number"]').type('1234567890');
    cy.get('select').select('Resume');

    // Submit the form
    cy.get('button#booknow').click();

    // Wait for the form submission to complete
    cy.wait('@submitAppointment').then((interception) => {
      const requestBody = interception.request.body;
      expect(requestBody.name).to.equal('John Doe');
      expect(requestBody.email).to.equal('john@example.com');
      expect(requestBody.mobilenumber).to.equal('1234567890');
    });
  });
});
