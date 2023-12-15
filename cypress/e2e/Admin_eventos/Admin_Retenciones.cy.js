/// <reference types = "cypress"/>

require('cypress-xpath') 

describe('Pruebas DISPROEL', () =>{

    it("ADMIN. RETENCIONES", () =>{
        cy.visit('https://disproel.app/')
        cy.get('form > .MuiBox-root > .MuiFormControl-marginNormal > .MuiInputBase-root > .MuiInputBase-input').type("3117501965")
        cy.wait(1000)
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type("654321") 
        cy.wait(1000)
        cy.get('form > .MuiBox-root > .MuiButton-contained > .MuiButton-label').click()
        cy.wait(3000)

        //**********************ADMIN. RETENCIONES***************************

        cy.get('.MuiIconButton-colorInherit').click()
        cy.wait(1000)
        cy.get('[href="/masters"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root').click()
        cy.wait(1000)

         //**********************AGREGAR RETENCION***************************
        
        cy.get(':nth-child(3) > .MuiGrid-root > .MuiButtonBase-root').click()
        cy.wait(1000)
        cy.get('#mui-component-select-regimen').click()
        cy.get('.MuiList-root > [tabindex="0"]').click()
        cy.wait(1000)
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type("3")
        cy.wait(1000)
        cy.get('#mui-component-select-rol').click()
        cy.get('.MuiList-root > .MuiButtonBase-root').click()
        cy.wait(1000)
        cy.get('.jss212 > .MuiButtonBase-root > .MuiButton-label').click()

        //**********************SALIR AL PANEL PRINCIPAL****************************

        cy.get('.MuiDialog-paper > .MuiAppBar-root > .MuiToolbar-root > .MuiButtonBase-root').click()

      })

})


