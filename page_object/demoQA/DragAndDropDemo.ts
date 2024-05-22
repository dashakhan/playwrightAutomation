import {Page, test as it, expect } from "@playwright/test"

export class DragAndDropDemo{
    readonly page:Page
    constructor(page:Page){
        this.page = page
    }


    get dragElement(){
        return '[id="draggable"]'
    }

    get dropElement(){
        //return ('[id="droppable"]').nth(0)
        return '[id="droppable"]'
    }
    get acceptTab(){
        return '[id="droppableExample-tab-accept"]'
    }
    get dragAcceptable(){
        return '[id="acceptable"]'
    }
    get dragNotAcceptable(){
        return '[id="notAcceptable"]'
    }
    get preventPropTab(){
        return '[id="droppableExample-tab-preventPropogation"]'
    }
    
    public async dragAndDropDate(text: string){
        await this.page.locator(this.dragElement).dragTo(this.page.locator(this.dropElement).nth(0))
        expect(await this.page.locator(this.dropElement).nth(0).locator("p").textContent()).toBe('Dropped!')
        expect(await this.page.locator(this.dropElement).nth(0)).toHaveCSS(
            "background-color", "rgb(70, 130, 180)"
        )
    }

    public async dragAndDropAccept(text:string){
        await this.page.locator(this.acceptTab).click()
        await this.page.locator(this.dragAcceptable).dragTo(this.page.locator(this.dropElement).nth(1))
        await this.page.locator(this.dragNotAcceptable).dragTo(this.page.locator(this.dropElement).nth(1))
        expect(await this.page.locator(this.dropElement).nth(1).locator('p').textContent()).toBe('Dropped!')
        expect(await this.page.locator(this.dropElement).nth(1)).toHaveCSS(
            "background-color","rgb(70, 130, 180)"
        )
        
     
    }

    // public async dranAndDropPrevProp(text:string){
    //     await this.page.locator(this.preventPropTab).click()
    // }

}