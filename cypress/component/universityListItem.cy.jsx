import React from 'react';
import UniversityListItem from '../../src/components/universityListItem';

describe('University List Item Component', () => {
  it('renders University List Item with provided props', () => {
    const universityData = {
      id: 1,
      rank: 1,
      name: 'MS in Computer Science',
      universityname: 'Massachusetts Institute of Technology (MIT)',
      city: 'Cambridge, United States',
      rating: '94.6',
      code: 'CS',
    };

    // Mount the UniversityListItem component with provided props
    cy.mount(<UniversityListItem c={universityData} />);

    // Verify that the rendered content matches the provided props
    cy.get('.UL-item')
      .should('exist')
      .within(() => {
        cy.get('.ulist').should('have.length', 4);
      
        cy.contains('.ulist', universityData.name);
        cy.contains('.ulist', universityData.universityname);
        cy.contains('.ulist', universityData.city);
        cy.contains('.ulist', universityData.rating);
      });
  });

  it('renders University List Item with different props', () => {
    const universityData = {
      id: 2,
      rank: 3,
      name: 'MS in Electrical Engineering',
      universityname: 'Stanford University',
      city: 'Stanford, United States',
      rating: '93.2',
      code: 'EE',
    };
    cy.mount(<UniversityListItem c={universityData} />);

    cy.get('.UL-item')
      .should('exist')
      .within(() => {
        cy.get('.ulist').should('have.length', 4);
        cy.contains('.ulist', universityData.name);
        cy.contains('.ulist', universityData.universityname);
        cy.contains('.ulist', universityData.city);
        cy.contains('.ulist', universityData.rating);
      });
  });
});
