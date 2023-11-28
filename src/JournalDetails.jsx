import useFetch from "./useFetch";
import { useParams, useNavigate } from 'react-router-dom';

const JournalDetails = () => {
    const { id } = useParams();
    const { data: journals, error, isPending } = useFetch('http://localhost:8003/journals/' + id);

    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8003/journals/' + journals.id, {
            method: "DELETE",
        }).then(() => {
            navigate('/')
        })
    }

    return (
        <div className="flex flex-col justify-center">
            {isPending && <div className="font-poppins text-xl font-semibold text-slate-50/10 text-center"> Loading Journal Details... </div>}
            {error && <div className="font-poppins"> {error} </div>}
            {
                journals && (
                    <>
                        <div className="flex flex-col items-center justify-center border border-slate-600 rounded-xl p-4">
                            <div className="text-center text-slate-100 text-[20pt] font-poppins font-semibold leading-none">"{journals.body}"</div>
                            <div className="mt-3">
                                <h2 className="text-slate-100 bg-rose-500 px-3 uppercase font-poppins text-center text-sm font-semibold rounded-full">{journals.subject} on {journals.date}</h2>
                            </div>
                        </div>
                        <div className="flex justify-center mt-5">
                            <button onClick={handleClick} className="text-rose-500 px-3 py-2 font-poppins">REMOVE THIS ENTRY</button>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default JournalDetails;
