import { ProfileCard } from 'components/ProfileCard';
import { Layout } from 'components/Layout';
import { RouteWrapper } from 'utils/RouteWrapper';

function ProfilePage() {
  return (
    <RouteWrapper>
      <Layout>
        <ProfileCard />
      </Layout>
    </RouteWrapper>
  );
}

export default ProfilePage;
