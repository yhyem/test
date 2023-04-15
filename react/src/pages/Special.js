const Special = (props) => {
  const { title, content } = props.data;
  return (
    <>
      <div className="specialContent">
        <h3
          className={
            props.isDark ? "specialContentTitleDarkMode" : "specialContentTitle"
          }
        >
          {title}
        </h3>
      </div>
      <div className="hideContent">{content}</div>
    </>
  );
};

export default Special;
