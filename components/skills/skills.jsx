import SkillItem from "./skill-item";

function Skills(props) {
  const { skills } = props;

  return (
    <section id="skills" className="skills">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="section-title">
          <h2>Skills</h2>
          <p></p>
        </div>

        <div className="row skills-content">
          {/* skill item */}
          {skills.map((skill, index) => (
            <div key={index} className="col-lg-6">
              <SkillItem title={skill.title} process={skill.process} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
