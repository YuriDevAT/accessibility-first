import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { organization } from '../../data/organization';

const OrganizationList = () => {
  const { t } = useTranslation('footer');

  return (
    <ul aria-labelledby="organization">
      {organization.map((item) => (
        <li key={item.key}>
          <Link
            href={item.path}
            className="block mb-3 focus:outline outline-inherit outline-offset-1"
          >
            {t(`organization.${item.key}`)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default OrganizationList;
