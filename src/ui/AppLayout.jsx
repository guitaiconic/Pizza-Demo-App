import Header from "./Header"
import Loader from "./Loader";
import { Outlet, useNavigation } from "react-router-dom"
import CartOverview from "../features/cart/CartOverview"


export default function AppLayout() {
    const navigation = useNavigation(); //To check were the loading is happening
    const isLoading = navigation.state === "loading"; //To check were the loading is happening
  return (
    <div className="layout">

        {isLoading && <Loader />}

        <Header />


        <main>
            <Outlet />
        </main>


        <CartOverview />
    </div>
  )
}
