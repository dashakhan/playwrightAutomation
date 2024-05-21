import {Page, expect, test as it} from "@playwright/test"
import _ from "lodash";

export class DatePicker{
    public readonly page: Page
    constructor(page: Page){
        this.page = page
    }


    get header(){
        return 'h1[class="text-center"]'
    }
    get formInput(){
        return '[id="datePickerMonthYearInput"]'
    }

    get componentAllDates(){
        return '[class="react-datepicker__month-container"]'
    }

    get prevMonth(){
        return '[aria-label="Previous Month"]'
    }
    get dateComponent(){
        return '[role="option"]'
    }

    public async verifyHeader(){
        const header = this.page.locator(this.header)
        await expect(header).toContainText('Date Picker')
    }

    
    randomNumber = _.random(1, 50);
    date = _.random(15, 20);

    public async selectDate(){
        await this.page.locator(this.formInput).click()

        for(let i = 0;i <= this.randomNumber;i++){
            await this.page.locator(this.prevMonth).click()
        }
        console.log(this.randomNumber);
    await this.page.locator('[class="react-month"]')
    .getByText(this.date)
    // .getByRole('option', {name: '20', exact: true}).click()
    }

}


