import { ProfileCard } from 'components/ProfileCard';
import { Layout } from 'components/Layout';
import { withAuth } from 'utils/withAuth';
import { RouteWrapper } from 'utils/RouteWrapper';

function DashboardPage() {
  return (
    <Layout>
      <ProfileCard />
    </Layout>
  );
}

export default withAuth(DashboardPage);
