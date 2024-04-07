import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>IELTS sim</title>
            </Helmet>
            <h1>IELTS Preparation</h1>
            <p>Welcome to the IELTS Preparation website.</p>
            <p style={{ width: '10px' }}>
                Mauris vehicula turpis eros, nec consequat mi pellentesque vitae. Mauris volutpat sagittis mi, id tincidunt neque mollis nec. Cras felis augue, iaculis vel elementum quis, pharetra quis sem. Nulla facilisi. Praesent nulla odio, dignissim in tempor vitae, ultricies id nibh. Praesent mattis purus vel velit pretium, at maximus sem venenatis. Donec vitae sapien orci. Integer gravida molestie massa. Ut tincidunt turpis non mauris mollis venenatis. Pellentesque eleifend scelerisque risus, vitae mollis justo. In vel iaculis ex.</p>
            <p>
                <Link to="test">Test</Link>
            </p>
        </div>
    );
}
