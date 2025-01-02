import SectionTitle from '../../Components/PageHeader';
import { treatmentsData } from './treatmentsData';
import TreatmentsSection from '../../Components/TreatmentsSection';


function Treatments() {
  return (
    <>
      <SectionTitle title="Treatments" />
      <TreatmentsSection treatmentsData={treatmentsData}/>
    </>
  );
}

export default Treatments

