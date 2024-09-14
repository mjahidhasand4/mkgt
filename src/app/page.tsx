import { SlickSlider } from "@/components";

const Home = () => {
  return (
    <main className="max-w-[1160px] p-4 mx-auto bg-white h-full">
      <SlickSlider />

      <div className="mt-8 flex gap-8">
        <div className="w-[85%] px-4">
          <h1 className="text-[2.5rem] font-solaimanlipi font-medium text-center">
            মুক্তিযোদ্ধা গবেষণা ও কল্যাণ ট্রাস্ট
          </h1>

          <div className="my-8 flex gap-8">
            <img
              src="https://mgkt.org.bd/wp-content/uploads/2023/05/143553Freedom-fight.webp"
              alt=""
              className="w-[36%]"
            />

            <p className="font-solaimanlipi text-justify">
              <strong>
                Welcome to Freedom Fighter Research & Welfare Trust,
              </strong>{" "}
              a prominent Freedom Fighter Research & Welfare Trust dedicated to
              promoting freedom, Justice and the empowerment of individuals and
              communities worldwide. We strive to create positive change by
              supporting and nurturing freedom fighters and revolutionaries who
              champion the cause of liberation from oppressive systems and work
              towards creating a more equitable society.
            </p>
          </div>

          <img
            src="https://mgkt.org.bd/wp-content/uploads/2024/01/birshesto.jpg"
            alt=""
          />

          <div className="my-8 grid grid-cols-2 gap-8 items-end">
            <div>
              <h2 className="text-[24px] font-solaimanlipi font-medium mb-4">
                7 March Speech of Bangabandhu
              </h2>

              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/gc03Dg1LArs?si=lcaO0S-49uKFYKPV"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <div>
              <h2 className="text-[24px] font-solaimanlipi font-medium mb-4">
                SYND 25-12-71 INTERVIEWS WITH NEW BANGLADESH PREMIERS
              </h2>

              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/gc03Dg1LArs?si=lcaO0S-49uKFYKPV"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <h2 className="text-[2rem] font-solaimanlipi font-medium text-center">
            Project Gallery
          </h2>

          <div className="my-4 grid grid-cols-3 gap-4">
            <img
              src="https://mgkt.org.bd/wp-content/uploads/2024/02/31.jpg"
              alt=""
              className="w-full h-auto object-cover"
            />
            <img
              src="https://mgkt.org.bd/wp-content/uploads/2024/02/30.jpg"
              alt=""
              className="w-full h-auto object-cover"
            />
            <img
              src="https://mgkt.org.bd/wp-content/uploads/2024/02/29.jpg"
              alt=""
              className="w-full h-auto object-cover"
            />
            <img
              src="https://mgkt.org.bd/wp-content/uploads/2024/02/28.jpg"
              alt=""
              className="w-full h-auto object-cover"
            />
            <img
              src="https://mgkt.org.bd/wp-content/uploads/2024/02/27.jpg"
              alt=""
              className="w-full h-auto object-cover"
            />
            <img
              src="https://mgkt.org.bd/wp-content/uploads/2024/02/26.jpg"
              alt=""
              className="w-full h-auto object-cover"
            />
          </div>

          <button className="button-3 mx-auto">
            <span>Show all</span>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
              />
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1">
          <h3 className="text-[1.1em] font-solaimanlipi text-white w-full py-[7px] px-[10px] bg-[#33754d]">
            জাতীয় সংগীত
          </h3>
          <audio controls className="my-4">
            <source src="/audios/bd_national_anthem.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>

          <div className="w-full h-3 bg-[#33754d]" />

          <img
            src="https://mgkt.org.bd/wp-content/uploads/2024/01/birshesto-768x614.jpg"
            alt=""
            className="mt-4"
          />

          <h3 className="text-[1.1em] font-solaimanlipi text-white w-full py-[7px] px-[10px] bg-[#33754d] my-4">
            জরুরী সেবা
          </h3>

          <img
            src="https://mgkt.org.bd/wp-content/uploads/2024/02/bd-info.png"
            alt=""
            className="w-full object-cover"
          />

          <h3 className="text-[1.1em] font-solaimanlipi text-white w-full py-[7px] px-[10px] bg-[#33754d] my-4">
            দুদক হট লাইন নাম্বার-১০৬
          </h3>

          <img
            src="https://mgkt.org.bd/wp-content/uploads/2024/02/Dudac-33.gif"
            alt=""
          />

          <h3 className="text-[1.1em] font-solaimanlipi text-white w-full py-[7px] px-[10px] bg-[#33754d] my-4">
            ডিজিটাইজেশনকৃত মুক্তিযোদ্ধাদের তথ্য
          </h3>

          <button className="w-22 h-10">
            <img
              src="https://mgkt.org.bd/wp-content/uploads/2024/02/Capture11.png"
              alt=""
              className="w-full h-full"
            />
          </button>

          <h3 className="text-[1.1em] font-solaimanlipi text-white w-full py-[7px] px-[10px] bg-[#33754d] my-4">
            ডিজিটাল বাংলাদেশ থেকে স্মার্ট বাংলাদেশের অভিযাত্রা
          </h3>

          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/gc03Dg1LArs?si=lcaO0S-49uKFYKPV"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Home;
