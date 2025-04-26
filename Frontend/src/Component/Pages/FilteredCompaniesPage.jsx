import { useSearchParams } from "react-router-dom";
import FilteredCompanies from "../../User/Component/InsuranceCompanyCard/FilteredCompanies.jsx";

const FilteredCompaniesPage = () => {
  const [searchParams] = useSearchParams();
  const selectedType = searchParams.get("type");

  return (
    <div>
      <FilteredCompanies selectedType={selectedType} />
    </div>
  );
};

export default FilteredCompaniesPage;
