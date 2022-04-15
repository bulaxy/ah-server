import Arkhamcard from "./arkhamcard/index.js";


export const registerRoute = (route, method, options, fn) => {
    let fns = []

    if (options == 'authorised') {
        fns.push(mwAuthorised)
    } else if (options == 'authorisedquery') {
        fns.push(mwAuthorisedQueryParam)
    }

    fns.push(fn)

    switch (method) {
        case 'post':
            global.app.post(route, fns)
            break
        case 'get':
            console.log('get')
            global.app.get(route, fns)
            break
    }

    console.log(`Registered route: ${method.toUpperCase()} ${route}`)
}


export default function Router() {
    Arkhamcard()
}