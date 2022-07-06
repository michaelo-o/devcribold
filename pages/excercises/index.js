import { useState } from "react";

const Test = () => {

    const [TestTaken, setTestTaken] = useState(false)
    const [score, setscore] = useState(0)

    const [answer1, setanswer1] = useState("")
    const [answer2, setanswer2] = useState("")
    const [answer3, setanswer3] = useState("")
    const [answer1S, setanswer1S] = useState("")
    const [answer2S, setanswer2S] = useState("")
    const [answer3S, setanswer3S] = useState("")
    const [TestStatus, setTestStatus] = useState("Test Not Taken")

    const markQuiz = (event) => {
        event.preventDefault();
        setTestTaken(true)
        if (answer1 === "alt") {
            setscore(++score);
        } //change colors of all these bs
        else {
            setanswer1S("Wrong")
        }
        //ans2
        if (answer2 === "axe") {
            setscore(++score);
        } //change colors of all these bs
        else {
            setanswer2S("Wrong")
        }
        //ans3
        if (answer3 === "hol") {
            setscore(++score);
        }
        //change colors of all these bs
        else {
            setanswer3S("Wrong")
        }
    }

    // const ClearAns = (event) => {
    //     event.preventDefault();
    //     setanswer1({ ..."" })
    //     setanswer2({ ..."" })
    //     setanswer3({ ..."" })
    // }


    const Redo = (event) => {
        event.preventDefault();
        setTestTaken(false)
        setTestStatus("Redoing Test...")

        setanswer1("")
        setanswer2("")
        setanswer3("")


        setscore(0)

        setanswer1S("")
        setanswer2S("")
        setanswer3S("").then(ClearAns);


    }

    return (
        <>
            <div>

                <form onSubmit={markQuiz}>
                    <h1>IMportant Note: Answer All Questions!</h1>
                    <p> &#10216; img src=&quot;w3schools.png&quot; <input type="text"
                        onChange={(event) => setanswer1(event.target.value)} required /> = &quot; w3schools Logo &quot; &#10217; {answer1S}</p>
                    <p> &#10216; img src=&quot;w3schools.png&quot; <input type="text"
                        onChange={(event) => setanswer2(event.target.value)} required /> = &quot; w3schools Logo &quot; &#10217;{answer2S}</p>
                    <p> &#10216; img src=&quot;w3schools.png&quot; <input type="text"
                        onChange={(event) => setanswer3(event.target.value)} required /> = &quot; w3schools Logo &quot; &#10217;{answer3S}</p>
                    {TestTaken ? (
                        <h1>Submitted! Here's Your Score;</h1>
                    ) : (
                        <input
                            type="submit"
                            className="submitbutton"
                            value="Submit Quiz"
                        />
                    )}
                </form>


                {TestTaken ? (
                    <div>
                        <h1>{score}/3</h1>
                        <button onClick={Redo}>Redo Quiz</button>
                    </div>
                ) : (
                    <h1>{TestStatus}</h1>
                )
                }





            </div>




        </>
    );
}

export default Test;