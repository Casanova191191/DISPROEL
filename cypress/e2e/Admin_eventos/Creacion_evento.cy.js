/// <reference types = "cypress"/>

require('cypress-xpath')

describe('Prueba login DISPROEL', () =>{
   //EL nombre de la prueba
    it("Creación de eventos", () =>{
       //Enlace de la pagina 
        cy.visit('https://disproel.app/')
        cy.get('form > .MuiBox-root > .MuiFormControl-marginNormal > .MuiInputBase-root > .MuiInputBase-input').type("3117501965")
        cy.wait(1000)
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type("654321") 
        cy.wait(1000)
        cy.get('form > .MuiBox-root > .MuiButton-contained > .MuiButton-label').click()
        cy.wait(3000)

      //**********************CREACIÓN DE EVENTOS***************************

        cy.get('.MuiBox-root > .MuiButtonBase-root > .MuiButton-label').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("EVENTO PRUEBA")
        cy.wait(1000)
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("Este evento es para las pruebas automatizadas")
        cy.wait(1000)
    
        // Opción de marcación entrega CAD 
        cy.get('.MuiFormControlLabel-root').click()
        cy.wait(1000)
        cy.get('.jss108 > .MuiButtonBase-root').click()

    })
})


