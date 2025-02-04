import { Link } from "react-router-dom"

const QuoteComponent = () => {
    return(
        <div>
            <div>
                <label>Quote</label>
                <br />
                <input type="number" />
            </div>
            <div>
                <input type="text" placeholder="Short message" />
            </div>
            <div>
                    <button>Submit Quote</button>
            </div>
        </div>
    )
}

export default QuoteComponent