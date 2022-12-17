import { MdMail, MdAlarm, MdMovie } from 'react-icons/md';

const Footer = () => {
  const icons = [
    {
      icon: MdMail,
      label: 'Mails',
      href: '#'
    },
    {
      icon: MdAlarm,
      label: 'Alarm',
      href: '#'
    },
    {
      icon: MdMovie,
      label: 'Movies',
      href: '#'
    }
  ];

  return (
    <footer className="bg-[#616161] py-4 w-full text-center text-sm fixed bottom-0 flex">
      <div className="m-3 mx-7">
        <svg className="w-6 h-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>

      <div style={{ width: "100%" }}>
        <div className="flex justify-center gap-3">
          {icons.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex font-mono items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white  gap-2"
            >
              <Icon size={25} />
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="m-3 mx-7">
        <svg className="w-6 h-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;