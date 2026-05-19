import SectionTitle from "../components/common/SectionTitle"
import CustomForm from "../components/customize/CustomForm"
import StepProcess from "../components/customize/StepProcess"

function Customize() {
  return (
    <>
      <section className="page-section">
        <SectionTitle
          eyebrow="Custom commissions"
          title="Design a piece around the room it will live in."
          description="Share references, scale, finish ideas, and functional needs. We will shape the concept around your brief and material direction."
        />
        <CustomForm />
      </section>
      <StepProcess />
    </>
  )
}

export default Customize
