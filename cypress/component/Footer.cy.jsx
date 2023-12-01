import React from 'react';
import Footer from '../../src/components/footer.jsx'; // Update the path accordingly

describe('Footer Component', () => {
  it('renders without errors', () => {
    // Mount the component
    cy.mount(<Footer />);
    // Assuming the Footer component renders without any errors
  });

  it('contains social icons', () => {
    // Mount the component
    cy.mount(<Footer />);
    
    // Check if there are social icons
    cy.get('.social-icons .social-icon').should('have.length.greaterThan', 0);
  });

  it('contains information links', () => {
    // Mount the component
    cy.mount(<Footer />);
    
    // Check if there are information links
    cy.get('.info-links a').should('have.length.greaterThan', 0);
  });

  it('contains copyright information', () => {
    // Mount the component
    cy.mount(<Footer />);
    
    // Check if there is copyright information
    cy.get('.column h3:contains("Copyrights @ 2023 GGE")').should('exist');
  });

  it('contains privacy policy link', () => {
    // Mount the component
    cy.mount(<Footer />);
    
    // Check if there is a link to the privacy policy
    cy.get('.info-links a[href="#"]').should('exist'); // Replace '#' with the actual URL
  });

  it('contains terms of use link', () => {
    // Mount the component
    cy.mount(<Footer />);
    
    // Check if there is a link to the terms of use
    cy.get('.info-links a[href="#"]').should('exist'); // Replace '#' with the actual URL
  });

  it('contains help link', () => {
    // Mount the component
    cy.mount(<Footer />);
    
    // Check if there is a link to the help section
    cy.get('.info-links a[href="#"]').should('exist'); // Replace '#' with the actual URL
  });
});
