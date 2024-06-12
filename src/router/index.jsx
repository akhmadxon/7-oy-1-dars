import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Login from "../pages/login/login";
import Main from "../pages/main/main"
import AddTask from "../pages/Addtask/addtask"

const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App/>}>
            <Route index element={<Login/>}/>
            <Route path="main/*" element={<Main/>}>
            <Route path="addtask" element={<AddTask/>}/>
            
            </Route>
             </Route>
        )
    );
    return <RouterProvider router={router}/>
};
export default Index;
