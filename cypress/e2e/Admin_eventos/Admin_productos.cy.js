/// <reference types = "cypress"/>

require('cypress-xpath') 

describe('Pruebas DISPROEL', () =>{

    it("ADMIN. PRODUCTOS", () =>{
        cy.visit('https://disproel.app/')
        cy.get('form > .MuiBox-root > .MuiFormControl-marginNormal > .MuiInputBase-root > .MuiInputBase-input').type("3117501965")
        cy.wait(1000)
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type("654321") 
        cy.wait(1000)
        cy.get('form > .MuiBox-root > .MuiButton-contained > .MuiButton-label').click()
        cy.wait(3000)

        //**********************ADMIN. PRODUCTOS***************************

        cy.get('.MuiIconButton-colorInherit').click()
        cy.wait(1000)
        cy.get('[href="/masters"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .MuiGrid-container > :nth-child(3) > .MuiButtonBase-root > .MuiButton-label').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > .MuiGrid-root > .MuiButtonBase-root > .MuiButton-label').click()
        cy.wait(2000)

        cy.get('.jss181 > .MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("KIT PRUEBA")
        cy.wait(2000)

        //Se congifuran los switchs
        // ENTREGA
        cy.get(':nth-child(3) > .MuiBox-root > .MuiStack-root > .MuiSwitch-root').click()
        cy.wait(2000)

        //RECOLECCIÓN 
        cy.get(':nth-child(4) > .MuiBox-root > .MuiStack-root > .MuiSwitch-root').click()
        cy.wait(2000)

        cy.get('.jss184 > .MuiButtonBase-root > .MuiButton-label').click()
        cy.wait(1000)

      //**********************SALIR AL PANEL PRINCIPAL***************************

        cy.get('.MuiDialog-paper > .MuiAppBar-root > .MuiToolbar-root > .MuiButtonBase-root').click()
        
 
    })
    
})