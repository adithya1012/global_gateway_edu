// cypress/integration/tileservice.cy.js

import React from 'react';
import TileService from '../../src/components/tileService.jsx';

describe('TileService Component', () => {
  beforeEach(() => {
    // Mount the component before each test
    cy.mount(<TileService />);
  });

  it('renders the component', () => {
    // Check if there's at least one element rendered
    cy.get('.grid-container').should('exist');
    
    // Check if there are cards rendered
    cy.get('.card').should('have.length.greaterThan', 0);

    // Check for specific text content or elements within the cards
    cy.get('.card-title').should('exist');
    cy.get('.card-text').should('exist');
  });

  it('navigates on card click', () => {
    // Assuming cards have a clickable element
    // For demonstration purposes, here's how you can check if the URL changes on card click
    const initialUrl = Cypress.config().baseUrl;
    
    // Click the first card
    cy.get('.card').first().click();

    // Wait for the URL to change
    cy.url().should('not.eq', initialUrl);

    // Add more assertions or checks based on your navigation behavior
    // For example, you can check if specific elements on the target page exist
  });

  // Add more test cases as needed
});
