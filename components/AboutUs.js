const AboutUs = () => {
  return (
    <div className="bg-yellow-300" id="aboutus">
      <div className="py-2 font-bold text-center underline sm:py-4 text-md sm:text-2xl">
        ABOUT US
      </div>
      <div className="text-sm font-bold text-center text-red-600 sm:text-xl">
        THE MIRACLE TUTORIAL
      </div>
      <div className="py-4 pb-6 font-bold text-tiny px-7 sm:px-20 sm:text-sm">
        A premier coaching institute for the preparation of JEE (Main+Advanced),
        JEE (Main), Pre-Medical (NEET-UG), Pre-Nurture & Career Foundation
        (Class VIII to XII, NTSE & Olympiads). The Institute is well regarded
        for the high quality entrance exams preparation and produces best
        results year after year. At TMT, we focus on building a strong
        foundation of knowledge and concepts in students for their success and
        provide an excellent platform for the preparation of competitive exams
        and board level education. Our highly qualified and most experienced
        faculties are dedicated and committed to student’s complete success and
        provide assistive surroundings to contribute to their social, cultural,
        academic and all-round development.
      </div>

      <div className="flex flex-row pt-0 pb-6 font-bold text-tiny px-7 sm:px-20 sm:text-sm">
        <img
          src="/sir.png"
          alt="sir-photo"
          className="w-32 border-2 border-red-600 rounded-2xl"
        />
        <div className="ml-10 py-auto">
          <span className="text-xl font-bold leading-3">"</span>To our students,
          we impart value-based career education, abundant resources, and
          individual attention. To the parents, we have a responsibility to
          nurture ethical and responsible career leadership in the children. To
          the society, we provide a lifelong connection to ethics and excellence
          in global leaders.
          <span className="text-xl font-bold leading-3">"</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
