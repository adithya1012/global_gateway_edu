// cypress/integration/homeBody.spec.js

import React from 'react';
import HomeBody from '../../src/components/homeBody'; // Update the path accordingly

describe('HomeBody Component', () => {
  beforeEach(() => {
    // Mount the component
    cy.mount(<HomeBody />);
  });

  it('renders without errors', () => {
    // Check if the main content container exists
    cy.get('.homebody-body').should('exist');

    // Check if the image is present
    cy.get('.homebody-aside img').should('exist');

    // Check if the text content container exists
    cy.get('.homebody-aside-text').should('exist');

    // Additional checks or assertions as needed
  });

  it('displays correct introductory text', () => {
    // Check if the introductory text is present and has the expected content
    cy.get('.homebody-aside-text em').should(
      'contain',
      'Studying abroad is like opening a book to pages you\'ve never imagined, with each chapter filled with adventure, knowledge, and personal growth.'
    );

    // Additional checks or assertions as needed
  });

  it('renders the "GET STARTED" button', () => {
    // Check if the "GET STARTED" button is present
    cy.get('.get-started').should('exist');

    // Additional checks or assertions as needed
  });
});
