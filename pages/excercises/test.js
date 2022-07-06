import { useState } from "react";

const Test = () => {



    const blankAns = {
        ans1: "",
        ans2: "",
        ans3: "",
    };
    const [score, setscore] = useState(0)


    const [{ ans1, ans2, ans3 }, setAns] = useState(blankAns);

    const onChange = (event) => {
        const { name, value } = event.target;
        setAns(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (ans1 === "alt") {
            setscore(++score);
        }
        if (ans3 === "alt11") {
            setscore(++score);
        }
        if (ans2 === "alt1") {
            setscore(++score);
        }
        console.log(ans1);
        console.log(ans2);
        console.log(ans3);
    }
    const redo = () => {
        setscore(0);
        setTimeout(() => {
            setAns(blankAns)

        }, 500);

    }


    return (
        <>
            <div>

                <form onSubmit={handleSubmit}>
                    <h1>IMportant Note: Answer All Questions!</h1>
                    <p> &#10216; img src=&quot;w3schools.png&quot; <input value={ans1} name="ans1" onChange={onChange} type="text"
                    /> = &quot; w3schools Logo &quot; &#10217;</p>
                    <p> &#10216; img src=&quot;w3schools.png&quot; <input value={ans2} name="ans2" onChange={onChange} type="text"
                    /> = &quot; w3schools Logo &quot; &#10217;</p>
                    <p> &#10216; img src=&quot;w3schools.png&quot; <input value={ans3} name="ans3" onChange={onChange} type="text"
                    /> = &quot; w3schools Logo &quot; &#10217;</p>
                    <input
                        type="submit"
                        className="submitbutton"
                        value="Submit Quiz"
                    />
                </form>

                <h1>{score}</h1>

                <button onClick={redo}>redo</button>




            </div>
        </>
    );
}

export default Test;