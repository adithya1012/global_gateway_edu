import React from 'react';
import UniversityListBody from '../../src/components/universityListBody';

describe('University List Body', () => {
  beforeEach(() => {
    cy.mount(<UniversityListBody />);
  });

  it('displays the University List Body', () => {
    cy.get('.ul-body').should('exist');
  });

  it('displays the Navbar', () => {
    cy.get('nav').should('exist');
  });

  it('displays the search form', () => {
    cy.get('.ul-form').should('exist');
  });

  it('displays the degree dropdown', () => {
    cy.get('#degreeName').should('exist');
  });

  it('displays the major dropdown', () => {
    cy.get('#courseName').should('exist');
  });

  it('displays the search button', () => {
    cy.get('.univ-search-btn').should('exist');
  });

  it('displays the University List table', () => {
    cy.get('table').should('exist');
  });

});
