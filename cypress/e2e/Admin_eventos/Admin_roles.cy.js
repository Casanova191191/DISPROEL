/// <reference types = "cypress"/>

require('cypress-xpath') 

describe('Pruebas DISPROEL', () =>{

      it("ADMIN. ROLES", () =>{
         cy.visit('https://disproel.app/')
         cy.get('form > .MuiBox-root > .MuiFormControl-marginNormal > .MuiInputBase-root > .MuiInputBase-input').type("3117501965")
         cy.wait(1000)
         cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type("654321") 
         cy.wait(1000)
         cy.get('form > .MuiBox-root > .MuiButton-contained > .MuiButton-label').click()
         cy.wait(3000)

        //**********************ADMIN. ROLES***************************

         cy.get('.MuiIconButton-colorInherit').click()
         cy.wait(1000)
         cy.get('[href="/masters"] > .MuiListItemText-root > .MuiTypography-root').click()
         cy.wait(2000)
         cy.get(':nth-child(1) > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root').click()
         cy.wait(1000)
         cy.get(':nth-child(3) > .MuiGrid-root > .MuiButtonBase-root').click()
         cy.wait(1000)
         cy.get('.MuiGrid-spacing-xs-8 > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("SUPERVISOR DE PUESTO-PRUEBA")
         cy.wait(1000)
         cy.get('#mui-component-select-tipoRol').click()
         cy.get('.MuiList-root > [tabindex="0"]').click()
         cy.wait(1000)
         cy.get('.MuiCollapse-entered > :nth-child(1) > :nth-child(1) > .MuiGrid-container > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("50000")

        // configurar tipo de rol 
        // COnfigurar los switchs 
        //Configurar la entrega y recolección 
        // Configurar valor personalizado AQUI VA UNA CONDICIONAL
        // Configurar demas switchs 

        cy.get('.jss193 > .MuiButtonBase-root > .MuiButton-label').click()

      })

})


