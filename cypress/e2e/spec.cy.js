describe('TC_001', () => {
  it('passes', () => {
    cy.visit('https://telnyx.com')

cy.get('[aria-label="close and deny"]~div>div>button').click()
    cy.get('header>div>div>ul>div>a[href="/sign-up"]').click()
    cy.url().should('include', '/sign-up')

    

      cy.get('#full_name')
      .type('Dmytro')
      .should('have.value', 'Dmytro')

      cy.get('#password')
      .type('Rudenko1234-')
      .should('have.value', 'Rudenko1234-')

      cy.get('div>div>div>div>svg>rect').click()

      cy.get('[type="submit"]').click()
      
      cy.get('#email_error').contains('This field is required.')
   
     
  })
})

describe('TC_002', () => {
  it('passes', () => {
    cy.visit('https://telnyx.com')
   
    cy.get('header>div>div>ul>div>a[href="/sign-up"]').click()
    cy.url().should('include', '/sign-up')

    cy.get('#email')
      .type('rudenko@mail.com')
      .should('have.value', 'rudenko@mail.com')

      cy.get('#full_name')
      .type('Dmytro')
      .should('have.value', 'Dmytro')

      

      cy.get('div>div>div>div>svg>rect').click()
      cy.get('[type="submit"]').click()
      
      cy.get('#password_requirements').contains('Be at least 12 characters long')
   
     
  })
})

describe('TC_003', () => {
  it('passes', () => {
    cy.visit('https://telnyx.com')
   
    cy.get('header>div>div>ul>div>a[href="/sign-up"]').click()
    cy.url().should('include', '/sign-up')

    cy.get('#email')
      .type('rudenko@mail.com')
      .should('have.value', 'rudenko@mail.com')

     

      cy.get('#password')
      .type('Rudenko1234-')
      .should('have.value', 'Rudenko1234-')

      cy.get('div>div>div>div>svg>rect').click()
      cy.get('[type="submit"]').click()
      
      cy.get('#full_name_error').contains('This field is required.')
   
     
  })
})

describe('TC_004', () => {
  it('passes', () => {
    cy.visit('https://telnyx.com')
   
    cy.get('header>div>div>ul>div>a[href="/sign-up"]').click()
    cy.url().should('include', '/sign-up')

    cy.get('#email')
      .type('rudenko@mail.com')
      .should('have.value', 'rudenko@mail.com')

      cy.get('#full_name')
      .type('Dmytro')
      .should('have.value', 'Dmytro')

      cy.get('#password')
      .type('Rudenko1234-')
      .should('have.value', 'Rudenko1234-')

      cy.get('[type="submit"]').click()
      
      cy.contains('Please accept the terms and conditions')
   
     
  })
})

describe('TC_005', () => {
  it('passes', () => {
    cy.visit('https://telnyx.com')
   
    cy.get('header>div>div>ul>div>a[href="/sign-up"]').click()
    cy.url().should('include', '/sign-up')

    cy.get('#email')
      .type('rudenko@mail.com')
      .should('have.value', 'rudenko@mail.com')

      cy.get('#full_name')
      .type('Dmytro')
      .should('have.value', 'Dmytro')

      cy.get('#password')
      .type('Rudenko1234-')
      .should('have.value', 'Rudenko1234-')

      cy.get('div>div>div>div>svg>rect').click()
      cy.get('[type="submit"]').click()
      
      cy.contains('That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.')
   
     
  })
})

describe('TC_006', () => {
  it('passes', () => {
    cy.visit('https://telnyx.com')
   
    cy.get('header>div>div>ul>div>a[href="/sign-up"]').click()
    cy.url().should('include', '/sign-up')

    cy.get('#email')
      .type('demitry512@gmail.com')
      .should('have.value', 'demitry512@gmail.com')

      cy.get('#full_name')
      .type('Dmytro')
      .should('have.value', 'Dmytro')

      cy.get('#password')
      .type('Rudenko1234-')
      .should('have.value', 'Rudenko1234-')

      cy.get('div>div>div>div>svg>rect').click()
      cy.get('[type="submit"]').click()
      
      cy.get('#email_error').contains('Another account already exists that resolves to the same Gmail account')
   
     
  })
})
 
describe('TC_007', () => {
  it('passes', () => {
    cy.visit('https://telnyx.com')
   
    cy.get('[class="sc-f97529d6-0 bjUuRN Text-sc-5o8owa-0 sc-28d89a84-0 frufKM bhdWfo mchNoDecorate"][href="https://portal.telnyx.com/"]').click()
    cy.url().should('include', '/sign-in')

    cy.get('div>div>label>div>div>input[name="email"]')
      .type('rudenko@mail.com')
      .should('have.value', 'rudenko@mail.com')

            cy.get('div>div>label>div>div>input[name="password"]')
      .type('Rudenko1234-')
      .should('have.value', 'Rudenko1234-')

      
      cy.get('[class="Button__StyledDefaultButton-sc-44gl5i-0 gBCTym LoginForm__LoginButton-fhXOmx eazkBi"]').click()
      
      cy.contains('That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.')
   
     
  })
})

describe('TC_008', () => {
  it('passes', () => {
    cy.visit('https://telnyx.com')
   
    cy.get('[class="sc-f97529d6-0 bjUuRN Text-sc-5o8owa-0 sc-28d89a84-0 frufKM bhdWfo mchNoDecorate"][href="https://portal.telnyx.com/"]').click()
    cy.url().should('include', '/sign-in')

    cy.get('div>div>label>div>div>input[name="email"]')
      .type('rudenko@mail.com')
      .should('have.value', 'rudenko@mail.com')

     

      
      cy.get('[class="Button__StyledDefaultButton-sc-44gl5i-0 gBCTym LoginForm__LoginButton-fhXOmx eazkBi"]').click()
      
      cy.contains('Required')
   
     
  })
})

describe('TC_009', () => {
  it('passes', () => {
    cy.visit('https://telnyx.com')
   
    cy.get('[class="sc-f97529d6-0 bjUuRN Text-sc-5o8owa-0 sc-28d89a84-0 frufKM bhdWfo mchNoDecorate"][href="https://portal.telnyx.com/"]').click()
    cy.url().should('include', '/sign-in')

    

            cy.get('div>div>label>div>div>input[name="password"]')
      .type('Rudenko1234-')
      .should('have.value', 'Rudenko1234-')

      
      cy.get('[class="Button__StyledDefaultButton-sc-44gl5i-0 gBCTym LoginForm__LoginButton-fhXOmx eazkBi"]').click()
      
      cy.contains('Required')
   
     
  })
})

describe('TC_010', () => {
  it('passes', () => {
    cy.visit('https://telnyx.com')
   
    cy.get('[class="sc-f97529d6-0 bjUuRN Text-sc-5o8owa-0 sc-28d89a84-0 frufKM bhdWfo mchNoDecorate"][href="https://portal.telnyx.com/"]').click()
    cy.url().should('include', '/sign-in')

    cy.get('div>div>label>div>div>input[name="email"]')
      .type('demitry512@gmail.com')
      .should('have.value', 'demitry512@gmail.com')

            cy.get('div>div>label>div>div>input[name="password"]')
      .type('Rudenko1234-')
      .should('have.value', 'Rudenko1234-')

      
      cy.get('[class="Button__StyledDefaultButton-sc-44gl5i-0 gBCTym LoginForm__LoginButton-fhXOmx eazkBi"]').click()
      
      cy.get('[data-testid="login.signin.title"]').contains('Verify your phone number')
   
     
  })
})