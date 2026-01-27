import React from 'react';

const TechnologyNewsCard = () => {
  return (
    <div className="flex flex-col gap-5 bg-white">
      <img
        src="http://res.cloudinary.com/dpj4vsqbo/image/upload/v1696939234/news/mkiievwcfnut0qyezxbo.webp"
        alt="EU sees 'convergence' with Japan on AI"
        className="w-full h-full"
      />
      <div className="flex flex-col gap-4 px-6 pb-6">
        <h3 className="text-red-700 uppercase font-medium text-lg">Technology</h3>
        <h2 className="text-3xl text-gray-700 font-bold">
          EU sees 'convergence' with Japan on AI - official
        </h2>
        <div className="flex gap-2 text-xs text-slate-600">
          <span>October 10, 2023 /</span>
          <span>Himel Islam</span>
        </div>
        <p className="text-gray-700 text-base leading-6">
          TOKYO, Oct 9 (Reuters) - The European Union sees "convergence" with Japan on thinking about
          generative artificial intelligence (AI), a senior official said on Monday.
        </p>
        <p className="text-gray-700 text-base leading-6">
          "I see a lot of convergence in how we look at AI and generative AI," European Commission
          Vice-President for Values and Transparency Vera Jourova told Reuters in an interview.
        </p>
        <p className="text-gray-700 text-base leading-6">
          The EU is at the{' '}
          <a
            href="https://www.reuters.com/technology/eus-ai-lobbying-blitz-gets-lukewarm-response-asia-officials-2023-07-17/"
            className="underline text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            forefront of regulating
          </a>{' '}
          the emerging technology with its hard-hitting AI Act, while Japan is looking at more{' '}
          <a
            href="https://www.reuters.com/technology/japan-leaning-toward-softer-ai-rules-than-eu-source-2023-07-03/"
            className="underline text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            flexible guidelines
          </a>{' '}
          than the bloc to boost economic growth, Reuters has reported.
        </p>
        <p className="text-gray-700 text-base leading-6">
          The EU and Japan are{' '}
          <a
            href="https://www.reuters.com/technology/eu-japan-deepen-chip-cooperation-breton-2023-07-03/"
            className="underline text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            deepening cooperation
          </a>{' '}
          over technology such as AI, cybersecurity and chips seen as important for economic security.
        </p>
        <img
          src="http://res.cloudinary.com/dpj4vsqbo/image/upload/v1696939098/news/lglqgkkkft0mfkvemgrx.jpg"
          alt="EU-Japan Tech Meeting"
          className="w-full h-auto"
        />
        <p className="text-gray-700 text-base leading-6">
          "I was{' '}
          <a
            href="https://www.reuters.com/world/china-eu-hold-talks-ai-cross-border-data-flow-amid-renewed-tensions-2023-09-18/"
            className="underline text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            recently in China
          </a>{' '}
          and it's a totally different thing. I could discuss with our Japanese partners because we do
          not have to explain to each other basic, basic things," said Jourova on the sidelines of a
          forum on internet governance in Kyoto.
        </p>
        <p className="text-gray-700 text-base leading-6">
          The Group of Seven industrial powers are discussing guidelines for generative AI, a
          technology being met with excitement and concern, under a process established in Hiroshima.
        </p>
        <p className="text-gray-700 text-base leading-6">
          Discussions are on track to launch consultations on a framework for AI but a code of
          conduct for companies involved in AI needs further work, Jourova said.
        </p>
      </div>
    </div>
  );
};

export default TechnologyNewsCard;
