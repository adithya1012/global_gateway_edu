import React from 'react';
import Alumni from '../../src/components/Alumni.jsx';  

describe('Alumni Component', () => {
  beforeEach(() => {
    // Mount the component before each test
    cy.mount(<Alumni />);
  });

  it('renders the component', () => {
    // Add assertions to check if the component is rendered correctly
    cy.get('#headertext').should('exist');
    cy.get('#alumni-img').should('exist');
    cy.get('#heading1').should('exist');
    cy.get('#text1').should('exist');
    cy.get('#btn').should('exist');
  });

  it('displays reviews', () => {
    // Add assertions to check if reviews are displayed
    cy.get('#review1').should('exist');
    cy.get('#review2').should('exist');
    cy.get('#review3').should('exist');
  });

  it('displays video cards', () => {
    // Add assertions to check if video cards are displayed
    cy.get('.video-card1').should('exist');
    cy.get('.video-card2').should('exist');
    cy.get('.video-card3').should('exist');
  });

});
