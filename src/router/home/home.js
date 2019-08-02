const homerouter = [
    {
        path: "/",
        redirect:"/home"
    },
    {
        path: "/home",
        component: () => import("../../page/home/home/home"),
        children: [
            {
                path: "productLiat",
                component:()=>import("../../page/home/home/homelist/homelist")

            }
            
        ]
    }
]
export default homerouter;