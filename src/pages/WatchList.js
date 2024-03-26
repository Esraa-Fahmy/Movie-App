
function WatchList() {
 

    return (
      <>
        <h4 className="text-uppercase">favorite movies</h4>
        <hr></hr>
        <div className="d-flex justify-content-center align-items-center flex-column pt-5">
        <i className="fa-solid fa-heart-crack fs-1" style={{color:"rgb(206, 197, 197)"}}></i>
        <h6 className="my-4 text-capitalize">no movies in watch list</h6>
        <button style={{backgroundColor:"#9ADE7B"}} className="btn text-capitalize fs-6">go to home</button>
        </div>
      </>
    )
  }
  export default WatchList;