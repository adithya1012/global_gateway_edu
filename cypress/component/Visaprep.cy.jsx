import React from 'react';
import Visaprep from '../../src/components/Visaprep';

describe('Visaprep Component', () => {
  beforeEach(() => {
    // Mount the component before each test
    cy.mount(<Visaprep />);
  });

  it('renders the component', () => {
    // Check if the main content exists
    cy.get('.VisaprepBody').should('exist');
    cy.get('.VisaImage').should('exist');
    cy.get('.Visaprep_info').should('exist');
    cy.get('.Visaprep_shedule').should('exist');
    cy.get('.Visaprep_apart').should('exist');
  });

  it('contains relevant text content', () => {
    cy.get('.Visaprep_info_heading').should('exist');
    cy.get('.Visaprep_info p').should('exist');
    cy.get('.Visaprep_shedule h3').should('exist');
    cy.get('.Visaprep_shedule input[type="text"]').should('exist');
    cy.get('.Visaprep_shedule input[type="phone"]').should('exist');
    cy.get('.Visaprep_shedule button').should('exist');
    cy.get('.Visaprep_apart h4').should('exist');
    cy.get('.Visaprep_apart ul').should('exist');
    cy.get('.Visaprep_apart p').should('exist');
  });

  it('allows users to input their name and phone number', () => {
    // Type into the Name and Phone input fields
    cy.get('.Visaprep_shedule input[type="text"]').type('John Doe');
    cy.get('.Visaprep_shedule input[type="phone"]').type('1234567890');

    // Check if the input values are correct
    cy.get('.Visaprep_shedule input[type="text"]').should('have.value', 'John Doe');
    cy.get('.Visaprep_shedule input[type="phone"]').should('have.value', '1234567890');
  });

  it('submits the appointment form', () => {
    // Type into the Name and Phone input fields
    cy.get('.Visaprep_shedule input[type="text"]').type('John Doe');
    cy.get('.Visaprep_shedule input[type="phone"]').type('1234567890');

    // Click the Submit button
    cy.get('.Visaprep_shedule button').click();

  });

});
