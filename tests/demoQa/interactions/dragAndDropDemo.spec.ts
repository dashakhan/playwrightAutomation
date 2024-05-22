import {test as it} from "@playwright/test"
import { DragAndDropDemo } from "../../../page_object/demoQA/DragAndDropDemo"



it.describe('DRAG AND DROP FRO DEMO QA', ()=>{
    it('drag and drop + css', async ({page})=>{
        let dragAndDropDemo = new DragAndDropDemo(page)
        await page.goto('https://demoqa.com/droppable#google_vignette')
        await dragAndDropDemo.dragAndDropDate()
        await dragAndDropDemo.dragAndDropAccept('Acceptable')
        await dragAndDropDemo.dragAndDropAccept('Not Acceptable')
    })
})