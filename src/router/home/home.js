const homerouter = [
    {
        path: "/",
        redirect:"/home"
    },
    {
        path: "/home",
        component:() => import("../../page/home/home/home")
    }
]
export default homerouter;