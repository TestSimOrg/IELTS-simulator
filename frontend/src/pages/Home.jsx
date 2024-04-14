import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Text, Image } from '@mantine/core';
import '../styles/Home.css';
import img from '../assets/HomePage.jpg'

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>IELTS SIMULATOR</title>
            </Helmet>
            <div className="container">
                                <Text size="60px" fw={500} ta="center" className="hpheader">IELTS Prep Has Never Been   
                    <Text className="txt" span inherit> Easier</Text>
                </Text>
                <Text ta={"center"}> 
                    <Link to="test">Test</Link>
                </Text> 
            </div>
        </div>
    );
}
