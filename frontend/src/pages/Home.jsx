import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Text, Image } from '@mantine/core';
import '../styles/Home.css';
import img from '../assets/HomePage.jpg'

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>IELTS sim</title>
            </Helmet>
            <div className="container">
                                <Text size="40px" fw={500} ta="center" className="hpheader">IELTS Prep Has Never Been   
                    <Text className="txt" span inherit> Easier</Text>
                </Text>
                <Link to="test">Test</Link>
            </div>
        </div>
    );
}
