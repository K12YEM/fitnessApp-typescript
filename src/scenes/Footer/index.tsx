import Logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="logo" src={Logo}/>
                <p className="my-5">
                    sdfh oihfdoi h ihoi iahsdpd iihfpaidnp ifapih0 afdoijoi ojfi hik 
                    afkno opaifhpadih iahdfp9ir as gpaijfpad ojfo amra ihfoai oihgoih 
                    adfhoadfihoi ihfoaidhfoi aoidfhpaifpi afdkhh piadfpihi ihfih.
                </p>
                <p>© Evogym All Rights Reserved</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold"> Links </h4>
                <p className="my-5"> Massa orci denectus</p>
                <p className="my-5"> Ulks percii denectus</p>
                <p className="my-5"> Sarve sandhu nirayama</p>
                <p>Om shanthi hi</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold"> Contact Us </h4>
                <p className="my-5"> Aluva puracis teerthas arorum ileyum nerthis</p>
                <p> (333) 435-8463</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer