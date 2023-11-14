/// <reference types = "cypress"/>

require('cypress-xpath')

describe('Prueba login DISPROEL', () =>{
    it.only("Login DISPROEL", () =>{
        cy.visit('https://disproel.app/')
        cy.get('form > .MuiBox-root > .MuiFormControl-marginNormal > .MuiInputBase-root > .MuiInputBase-input').type("3117501965")
        cy.wait(1000)
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type("654321") 
        cy.wait(1000)
        cy.get('form > .MuiBox-root > .MuiButton-contained > .MuiButton-label').click()
        cy.wait(2000)
        

      //******************************CERRAR SESIÓN**************************************
        cy.get('[title="Cerrar sesión"] > .MuiIconButton-label > .MuiSvgIcon-root').click()
        cy.wait(1000)
    })

     //******************************CON DATOS INCORRECTOS**************************************

    it("Login DISPROEL erroneo", () =>{
        cy.visit('https://disproel.app/')
        cy.get('form > .MuiBox-root > .MuiFormControl-marginNormal > .MuiInputBase-root > .MuiInputBase-input').type("3117501965")
        cy.wait(1000)
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type("654320") 
        cy.wait(1000)
        cy.get('form > .MuiBox-root > .MuiButton-contained > .MuiButton-label').click()
        cy.wait(2000)
    })
})


