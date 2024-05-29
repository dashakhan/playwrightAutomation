import {Page, test as it, expect} from '@playwright/test'
import _ from "lodash";

export class SimpleForm{
    readonly page: Page
    constructor(page:Page){
        this.page = page
    }

    get firstNameInput(){
        return '[id="firstname"]'
    }

    get lastNameInput(){
        return '[id="lasttname"]'
    }
    get emailInput(){
        return '[id="email"]'
    }
    get countryDropDown(){
        return '[class="select"]'
    } 
    get phoneNumberInput(){
        return '[id="Phno"]'
    }
    get addressLine1Input(){
        return '[id="Addl1"]'
    }
    get addressLine2Input(){
        return '[id="Addl2"]'
    }
    get stateInput(){
        return '[id="state"]'
    }
    get postalCodeInput(){
        return '[id="postalcode"]'
    }
    get dateOfBirthInput(){
        return '[id="Date"]'
    }
    get termsAndCondCheckbox(){
        return '[type="checkbox"]'
    }
    get genderButton(){
        return '[name="gender"]'
    }
    get submitButton(){
        return '[class="button is-primary"]'
    }


    public async connection(){
        await this.page.goto('https://letcode.in/forms')
    }
    public async firstNameField(){
        await this.page.locator(this.firstNameInput).fill('Daria')
    } 

    public async lastNameField(){
        await this.page.locator(this.lastNameInput).fill('Khan')
    }

    public async emailField(){
        await this.page.locator(this.emailInput).clear()
        await this.page.locator(this.emailInput).fill('test@gmail.com')
    }

    public async countryCodeDropDown(){
        await this.page.locator(this.countryDropDown).nth(0).click()
        await this.page.locator(this.countryDropDown).nth(0).locator('select').selectOption({ value: '213'})
        //await this.page.locator(this.countryCodeInput).nth(0).filter({ hasText: 'Aruba' }).click()

    }

    public async phoneNumberField(){
        await this.page.locator(this.phoneNumberInput).fill('1231231231')
    } 
    public async addressLine1Field(){
        await this.page.locator(this.addressLine1Input).fill('123 test')
    }

    public async addressLine2Field(){
        await this.page.locator(this.addressLine2Input).fill('example ')
    }
    public async stateField(){
        await this.page.locator(this.stateInput).fill('WA')
    }
    public async postalCodeField(){
        await this.page.locator(this.postalCodeInput).fill('123123')
    }

    public async countryDropDownField(){
        await this.page.locator(this.countryDropDown).nth(1).click()
        await this.page.locator(this.countryDropDown).nth(1).locator('select').selectOption({ value: 'United States'})
    }

    //randomYear = _.random(1904, 2014);
    public async dateOfBirthField(){
        await this.page.locator(this.dateOfBirthInput).click()
        await this.page.locator(this.dateOfBirthInput).pressSequentially('10102000')
    }

    public async termsAndConditionsCheckbox(){
        await this.page.locator(this.termsAndCondCheckbox).check()
    }
    public async genderRadioButton(){
        let randomGender = _.random(0, 3)
        await this.page.locator(this.genderButton).nth(randomGender).check()
    }
    public async submitTheForm(){
        await this.page.locator(this.submitButton).click()
        //await this.page.pause()
    }
 
   




}