import CursorField from "@/components/CursorField";

export default function PortfolioAtmosphere() {
  return (
    <div aria-hidden='true' className='site-backdrop'>
      <div className='site-backdrop-wash' />
      <div className='site-backdrop-grid' />
      <CursorField />
    </div>
  );
}
