import { DropDown } from './../../page_object/project/DropDown';
import {test as it, expect } from "@playwright/test"

it.describe('DROP DOWN', ()=>{
    it('interact with drop down menu', async ({page})=>{
        let dropDown = new DropDown(page);
        await page.goto('http://localhost:4200')
        await dropDown.interactWithDropDown()
    })
})