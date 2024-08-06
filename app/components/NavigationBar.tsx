import Link from "next/link";
import { FC } from "react";

interface NavigationLinksInterface {
  linkUrl: string;
  linkTitle: string;
}

interface NavigationBarProps {
  links: Array<NavigationLinksInterface>;
}

const NavigationBar: FC<NavigationBarProps> = ({ links }) => {
  return (
    <nav className="sticky top-0 bg-darkGreen ">
      <ul className="flex gap-10 justify-center items-center py-2">
        {links.map(({ linkUrl, linkTitle }) => {
          return (
            <li key={linkUrl}>
              <Link className="text-lg" href={linkUrl}>
                {linkTitle}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationBar;
