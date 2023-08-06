import MoviesContainer from "../components/MoviesContainer.jsx";
import { useQuery } from "../hooks/useQuery.jsx";

function LandingPage() {
    const query = useQuery();
    const search = query.get("search");
    return (
        <div>
            <MoviesContainer key={search} search={search}/>
        </div>
    );
}

export default LandingPage;