import {AnswerPopUp} from "./AnswerPopUp"
export const Faq = () => {
  const FaqInfo = [
    {
      id: 1,
      question: "why shall i choose Ebook-store?",
      answer: "cause it's the most popular and easy to use Ebook platform",
    },
    {
      id: 2,
      question: "does Ebook have great prices?",
      answer: "Yeah our platform is very affordebale and it will help ",
    },
    {
      id: 3,
      question: "are the Ebooks affordebale?",
      answer: "All the Ebooks are availible in i very reasonable prices.",
    },
    {
      id: 4,
      question: "what are the Ebooks in the platform?",
      answer: "All kind of highly raited book are availble in the platform",
    },
  ]
  return (
    <section>
      <div className="border dark:border-gray-700 my-20 dark:text-white">
        <h1 className=" text-2xl text-center my-6 undeline underline ">
          Questions In Mind
        </h1>
        {FaqInfo.map((info) => {
          return <AnswerPopUp key={info.id} info={info} />
        })}
      </div>
    </section>
  )
}
