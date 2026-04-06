import React from 'react';

const navButtons = [
  { title: 'معرفی', sectionId: 'introduction' },
  { title: 'انواع پلن های اشتراک', sectionId: 'plans' },
  { title: 'نحوه فعالسازی', sectionId: 'activation-methods' },
  { title: 'نکات مهم قبل از خرید', sectionId: 'important-points' },
  { title: 'سوالات پر تکرار', sectionId: 'faq' },
  { title: 'نظرات کاربران', sectionId: 'comments' },
];

export default function Navigation() {
  return (
    <div className="bg-foreground text-paragraph flex flex-wrap gap-2.5 rounded-3xl rounded-tr-lg p-2.5">
      {navButtons.map((button) => (
        <NavButton key={button.title} {...button} />
      ))}
    </div>
  );
}

function NavButton({ title, sectionId }) {
  return (
    <a
      href={`#${sectionId}`}
      role="tab"
      className="cursor-pointer bg-[##FFFFFF00] p-2 transition-colors duration-300 hover:text-white"
    >
      {title}
    </a>
  );
}
