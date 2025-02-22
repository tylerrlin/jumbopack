// import StorageBreakdown from "@/components/BreakdownComponent";

"use client"

import React, { useRef } from "react";




interface Question {
    text: string; // The question in string format
    isOpenResponse: boolean; // True for open response, false for multiple choice
    choices: string[]; //Only open for multiple choice questions
}

const questions: Question[] = [
    {
        text: "Sample question 1, MQ",
        isOpenResponse: false,
        choices: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
             "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
    },
    {
        text: "What is 2 + 2?",
        isOpenResponse: false,
        choices: ["4", "5", "6"],
    },
    {
        text: "Sample question 2, short response",
        isOpenResponse: true,
        choices: [],
    },
    {
        text: "Sample question 3, short response",
        isOpenResponse: true,
        choices: [],
    },
    {
        text: "Sample question 5, short response",
        isOpenResponse: true,
        choices: [],
    },
];


const colors: string[] = [
    "orange-500", "orange-500", "blue-500", "cyan-600", "yellow-500"
]

export default function Home() {

      // Create an array of refs for the questions
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Function to scroll to a specific question based on its index
  const scrollToQuestion = (index: number) => {
    questionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

     // Scrolls up one full screen height
    const scrollUp = () => {
        window.scrollBy({
        top: -window.innerHeight,
        behavior: 'smooth',
        });
    };

    // Scrolls down one full screen height
    const scrollDown = () => {
        window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
        });
    };
    //Vedant will help with this, or we're just fucked
    const submitForm = () => {
        console.log("Shit been pressed")
    }

    // scrolling/submit buttons
    const ResponsiveButtons = (index: number) => { 
        
        return (
            <div className="flex flex-col md:flex-row  md: gap-4 px-8 md:px-0 my-2 ">
                {index !== numQuestions - 1 && 
                    (<button className="bg-green3 text-white p-2 rounded"
                    onClick={() => scrollToQuestion(index + 1)}
>
                    Next
                    </button>) }
                {index == numQuestions - 1 && 
                    (<button className="bg-black text-white p-2 rounded"
                    onClick={submitForm}>
                     Submit
                    </button>) }
                {index !== 0 && (
                    <button className="bg-green2 text-white p-2 rounded"
                    onClick={() => scrollToQuestion(index - 1)}
>
                        Previous
                    
                    </button>
                )}
            </div>
        );
      };

    const bg_tailwind= (num: number): string => {
        const returnStr: string = "h-[" + ((num + 1) * 100) + "vh] bg-green1 align-center ";
        console.log(returnStr);
        return returnStr;
    };
    const question_style= (num: number): string => {
        console.log("INDEX IS: " + num);
        const returnStr: string = "relative h-[100vh] ";
        console.log("question_style" + returnStr);
        return returnStr;
    };

    const MQ_choices = (question: Question): React.ReactNode => {
        return (
          <div className="flex flex-col gap-2">
            {question.choices.map((choice, index) => (
              <div key={index} className="flex items-center hover:bg-green1dark gap-4 px-2" >
                <input
                  type="checkbox"
                  id={`choice-${index}`}
                  className="flex-shrink-0 mr-2 appearance-none h-6 w-6 border border-gray-300 rounded checked:bg-green2 checked:border-green3"
                />
                <label htmlFor={`choice-${index}`} className="appearance-none text-lg font-extrabold">{choice}</label>
              </div>
            ))}
          </div>
        );
      };

    //React component that contains the questions
    const question_html=(index: number): React.ReactNode => {
        const question = questions[index];
        return  <>
                    <h2 className="absolute bottom-1/2  left-[20%] font-inter text-7xl pl-400px"> {question.text}
                    </h2>
                    {/* <h2 className="absolute bottom-1/4  left-[20%] font-sans text-7xl pl-400px"> {question.text}
                    </h2> */}
                    <div className="absolute top-1/2 left-[20%] flex flex-col right-[20%]  py-6 gap-1">
                        {question.isOpenResponse ? 
                            (<textarea className="rounded-lg bg-transparent  hover:bg-green1dark placeholder-white text-gray-200 pl-[14px]"
                                    placeholder="Answer Here "></textarea>) 
                            : (MQ_choices(question)) }
                        {ResponsiveButtons(index)}
                    </div>
                </>
    }


    const numQuestions: number = questions.length;

    return (
        <>
            <div className={bg_tailwind(numQuestions)}>
                <div>
                    {questions.map((question, index) => (
                        <div key={index} className={question_style(index) + "items-center h-screen"} 
                            ref={(el) => (questionRefs.current[index] = el)}>
                            {question_html(index)}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
