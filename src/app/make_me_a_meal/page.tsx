// import StorageBreakdown from "@/components/BreakdownComponent";

interface Question {
    text: string; // The question in string format
    isOpenResponse: boolean; // True for open response, false for multiple choice
}

const background_style: ()

const questions: Question[] = [
    {
        text: "What is your name?",
        isOpenResponse: true,
    },
    {
        text: "What is 2 + 2?",
        isOpenResponse: false,
    },
];

export default function Home() {
    const numQuestions: number = 42;
    const myString: string = "The number is " + numQuestions;
    console.log(myString); // Output: "The number is 42"
    return (
        <>
            <div className="h-"+ bg-green1 align-center">
                <div>
                    {questions.map((question, index) => (
                        <div key={index}>
                            {question.text}{" "}
                            {question.isOpenResponse
                                ? "(Open Response)"
                                : "(Multiple Choice)"}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
