import React, { useState, useEffect } from "react";

function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqData = [
    {
      question: "Xidmətləriniz hansılardır?",
      answer:
        "Biz müasir texnologiyalardan istifadə edərək müxtəlif sahələrdə peşəkar xidmətlər təqdim edirik. Əsas fəaliyyət sahələrimizə veb dizayn, mobil tətbiq hazırlanması, brending və rəqəmsal marketinq daxildir.",
    },
    {
      question: "Layihənin tamamlanma müddəti nə qədərdir?",
      answer:
        "Layihənin mürəkkəbliyi və tələblərdən asılı olaraq, müddət 2 həftədən 3 aya qədər dəyişə bilər. Hər layihə üçün ayrıca zaman cədvəli tərtib edilir və müştəri ilə razılaşdırılır.",
    },
    {
      question: "Qiymətləriniz necə müəyyən edilir?",
      answer:
        "Qiymətlər layihənin miqyası, mürəkkəbliyi və tələb olunan funksionallıqdan asılıdır. İlkin məsləhət pulsuz təqdim edilir və dəqiq qiymət təklifi sonradan hazırlanır.",
    },
    {
      question: "Texniki dəstək təqdim edirsinizmi?",
      answer:
        "Bəli, bütün layihələr üçün 6 ay pulsuz texniki dəstək təqdim edirik. Bu müddətdən sonra da davamlı dəstək xidməti mövcuddur.",
    },
    {
      question: "Hansı texnologiyalardan istifadə edirsiniz?",
      answer:
        "Biz ən son texnologiyalardan istifadə edirik: React, Next.js, Node.js, Python, Flutter və s. Hər layihə üçün ən uyğun texnologiya yığımı seçilir.",
    },
  ];

  const toggleFaq = (faqIndex: number) => {
    setActiveIndex(activeIndex === faqIndex ? null : faqIndex);
  };

  return (
    <div className="w-full flex font-archivo flex-col lg:flex-row justify-between py-8 md:my-14  ">
      {/* Left Column */}
      <div className="flex flex-col w-full lg:w-auto">
        <div className={`mb-[60px] lg:mb-[100px] `}>
          <div className="flex gap-3 lg:gap-5 items-center">
            <span className="text-gray-600 text-lg lg:text-xl font-medium">
              (02)
            </span>
            <span className={`h-[1px] w-full bg-elements `}></span>
          </div>
          <h2
            className={`text-gray-900 pt-6 lg:pt-8 text-2xl md:text-3xl lg:text-4xl font-medium leading-9 `}
          >
            Tez-tez soruşulan suallar
          </h2>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col lg:mt-0 lg:w-[600px]">
        <div className="hidden lg:flex items-center h-[21px]">
          <span className={`h-[1px] w-full bg-elements`}></span>
        </div>

        <div className="flex flex-col gap-2 lg:gap-3">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-gray-200 last:border-b-0 `}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left py-4 lg:py-5 flex justify-between items-center group transition-colors duration-300 hover:text-gray-700"
              >
                <span className="text-gray-900 text-lg lg:text-xl font-medium pr-4 group-hover:text-gray-700 transition-colors duration-300">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`text-gray-900 group-hover:text-gray-700 transition-all duration-500 ease-out ${
                      activeIndex === index ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <path
                      d="M8 1V15M1 8H15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className={`transform transition-all duration-700 ease-out ${
                    activeIndex === index
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-4 opacity-0"
                  }`}
                >
                  <div className="pt-4 pb-6">
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
