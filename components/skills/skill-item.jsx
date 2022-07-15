function SkillItem({ title, process }) {
  return (
    <div className="progress">
      <span className="skill">
        {title} <i className="val">{process}%</i>
      </span>
      <div className="progress-bar-wrap">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={process}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
}

export default SkillItem;
