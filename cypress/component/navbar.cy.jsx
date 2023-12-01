// Assuming your Navbar component is in a file named Navbar.jsx
import React from 'react';
import Navbar from '../../src/components/navbar.jsx';  

describe('Navbar Component', () => {
  beforeEach(() => {
    // Mount the Navbar component directly
    cy.mount(<Navbar />);
  });

  it('renders the component', () => {
    cy.get('.nav-body').should('exist');
    cy.get('#nav-header').should('exist');
    cy.get('.searchBar').should('exist');
    cy.get('.nav-links').should('exist');
  });

  it('renders the logo', () => {
    cy.get('.nav-column-one img').should('exist');
  });

  it('renders the search bar', () => {
    cy.get('.nav-column-two form').should('exist');
    cy.get('.nav-form label').should('exist');
    cy.get('.nav-input').should('exist');
    cy.get('.goButton').should('exist');
  });

  it('renders the login button', () => {
    cy.get('.nav-column-three .nav-login').should('exist');
  });
});
