function formatDate(dateString: string) {
  const date = new Date(dateString + "T00:00:00");
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
  }).format(date);
}

const sections = [
  {
    id: "goals",
    title: "Goals (2026)",
    subtitle: "Concrete milestones I'm working toward",
    items: [
      {
        title: "Complete my React course on Udemy",
        description:
          "Finish the course I am taking on Udemy and be well grounded in building applications with React and Next.js",
        is_complete: false,
        targetDate: "2026-07-01",
      },
      {
        title: "Go for a three days prayer retreat",
        description:
          "Take one week leave from work to focus on spiritual growth, deep fellowship, and reconnection with God. The goal is to discipline myself to seek God's help and receive his divine mercy while I wait in prayer, fasting, and His Word.",
        is_complete: false,
        targetDate: "2026-08-01",
      },
      {
        title: "Build five real React projects",
        description:
          "Build five real-world projects using React, Next.js, Typescript, and Tanstack to solidify my understanding of frontend engineering and build a portfolio to showcase my skills \uD83D\uDCA0A vacation rental app \uD83D\uDCA0 A mini music streaming app \uD83D\uDCA0 A full blown e-commerce store \uD83D\uDCA0 AI-powered Google docs \uD83D\uDCA0 A full blown HR management system",
        is_complete: false,
        targetDate: "2026-12-01",
      },
      {
        title: "Get a new and better job",
        description:
          "Secure a new role as a product manager in a company outside Nigeria paying a minimum of $2000 monthly. The role will x10 my career, financial life, and give me the opportunity to work on far more exciting and impactful products. The role will also afford me the opportunity to work with a diverse set of people and learn from them, and to save for my future ventures.",
        is_complete: false,
        targetDate: "2026-10-01",
      },
      {
        title: "Fix a solar system in my brother's house",
        description:
          "Get a 5kva solar system for my brother's house and fix it. This will make me work uninterruptedly for a long period of time without the hindrance of public power supply. This will enable me complete my projects and make progress in my career and personal life.",
        is_complete: true,
        targetDate: "2026-05-01",
      },
      {
        title: "Get my international passport \u2014 \u20A6140,000",
        description:
          "Get a new passport for personal use. This will make my migration dream a reality and also enable me travel to other countries for work or vacation.",
        is_complete: false,
        targetDate: "2026-09-01",
      },
      {
        title: "Become a better product manager & Learn and pivot to fintech PM",
        description:
          "Become a better product manager by reading more books on product management, taking courses, building and working on real-world products, attending webinars, and also  attending events to network with other product managers. \uD83D\uDCA0Read five product books \uD83D\uDCA0Solve 10 product case studies \uD83D\uDCA0Build and launch at least three products",
        is_complete: false,
        targetDate: "2026-12-01",
      },
      {
        title: "Learn Javascript to an advanced level",
        description:
          "Subscribe for Frontend Masters for six months to master javascript to an advanced level, I am talking about ES6 and above, async/await, promises, closures, scope, prototypal inheritance, etc. Also learn software engineering principles and its patterns.",
        is_complete: false,
        targetDate: "2026-12-28",
      },
    ],
  },
  {
    id: "ambitions",
    title: "Ambitions (5 years from 2026)",
    subtitle: "The big bets I'm willing to take",
    items: [
      {
        title: "Become a principal product manager at Stripe or its equivalent",
        description:
          "Work at the very top level of product management at a company like Uber or its equivalent. This means working on products that will impact millions of users and also working with a team of world-class engineers, designers, and product managers. It also means being able to make decisions that will impact the company and its users. This is a big bet but it is a bet that I am willing to take.",
        targetDate: "2030-12-01",
        is_complete: false,
      },
      {
        title: "Speak at a major tech conference in Europe or America",
        description:
          "Speak at a major tech conference in Europe or America about a topic I am passionate about. It could be about product management, software engineering, or anything that I am knowledgeable about.",
        targetDate: "2028-10-01",
        is_complete: false,
      },
      {
        title: "Migrate to Europe or America and live a far better life",
        description:
          "Migrate to Europe or America and live a far better life than I am currently living in Nigeria. This means having access to better healthcare, education, infrastructure, and opportunities. It also means being able to travel freely and explore the world.",
        targetDate: "2028-10-01",
        is_complete: false,
      },
      {
        title: "Get a Masters Degree at Cambridge University",
        description:
          "Get a Masters Degree at Cambridge University either in Management Science or an area related to Product Management. This is a big bet but it is a bet that I am willing to take.",
        targetDate: "2027-10-01",
        is_complete: false,
      },
      {
        title: "Become a successful founder and entrepreneur",
        description:
          "Become a successful founder and entrepreneur by building and scaling businesses that solve real problems for people. This means having the ability to identify opportunities, build products, and lead teams to success.",
        targetDate: "2031-12-01",
        is_complete: false,
      },
      {
        title: "Become a successful investor and venture capitalist",
        description:
          "Become a successful investor and venture capitalist by investing in startups, stocks, real estate, and other assets that I believe in and have done my due diligence on.",
        targetDate: "2031-12-01",
        is_complete: false,
      },
      {
        title: "Become a multi-millionaire in USD",
        description:
          "Become a millionaire in USD by the year 2031. This means having a net worth of at least $1,000,000. This will be made possible through my investments, my career, and my various businesses.",
        targetDate: "2032-12-01",
        is_complete: false,
      },
      {
        title: "Become a family man with a wife and kid",
        description:
          "Get married to a woman I love and raise kids with her.",
        targetDate: "2028-10-01",
        is_complete: false,
      },
      {
        title: "Become a major financial sponsor of the church",
        description:
          "Be a major financial sponsor of the church through regular giving and support to the mission works.",
        targetDate: "2030-12-01",
        is_complete: false,
      },
    ],
  },
  {
    id: "vision",
    title: "Vision",
    subtitle: "The future I'm trying to create",
    items: [
      {
        title: "A life of purpose",
        description:
          "To live a life of purpose, where every day is driven by intention and not by habit. A life where I am able to make a meaningful impact in the world and leave a legacy that will outlast me.",
      },
      {
        title: "Builder of quality products",
        description:
          "To build quality products that will make a meaningful impact in the world and also make me wealthy.",
      },
    ],
  },
  {
    id: "aspirations",
    title: "Aspirations",
    subtitle: "The person I'm becoming",
    items: [
      {
        title: "Become a product mentor",
        description:
          "To guide and mentor other aspiring product managers and help them achieve their goals.",
      },
      {
        title: "Become a thought leader",
        description:
          "To be recognized as a thought leader in the product management community and also be a voice that inspires and motivates others.",
      },
      {
        title: "Live in a clean, stable, and productive environment",
        description:
          "To live in a clean, stable, and productive environment where I can focus on my goals and aspirations. This means living in a place with good infrastructure, access to resources, and a supportive community.",
      },
      {
        title: "Become financially self-sufficient",
        description:
          "To become financially self-sufficient and independent, not relying on anyone for my financial needs. This means having a net worth of at least $1,000,000 by the year 2031.",
      },
    ],
  },
  {
    id: "ventures",
    title: "Ventures",
    subtitle: "Businesses I will build and invest in after I have built capacity",
    items: [
      {
        title: "An ecommerce store that sells quality sports product",
        description:
          "I will build an ecommerce company that sells sport items (jerseys, shoes, accessories, etc). This business has been on my mind for a long time. I will launch it and build it successfully.",
        targetDate: "2029-12-01",
        is_complete: false,
      },
      {
        title: "A software company that solves major problems",
        description:
          "A software company that solves major problems for businesses, individuals, and institutions. We will build software that will make their lives easier and also make them wealthy.",
        targetDate: "2029-12-01",
        is_complete: false,
      },
      {
        title: "A commercial music studio",
        description:
          "A commercial music studio in Lagos that provides recording, mixing, mastering, and production services to musicians and artists.",
        targetDate: "2030-12-01",
        is_complete: false,
      },
      {
        title: "A VC fund that invests in tech startups",
        description:
          "A venture capital fund that invests in tech startups. I will use my experience and knowledge to identify and support promising startups that have the potential to make a meaningful impact in the world.",
        targetDate: "2031-12-01",
        is_complete: false,
      },
      {
        title: "A record label that funds music talents",
        description:
          "I will build a highly specialized record label that funds music artists across Africa and other parts of the world.",
        targetDate: "2032-12-01",
        is_complete: false,
      },
      {
        title: "Investment in bonds, stocks, and other commodities worth over $1m",
        description: "I will invest in bonds, stocks, and other commodities to diversify my portfolio and generate passive income. These are other areas of investment I will be exploring starting from now.",
        targetDate: "2031-12-01",
        is_complete: false,
      },
      {
        title: "Real Estate investment worth over $10m",
        description: "I will invest in real estate to generate passive income and also build wealth. Real estate is a great asset that can appreciate over time and also generate rental income.",
        targetDate: "2035-12-01",
        is_complete: false,
      },
      {
        title: "Investment in Gold and Silver worth over $1m",
        description: "I will invest in Gold and Silver to hedge against inflation and also preserve my wealth. These are tangible assets that can hold their value over time.",
        targetDate: "2033-12-01",
        is_complete: false,
      },
    ]
  }
];

const numeral = ["01", "02", "03", "04", "05"];

function Section({
  id,
  title,
  subtitle,
  items,
  index,
}: {
  id: string;
  title: string;
  subtitle: string;
  items: { title: string; description: string; targetDate?: string; is_complete?: boolean }[];
  index: number;
}) {
  return (
    <section id={id} className="relative py-20 first:pt-0">
      <span className="absolute -left-4 top-0 text-[10rem] font-bold leading-none text-border/60 select-none sm:-left-8 sm:text-[14rem]">
        {numeral[index]}
      </span>
      <div className="relative mb-10">
        <h2 className="relative inline-block text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
          <span className="absolute -bottom-2 left-0 h-[2px] w-8 bg-accent rounded-full" />
        </h2>
        <p className="mt-4 text-muted max-w-md">{subtitle}</p>
      </div>
      <div className="relative flex flex-col items-start justify-start w-full">
        {items.map((item) => {
          const complete = item.is_complete;
          return (
            <div
              key={item.title}
              className="relative w-full pl-6 pb-10 last:pb-0 group"
            >
              <div
                className={`absolute left-0 top-0 bottom-0 w-px transition-colors duration-300 ${complete ? "bg-complete/40" : "bg-border group-hover:bg-border"
                  }`}
              />
              <span
                className={`absolute left-0 top-1 -translate-x-1/2 w-2 h-2 rounded-full border-[1.5px] transition-all duration-300 ${complete
                    ? "bg-complete border-complete shadow-[0_0_0_4px_rgba(16,185,129,0.15)]"
                    : "bg-background border-border group-hover:border-accent group-hover:scale-125"
                  }`}
              />
              <div className="rounded-lg -mx-2 px-2 py-2 transition-colors duration-200 group-hover:bg-card-hover">
                <h3 className={`font-medium tracking-tight ${complete ? "line-through decoration-muted/50" : ""}`}>{item.title}</h3>
                <p className={`mt-1.5 text-sm leading-relaxed ${complete ? "line-through text-muted/50" : "text-muted"}`}>
                  {item.description}
                </p>
                {item.targetDate && (
                  <p className="mt-2.5">
                    <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-accent-subtle text-accent font-medium">
                      {formatDate(item.targetDate)}
                    </span>
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-16 sm:px-8 sm:pt-36 pb-6">
      <header className="mb-22">
        <div className="flex items-center gap-2 text-sm tracking-tight">
          <span className="text-foreground font-medium">Joseph Olatunde</span>
          <span className="text-muted">&mdash;</span>
          <span className="text-muted">my future</span>
        </div>
        <h1 className="mt-10 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="bg-linear-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent">
            A living document
            <br />
            of what&rsquo;s ahead.
          </span>
        </h1>
        <div className="mt-6 h-px w-12 bg-accent/60 rounded-full" />
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
          Goals I&rsquo;m chasing, ambitions I&rsquo;m pursuing, the vision
          I&rsquo;m building toward, and the person I aspire to become.
        </p>
      </header>

      <section className="relative py-24">
        <span className="absolute -left-4 top-0 text-[10rem] font-bold leading-none text-border/60 select-none sm:-left-8 sm:text-[14rem]">
          Pray
        </span>
        <div className="relative max-w-2xl mx-auto">
          <div className="relative border border-border rounded-2xl bg-card/60 backdrop-blur-sm px-8 py-12 sm:px-12 sm:py-14">
            <span className="absolute -top-3 left-8 text-6xl leading-none text-accent/20 select-none">
              &ldquo;
            </span>
            <span className="absolute -bottom-6 right-8 text-6xl leading-none text-accent/20 select-none">
              &rdquo;
            </span>
            <div className="relative space-y-5 text-base leading-[1.8] text-foreground/85">
              <p>
                I live a joyful and fulfilled life. Everything that I do and
                everywhere I go brings me joy and fulfillment. Every decision
                that I make moves me closer to my goals and aspirations. I am
                blessed by God and my life is a testament to His goodness. I am a
                work in progress and I am constantly learning and growing. I am
                grateful for the journey ahead and the person I am becoming. I am
                favored by God and loved by men. I carry God&rsquo;s presence.
              </p>
              <p>
                I live in a great financial abunadance. I am free of bad debts and financial stress. My income streams are many and they flow in effortlessly. I use my wealth to serve God and humanity. I am a good steward of God&rsquo;s resources. I lack nothing good for God has blessed me richly. I prosper in all I do. I attract opportunities and men of influence. My hands are never idle and empty. I receive daily increase in knowledge, wealth, relationships, wisdom, and understanding. I have a retentive memory and I learn fast. I am smart and highly intelligent.
              </p>
              <p>
                I have all it takes to be great in life. I am a man that is
                helped by God. I receive constant help from God and men. I
                receive grace to be a great husband, father, provider, and
                leader. I receive grace to be a man that honors God with his
                life, finances, and relationships. I am healthy, wealthy, and
                wise.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs text-muted tracking-wider uppercase">
                My daily affirmation
              </span>
            </div>
          </div>
        </div>
      </section>

      {sections.map((section, i) => (
        <Section key={section.id} {...section} index={i} />
      ))}

      <footer className="border-t border-border pt-8 mt-28">
        <div className="flex items-center gap-3 text-sm text-muted">
          <span>&copy; {new Date().getFullYear()} Joseph Olatunde</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>subject to change, always growing</span>
        </div>
      </footer>
    </div>
  );
}
