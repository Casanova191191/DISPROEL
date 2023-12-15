/// <reference types = "cypress"/>

require('cypress-xpath') 

describe('Pruebas DISPROEL', () =>{

    it("ADMIN. RESOLUCIÓN DE FACTURACIÓN", () =>{
        cy.visit('https://disproel.app/')
        cy.get('form > .MuiBox-root > .MuiFormControl-marginNormal > .MuiInputBase-root > .MuiInputBase-input').type("3117501965")
        cy.wait(1000)
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type("654321") 
        cy.wait(1000)
        cy.get('form > .MuiBox-root > .MuiButton-contained > .MuiButton-label').click()
        cy.wait(3000)

        //**********************ADMIN. RESOLUCIÓN DE FACTURACIÓN***************************

        cy.get('.MuiIconButton-colorInherit').click()
        cy.wait(1000)
        cy.get('[href="/masters"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.wait(2000)
        cy.get(':nth-child(4) > .MuiButtonBase-root').click()
        cy.wait(1000)

         //**********************AGREGAR RESOLUCIÓN***************************
        
        cy.get(':nth-child(3) > .MuiGrid-root > .MuiButtonBase-root').click()
        cy.wait(1000)
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("8765")
        cy.wait(1000)
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("RESOLUCIÓN DE FACTURACIÓN PARA EVENTO PRUEBA")
        cy.wait(1500)
        cy.get(':nth-child(6) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type("1")
        cy.wait(1000)
        cy.get(':nth-child(7) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type("900")
        cy.wait(1000)
        cy.get('.jss189 > .MuiButtonBase-root > .MuiButton-label').click()

        //**********************SALIR AL PANEL PRINCIPAL****************************

        cy.get('.MuiDialog-paper > .MuiAppBar-root > .MuiToolbar-root > .MuiButtonBase-root').click()

      })

})


