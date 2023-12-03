import React from 'react';
import Finance from '../../src/components/Finance.jsx';

describe('Finance Component', () => {
  it('renders without errors', () => {
    cy.mount(<Finance />);
    cy.get('.heading').should('exist');
    cy.get('.para').should('exist');
  });

  it('renders bank details without errors', () => {
    cy.mount(<Finance />);
    cy.get('.bank').should('exist');
    cy.get('.bank-details').should('exist');
    cy.get('#learnmore').should('exist');
  });

    it('renders without errors', () => {
      cy.mount(<Finance />);
    });
  
    it('displays bank images', () => {
      cy.mount(<Finance />);
      // Assuming there are images with specific IDs or classes for each bank
      cy.get('.bank img').should('have.length', 4); // Assuming there are 4 bank images
    });
});
