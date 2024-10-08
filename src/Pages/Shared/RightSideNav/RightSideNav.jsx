import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'


const RightSideNav = () => {
    return (
        <div className="p-4 space-y-3 mb-6">
            <div className="text-3xl">Login With
                <button className="btn btn-outline w-full btn-accent">

                    <FaGoogle />   Login With Google
                </button>
                <button className="btn btn-outline w-full">

                    <FaGithub />   Login With Github
                </button>
            </div>
            <div className="text-3xl mb-4">Find US On
                <a className="p-4 flex text-lg items-center border rounded-t-lg" href=""><FaFacebook className="mr-3" />Facebook</a>
                <a className="p-4 flex text-lg items-center border rounded-lg" href=""><FaTwitter className="mr-3" />Twitter</a>
                <a className="p-4 flex text-lg items-center border rounded-b-lg" href=""><FaInstagram className="mr-3" />Intstragram</a>
            </div>
            <div className="text-3xl">Q Zone
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />

                
            </div>

        </div>
    );
};

export default RightSideNav;