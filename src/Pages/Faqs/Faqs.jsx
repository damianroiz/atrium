import PageHeader from '../../Components/PageHeader';
import FaqsMenu from '../../Components/Faqs';
import Map from '../../Components/Map';

export default function Faqs() {
  return (
    <>
      <PageHeader title="Faqs" />
      <section style={{ 'display': 'flex', 'gap': '4rem', 'alignItems': 'flex-start' }}>
        <Map />
        <FaqsMenu />
      </section>
    </>
  );
}
