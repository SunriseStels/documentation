import React, { useState } from "react";
import ComponentBlock from "./ComponentBlock";
import { useSpring, animated } from "react-spring";

function App() {
  const [show, setShow] = useState(false);

  const props = useSpring({
    right: show ? window.innerWidth - 300 : window.innerWidth,
    position: "fixed",
    top: 0,
    backgroundColor: "#212021",
    height: "100vh",
    width: "300px",
    zIndex: 1,
  });

  const onClickParams = [
    {
      name: "onClick",
      type: "function",
      variants: [],
      desc: "Функция которая выполняется при нажатии",
    },
    {
      name: "variant",
      type: "string",
      variants: ["blue", "black", "grey", "outline-grey", "outline-black"],
      desc: "Стиль кнопки",
    },
    {
      name: "size",
      type: "string",
      variants: ["big", "small"],
      desc:
        "Размер кнопки большая или маленькая, если параметр не указан, то кнопка будет стандратного среднего размера",
    },
    {
      name: "disabled",
      type: "boolean",
      variants: ["true", "false"],
      desc: "Активная кнопка или нет",
    },
    {
      name: "gap",
      type: "string",
      variants: ["15px 15px 15px 15px"],
      desc: "Добавляет css стиль отступа у кнопки",
    },
    {
      name: "link",
      type: "string",
      variants: [],
      desc: "Активная кнопка или нет",
    },
    {
      name: "children",
      type: "JSX.Element / ReactNode",
      variants: [],
      desc: "Данные которые вставляются между тегами кнопки",
    },
    {
      name: "padding",
      type: "string",
      variants: ["5px 5px 5px 5px"],
      desc: "Отступы кнопки",
    },
    {
      name: "fontSize",
      type: "number",
      variants: [],
      desc: "Размер шрифта кнопки",
    },
    {
      name: "width",
      type: "string",
      variants: [],
      desc: "Фиксированная ширина кнопки",
    },
    {
      name: "className",
      type: "string",
      variants: [],
      desc: "Сторонний класс для кнопки",
    },
  ];

  const textfieldParams = [
    {
      name: "label",
      type: "string",
      variants: [],
      desc: "Placeholder который будет находиться в текстовом поле",
    },
    {
      name: "filled",
      type: "boolean",
      variants: ["true"],
      desc: "Серый фон для текстового поля",
    },
  ];

  return (
    <>
      <a href={"#"} className={"back_to_top"}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.52813 6.41707C9.80329 6.19431 10.1968 6.19431 10.4719 6.41707L15.7219 10.6671C16.0439 10.9277 16.0936 11.4 15.833 11.7219C15.5723 12.0438 15.1001 12.0936 14.7781 11.8329L10 7.96495L5.22192 11.8329C4.89998 12.0936 4.42771 12.0438 4.16709 11.7219C3.90647 11.4 3.95618 10.9277 4.27813 10.6671L9.52813 6.41707Z"
            fill="#ffffff"
          />
        </svg>
      </a>
      <div className={"open"} onClick={() => setShow(true)}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5 5.25C17.5 4.83579 17.1585 4.5 16.7561 4.5H3.24385C2.83303 4.5 2.5 4.8329 2.5 5.25C2.5 5.66421 2.84148 6 3.24385 6H16.7561C17.167 6 17.5 5.6671 17.5 5.25ZM17.5 10.25C17.5 9.83579 17.1585 9.5 16.7561 9.5H3.24385C2.83303 9.5 2.5 9.8329 2.5 10.25C2.5 10.6642 2.84148 11 3.24385 11H16.7561C17.167 11 17.5 10.6671 17.5 10.25ZM2.5 15.25C2.5 15.6642 2.83746 16 3.25513 16H12.2449C12.6619 16 13 15.6671 13 15.25C13 14.8358 12.6625 14.5 12.2449 14.5H3.25513C2.83809 14.5 2.5 14.8329 2.5 15.25Z"
            fill="#ffffff"
          />
        </svg>
      </div>
      <div className="App">
        <animated.div style={props} className={"sidebar"}>
          <div className={"close"} onClick={() => setShow(false)}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.4719 4.16709C12.1499 3.90647 11.6777 3.95618 11.417 4.27813L7.16704 9.52813C6.94429 9.80329 6.94429 10.1968 7.16704 10.4719L11.417 15.7219C11.6777 16.0439 12.1499 16.0936 12.4719 15.833C12.7938 15.5723 12.8435 15.1001 12.5829 14.7781L8.71492 10L12.5829 5.22192C12.8435 4.89998 12.7938 4.42771 12.4719 4.16709Z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <a href={"#button"}>Button</a>
          <a href={"#textfield"}>Textfield</a>
        </animated.div>
        <div style={{ width: 800, margin: "0 auto" }}>
          {/* Block */}
          <ComponentBlock
            status={false}
            name={"Button"}
            link={"button"}
            description={"Обычная кнопка, с гибкой настройкой:"}
            params={onClickParams}
            code={`
          const App = () => {
            return (
              <>
                <Button variant={"blue"} size={"big"}>
                  Корзина
                </Button>
              </>
            );
          };
          export default App;
          `}
          />
          {/* Block end */}
          {/* Block */}
          <ComponentBlock
            status={false}
            name={"Textfield"}
            link={"textfield"}
            description={"Гибкий текстовый инпут:"}
            params={textfieldParams}
            code={`
          const App = () => {
            return (
              <>
                <Textfield label={"Ваше имя"} filled={true} />
                <Textfield label={"Ваше имя"} />
              </>
            );
          };
          export default App;
          `}
          />
          {/* Block end */}
        </div>
      </div>
    </>
  );
}

export default App;
