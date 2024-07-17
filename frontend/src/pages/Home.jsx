import { Helmet } from "react-helmet-async";
import { Text } from "@mantine/core";
import "../styles/Home.css";
import Carousel from "../components/Carousel";
import FeatureGrid from "../components/FeatureGrid";
import { BsHeadphones } from "react-icons/bs";
import { BiBookOpen } from "react-icons/bi";
import { BsPenFill } from "react-icons/bs";
import { BsFillMicFill } from "react-icons/bs";
import { IoPieChart } from "react-icons/io5";

export default function Home() {
    const content = [
        {
            icon: BsHeadphones,
            heading: "Listening Test",
            content: "We recommend giving multiple listening tests until you score above 8 consistently."
        },{
            icon: BiBookOpen,
            heading: "Reading Test",
            content: "We recommend giving 2 reading tests and record the type of questions on which you can't score well."
        },{
            icon: BsPenFill,
            heading: "Writing Test",
            content: "There is no one-size-fits-all solution for practicing writing essays and reports. We are trying to develop a ML solution for evaluating essays and reports."
        },{
            icon: BsFillMicFill,
            heading: "Speaking Test",
            content: "For the speaking sections give multiple test and self-evaluate. Practice until you aren't major pauses and re-iterating sentences."
        },{
            icon: IoPieChart,
            heading: "Statistical Reporting",
            content: "We will report what sections and what type of questions you are good with and which ones you struggle with."
        },
    ];

	return (
		<div>
			<Helmet>
				<title>IELTS SIMULATOR</title>
			</Helmet>
			<div className="container">
				<Carousel />
				<Text className="hpheader">
					Ace the IELTS with our comprehensive and flexible learning
					plans
				</Text>
				<Text className="subtext">
					Test Listening, Reading, Writing and Speaking
					comprehensively and give a test exam to simulate exam
					environment.
				</Text>
                <FeatureGrid content={content} />
			</div>
		</div>
	);
}
