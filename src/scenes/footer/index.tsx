import Logo from "@/assets/Logo.png"

type Props = {}

function Footer({}: Props) {
  return (
   <footer className="bg-primary-100 pt-12">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex" >
        <div className="mt-16 basis-1/2 md:mt-0" >
            <img alt="logo" src={Logo} />
            <p className="my-5" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, cumque!</p>
            <p>CopyRight Evogym All Rights Reserved.

            </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0" >
            <h4 className="font-bold" >Contact Us

            </h4>
            <p className="my-5" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, cupiditate.</p>
            <p className="my-5" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, cupiditate.</p>
            <p>(333)346 473</p>
            

        </div>
        <div></div>

    </div>

   </footer>
  )
}

export default Footer