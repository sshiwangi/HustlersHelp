import { RiGraduationCapFill } from 'react-icons/ri'

function Footer() {
    return (
        <div className="lg:mx-16 ">
            <footer className="p-10 footer bg-neutral footer-center md:footer md:text-left text-neutral-content lg:rounded-t-lg">
                <div className='lg:col-span-10'>
                    <div className='flex items-center text-xl font-bold'><RiGraduationCapFill className='mr-2 text-2xl lg:text-3xl text-primary' />Hustler&apos;s<span className='text-primary'>Help</span></div>
                    <p className=''>Experience the power of learning,<br /> connecting, and thriving as an<br /> entrepreneur with us. Together, we<br /> can turn your dreams into reality.</p>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">Privacy</a>
                    <a className="link link-hover">FAQ</a>
                    <a className="link link-hover">Help</a>
                </div>
                <div>
                    <span className="footer-title">Socials</span>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Youtube</a>
                    <a className="link link-hover">Twitter</a>
                </div>
            </footer>
            <footer className="px-10 footer bg-neutral footer-center md:footer md:text-left text-neutral-content">
                <div className="items-center w-full grid-flow-col py-4 font-bold border-t">
                    Copyright © 2023 All rights reserved with HustlersHelp
                </div>
            </footer>
        </div>
    )
}

export default Footer