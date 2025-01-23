import crystalClear from "../crystalClear.jpg"

const HomePage = () => {
    return(
        <div className='homepage'>
            <div className="homepage-content-container">
                <div className="headline-buttons-container">
                    <h1>Window cleaning made easy with CrystalClear</h1>
                    <button className="cleaner-cta-button">Get booked for a job</button>
                    <button className="homeowner-cta-button">Find a window cleaner</button>
                </div>
                <div className="image-container">
                    <img alt='window-image' src={crystalClear}/>
                </div>
            </div>
        </div>
        )
}

export default HomePage