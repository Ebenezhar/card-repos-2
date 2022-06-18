function Nav({data}){
    // console.log("prp",data);
    return(
        <div className = "d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow nav-bar boxes">
            <h5 className = "my-0 mr-md-auto font-weight-normal compName"> {data.name}</h5>  
            <nav className = "my-2 my-md-0 mr-md-3">
                {
                    data.list.map((feature)=>{
                        return <a className = "p-2 text-dark" href = "#">{feature.name}</a>
                    })
                }   
            </nav> 
            <a className = "btn btn-outline-primary" href = "#">{data.btn}</a>
        </div>
    )
}

export default Nav; 