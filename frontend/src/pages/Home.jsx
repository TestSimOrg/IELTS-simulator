import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <h1>IELTS Preparation</h1>
            <p>Welcome to the IELTS Preparation website.</p>
            <p>
                <Link to="test">Test</Link>
            </p>
        </div>
    );
}
