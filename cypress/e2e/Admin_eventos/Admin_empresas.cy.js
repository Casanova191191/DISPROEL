/// <reference types = "cypress"/>

require('cypress-xpath') 

describe('Pruebas DISPROEL', () =>{

    it("ADMIN. EMPRESAS OPERADORAS", () =>{
        cy.visit('https://disproel.app/')
        cy.get('form > .MuiBox-root > .MuiFormControl-marginNormal > .MuiInputBase-root > .MuiInputBase-input').type("3117501965")
        cy.wait(1000)
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type("654321") 
        cy.wait(1000)
        cy.get('form > .MuiBox-root > .MuiButton-contained > .MuiButton-label').click()
        cy.wait(3000)

  //**********************ADMIN. EMPRESAS OPERADORAS***************************

        cy.get('.MuiIconButton-colorInherit').click()
        cy.wait(1000)
        cy.get('[href="/masters"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root > .MuiButton-label').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > .MuiGrid-root > .MuiButtonBase-root').click()
        cy.wait(2000)
        cy.get('.jss188 > .MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("1234455")
        cy.wait(1000)
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("C123")
        cy.wait(1000)
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("1234")
        cy.wait(1000)
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("Prueba")
        cy.wait(1000)
        cy.get('.jss189 > .MuiButtonBase-root > .MuiButton-label').click()
        cy.wait(2000)

        //**********************ADMIN. PROYECTOS***************************

        cy.get('.jss173').click()
        cy.wait(1000)
        cy.get('.MuiBox-root > .MuiGrid-container > .MuiGrid-grid-sm-4 > .MuiButtonBase-root > .MuiButton-label').click()
        cy.wait(1000)
        cy.get('.jss209 > .MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("56789")
        cy.wait(1000)
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("EMPRESA DE PRUEBA")
        cy.wait(1000)
        cy.get('.MuiGrid-grid-sm-12 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("Esta empresa es para una prueba")
        cy.wait(1000)
        cy.get('.jss210 > .MuiButtonBase-root > .MuiButton-label').click()
        cy.wait(1000)
        
        //**********************SALIR AL PANEL PRINCIPAL***************************

        cy.get(':nth-child(7) > .MuiDialog-container > .MuiDialog-paper > .MuiAppBar-root > .MuiToolbar-root > .MuiButtonBase-root').click()
        cy.wait(1000)
        cy.get('.MuiDialog-paper > .MuiAppBar-root > .MuiToolbar-root > .MuiButtonBase-root').click()

    })
    
})

