import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="bg-black">
            <div className="max-w-[1280px] lg:mx-auto mx-3  py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  gap-20">
                {/* Brand Section */}
                <div className="">
                    <h2 className="text-white font-bold text-lg">CS — Ticket System</h2>
                    <p className="mt-4 text-sm  lg:w-70 text-[#A1A1AA] ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.
                    </p>
                </div>

                {/* Company */}
                <div className="lg:pl-20">
                    <h3 className="text-white font-semibold mb-3 ">Company</h3>
                    <ul className="space-y-2 text-sm text-[#A1A1AA]">
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Our Mission</a></li>
                        <li><a href="#" className="hover:text-white">Contact Sales</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Services</h3>
                    <ul className="space-y-2 text-sm text-[#A1A1AA]">
                        <li><a href="#" className="hover:text-white">Products & Services</a></li>
                        <li><a href="#" className="hover:text-white">Customer Stories</a></li>
                        <li><a href="#" className="hover:text-white">Download Apps</a></li>
                    </ul>
                </div>

                {/* Information */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Information</h3>
                    <ul className="space-y-2 text-sm text-[#A1A1AA]">
                        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-white">Join Us</a></li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Social Links</h3>
                    <ul className="space-y-3 text-sm text-[#A1A1AA]">
                        <li className="hover:text-white flex items-center gap-2">
                            <BsTwitterX /> @CS — Ticket System
                        </li>
                        <li className="hover:text-white flex items-center gap-2">
                            <FaLinkedinIn /> @CS — Ticket System
                        </li>
                        <li className="hover:text-white flex items-center gap-2">
                            <FaFacebookF /> @CS — Ticket System
                        </li>
                        <li className="hover:text-white flex items-center gap-2">
                            <MdEmail /> support@cst.com
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-[1280px] mx-auto border-t border-gray-700 text-center py-4 text-sm text-[#FAFAFA]">
                © 2025 CS — Ticket System. All rights reserved.
            </div>

            {/* Bottom Bar */}

        </footer>
    );
}
