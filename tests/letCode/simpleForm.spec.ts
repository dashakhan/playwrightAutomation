import { SimpleForm } from './../../page_object/letcode/Form';
import {Page, test as it, expect} from '@playwright/test'


it.describe('Fill out simple forms and drop down positive', async ()=>{
    let page: Page;
    let simpleForm  
    
    it.beforeAll(async ({ browser })=>{
        page = await browser.newPage();
        simpleForm = new SimpleForm(page)

        await page.goto('https://letcode.in/forms')
    })
 

    it('first name field', async ()=> {
        await simpleForm.firstNameField()
    })
    it('last name field', async ()=> {
        await simpleForm.lastNameField()
    })
    it('email field', async ()=> {
        await simpleForm.emailField()
    })
    it('country code drop down', async ()=> {
        await simpleForm.countryCodeDropDown()
    })
    it('phone number', async ()=> {
        await simpleForm.phoneNumberField()
    })
    it('address line 1 field', async ()=> {
        await simpleForm.addressLine1Field()
    })
    it('address line 2 field', async ()=> {
        await simpleForm.addressLine2Field()
    })
    it('state field', async ()=> {
        await simpleForm.stateField()
    })
    it('postal Code Field', async ()=> {
        await simpleForm.postalCodeField()
    })
    it('country drop dOwn', async ()=> {
        await simpleForm.countryDropDownField()
    })
    it('date of birth', async ()=> {
        await simpleForm.dateOfBirthField()
    })
    it('terms And Conditions Checkbox', async ()=> {
        await simpleForm.termsAndConditionsCheckbox()
    })
    it('gender Radio Button', async ()=> {
        await simpleForm.genderRadioButton()
    })
    it('submit the form', async ()=> {
        await simpleForm.submitTheForm()
    })
   

})