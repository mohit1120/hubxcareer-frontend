import Cookies from 'universal-cookie';



export function  isLoggedIn(){
    const cookies = new Cookies();
    console.log(cookies,11111)
        return cookies.get('loggedIn') &&  cookies.get('token')
    
}


export function Logout(){
    const cookies = new Cookies();
    cookies.remove("token");
    console.log(cookies,11122211)
    cookies.remove("loggedIn");
    
}





