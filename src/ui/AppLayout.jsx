import Header from "./Header"
import Loader from "./Loader";
import { Outlet, useNavigation } from "react-router-dom"
import CartOverview from "../features/cart/CartOverview"


export default function AppLayout() {
    const navigation = useNavigation(); //To check were the loading is happening
    const isLoading = navigation.state === "loading"; //To check were the loading is happening
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">

        {isLoading && <Loader />}

        <Header />

    <div className="overflow-scroll">
        <main className=" max-w-3xl mx-auto">
            <Outlet />
        </main>
    </div>


        <CartOverview />
    </div>
  )
}
