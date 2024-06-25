import { test as it, expect } from "@playwright/test";
const url = 'https://reqres.in'


it.describe('API REQUESTS', () => {
    it('testing GET requests', async({request}) =>{
        const res = await request.get(`${url}/api/users/2`)
        //console.log(res)
        expect(res.status()).toBe(200)
        const resBody = JSON.parse(await res.text())
        console.log(resBody)
        expect(resBody.data.id, `Id should be ${resBody.data.id}`).toBe(2)
        expect(resBody.data.email).toBe( "janet.weaver@reqres.in")
    })

    it('testing POST requests', async({request}) =>{

        const res = await request.post(`${url}/api/user`,{
            data: {
                id: 222
            }
        })
        console.log(res)
         expect(res.status()).toBe(201)
        const resBody = JSON.parse(await res.text())
        console.log(resBody)
    })


    it('testing REGISTRATION requests', async({request}) =>{

        const res = await request.post(`${url}/api/register`,{
            data: {
                    "email": "eve.holt@reqres.in",
                    "password": "pistol"
                }
        })
        console.log(res)
         expect(res.status()).toBe(200)
        const resBody = JSON.parse(await res.text())
        expect(resBody.id).toBe(4)
    })

    it('testing PUT requests', async({request}) =>{

        const res = await request.put(`${url}/api/user/2`,{
            data: {
                    "email": "dash.holt@reqres.in",
                    "password": "howdy"
                }
        })
        console.log(res)
         expect(res.status()).toBe(200)
        const resBody = JSON.parse(await res.text())
        console.log(resBody)
        expect(resBody.email).toBe('dash.holt@reqres.in')
    })

    it('testing DELETE requests', async({request}) =>{

        const res = await request.delete(`${url}/api/users/2`)
        console.log(res)
         expect(res.status()).toBe(204)
        const resBody = await res.text()
        //after delete nothing to parse
        console.log(resBody)
    })

    it.only('testing PATCH request for user', async({request}) =>{

        const res = await request.patch(`${url}/api/users/2`,{data:{
            "name": "morpheus"
        }}
        )
        console.log(res)
         expect(res.status()).toBe(200)
        const resBody = JSON.parse(await res.text())
        //after delete nothing to parse
        console.log(resBody)
        expect(resBody.name).toBe('morpheus')
    })
})

