import JournalDetails from "./JournalDetails";
import useFetch from "./useFetch";
import JournalList from "./JournalList";

const Home = () => {
    const {data:journals, isPending, error} = useFetch('http://localhost:8003/journals');

    return  (
        <div className="px-6 pb-10 overflow-y-auto overflow-x-hidden bg-slate-800 w-100">
            <div className="text-white">
            {error && <div className="font-poppins"> {error} </div>}
                {!isPending && journals === 0 && <div className="font-poppins text-sm text-slate-500/50"> No journals </div>}
                {isPending && <div className="font-poppins text-sm text-slate-500/50"> Loading journals... </div>}
                {journals && <JournalList journals = {journals} />}
            </div>
        </div>
    );
};

export default Home;