import { FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="w-[70%] bg-white p-6 rounded-lg shadow-lg ml-20">
        <h1 className="text-2xl font-semibold text-[#0F1629]">About Bitcoin</h1>
        <section className="mt-6">
          <h2 className="text-lg font-bold text-[#0B1426]">What is Bitcoin?</h2>
          <p className="mt-2 pb-4 text-[#3E424A] font-medium border-b-2 border-[#C9CFDD]/40">
            Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </section>

        <section className="mt-2 border-b-2 border-[#C9CFDD]/40 pb-4">
          <h2 className="text-lg text-[#0B1426] font-bold">Lorem ipsum dolor sit amet</h2>
          <p className="text-[#3E424A] font-medium mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, aspernatur voluptatum. Doloremque, corporis at, voluptatem pariatur eum, quasi voluptates recusandae saepe a fugiat asperiores ex nesciunt blanditiis consectetur? Officia, vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, aspernatur voluptatum. Doloremque, corporis at, voluptatem pariatur eum, quasi voluptates recusandae saepe a fugiat asperiores ex nesciunt blanditiis consectetur? Officia, vitae.
          </p>
          <p className="mt-6 text-[#3E424A] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nostrum illum nobis expedita quibusdam ab debitis ullam harum. Dolores reprehenderit cum porro id accusantium. Quam ipsa libero ad quae porro.
            Iste tempore quasi aspernatur repellendus consectetur? Commodi necessitatibus totam quos illum. Dignissimos autem consequatur assumenda necessitatibus illum facilis adipisci harum, minus corrupti ratione tenetur esse beatae ipsum eveniet corporis repellat!
          </p>
          <p className="mt-6 text-[#3E424A] font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi assumenda nulla aliquam repellat nostrum esse quis quidem amet necessitatibus ea molestiae veritatis ratione velit, voluptatem nobis quo eius aspernatur. Expedita!
            Harum perspiciatis nam tenetur cupiditate molestias maxime doloribus impedit in, pariatur est, illo quae aperiam atque at cum laboriosam corporis cumque veritatis perferendis. Quasi, magni. Non et culpa eaque nisi.
            Facere, voluptatum quia neque beatae odio aspernatur earum autem vero veniam reiciendis obcaecati totam. Qui consequuntur quae temporibus provident consequatur, id placeat eum et? Voluptas ut quia molestiae perspiciatis rem.
          </p>
        </section>

        <div className="mt-8">
          <h2 className="text-[#0F1629] text-2xl font-semibold">Already Holding Bitcoin?</h2>
          <div className="lg:flex border-b-2 border-[#C9CFDD]/40 pb-4">
            <div className="mt-4">
              <div className="lg:w-[400px] h-[151px] bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD] rounded-lg flex">
                <div className="p-3">
                  <img
                    className="w-32 h-32 rounded-xl object-right object-cover"
                    src="https://s3-alpha-sig.figma.com/img/4a59/7cf5/e39cee97d83ba894aa0c105133924b9b"
                    alt="Bitcoin profits"
                  />
                </div>
                <div className="items-center p-4 flex flex-col justify-center mr-10">
                  <p className="text-white text-xl">Calculate your Profits</p>
                  <button className="bg-white px-3 py-2 rounded-lg mt-3 flex items-center">
                    Check Now
                    <FaArrowRight className="ml-2 font-normal" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 lg:ml-8">
              <div className="lg:w-[400px] h-[151px] bg-gradient-to-br from-[#FF9865] to-[#EF3031] rounded-lg flex">
                <div className="p-3">
                  <img
                    className="w-32 h-32 rounded-xl object-right object-cover"
                    src="https://s3-alpha-sig.figma.com/img/b324/e6e3/5c577ca47c764bd8af01d840fe7ffccb"
                    alt="Bitcoin tax"
                  />
                </div>
                <div className="items-center p-4 flex flex-col justify-center mr-10">
                  <p className="text-white text-xl">Calculate your tax liability</p>
                  <button className="bg-white px-3 py-2 rounded-lg mt-3 flex items-center">
                    Check Now
                    <FaArrowRight className="ml-2 font-normal" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="my-4 text-[#3E424A] font-medium">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac...
        </p>
      </div>
    </section>
  );
}

export default About;
