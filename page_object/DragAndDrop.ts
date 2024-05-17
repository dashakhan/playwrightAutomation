import {Page, test as it, expect } from "@playwright/test"


export class DragAndDrop{
     readonly page:Page
    constructor(page:Page){
        this.page = page

     }
    get drugEl(){
        return '[draggable="true"]'
    }
    get dropHereEl(){
        return '[id="mydropzone"]'
    }
    get dropList(){
        return '[id="droppedlist"]'
    }


    public async dragAndDropEl(text: string){
       await this.page.locator(this.drugEl, {hasText: text}).dragTo(this.page.locator(this.dropHereEl))
       expect(await this.page.locator(this.dropList).textContent()).toContain(text)
      
    }

    public async dragAndDropElOption2(text: string){
        await this.page.locator(this.drugEl, {hasText: text}).hover()
        await this.page.mouse.down()
        await this.page.locator(this.dropHereEl).hover()
        await this.page.mouse.up()
        expect(await this.page.locator(this.dropList).textContent()).toContain(text)

    }



}






