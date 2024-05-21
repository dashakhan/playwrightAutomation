import {test as it} from "@playwright/test"
import { DatePicker } from "../../page_object/demoQA/DatePicker"


it.describe('date picker for demo QA', ()=>{

    it('date picker', async({page})=>{
        // const browser: Browser = await chromium.launch({ headless: false });
        //   const context = await browser.newContext();
        //   const page: Page = await context.newPage();  ---------- this means ({page}) on line 7
        let datePicker = new DatePicker(page)
        await page.goto('https://demoqa.com/date-picker')
        // await datePicker.verifyHeader()
        await datePicker.selectDate()
    })
})