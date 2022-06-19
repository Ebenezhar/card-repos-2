function Footer({footdata}){
    return(
        <footer className = "pt-4 my-md-5 pt-md-5 border-top foot">
            <div className = "row">
                <div className = "col-12 col-md">
                    <img className = "mb-2" src = {footdata.logo} alt width="24" height="24"></img>
                    <small className = "d-block mb-3 text-muted">{footdata.year}</small>
                </div> 
                {
                    footdata.cards.map((card) => {
                        return( 
                            <div className = "col-6 col-md">
                                <h5>{card.head}</h5>
                                <ul className = "list-unstyled text-small">
                                    {
                                        card.list.map((indiv)=>{
                                            return(
                                                <li>
                                                    <a className="text-muted" href="#">{indiv.name}</a>
                                                </li>   
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div> 
        </footer>
    )
}
export default Footer;