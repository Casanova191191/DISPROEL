/// <reference types = "cypress"/>

require('cypress-xpath') 

describe('Pruebas DISPROEL', () =>{

      it("ADMIN. RETEICA", () =>{
         cy.visit('https://disproel.app/')
         cy.get('form > .MuiBox-root > .MuiFormControl-marginNormal > .MuiInputBase-root > .MuiInputBase-input').type("3117501965")
         cy.wait(1000)
         cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type("654321") 
         cy.wait(1000)
         cy.get('form > .MuiBox-root > .MuiButton-contained > .MuiButton-label').click()
         cy.wait(3000)

        //**********************ADMIN. RETEICA***************************

         cy.get('.MuiIconButton-colorInherit').click()
         cy.wait(1000)
         cy.get('[href="/masters"] > .MuiListItemText-root > .MuiTypography-root').click()
         cy.wait(2000)
         cy.get(':nth-child(3) > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label').click()
         cy.wait(1000)

         //**********************AGREGAR RETEICA***************************
        
        cy.get(':nth-child(3) > .MuiGrid-root > .MuiButtonBase-root').click()
        cy.wait(1000) 
        cy.get(':nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type("RISARALDA").type("{enter}")
        cy.wait(4000)
        //cy.get(':nth-child(4) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type("PEREIRA").type("{enter}")
        //cy.wait(3000)
        cy.get('.jss202 > .MuiGrid-container > .MuiGrid-grid-sm-6 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type("5")
        cy.wait(3000)
        cy.get('#mui-component-select-tipoRol').click()
        cy.get('.MuiList-root > [tabindex="0"]').click()
        cy.wait(1000)
        cy.get('.jss203 > .MuiButtonBase-root > .MuiButton-label').click()

        //**********************DESCARGAR REPORTE RETEICA***************************

        cy.get('.MuiBox-root > :nth-child(1) > :nth-child(4) > .MuiButtonBase-root').click()

        //**********************CONFIGURACIÓN RETEICA***************************

        //cy.get('.MuiBox-root > :nth-child(1) > :nth-child(5) > .MuiButtonBase-root').click()
        //cy.wait(1000)
        //cy.get('.jss264 > .MuiButtonBase-root > .MuiButton-label').click()
        //cy.wait(1000)
        //AQUI SE DEBE SELECCIONAR EL ARCHIVO
        //cy.get('.MuiToolbar-root > .MuiButton-root').click()


        //**********************SALIR AL PANEL PRINCIPAL****************************

        cy.get('.MuiDialog-paper > .MuiAppBar-root > .MuiToolbar-root > .MuiButtonBase-root').click()

      })

})


