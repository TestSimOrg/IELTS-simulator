import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <div className="page-not-found-container">
            <Helmet>
                <title>Page Not Found</title>
            </Helmet>
            <h1>Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>
                <Link to="/">Go back to the main page</Link>
            </p>
        </div>
    );
}
