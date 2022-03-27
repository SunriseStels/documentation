const ComponentBlock = ({ name, description, params, code, status }) => {
  const copyToBoard = (e) => {
    navigator.clipboard.writeText(e.target.innerHTML);
  };

  return (
    <>
      <div className={"block"}>
        <a name={"button"}>
          <h1>{name}</h1>
        </a>
        <p>{description}</p>
        <div className={"progress_status"}>
          {status != true ? (
            <>
              <span
                style={{
                  marginRight: 10,
                  display: "block",
                  width: 16,
                  height: 16,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                    fill="#ea4c89"
                  />
                  <path
                    d="M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L6.93934 8L5.21968 9.71967C4.92678 10.0126 4.92679 10.4874 5.21968 10.7803C5.51257 11.0732 5.98745 11.0732 6.28034 10.7803L8 9.06067L9.71966 10.7803C10.0126 11.0732 10.4874 11.0732 10.7803 10.7803C11.0732 10.4874 11.0732 10.0126 10.7803 9.71967L9.06066 8L10.7803 6.28033C11.0732 5.98744 11.0732 5.51256 10.7803 5.21967C10.4874 4.92678 10.0126 4.92678 9.71967 5.21967L8 6.93934L6.28033 5.21967Z"
                    fill="#ea4c89"
                  />
                </svg>
              </span>
              <span style={{ color: "#ea4c89" }}>В процессе разработки.</span>
            </>
          ) : (
            <>
              <span
                style={{
                  marginRight: 10,
                  display: "block",
                  width: 16,
                  height: 16,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                    fill="#66aa77"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.7803 5.46967C12.0732 5.76256 12.0732 6.23744 11.7803 6.53033L7.53033 10.7803C7.23744 11.0732 6.76256 11.0732 6.46967 10.7803L4.21967 8.53033C3.92678 8.23744 3.92678 7.76256 4.21967 7.46967C4.51256 7.17678 4.98744 7.17678 5.28033 7.46967L7 9.18934L10.7197 5.46967C11.0126 5.17678 11.4874 5.17678 11.7803 5.46967Z"
                    fill="#66aa77"
                  />
                </svg>
              </span>
              <span style={{ color: "#66aa77" }}>Готово к использованию.</span>
            </>
          )}
        </div>
        {params.map((item, index) => (
          <div className={"params"} key={index}>
            <div className={"params_title"}>
              <span className={"params_title__light"}>{item.name}</span>
            </div>
            <div className={"params_snippets"}>
              {item.variants.map((variant, idx) => (
                <span key={idx} className={"snippet"} onClick={copyToBoard}>
                  {variant}
                </span>
              ))}
            </div>
            <div className={"params_desc"}>{item.desc}</div>
          </div>
        ))}
        <code className={"example"}>{code}</code>
      </div>
    </>
  );
};

export default ComponentBlock;
