import React from 'react';
import SOP from '../../src/components/SOP.jsx'; 

describe('SOP Component', () => {
  beforeEach(() => {
    // Mount the SOP component directly
    cy.mount(<SOP />);
  });

  it('renders the component', () => {
    cy.get('.sop-image').should('exist');
    cy.get('.info').should('exist');
    cy.get('form').should('exist');
  });

  it('submits the form successfully', () => {
    // Stub the Axios post method
    cy.intercept('POST', 'http://localhost:8000/add_usersop_appointment').as('submitAppointment');

    // Submit the form
    cy.get('button').click();

    // Wait for the form submission to complete
    cy.wait('@submitAppointment').then((interception) => {
      const requestBody = interception.request.body;
      expect(requestBody.name).to.equal('');
      expect(requestBody.email).to.equal('');
      expect(requestBody.mobilenumber).to.equal('');
    });
  });
});

