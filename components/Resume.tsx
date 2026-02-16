"use client";

import { portfolioData } from "@/data/portfolio";

interface ResumeCardProps {
    date: string;
    title: string;
    subTitle: string;
    meta: string;
    description?: string;
}

const ResumeCard = ({ date, title, subTitle, meta, description }: ResumeCardProps) => (
    <div className="bg-white shadow-sm p-12 mb-6 transition-shadow hover:shadow-md border border-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Left Column (Span 4) */}
            <div className="md:col-span-4 flex flex-col pt-1">
                <h4 className="text-[#0055FF] font-bold text-xl whitespace-nowrap">{date}</h4>
                <h3 className="text-black font-black uppercase tracking-[0.15em] text-sm mt-3 leading-relaxed">
                    {title}
                </h3>
                <div className="mt-4 space-y-1">
                    <p className="text-black font-semibold text-xs uppercase tracking-wider">{subTitle}</p>
                    <p className="text-gray-500 font-medium text-xs">{meta}</p>
                </div>
            </div>

            {/* Right Column (Span 8) */}
            <div className="md:col-span-8">
                {description && (
                    <p className="text-black font-light leading-relaxed text-base opacity-90">
                        {description}
                    </p>
                )}
            </div>
        </div>
    </div>
);

const SkillGroup = ({ title, skills }: { title: string; skills: string[] }) => (
    <div className="mb-12 last:mb-0">
        <h3 className="text-2xl font-bold text-black mb-8">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
            {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-[#0055FF] flex-shrink-0" /> {/* Blue Square Bullet */}
                    <span className="text-black font-light text-base">{skill}</span>
                </div>
            ))}
        </div>
    </div>
);

export default function Resume() {
    const { education, projects, achievements, skills } = portfolioData;

    // Merge technical and professional skills for the "Professional skillset" section
    const professionalSkills = [
        ...skills.professional,
        ...skills.frameworks,
        ...skills.fundamentals
    ];

    return (
        <section id="resume" className="bg-[#F2EFE9] pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-[940px] mx-auto">

                {/* Main Title */}
                <div className="flex items-center justify-center gap-4 mb-20">
                    <div className="w-4 h-4 bg-[#0055FF]" />
                    <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight">
                        Resume
                    </h2>
                </div>

                {/* Download Button Row */}
                <div className="flex justify-end mb-12">
                    <a href="/resume.pdf" download="Prateek_Patel_Resume.pdf">
                        <button className="bg-[#0055FF] text-white rounded-full px-8 py-3 text-sm font-bold tracking-wider hover:bg-blue-700 transition-colors shadow-lg">
                            DOWNLOAD CV
                        </button>
                    </a>
                </div>

                {/* --- EDUCATION --- */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-black mb-8 border-l-4 border-[#0055FF] pl-4">Education</h3>
                    {education.map((item, index) => (
                        <ResumeCard
                            key={index}
                            date={item.period}
                            title={item.degree}
                            subTitle={item.institution}
                            meta={`Grade: ${item.grade}`}
                        />
                    ))}
                </div>

                {/* --- PROJECTS --- */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-black mb-8 border-l-4 border-[#0055FF] pl-4">Projects</h3>
                    {projects.map((item, index) => (
                        <ResumeCard
                            key={index}
                            date={item.date}
                            title={item.title}
                            subTitle={item.tech}
                            meta="Project"
                            description={item.description}
                        />
                    ))}
                </div>

                {/* --- SKILLS (Redesigned) --- */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-black mb-8 border-l-4 border-[#0055FF] pl-4">Skills</h3>
                    <div className="bg-white shadow-sm p-12 md:p-16 border border-gray-50">
                        <SkillGroup title="Professional skillset" skills={professionalSkills} />
                        <SkillGroup title="Languages" skills={skills.languages} />
                    </div>
                </div>

                {/* --- ACHIEVEMENTS --- */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-black mb-8 border-l-4 border-[#0055FF] pl-4">Achievements</h3>
                    <div className="bg-white shadow-sm p-12 mb-6 border border-gray-50">
                        <ul className="space-y-4">
                            {achievements.map((ach, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <div className="w-2 h-2 mt-2 bg-[#0055FF] rounded-full flex-shrink-0" />
                                    <p className="text-black font-light text-base leading-relaxed">{ach}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
}
