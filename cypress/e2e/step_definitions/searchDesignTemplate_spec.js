import{Given,When,Then}from "@badeball/cypress-cucumber-preprocessor"

let Categories=["Instagram","Facebook"]
let first6Categories=["Instagram","Facebook","Website","Business Card","Letterhead","Email Signature"]
let last24Categories=["YouTube","Flyer","Poster","Menu","LinkedIn","Invoice","Zoom Background","Postcard",
                    "Thank You Card","Favicon","Twitter","Twitch","Gift Certificate","Whatsapp Story","Etsy Banner","SoundCloud",
                    "Pinterest","Tumblr","Invitation","Snapchat Design","TikTok Video","Video","Animation","QR Code"]
let InstagramSubCategories=["Instagram Post","Instagram Story","Instagram Reel"]
let FacebooksubCategories=["Facebook Cover","Facebook Post","Facebook Profile Picture","Facebook Story","Facebook Ad","Facebook Event Cover"]


Given("User is on Test Template search page",()=>{
    cy.visit("https://www.brandcrowd.com/maker/mydesigns/logodrafts/d851d03f-eef2-48c5-934a-e5d0c804ece4/templatetypes?searchTerm=test")

})
When("User select Instagram Category",()=>{
    cy.get('[id="Instagram"]',{timeout:7000}).eq(0).click({force:true})
})

Then("All the sub-Categories of Instagram should be selected",() =>{
    InstagramSubCategories.forEach(subCategory=>{
        cy.get(`[id="${subCategory}"]`).eq(0).should('be.checked')
    })
    /*cy.get('[id="Instagram Post"]').eq(0).should('be.checked')
    cy.get('[id="Instagram Story"]').eq(0).should('be.checked')
    cy.get('[id="Instagram Reel"]').eq(0).should('be.checked')*/
})

When("User select Facebook Category",()=>{
    cy.get('[id="Facebook"]',{timeout:7000}).eq(0).click({force:true})
})

Then("All the sub-Categories of Facebook should be selected",() =>{
    FacebooksubCategories.forEach(subCategory=>{
        cy.get(`[id="${subCategory}"]`).eq(0).should('be.checked')
    })
    /*cy.get('[id="Facebook Cover"]').eq(0).should('be.checked')
    cy.get('[id="Facebook Post"]').eq(0).should('be.checked')
    cy.get('[id="Facebook Profile Picture"]').eq(0).should('be.checked')
    cy.get('[id="Facebook Story"]').eq(0).should('be.checked')
    cy.get('[id="Facebook Ad"]').eq(0).should('be.checked')
    cy.get('[id="Facebook Event Cover"]').eq(0).should('be.checked')*/
})

Then("Result template names should match Instagram sub-Category names",() =>{
    cy.wait(5000)
   cy.get('div.masonry-wall.grid.tw-mb-8.ready').find('.masonry-column').find('.masonry-item').each($item =>{
        cy.wrap($item).find('ul > li').invoke('text').should('match',/Instagram Post|Instagram Story|Instagram Reel/g)//contains(/Instagram Post|Instagram Story|Instagram Reel/g)
    })

})

Then("Result template names should match both Instagram and Facebook sub-Category names",() =>{
    cy.get('div.masonry-wall.grid.tw-mb-8.ready').find('.masonry-column').find('.masonry-item').each($item =>{
        cy.wrap($item).find('ul > li').invoke('text').should('match',/Instagram Post|Instagram Story|Instagram Reel|Facebook Cover|Facebook Post|Facebook Profile Picture|Facebook Story|Facebook Ad|Facebook Event Cover/g)
    })
})

Then("Result template count should be 16",() =>{
    cy.get('div.masonry-wall.grid.tw-mb-8.ready').find('.masonry-item').should('have.length',16)

})

Then("User unselects Instagram Post sub-category in Instagram Category",() =>{
    cy.get('[id="Instagram Post"]').eq(0).click({force:true}).wait(6000)
})

Then("Result template name should not have the Instagram Post sub-Category",()=>{
    cy.get('div.masonry-wall.grid.tw-mb-8.ready').find('.masonry-column').find('.masonry-item').each($item =>{
        cy.wrap($item).find('ul > li').invoke('text').should('not.match',/Instagram Post/g)
     })
})

Then("Click on Load More Design",()=>{
    cy.get('.tw-my-auto.tw-text-center').contains("Load more designs").click().wait(5000)
})

Then("Result template count should be 32",() =>{
    cy.get('div.masonry-wall.grid.tw-mb-8.ready').find('.masonry-item').should('have.length',32)
})

Then("Click Clear All",()=>{
    cy.get('.tw-pb-4 > .tw-cursor-pointer').click()
})

Then("No Checkbox should be selected on Category",()=>{
    Categories.forEach(Category=>{
        cy.get(`[id="${Category}"]`,{timeout:7000}).eq(0).should('not.be.checked')
    })
    InstagramSubCategories.forEach(subCategory=>{
        cy.get(`[id="${subCategory}"]`,{timeout:7000}).eq(0).should('not.be.checked')
    })
    FacebooksubCategories.forEach(subCategory=>{
        cy.get(`[id="${subCategory}"]`,{timeout:7000}).eq(0).should('not.be.checked')
    })
})

Then("Click on Edit button",()=>{
    cy.get('div.masonry-wall.grid.tw-mb-8.ready').find('.masonry-column').find('.masonry-item').eq(0).find('.tw-bg-white >ul > li > div > button').eq(0).click()
})

Then("It should navigate to template edit page",() =>{
    cy.url().should('include','www.brandcrowd.com/maker/mydesigns/new/')
})

Then("Click on View Collection",()=>{
    cy.get('div.masonry-wall.grid.tw-mb-8.ready').find('.masonry-column').find('.masonry-item').eq(0).find('.tw-bg-white >ul > li > div > button').eq(1).click()

})

Then("Select a design type popup should appear",() =>{
    cy.get('.modal-content> div > div.tw-text-left.tw-p-4 > h2').should('have.text',' Select a design type ')
})

Then("It should show only first 6 category",()=>{

    first6Categories.forEach(Category=>{
        cy.get(`[id="${Category} Container"]`).eq(0).find('div').should(($element) => {
            expect($element).not.to.have.css('display', 'none');
          })
    })
    last24Categories.forEach(Category=>{
        cy.get(`[id="${Category} Container"]`).eq(0).find('div').should(($element) => {
            expect($element).to.have.css('display', 'none');
          })
    })
})
When("User click on View more",()=>{
    cy.get(':nth-child(1) > :nth-child(2) > .tw-container > .tw-flex-col > :nth-child(1) > :nth-child(2) > .tw-text-sm').click({force:true})
    cy.wait(8000)
})
Then("User should see more than 6 Categories",()=>{
    first6Categories.forEach(Category=>{
        cy.get(`[id="${Category} Container"]`).eq(0).find('div').should(($element) => {
            expect($element).not.to.have.css('display', 'none');
          })
    })
    last24Categories.forEach(Category=>{
        cy.get(`[id="${Category} Container"]`).eq(0).find('div').should(($element) => {
            expect($element).not.to.have.css('display', 'none');
          })
    })
    
})