import React from 'react';
import Recommendation from '../../src/components/recommendation.jsx';

describe('Recommendation Component', () => {
  beforeEach(() => {
    // Mount the Recommendation component directly
    cy.mount(<Recommendation />);
  });

  it('renders the component', () => {
    cy.get('.ev-heading').should('exist');
    cy.get('.ev-div').should('exist');
  });

  it('renders the form elements', () => {
    cy.get('form').should('exist');
    cy.get('label').should('exist');
    cy.get('select').should('exist');
    cy.get('input[type="text"]').should('exist');
    cy.get('input[type="email"]').should('exist');
    cy.get('input[type="radio"]').should('exist');
    cy.get('input[type="submit"]').should('exist');
  });
});
