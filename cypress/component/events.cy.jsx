// cypress/integration/events.spec.js

import React from 'react';
import Events from '../../src/components/events'; // Update the path accordingly

describe('Events Component', () => {
  beforeEach(() => {
    cy.mount(<Events />);
  });

  it('renders the component', () => {
    cy.get('.ev-heading').should('exist');
    cy.get('.event-heading').should('exist');
    cy.get('.ev-div').should('exist');
    cy.get('.grid-container').should('exist');
  });

  it('displays event cards', () => {
    cy.get('.card').should('have.length.greaterThan', 0);
    cy.get('.card img').should('exist');
    cy.get('.card h5').should('exist');
    cy.get('.card p').should('exist');
    cy.get('.card a').should('exist');
  });

  it('verifies card details', () => {
    cy.get('.card').first().within(() => {
      cy.get('img').should('exist');
      cy.get('h5').should('exist');
      cy.get('p').should('exist');
      cy.get('a').should('exist');
    });
  });
});
