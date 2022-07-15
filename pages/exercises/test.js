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






// import { useState } from "react";

// const Test = () => {

//     const [TestTaken, setTestTaken] = useState(false)
//     const [score, setscore] = useState(0)

//     const [answer1, setanswer1] = useState("")
//     const [answer2, setanswer2] = useState("")
//     const [answer3, setanswer3] = useState("")
//     const [answer1S, setanswer1S] = useState("")
//     const [answer2S, setanswer2S] = useState("")
//     const [answer3S, setanswer3S] = useState("")

//     const markQuiz = (event) => {
//         event.preventDefault();
//         setTestTaken(true)
//         if (answer1 === "alt") {
//             setscore(++score);
//         } //change colors of all these bs
//         else {
//             setanswer1S("Wrong")
//         }
//         //ans2
//         if (answer2 === "axe") {
//             setscore(++score);
//         } //change colors of all these bs
//         else {
//             setanswer2S("Wrong")
//         }
//         //ans3
//         if (answer3 === "hol") {
//             setscore(++score);
//         }
//         //change colors of all these bs
//         else {
//             setanswer3S("Wrong")
//         }
//     }

//     // const ClearAns = (event) => {
//     //     event.preventDefault();
//     //     setanswer1({ ..."" })
//     //     setanswer2({ ..."" })
//     //     setanswer3({ ..."" })
//     // }


//     const Redo = (event) => {
//         event.preventDefault();
//         setTestTaken(false)
//         setTestStatus("Redoing Test...")

//         setanswer1("")
//         setanswer2("")
//         setanswer3("")


//         setscore(0)

//         setanswer1S("")
//         setanswer2S("")
//         setanswer3S("").then(ClearAns);


//     }

//     return (
//         <>
//             <div>

//                 <form onSubmit={markQuiz}>
//                     <h1>IMportant Note: Answer All Questions!</h1>
//                     <p> &#10216; img src=&quot;w3schools.png&quot; <input type="text"
//                         onChange={(event) => setanswer1(event.target.value)} required /> = &quot; w3schools Logo &quot; &#10217; {answer1S}</p>
//                     <p> &#10216; img src=&quot;w3schools.png&quot; <input type="text"
//                         onChange={(event) => setanswer2(event.target.value)} required /> = &quot; w3schools Logo &quot; &#10217;{answer2S}</p>
//                     <p> &#10216; img src=&quot;w3schools.png&quot; <input type="text"
//                         onChange={(event) => setanswer3(event.target.value)} required /> = &quot; w3schools Logo &quot; &#10217;{answer3S}</p>
//                     {TestTaken ? (
//                         <h1>Submitted!Here&apos;s Your Score;</h1>
//                     ) : (
//                         <input
//                             type="submit"
//                             className="submitbutton"
//                             value="Submit Quiz"
//                         />
//                     )}
//                 </form>


//                 {TestTaken ? (
//                     <div>
//                         <h1>{score}/3</h1>
//                         <button onClick={Redo}>Redo Quiz</button>
//                     </div>
//                 ) : (
//                     <h1>{TestStatus}</h1>
//                 )
//                 }





//             </div>




//         </>
//     );
// }

// export default Test;