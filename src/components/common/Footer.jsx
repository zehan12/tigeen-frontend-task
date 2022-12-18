import { Fragment } from 'react';
import { MdMail, MdAlarm, MdMovie } from 'react-icons/md';
import { useSelector } from 'react-redux';

const Footer = () => {
  const STATE = useSelector((state) => state);
  const {
    showFooter,
    showFooterNav
  } = STATE;
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
    <Fragment>
      {showFooter &&
        <footer className="bg-[#616161] py-4 w-full text-center text-sm fixed bottom-0 flex">
          <div className="m-3 mx-7">
            <svg className="w-6 h-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>

          <div style={{ width: "100%" }}>
            <div className={`${showFooterNav ? "flex justify-center gap-3" : "hidden"}`}>
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
      }
    </Fragment>

  );
};

export default Footer;