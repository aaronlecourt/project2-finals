import { useState } from "react";
import { useNavigate } from "react-router";

const CreateJournal = () => {
    const [subject, setSubject] = useState('');
    const [date, setDate] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const journals = {subject, date, body}
        setIsPending(true);
        fetch('http://localhost:8000/journals',{
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(journals)
        }).then(() => {console.log("Journal successfully added.");setIsPending(false);navigate('/')})
    }

    return(
        <div className="flex items-center justify-center w-full">
            <div className="bg-slate-700/50 w-full max-w-[600px] rounded-xl border border-slate-100/20 p-6">
                <h2 className="text-slate-100 font-poppins font-bold uppercase text-[20pt] text-center">Leave a Journal</h2>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <div className="flex flex-col">
                        <label className="text-slate-100 font-poppins text-xs uppercase font-bold">Name:</label>
                        <input className="w-full bg-slate-300/10 p-2 text-slate-50 font-poppins text-xs rounded-lg" type="text" required value={subject} onChange={(e) => setSubject(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-slate-100 font-poppins text-xs uppercase font-bold">Date:</label>
                        <input className="w-full bg-slate-300/10 p-2 text-slate-50 font-poppins text-xs rounded-lg" type="date" required value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-slate-100 font-poppins text-xs uppercase font-bold">Position:</label>
                        <textarea className="w-full bg-slate-300/10 p-2 text-slate-50 font-poppins text-xs rounded-lg" type="text" required value={body} onChange={(e) => setBody(e.target.value)} />
                    </div>
                    <div className="flex justify-center">
                        {!isPending && <button className="bg-rose-500 w-full text-white p-2 hover:bg-rose-700 font-poppins uppercase rounded-xl font-semibold text-sm">Add Journal</button>}
                        {isPending && <button className="bg-gray-500 text-white p-2 cursor-not-allowed font-poppins uppercase rounded-xl font-semibold text-sm" disabled>Just a moment!</button>}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateJournal;
