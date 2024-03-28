describe('API Response JSON Decode Test', () => {
    it('Should decode JSON response body', () => {
      // Make a request to your API endpoint
      cy.request('GET', 'https://coast.noaa.gov/hurricanes/tiles/spatial.segments.json')
        .then((response) => {
          // Decode the JSON response body
          const decodedBody = JSON.parse(response.body);
  
          // Now you can work with the decoded body
          // For example, you can assert properties or perform further actions
          expect(decodedBody).to.have.property('key', 'value');
        });
    });
  })