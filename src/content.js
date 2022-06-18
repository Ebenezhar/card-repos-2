import Footer from './bottom.js';
function Content({data}){
    console.log("pr",data.boxes);
    return(
        <section>
            <div className = "pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center contain">
                <h1 className = "display-4">{data.price}</h1>
                <p className = "lead">{data.content}</p>
            </div>
            <div className = "container">
                <div className = "card-deck mb-3 text-center card-head">
                {
                    data.boxes.map((box)=>{
                        return(
                        <div className = "card mb-4 box-shadow cord">
                        <div className = "card-header">
                            <h4 className = "my-0 font-weight-normal">{box.head}</h4>
                        </div>
                        <div className = "card-body">
                            <h1 className = "card-title pricing-card-title">
                                ${box.charge} 
                                <small className = "text-muted">/ mo</small>
                            </h1>
                            <ul className = "list-unstyled mt-3 mb-4">
                            {
                                box.addit.map((list)=>{
                                    return(
                                    
                                        <li>{list.fae}</li>
                                    
                                    )
                                })
                            }                                
                            </ul>    
                                
                            
                            <button type = "button" className = "btn btn-lg btn-block btn-outline-primary">{box.btn}</button>
                        </div>
                    </div>
                    )
                    })
                }  
                    
                   
                    
                </div>
                <Footer></Footer>
            </div>
        </section>
    )
}
export default Content;