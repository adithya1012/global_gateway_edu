import React from 'react';
import LorService from '../../src/components/lorService.jsx';

describe('LorService Component', () => {
  beforeEach(() => {
    // Visit the component's URL before each test
    cy.mount(<LorService/>);
  });

  it('renders the component', () => {
    // Check if the main content exists
    cy.get('.lorSeviceBody').should('exist');

    // Check for specific text content
    cy.contains('LOR Service Page').should('exist');
    cy.contains('Shedule an Appointment').should('exist');

    // Check for sections
    cy.get('.lorSevice_info').should('exist');
    cy.get('.lorSevice_shedule').should('exist');
    cy.get('.lorService_apart').should('exist');
  });

  it('submits the form successfully', () => {
    // Mock the Axios post method
    cy.intercept('POST', 'http://localhost:8000/add_userlor_appointment', {
      statusCode: 200,
      body: 'Mock data',
    }).as('submitAppointment');

    // Trigger form submission
    cy.get('button').contains('Submit').click();

    // Wait for the form submission to complete
    cy.wait('@submitAppointment');
  });

});
