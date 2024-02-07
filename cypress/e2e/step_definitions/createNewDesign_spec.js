import{Given,When,Then}from "@badeball/cypress-cucumber-preprocessor"



Given("User is at the home page",()=>{
    cy.visit("https://www.brandcrowd.com/")
})

When("User clicks my account",()=>{
    cy.get('.tw-mr-0').click()
})

Then("User enters email and password",() =>{
    cy.get('.email-input').type('tech-challenge@designcrowd.com')
    cy.get('.tw-relative > div.tw-w-full > .tw-font-sans > .tw-w-full').click()
    cy.get('.password-input').type('Challenge1')
})

Then("User clicks on login button",() =>{
    cy.get('.tw-relative > div.tw-w-full > .tw-font-sans > .tw-w-full').click()
})

Then("User is able to successfully login to the account",() =>{
    cy.url().should('include', 'https://www.brandcrowd.com/maker/mylogos/drafts/d851d03f-eef2-48c5-934a-e5d0c80')
})

When("User clicks on the Create New Design",() =>{
    cy.get('.tw-my-auto.tw-text-center').contains('Create New Design').click({force:true})

})

Then("Verifies the design Category list size",() =>{
    cy.get('.tw-flex.tw-justify-between > .tw-list-none > .carousel-filter__category').should('have.length',7)

})

Then("Verifies list name", (dataTable)=>{
    cy.get('.tw-flex.tw-justify-between > .tw-list-none >.carousel-filter__category').each(($el,index,$list)=>{
    expect($el).to.have.text(dataTable.raw()[0][index])
    })
})

Then("Type Food in the Search box",() =>{
    cy.get('#searchTerm').type('Food')
})
Then("Click on Search button",() =>{
    cy.get('.tw-flex-col > :nth-child(2) > .tw-font-sans').click()

})
Then("User shoud see Food templates",() =>{    
    cy.get('.tw-text-4xl').contains('Food Templates')

})
When("User click on Back To All templates",() =>{

    cy.get('div.tw-mb-4 > .tw-font-sans > .tw-w-full > .tw-inline-flex > .tw-my-auto').click()
})
Then("It navigates back to Create New Design page",()=>{
    cy.url().should('include', 'https://www.brandcrowd.com/maker/mydesigns/logodrafts/d851d03f-eef2-48c5-934a-e5d0c804ece4/templatetypes')

})

Then("Clicks on the CUSTOm DIMENSION button",() =>{
    cy.get('div.tw-flex.tw-justify-between > div > div:nth-child(1) > button').click()

})
Then ("A pop up to capture custom dimension appears",() =>{
    cy.get('div.tw-flex.tw-justify-between > div > div.tw-static').should('be.visible')

})
When("User enters width and height and clicks CREATE A DESIGN button",() =>{
    cy.get('div.tw-flex.tw-justify-between > div div.tw-mt-2.tw-mb-3.tw-flex.tw-items-center > input:nth-child(1)').type(200)
    cy.get('div.tw-flex.tw-justify-between > div div.tw-mt-2.tw-mb-3.tw-flex.tw-items-center > input:nth-child(3)').type(200)
    cy.get('div.tw-flex.tw-justify-between >div div > div.tw-w-full').click()

})
Then("A design page with custom width and height appears",()=>{
    cy.url().should('include', 'https://www.brandcrowd.com/maker/mydesigns/new/d851d03f-eef2-48c5-934a-e5d0c804ece4/custom%20design?w=200&h=200')

})

Then("the user clicks Valentines Day template button",()=>{
    cy.get('div.swiper-slide.swiper-slide-active > div > div > button > span > span > span').click()

})

Then ("user lands in Valentines Day Templates page",()=>{
    cy.get('div.tw-container> div.tw-mb-8 > h1').contains('Valentines Day Templates')
})

Then("the user clicks Instagram Story template button",()=>{
    cy.get('div.swiper-container > div > div:nth-child(10) > div > div > button > span > span > span').click()
})
    
Then("user lands in Templates page",()=>{
    cy.get('div.tw-max-w-300.tw-mb-8 > h1').contains('Templates')
})

Then("the user Verifies check box is selected for Instagram Story filter",()=>{
    cy.get('#check-35-desc')
    .should('exist')
})
