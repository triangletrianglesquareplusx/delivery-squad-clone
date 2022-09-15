import TitleFAQ from "../Components/TitleFAQ/TitleFAQ";
import SearchbarFAQ from "../Utilities/SearchbarFAQ/SearchbarFAQ";
import DropdownFAQ from "../Components/DropdownFAQ/DropdownFAQ";
import QuestionsForm from "../Components/QuestionsForm/QuestionsForm";
import BacktoTopButton from "../Utilities/BacktoTopButton/BacktoTopButton";
import "../FAQ.css";

function FAQFullPage() {
  return (
    <div>
      <TitleFAQ />
      <SearchbarFAQ />
      <DropdownFAQ />
      <QuestionsForm />
      <BacktoTopButton />
    </div>
  );
}

export default FAQFullPage;
