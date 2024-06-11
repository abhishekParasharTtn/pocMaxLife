import Image from "next/image";


const Footer = () => {
    return (
        <div className="flex justify-center " >
            <footer className=" max-w-full flex justify-center gap-5 text-primary text-lg ">
                <div><Image src="/footer.png" alt="max-logo" width={270} height={270}/></div>
                <div>© All rights reserved.</div>
            </footer>
        </div>
    );
};

export default Footer;