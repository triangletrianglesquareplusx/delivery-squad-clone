import TitleFAQ from "../components/titlefaq/TitleFAQ";
import SearchbarFAQ from "../utilities/SearchBarFAQ";
import DropdownFAQ from "../components/dropdown/DropdownFAQ";
import QuestionsForm from "../components/questionform/QuestionForm";
import BacktoTopButton from "../utilities/BackToTopButton";

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
