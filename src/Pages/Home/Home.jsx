import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                 <div> <LeftSideNav></LeftSideNav> </div>
            <div className="col-span-2">
                <h2 className="text-3xl">News</h2>

            </div>
            <div> 
                <RightSideNav></RightSideNav>
                </div> 
            </div>
           
            
        </div>
    );
};

export default Home;