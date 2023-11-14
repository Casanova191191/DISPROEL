/// <reference types = "cypress"/>

require('cypress-xpath') 

describe('Pruebas DISPROEL', () =>{

    it("PROVEEDORES DE PAGO Y CONFIGURACIÓN", () =>{
        cy.visit('https://disproel.app/')
        cy.get('form > .MuiBox-root > .MuiFormControl-marginNormal > .MuiInputBase-root > .MuiInputBase-input').type("3117501965")
        cy.wait(1000)
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type("654321") 
        cy.wait(1000)
        cy.get('form > .MuiBox-root > .MuiButton-contained > .MuiButton-label').click()
        cy.wait(3000)

        //**********************ADMIN. PROVEEDORES DE PAGO Y CONFIGURACIÓN***************************

        cy.get('.MuiIconButton-colorInherit').click()
        cy.wait(1000)
        cy.get('[href="/masters"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > .MuiGrid-container > :nth-child(3) > .MuiButtonBase-root > .MuiButton-label').click()
        cy.wait(1000)

         //**********************AGREGAR PROVEEDOR DE PAGO EFECTY***************************
        /*
        cy.get(':nth-child(1) > .jss161 > .MuiBox-root > .jss164').click()
        cy.wait(1000)
        cy.get('.MuiBox-root > .MuiGrid-container > :nth-child(3) > .MuiButtonBase-root > .MuiButton-label').click()
        cy.wait(1000)
        cy.get('#mui-component-select-evento').click()
        cy.get('.MuiList-root > [tabindex="0"]').click()
        cy.wait(1500)
        cy.get('#mui-component-select-empresaOperadora').click()
        cy.get('.MuiList-root > .MuiButtonBase-root').click()
        cy.wait(1000)
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type("10")
        cy.wait(1000)
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type("50000")
        cy.wait(1000)
        cy.get(':nth-child(7) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type("8")
        cy.wait(1000)
        cy.get('.jss188 > .MuiButtonBase-root > .MuiButton-label').click()*/

         //**********************AGREGAR PROVEEDOR DE PAGO PAGAFACIL***************************
   
        cy.get(':nth-child(2) > .jss161 > .MuiBox-root > .jss164').click()
        cy.wait(1000)
        cy.get('.MuiBox-root > .MuiGrid-container > :nth-child(3) > .MuiButtonBase-root > .MuiButton-label').click()
        cy.wait(1000)
        cy.get('#mui-component-select-evento').click()
        cy.get('.MuiList-root > [tabindex="0"]').click()
        cy.wait(1000)
        cy.get('#mui-component-select-empresaOperadora').click()
        cy.get('.MuiList-root > .MuiButtonBase-root').click()
        cy.wait(1500)
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type("50")
        cy.wait(1000)
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type("100000")
        cy.wait(1000)
        cy.get(':nth-child(7) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type("9")
        cy.wait(1000)
        cy.get('.jss188 > .MuiButtonBase-root').click()


        //**********************SALIR AL PANEL PRINCIPAL****************************

        cy.get(':nth-child(7) > .MuiDialog-container > .MuiDialog-paper > .MuiAppBar-root > .MuiToolbar-root > .MuiButtonBase-root').click()

        cy.get('.MuiDialog-paper > .MuiAppBar-root > .MuiToolbar-root > .MuiButtonBase-root').click()

      })

})


