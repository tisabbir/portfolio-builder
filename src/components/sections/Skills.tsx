export const Skills = () => {
  return (
    <section className="text-center px-[100px] py-[50px] max-sm:px-5 max-sm:py-[50px]">
      <div className="text-xl leading-normal mb-10">
        <span>I'm currently looking to join a </span>
        <span className="text-[#7127BA]">cross-functional</span>
        <span> team</span>
        <br />
        <span>
          that values improving people's lives through accessible design
        </span>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <div className="flex gap-5 text-2xl">
          <i className="ti ti-brand-figma" />
          <i className="ti ti-brand-react" />
          <i className="ti ti-brand-css3" />
          <i className="ti ti-brand-html5" />
          <i className="ti ti-brand-javascript" />
          <i className="ti ti-brand-git" />
        </div>
        <div className="flex gap-5 text-2xl">
          <i className="ti ti-brand-github" />
          <i className="ti ti-brand-vscode" />
          <i className="ti ti-brand-sketch" />
          <i className="ti ti-brand-notion" />
          <i className="ti ti-brand-slack" />
          <i className="ti ti-brand-discord" />
        </div>
      </div>
    </section>
  );
};
