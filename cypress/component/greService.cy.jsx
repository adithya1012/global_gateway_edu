import React from 'react';
import GreService from '../../src/components/greService.jsx'; 

describe('GreService Component', () => {
  it('renders without errors', () => {
    // Mount the component
    cy.mount(<GreService />);

    // Check if the main heading exists
    cy.get('.greSevice_info_heading').should('exist');

    // Check if the "Shedule an Appointment" section exists
    cy.get('.greSevice_shedule').should('exist');
  });

  it('can input appointment details', () => {
    // Mount the component
    cy.mount(<GreService />);

    // Check if the input fields for name, email, and mobile number exist
    cy.get('input[type="text"]').should('exist'); // Assuming name input exists
    cy.get('input[type="email"]').should('exist'); // Assuming email input exists
    cy.get('input[type="number"]').should('exist'); // Assuming mobile number input exists

  });

  it('displays "What sets us apart?" section', () => {
    // Mount the component
    cy.mount(<GreService />);

    // Check if the "What sets us apart?" section exists
    cy.contains('What sets us apart?').should('exist');

  });
});
