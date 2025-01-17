import Banner from '../components/Banner';
import Highlights from '../components/Highlights';


export default function Home() {

	const data = {
        title: "Zuitt Coding Bootcamp",
        content: "Opportunities for everyone, everywhere",
        destination: "/courses",
        buttonLabel: "Enroll now!"
    }

	return (
		<>
			<Banner data={data} />
			<Highlights />
			
		</>
	)
}