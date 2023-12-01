import React from 'react';
import LoginBody from '../../src/components/loginPage.jsx'; 

describe('LoginBody Component', () => {
  beforeEach(() => {
    // Mount the LoginBody component
    cy.mount(<LoginBody />);
  });

  it('exists on the page', () => {
    // Assert that the LoginBody component exists
    cy.get('.Login-wrapper').should('exist');
  });
});

