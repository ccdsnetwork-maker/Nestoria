import BackButton from "@/components/layout/BackButton";


interface PageProps {
  params: Promise<{
    id: string;
  }>;
}


const messages = [
  {
    sender: "admin",
    text: "Welcome to Nestoria. How can we assist you today?",
    time: "10:30 AM",
  },
  {
    sender: "user",
    text: "I want to know more about this property.",
    time: "10:35 AM",
  },
  {
    sender: "admin",
    text: "Sure. Our property team will provide more details.",
    time: "10:36 AM",
  },
];


export default async function ChatPage({ params }: PageProps) {

  const { id } = await params;


  return (

    <main className="min-h-screen bg-gray-100 py-10 md:py-20">


      <div className="mx-auto max-w-3xl px-4 md:px-6">


        <BackButton />


        <section className="mt-6 rounded-2xl bg-white shadow-md">


          <div className="rounded-t-2xl bg-[#0B2E6B] p-5 text-white">

            <h1 className="text-2xl font-bold">
              Nestoria Support
            </h1>

            <p className="text-sm text-blue-100">
              Conversation ID: {id}
            </p>

          </div>



          <div className="space-y-4 p-5">


            {messages.map((message, index) => (

              <div
                key={index}
                className={`flex ${
                  message.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >


                <div
                  className={`max-w-[80%] rounded-xl p-4 ${
                    message.sender === "user"
                      ? "bg-[#FFF700] text-[#0B2E6B]"
                      : "bg-gray-200"
                  }`}
                >

                  <p>
                    {message.text}
                  </p>


                  <p className="mt-2 text-xs opacity-70">
                    {message.time}
                  </p>


                </div>


              </div>

            ))}


          </div>



          <div className="border-t p-5">


            <div className="flex gap-3">


              <input
                placeholder="Type your message..."
                className="flex-1 rounded-lg border p-3 outline-none"
              />


              <button
                className="rounded-lg bg-[#0B2E6B] px-6 font-bold text-white"
              >
                Send
              </button>


            </div>


          </div>


        </section>


      </div>


    </main>

  );

}
